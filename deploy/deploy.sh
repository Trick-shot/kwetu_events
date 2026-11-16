#!/usr/bin/env bash
# Redeploy latest main. Run on the VPS: bash /var/www/projects/kwetu_events/deploy/deploy.sh
set -euo pipefail
cd /var/www/projects/kwetu_events
git pull --ff-only
cd frontend
npm ci
npm run build
sudo systemctl reload nginx
echo "Deployed $(git rev-parse --short HEAD)"
