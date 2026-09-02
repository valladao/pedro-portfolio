# Agent guide

## Project

This repository contains Pedro Henrique Valladao's portfolio: a Next.js Pages
Router site backed by a Sanity Studio in `studio/`. Start with `README.md`, then
read `docs/architecture.md` before changing data fetching, routes, schemas, or
dynamic sections.

## Main commands

Use Node.js 24 (`nvm use`). The root and Studio are separate npm projects.

```bash
# Website, from the repository root
npm ci
npm run lint
npm run build

# Studio
cd studio
npm ci
npm run lint
npm run build
```

There is no automated test suite. Report which checks were run and what remains
unverified. The website build fetches Sanity content; do not run it when
production-data access is outside the task's authorization.

## Working conventions

- Prefer small, direct changes that match the existing Pages Router,
  component hierarchy, CSS Modules, and Sanity schema patterns.
- Reuse existing components and scripts before adding abstractions or
  dependencies.
- When changing a dynamic section, keep its Sanity schema, GROQ projection,
  TypeScript declarations, renderer, component, and CSS Module aligned.
- Preserve ISR behavior and understand the current content flow before changing
  fetching or routing.
- Keep semantic HTML, image alt text, responsive behavior, and basic
  accessibility intact.
- Do not access or mutate production content, deploy, or change external
  services unless the task explicitly authorizes it.
- Never read, commit, log, or document credentials. Environment variable names
  may be documented; their values may not.
- Do not remove apparently old files without confirming their use.
- Update documentation when commands, architecture, content schemas, or the
  development workflow change.

Commits use a short summary plus a description of what changed and why. Pull
requests follow the repository's existing concise style and record context,
changes, validation, and relevant limitations.

Use `ai/initiatives/` only for useful AI-assisted work records; do not create a
new initiative or extra process for routine edits.
