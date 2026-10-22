import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve("dist");
const origin = "https://alias09inc.github.io";
const files = readdirSync(root, { recursive: true });
const pages = files.filter((file) => file.endsWith(".html"));
assert.ok(pages.length > 0, "The build must contain HTML pages");

for (const page of pages) {
	const html = readFileSync(path.join(root, page), "utf8");
	assert.match(html, /<title>[^<]+<\/title>/);
	for (const match of html.matchAll(
		/(?:href|src|component-url|renderer-url)="([^"]+)"/g,
	)) {
		const target = new URL(
			match[1].replaceAll("&amp;", "&"),
			`${origin}/${page}`,
		);
		if (target.origin !== origin) continue;
		const pathname = decodeURIComponent(target.pathname);
		const file = path.join(
			root,
			pathname.endsWith("/") ? `${pathname}index.html` : pathname,
		);
		assert.ok(
			existsSync(file),
			`${page} references missing output ${pathname}`,
		);
	}
}

// The mixed-case source filename must keep its existing public URL.
const mathRoute = "posts/diffusion_and_large_vision_models/lec1/index.html";
const math = readFileSync(path.join(root, mathRoute), "utf8");
assert.match(math, /class="katex"/);
assert.match(math, /class="katex-base"/);
assert.doesNotMatch(math, /class="katex-error"/);
const css = files
	.filter((file) => file.endsWith(".css"))
	.map((file) => readFileSync(path.join(root, file), "utf8"))
	.join("\n");
assert.match(css, /\.katex-base/);
assert.match(css, /\.katex-strut/);
assert.ok(existsSync(path.join(root, "pagefind/pagefind.js")));
assert.ok(existsSync(path.join(root, "sitemap-index.xml")));
assert.match(
	readFileSync(path.join(root, "rss.xml"), "utf8"),
	/\/posts\/diffusion_and_large_vision_models\/lec1\//,
);
assert.match(
	readFileSync(path.join(root, "index.html"), "utf8"),
	/<astro-island\b/,
);
console.log(
	`Verified ${pages.length} pages, local asset and route references, math, Svelte entry points, RSS and search output.`,
);
