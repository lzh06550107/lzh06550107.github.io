# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

Bun workspace monorepo for the `lucode-starlight` Astro Starlight theme (shadcn/ui-inspired) and its documentation site.

```
./
├── docs/                          # Documentation site (Astro + Starlight, uses the theme)
│   ├── src/
│   │   ├── content/docs/          # MDX docs pages (guides, showcase, reference)
│   │   ├── content/blog/          # Blog content collection (glob loader)
│   │   ├── components/            # Site-specific components (home/, about/, books/)
│   │   ├── pages/blog/            # Blog index + [...slug] dynamic routes
│   │   └── styles/global.css      # Site-level custom CSS
│   └── tests/                     # Node built-in test runner assertions
├── packages/
│   ├── lucode-starlight/          # Published npm theme plugin
│   │   ├── core/plugin.ts         # Plugin entry: registers overrides, CSS, Expressive Code
│   │   ├── core/config/           # Schemas, component override logic, Vite virtual module
│   │   ├── components/overrides/  # 15 Starlight component overrides (Header, Hero, etc.)
│   │   ├── components/custom/     # User-facing components (ContainerSection, LinkButton, Dropdown)
│   │   ├── styles/                # CSS layers: layers.css → theme.css → base.css
│   │   └── schema.ts             # Hero layout extension for Starlight docs schema
│   └── antora-ui/                 # Separate Antora UI build (npm-based, not bun)
└── package.json                   # Root workspace scripts
```

## Commands

```bash
bun install                       # Install all workspace dependencies
bun run dev                       # Start docs dev server (localhost:4321)
bun run docs:build                # Production build of docs site
bun run --filter lucode-starlight-docs astro check  # Type-check the docs site
```

**Tests** (uses Node.js built-in `node:test`, no external framework):
```bash
bun run --filter lucode-starlight-docs test  # (if configured)
# Or directly:
bun test docs/tests/*.test.mjs
```

**Antora UI** (npm-based, not bun):
```bash
npm --prefix packages/antora-ui run build
npm --prefix packages/antora-ui run test
```

## Architecture

### Theme plugin (`lucode-starlight`)

The plugin hooks into Starlight's `config:setup` lifecycle and does three things:
1. **Registers 15 component overrides** — `override.ts` maps Starlight component slots (Header, Hero, Footer, Sidebar, Search, etc.) to Lucode's replacement `.astro` files, unless the user has already provided their own override (logs a warning).
2. **Appends CSS layers** — `layers.css` defines `@layer starlight, lucode;`, then `theme.css` (design tokens) and `base.css` (component styles) are loaded in the `lucode` layer, so they override Starlight defaults without specificity battles.
3. **Configures Expressive Code** — `expresive-code.ts` sets up code block styling.

A Vite virtual module (`virtual:lucode-starlight-config`) injects parsed user config at build time so components can access it via `import LucodeStarlightConfig from 'virtual:lucode-starlight-config'`.

### Docs site

- **Content collections**: `docs` (Starlight docs loader + Lucode schema extension) and `blog` (Astro glob loader from `src/content/blog/`). Blog frontmatter: `title`, `description`, `pubDate`, `category`, `readingTime`, `draft`.
- **Blog pages** use `StarlightPage` shell with custom wrappers (`.blog-index-shell`, `.blog-post-shell`). Draft posts are filtered out at build time.
- **Custom pages** (home, about, books) are MDX files in `src/content/docs/` that import site-specific Astro components from `src/components/`.
- **Static assets**: `public/home-assets/` for landing page images.

### CSS layer order

`starlight` (Starlight defaults) < `lucode` (theme tokens + component styles). Custom site CSS in `docs/src/styles/global.css` loads via Starlight's `customCss` config.

### Testing pattern

Tests are plain `node:test` files in `docs/tests/` that use `fs.readFileSync` and `assert.match` to verify source files contain expected patterns (imports, components, CSS classes, config values). No DOM or browser testing.

## Tooling

- **Runtime**: Bun (lockfile: `bun.lock`)
- **TypeScript**: Extends `astro/tsconfigs/strictest`, JSX in preserve mode, `checkJs: true`
- **Formatting**: Prettier — 4-space indent, single quotes, trailing commas (es5), 100 char print width
- **CI**: GitHub Actions — `deploy-docs.yml` (deploys to GitHub Pages), `publish-package.yml` (publishes to npm)
