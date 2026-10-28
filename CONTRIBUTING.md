
# Contributing

Thank you for your interest in contributing!

## Before You Start

If you plan to make major changes (especially new features or design changes), please open an issue or discussion before starting work. This helps ensure your effort aligns with the project's direction.

## Submitting Code

Please keep each pull request focused on a single purpose. Avoid mixing unrelated changes in one PR, as this can make reviewing and merging code more difficult.

Please use the [Conventional Commits](https://www.conventionalcommits.org/) format for your commit messages whenever possible. This keeps our history clear and consistent.

Before submitting code, please run the appropriate commands to check for errors and format your code.

```bash
pnpm check
pnpm format
```

## Markdown formatting compatibility

Biome 2.6 adds Markdown formatting, which was not part of our previous code-quality checks. In 2.6.3, formatting `src/content/posts/guide/markdown.md` changes the sibling items `carrots`, `celery`, and `lentils` into nested lists. Formatting `src/content/posts/guide/expressive-code.md` also rewrites code examples whose line numbers and exact text are referenced by highlighting and folding annotations.

`biome.json` therefore disables only the Markdown formatter to preserve authored content. Markdown lint, the recommended lint preset, explicit rules, and all existing code-quality and build checks remain enabled. Before re-enabling Markdown formatting, verify frontmatter, lists, math, directives, and annotated code blocks against the site's Markdown renderer, including draft posts.
