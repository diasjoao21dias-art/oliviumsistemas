# TechSolutions — Base44 Dev Environment

## Overview
React 19 + Vite 7 static marketing site (Portuguese). No backend, no database, no API server.
Single web service served on port 3000.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Node 22 base image, repo bind-mounted at `/app`, deps installed on container start via `npm install`.
- Vite dev server with HMR on port 3000 (host-mapped). File-watch polling enabled (`CHOKIDAR_USEPOLLING=true`) for bind mounts.
- The repo's own `vite.config.js` sets `allowedHosts: true`, so the preview's external hostname is accepted.

## Secrets
EmailJS credentials (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) are optional — the site boots and renders with placeholders in `.env.base44-defaults`. Only the contact form's email sending needs them. They are delivered via `/run/base44/app.env` and referenced as `import.meta.env.VITE_*` in `src/components/Contact.jsx`.

## Verify
- `curl -sf http://localhost:3000/` returns the HTML index.
- `curl -sf -o /dev/null -w "%{http_code}" http://localhost:3000/src/main.jsx` → 200 (live source, not a prebuilt bundle).
