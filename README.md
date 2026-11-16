# Kwetu Events International Initiative — Website

Rebuild of [kei.or.tz](https://kei.or.tz/) (WordPress) in the Trickshot Software stack.

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

## Deployment (planned)

WazoHost VPS → Nginx serving `frontend/dist`, later Gunicorn for the Django API.
Domain: gcitz.org.

## Phase 2 (Django)

- `POST /api/contact/` — contact form (email + store submissions)
- News & Projects models + Django admin so content can be managed without code changes
- Swap `frontend/src/data/content.ts` static data for API calls

## Content TODO before launch

- Capture remaining project detail bodies and news post bodies from the live site
- Pull original images from kei.or.tz `wp-content/uploads` onto our server
  (phase 1 hotlinks them for preview)
- Endorsements PDF + project PDFs
