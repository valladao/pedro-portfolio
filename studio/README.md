# Pedro Portfolio Studio

Sanity Studio for managing the portfolio's base pages, albums, projects, and
dynamic page sections. For repository-wide setup and conventions, see the
[root README](../README.md) and [architecture guide](../docs/architecture.md).

This is a separate npm project and requires Node.js 24:

```bash
cd studio
npm ci
npm start
```

Use `npm run lint` for static checks and `npm run build` for a production build.

The configuration in `sanity.config.ts` and `sanity.cli.ts` points to the
`production` dataset. Starting the Studio can allow production content edits;
do so only when that access is intended and authorized. Keep authentication
tokens and other credentials outside the repository.
