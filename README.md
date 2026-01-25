# Astro + GitHub Pages (SSG)

このリポジトリはAstroで作成した静的ブログをGitHub Pagesへデプロイするための構成です。

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 GitHub Pages デプロイ手順

1. `astro.config.mjs` の `site` を自分のGitHub Pages URLに合わせる
   - 例: `https://<YOUR_GITHUB_NAME>.github.io`
2. GitHub のリポジトリで **Settings → Pages** を開き、Source を **GitHub Actions** に設定
3. `main` ブランチへpushすると `.github/workflows/deploy.yml` が自動で実行されます

## ✅ 動作確認

```sh
npm run dev
```

`http://localhost:4321` を開いてローカルで確認できます。

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
