import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import katex from "katex";
import rehypeKatex from "rehype-katex";

const require = createRequire(import.meta.url);
const rendererRequire = createRequire(require.resolve("rehype-katex"));
const rendererKatex = rendererRequire("katex");
const stylesheet = readFileSync(require.resolve("katex/dist/katex.css"), "utf8");

test("the KaTeX stylesheet and rehype renderer use the same version", () => {
	assert.equal(
		katex.version,
		rendererKatex.version,
		"Keep the direct katex dependency aligned with rehype-katex before upgrading",
	);
});

function elements(node) {
	return [
		...(node.type === "element" ? [node] : []),
		...(node.children ?? []).flatMap(elements),
	];
}

for (const [mode, expression] of [
	["math-inline", String.raw`x^2 + \frac{1}{\sqrt{y}}`],
	[
		"math-display",
		String.raw`\begin{aligned}a &= b+c \\ d &= \sum_{i=1}^{n} i\end{aligned}`,
	],
]) {
	test(`${mode} renders with matching layout styles and accessible MathML`, () => {
		const tree = {
			type: "root",
			children: [
				{
					type: "element",
					tagName: "code",
					properties: { className: [mode] },
					children: [{ type: "text", value: expression }],
				},
			],
		};
		const messages = [];
		rehypeKatex()(tree, { message: (...args) => messages.push(args) });
		assert.deepEqual(
			messages,
			[],
			"Formula parsing must not silently fall back to an error span",
		);

		const rendered = elements(tree);
		const hasClass = (node, name) => node.properties?.className?.includes(name);
		assert.ok(rendered.some((node) => node.tagName === "math"));
		assert.ok(rendered.some((node) => hasClass(node, "katex-html")));
		assert.equal(rendered.some((node) => hasClass(node, "katex-error")), false);

		// KaTeX 0.18 renamed these layout classes. A successful Astro build
		// alone cannot detect HTML rendered by 0.16 paired with newer CSS.
		for (const suffix of ["base", "strut"]) {
			const layoutClass = [suffix, `katex-${suffix}`].find((name) =>
				rendered.some((node) => hasClass(node, name)),
			);
			assert.ok(layoutClass, `Missing ${suffix} layout element`);
			const layoutRule = new RegExp(
				`\\.katex \\.${layoutClass}\\s*\\{[^}]*display:\\s*inline-block`,
			);
			assert.ok(
				layoutRule.test(stylesheet),
				`The imported stylesheet must style .${layoutClass}`,
			);
		}
	});
}
