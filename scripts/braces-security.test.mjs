import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const require = createRequire(import.meta.url);
const tailwindRequire = createRequire(require.resolve("tailwindcss"));
const consumers = ["chokidar", "micromatch"].map((name) => {
	const consumerRequire = createRequire(tailwindRequire.resolve(name));
	return [name, consumerRequire("braces")];
});

for (const [consumer, braces] of consumers) {
	test(`${consumer}: deeply nested patterns stop before recursive processing`, () => {
		for (const [open, close] of [
			["{", "}"],
			["(", ")"],
		]) {
			const pattern = `${open.repeat(4000)}a,b${close.repeat(4000)}`;
			for (const operation of ["parse", "compile", "expand", "stringify"]) {
				assert.throws(() => braces[operation](pattern), /exceeds max depth/);
			}
		}
	});

	test(`${consumer}: caller-created ASTs cannot bypass the depth limit`, () => {
		for (const operation of ["compile", "expand", "stringify"]) {
			let ast = { type: "text", value: "a" };
			for (let i = 0; i < 4000; i++) ast = { type: "brace", nodes: [ast] };
			ast = { type: "root", nodes: [ast] };
			assert.throws(() => braces[operation](ast), /exceeds max depth/);
		}
	});

	test(`${consumer}: ordinary file patterns and nested alternatives still work`, () => {
		assert.deepEqual(braces.expand("src/**/*.{astro,svelte,ts}"), [
			"src/**/*.astro",
			"src/**/*.svelte",
			"src/**/*.ts",
		]);
		assert.deepEqual(braces.expand("foo/({a,b})"), ["foo/(a)", "foo/(b)"]);
		assert.equal(braces.compile("{a,b}/{1..3}"), "(a|b)/([1-3])");
		for (const pattern of [
			"{{a}}",
			"{a,{b}}",
			"{{x}y}",
			"{a,{b,{c}}",
			"{}{a}",
		]) {
			assert.equal(
				braces.stringify(braces.parse(pattern), { escapeInvalid: true }),
				pattern,
			);
		}
	});

	test(`${consumer}: cyclic parent links are rejected instead of hanging`, () => {
		const ast = { type: "paren", nodes: [{ type: "text", value: "a" }] };
		ast.parent = ast;
		assert.throws(
			() =>
				runInNewContext(
					"braces.expand(ast)",
					{ braces, ast },
					{ timeout: 1000 },
				),
			/parent chain contains a cycle/,
		);
	});
}
