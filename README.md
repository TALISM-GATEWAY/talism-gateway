# TALISM-GATEWAY

A responsive cargo visibility portal with four customer-facing modules:

- **Overview** — explains TALISM-GATEWAY and provides quick shipment lookup.
- **At sea** — shows vessel route, ETA, live status, and shipment milestones.
- **Taxes & cargo** — summarizes outstanding charges and generates a demo control number.
- **At land** — shows last-mile carrier, destination, ETA, and delivery milestones.

## Run locally

Requirements: Node.js 22+ and pnpm.

```bash
corepack enable
pnpm install
pnpm dev
```

Open the local URL printed by Vite.

## Deploy through GitHub Pages

1. Create a new GitHub repository. A repository named `talism-gateway` is recommended.
2. Copy all files from this project into the repository, preserving the `.github/workflows/deploy.yml` file.
3. Commit and push to the `main` branch:

```bash
git init
git add .
git commit -m "Build TALISM-GATEWAY portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

4. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
5. The workflow will build and deploy the site automatically. Open the URL shown in the workflow deployment summary:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

The workflow automatically sets the correct repository base path. It also creates a `404.html` fallback so direct links to `/tracking/sea`, `/payments`, and `/tracking/land` keep working on GitHub Pages.

## Important note

The tracking records and payment control number are currently demo frontend interactions. Connect the pages to your real cargo, customs, payment, and notification APIs before using this as a production system.
