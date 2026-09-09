# TALISM-GATEWAY

A responsive cargo visibility portal with four customer-facing modules:

- **Overview** — explains TALISM-GATEWAY and provides quick shipment lookup.
- **At sea** — shows vessel route, ETA, live status, and shipment milestones.
- **Taxes & cargo** — summarizes outstanding charges and generates a demo control number.
- **At land** — shows last-mile carrier, destination, ETA, and delivery milestones.

## Run locally

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Deploy through Vercel

This repository includes `vercel.json`, which tells Vercel to use Vite, run `npm run build`, publish the `dist` folder, and route direct page URLs back to the React app.

The Vercel project must use the repository root (`.`) as its Root Directory. The root must contain `index.html`, `package.json`, and `vite.config.ts`.

### Option A: Import the GitHub repository

1. Push the project files to GitHub.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Use these settings:

```text
Framework Preset: Vite
Root Directory: .
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

5. Deploy.

### Option B: Deploy from the command line

```bash
npm install
npx vercel login
npx vercel
npx vercel --prod
```

If Vercel still uses an old failed configuration, open **Project Settings → Build and Deployment** and set the values above. Then redeploy with **Redeploy** and choose **Use existing Build Cache: off** for the first retry.

## Deploy through GitHub Pages

The included `.github/workflows/deploy.yml` also supports GitHub Pages deployment. In GitHub, open **Settings → Pages**, set **Source** to **GitHub Actions**, and push to the `main` branch.

## Important note

The tracking records and payment control number are currently demo frontend interactions. Connect the pages to your real cargo, customs, payment, and notification APIs before using this as a production system.
