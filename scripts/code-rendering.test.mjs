import assert from "node:assert/strict";
import { test } from "node:test";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { createRenderer } from "astro-expressive-code";
import { pluginCustomCopyButton } from "../src/plugins/expressive-code/custom-copy-button.ts";
import { pluginLanguageBadge } from "../src/plugins/expressive-code/language-badge.ts";

function elements(node) {
	return [
		...(node.type === "element" ? [node] : []),
		...(node.children ?? []).flatMap(elements),
	];
}

test("code blocks retain syntax highlighting, line numbers, folding and the custom copy button", async () => {
	const { ec, baseStyles } = await createRenderer({
		plugins: [
			pluginCollapsibleSections(),
			pluginLineNumbers(),
			pluginLanguageBadge(),
			pluginCustomCopyButton(),
		],
		frames: { showCopyToClipboardButton: false },
	});
	const result = await ec.render({
		code: "const first = 1;\nconst second = 2;\nconsole.log(first + second);",
		language: "js",
		meta: 'title="example.js" showLineNumbers collapse={1-2} {3}',
	});
	const nodes = elements(result.renderedGroupAst);
	const hasClass = (node, name) => node.properties?.className?.includes(name);
	assert.ok(nodes.some((node) => node.tagName === "pre"));
	assert.ok(nodes.some((node) => node.tagName === "details"));
	assert.ok(nodes.some((node) => hasClass(node, "gutter")));
	assert.ok(nodes.some((node) => hasClass(node, "highlight")));
	assert.equal(nodes.filter((node) => hasClass(node, "copy-btn")).length, 1);
	assert.ok(
		nodes.some((node) => node.tagName === "span" && node.properties?.style),
	);
	assert.match(baseStyles, /data-language/);
});
