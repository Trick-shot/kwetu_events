#!/usr/bin/env bash
# Redeploy latest main. Runs ON the VPS:
#   bash /var/www/projects/kwetu_events/deploy/deploy.sh
# From your machine, use deploy/ssh-deploy.sh instead (it runs this over SSH).
set -euo pipefail

# Node is installed via nvm for root; non-interactive SSH shells don't load it.
if ! command -v npm >/dev/null 2>&1 && [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  source "$HOME/.nvm/nvm.sh"
fi

cd /var/www/projects/kwetu_events
git pull --ff-only
cd frontend
npm ci --no-audit --no-fund
npm run build
nginx -t
systemctl reload nginx
echo "Deployed $(git rev-parse --short HEAD) with node $(node -v)"
