#!/usr/bin/env bash
# One-time VPS setup for the KEI website (Ubuntu/Debian).
# Run as root (or with sudo): bash setup-vps.sh
set -euo pipefail

DOMAIN="gcitz.org"
APP_DIR="/var/www/projects/kwetu_events"
REPO="https://github.com/Trick-shot/kwetu_events.git"

echo "==> Installing packages (nginx, git, node)"
apt-get update -y
apt-get install -y nginx git curl
if ! command -v node >/dev/null || [ "$(node -v | cut -c2-3)" -lt 20 ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi

echo "==> Cloning repo"
if [ ! -d "$APP_DIR" ]; then
  git clone "$REPO" "$APP_DIR"
fi

echo "==> Building frontend"
cd "$APP_DIR/frontend"
npm ci
npm run build   # default base '/' + BrowserRouter — production build

echo "==> Nginx site"
cp "$APP_DIR/deploy/nginx-gcitz.conf" /etc/nginx/sites-available/gcitz.conf
ln -sf /etc/nginx/sites-available/gcitz.conf /etc/nginx/sites-enabled/gcitz.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "==> Done. Point ${DOMAIN}'s A record at this server, then run:"
echo "    apt-get install -y certbot python3-certbot-nginx && certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
