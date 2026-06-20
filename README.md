<div align="center">
  <img src="assets/logo.png" alt="ATOMIC logo" width="96" />
  <h1>ATOMIC Landing</h1>
  <p><strong>A calm public landing page for an open habit tracker built around ownership, clarity, and low noise.</strong></p>
  <p>
    <a href="https://cesarszv.github.io/atomic./">Live site</a> ·
    <a href="index.html">Page source</a> ·
    <a href="https://github.com/cesarszv/atomic">Parent project</a>
  </p>
</div>

![ATOMIC banner](assets/banner.png)

## Purpose

This repository contains the public marketing surface for **ATOMIC**: a small, static landing page for people who want to understand the product before using or contributing to it.

ATOMIC helps people build and understand habits without turning personal progress into a feed, a competition, or a surveillance product.

## What The Page Says

- **Ownership first.** Habits and progress should stay understandable and portable.
- **Calm by default.** The product should help people notice patterns, not manufacture anxiety.
- **Small surface area.** Track habits, review progress, export data, and get out of the way.
- **Public-safe copy.** The landing page avoids implementation details, credentials, private infrastructure, sensitive roadmap notes, and internal architecture.

## Site Structure

```text
.
├── index.html       # Static GitHub Pages entry point
├── styles.css       # Plain CSS, no build step
├── assets/
│   ├── banner.png   # Social preview and page visual
│   └── logo.png     # Logo and favicon
└── .nojekyll        # Keep GitHub Pages serving files as-is
```

## Local Preview

Open `index.html` directly, or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

The site is designed for GitHub Pages from the `main` branch at the repository root. No package install, build command, or generated output is required.

Expected public URL:

```text
https://cesarszv.github.io/atomic./
```

## Content Safety

Everything in this repository is public internet content. Keep copy high-level and product-facing. Do not add source code internals, API details, credentials, deployment details, business-sensitive strategy, or security-sensitive information.
