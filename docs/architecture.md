# Architecture

## Applications

The repository contains two independently installed applications:

- The root application is a Next.js site using the Pages Router, React, and
  TypeScript.
- `studio/` is a Sanity Studio with its own manifest, lockfile, lint config,
  schema definitions, and build commands.

Both applications require Node.js 24. They deliberately use different React
major versions, so dependencies must be installed and updated in their
respective directories.

## Content flow

Sanity project `xq90hv4m`, dataset `production`
→ GROQ queries through `src/client.ts`
→ `getStaticProps` / `getStaticPaths`
→ page templates
→ dynamic section renderer
→ React components and CSS Modules

The project ID and dataset name identify the public Sanity project; they are not
credentials. Tokens and revalidation secrets must remain outside the repository.

Most pages use incremental static regeneration with a 10-second revalidation
interval. `src/pages/api/revalidate.ts` also supports authenticated on-demand
revalidation. It discovers base and portfolio paths from Sanity and revalidates
them without exposing the read token to the browser.

## Main extension points

- `src/pages/`: static and dynamic routes, data-fetching entry points.
- `src/components/`: UI organized as atoms, molecules, organisms, sections,
  templates, and layouts.
- `src/styles/`: global styles and CSS Modules mirroring the component groups.
- `src/scripts/get-sanity-pages-query.ts`: shared Sanity query execution.
- `src/scripts/sectionsRender.tsx`: maps Sanity section `_type` values to React
  section components.
- `src/scripts/get-sheet-music.ts`: fetches all published music scores for the
  static archive shown above the footer.
- `src/global.d.ts`: shared content and component types.
- `studio/schemas/`: Sanity documents, reusable objects, and dynamic sections.

When adding or changing a dynamic section, inspect every layer it crosses:

1. define or update the schema in `studio/schemas/`;
2. register the schema in `studio/schemas/schema.ts`;
3. project referenced or nested fields in each relevant page query;
4. update the declarations in `src/global.d.ts`;
5. update `src/scripts/sectionsRender.tsx`;
6. implement or reuse the React component and matching CSS Module;
7. document editor-facing fields in `README.md` when the content model changes.

The music score archive is a fixed layout element rather than a dynamic page
section. Its documents are queried by the pages that display it and passed to
`Basic_Layout`; home and contact intentionally omit that query and render.

## Routes and page models

- `/`, `/about`, and `/contact` render `basePage` content.
- `/portfolio` renders the portfolio page and its ordered sections.
- `/album/[slug]` and `/project/[slug]` are generated from referenced Sanity
  documents with blocking fallback for paths not generated at build time.
- `/api/revalidate` accepts only `POST` requests with the configured secret.

## Validation boundaries

There is no automated test suite. Run lint in both npm projects for all code
changes. Run the relevant production build when the task allows Sanity network
access, then manually verify the affected routes and responsive layouts.

The Studio points directly to the production dataset. Starting it may allow
content mutations, and the website build reads production content. Treat both
operations as production access rather than harmless local-only commands.
