#!/usr/bin/env bash
# Redeploy gcitz.org from your machine: pushes nothing, just tells the VPS to
# pull latest main, rebuild, and reload nginx.
#   ./deploy/ssh-deploy.sh
# Override the host with:  VPS=root@1.2.3.4 ./deploy/ssh-deploy.sh
set -euo pipefail

VPS="${VPS:-root@167.86.72.150}"
APP_DIR=/var/www/projects/kwetu_events

# Warn if local main has commits the server can't see yet.
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git fetch -q origin main
  if [ -n "$(git log origin/main..HEAD --oneline 2>/dev/null)" ]; then
    echo "!! Local commits not pushed to origin/main — the VPS pulls from GitHub. Run: git push" >&2
    exit 1
  fi
fi

echo "==> Deploying to $VPS"
ssh -o ServerAliveInterval=60 "$VPS" "bash $APP_DIR/deploy/deploy.sh"

echo "==> Smoke test"
curl -s -o /dev/null -w "https://gcitz.org/  %{http_code}\n" --max-time 20 https://gcitz.org/
curl -s -o /dev/null -w "https://gcitz.org/about-us  %{http_code}\n" --max-time 20 https://gcitz.org/about-us
