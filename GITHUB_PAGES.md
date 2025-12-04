# GitHub Pages Deployment

This repository includes a GitHub Pages deployment workflow that automatically publishes Advent of Code visualizations.

## Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select `gh-pages` and `/root` folder
3. The workflow will automatically build and deploy on push to `main`

## Current Visualizations

- **Day 4 (2025)**: Paper Rolls visualization

The site will be available at: `https://antonina-nesmelova.github.io/advent-of-code/`

## How it works

The GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Runs on every push to `main` branch
2. Copies all `.html` files to a `dist` directory
3. Creates an index page listing all visualizations
4. Deploys the `dist` folder to GitHub Pages using the `gh-pages` branch
