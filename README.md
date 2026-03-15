<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e4dc5a88-4014-4260-8ccd-8df1db1b0680

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## CI/CD – GitHub Pages Deployment

This repository uses **GitHub Actions** to automatically build and deploy the site to [GitHub Pages](https://pages.github.com/) on every push to the `main` branch.

### Workflow: `.github/workflows/gh-pages.yml`

The pipeline performs the following steps:

1. **Checkout** – checks out the repository source code.
2. **Set up Node.js 18** – configures the Node.js environment and caches npm dependencies.
3. **Install dependencies** – runs `npm ci` for a clean, reproducible install.
4. **Build** – runs `npm run build` to generate the production-ready static files in the `dist/` directory.
5. **Upload artifact** – uploads the `dist/` folder as a GitHub Pages artifact.
6. **Deploy** – publishes the artifact to GitHub Pages using the official [`actions/deploy-pages`](https://github.com/actions/deploy-pages) action.

### Enabling GitHub Pages

To activate GitHub Pages for this repository, go to **Settings → Pages** and set the **Source** to **GitHub Actions**.
