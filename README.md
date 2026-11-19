# Green Conservation Initiative — Website

Website for Green Conservation Initiative (GCI), live at https://gcitz.org. Built by Trickshot Software.

## Structure

- `frontend/` — React + Vite + TypeScript + MUI. All pages, animations (framer-motion), routing.
- `backend/` — Django (phase 2): contact form endpoint, news/projects CMS via Django admin.
- `docs/design-reference.md` — full capture of the original site: structure, content, brand, assets.

## Develop

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build   # output in frontend/dist
```

## Deployment

Live at https://gcitz.org on the WazoHost VPS (`root@167.86.72.150`), Nginx serving
`frontend/dist` with Let's Encrypt SSL (auto-renews via certbot). Phase 2 will add
Gunicorn for the Django API behind the commented `/api/` block in `deploy/nginx-gcitz.conf`.

Redeploy after pushing to `main`:

```bash
./deploy/ssh-deploy.sh
```

This SSHes into the VPS and runs `deploy/deploy.sh` there (git pull, `npm ci`,
`npm run build`, nginx reload), then smoke-tests the live site. Files:

- `deploy/setup-vps.sh` — one-time server setup (already run)
- `deploy/deploy.sh` — runs on the server; loads nvm Node automatically
- `deploy/ssh-deploy.sh` — run from your machine; override host with `VPS=user@host`
- `deploy/nginx-gcitz.conf` — Nginx site (certbot has since added the SSL/redirect blocks on the server)

## Phase 2 (Django)

- `POST /api/contact/` — contact form (email + store submissions)
- News & Projects models + Django admin so content can be managed without code changes
- Swap `frontend/src/data/content.ts` static data for API calls

## Content TODO before launch

- Capture remaining project detail bodies and news post bodies from the live site
  (phase 1 hotlinks them for preview)
- Endorsements PDF + project PDFs
