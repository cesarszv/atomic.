# Agent Instructions

This folder is a public landing page and marketing surface for Atomic.

Rules:
- Treat everything here as public internet content.
- Do not include source code, architecture internals, APIs, schemas, credentials, private docs, database details, deployment details, business-sensitive strategy, roadmap specifics, security details, or implementation details that could help reverse engineer the app.
- Only include public-safe copy, images/assets, high-level product positioning, vague descriptions of what is currently being built, and contact/CTA content when needed.
- When unsure whether something is safe, omit it and ask.
- Prefer static, minimal assets. Do not add dependencies or app logic unless explicitly approved.
- Before committing or pushing, review every change in this folder for information leakage.

## Content Specs Contract (Spec-Anchored Content)
- All landing page copy is anchored to static Markdown spec files in [src/content/landing/](file:///home/cszv/workspaces/cesarszv/domains/atomic/apps/landing/src/content/landing/).
- DO NOT edit HTML templates, Astro pages (`.astro`), or layout files directly to make copy/text modifications.
- To update, edit, or translate landing page copy, modify the corresponding Markdown specs:
  - English: [en.md](file:///home/cszv/workspaces/cesarszv/domains/atomic/apps/landing/src/content/landing/en.md)
  - Spanish: [es.md](file:///home/cszv/workspaces/cesarszv/domains/atomic/apps/landing/src/content/landing/es.md)
- During build, Astro will automatically compile pages based on these Markdown files. Keep them strictly type-safe and matching the schema declared in [src/content.config.ts](file:///home/cszv/workspaces/cesarszv/domains/atomic/apps/landing/src/content.config.ts).
