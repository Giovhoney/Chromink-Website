#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEPLOY_DIR="$ROOT_DIR/.hostinger-deploy"
DEPLOY_BRANCH="hostinger-deploy"

cd "$ROOT_DIR"

if [[ ! -d node_modules ]]; then
  echo "Dependencies are missing. Run 'npm install' first."
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "Run this script from the 'main' branch."
  exit 1
fi

echo "Building production site..."
npm run build

if [[ ! -e "$DEPLOY_DIR/.git" ]]; then
  echo "Creating deploy worktree..."
  git worktree add "$DEPLOY_DIR" "$DEPLOY_BRANCH"
else
  echo "Updating deploy worktree..."
  git -C "$DEPLOY_DIR" checkout "$DEPLOY_BRANCH"
  git -C "$DEPLOY_DIR" pull --ff-only origin "$DEPLOY_BRANCH"
fi

echo "Refreshing deploy files..."
find "$DEPLOY_DIR" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$DEPLOY_DIR"/

echo "Committing deploy update..."
git -C "$DEPLOY_DIR" add .

if git -C "$DEPLOY_DIR" diff --cached --quiet; then
  echo "No deploy changes to push."
  exit 0
fi

git -C "$DEPLOY_DIR" commit -m "Deploy latest site updates"
git -C "$DEPLOY_DIR" push origin "$DEPLOY_BRANCH"

echo
echo "Done."
echo "Hostinger branch updated: $DEPLOY_BRANCH"
echo "Next: open Hostinger Git deployment and click Deploy if auto-deploy is off."
