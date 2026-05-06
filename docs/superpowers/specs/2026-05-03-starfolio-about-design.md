# Starfolio About Migration Design

## Goal

Move the homepage content from `starfolio` into `docs` as an `About` destination in the top navigation, while preserving the existing `docs` navigation bar and aligning the result with the native `lucode-starlight` documentation style.

## Approved Scope

- Add a top-level `About` navigation item in `docs`
- Create a new `About` page inside the Starlight docs collection
- Keep the existing `docs` navigation bar and overall site shell
- Reuse the content structure from the `starfolio` homepage, including hero, about, work, education, skills, projects, photos, hackathons, and contact sections
- Keep the sample content from `starfolio` for the first pass
- Prefer `lucode-starlight` styling primitives and theme tokens over `starfolio` site-wide styles

## Explicit Non-Goals

- Do not migrate the `starfolio` navbar
- Do not migrate `starfolio` blog pages or 404 page
- Do not import `starfolio` global site layout or theme-provider setup
- Do not restyle the rest of the `docs` site to match `starfolio`

## Approach

### Page Model

The `About` destination will be implemented as a Starlight docs page instead of a standalone Astro page. This keeps the page inside the existing Starlight routing, header, mobile navigation, footer, theme switching, and base-path handling.

The page will use `template: splash` so it can behave like a landing page and avoid the standard docs sidebar. This also matches the user's preference for a `lucode-starlight`-native result.

### Styling Strategy

The implementation should use `lucode-starlight` and Starlight primitives first:

- `ContainerSection` for page-width and section rhythm
- Starlight `Card` and `CardGrid` for grouped content blocks
- `LinkButton` for primary calls to action
- Existing theme tokens for spacing, surfaces, borders, muted text, and typography

Custom CSS should be limited to the `About` page components and only cover layouts that do not already exist in `lucode-starlight`, such as the photo mosaic, timeline-like rows, and hero avatar composition.

### Content Mapping

The page will keep the `starfolio` homepage section order:

1. Hero
2. About
3. Work Experience
4. Education
5. Skills
6. Projects
7. Photos
8. Hackathons
9. Contact

The content will be driven by a new `docs`-local data file derived from `starfolio/src/data/resume.tsx`, simplified to plain serializable data so the page can be rendered with Astro components instead of React components.

### Assets

Local images used by the `starfolio` homepage will be copied into `docs/public/about/` so the `About` page continues to work correctly under `base: '/docs'`.

Remote avatar and favicon-style images used by the demo content may stay remote for the first pass if they are already URL-based in the source data.

## File Boundaries

### New Files

- `docs/src/content/docs/about.mdx`
  - The Starlight `About` page entry
- `docs/src/components/about/AboutLanding.astro`
  - The main layout for the migrated homepage content
- `docs/src/data/about.ts`
  - Plain data derived from `starfolio` resume content
- `docs/src/components/about/*`
  - Small section components if the landing page becomes too large
- `docs/superpowers/plans/2026-05-03-starfolio-about-implementation.md`
  - Execution plan

### Modified Files

- `docs/astro.config.mjs`
  - Add the `About` top-nav entry

### Copied Assets

- `docs/public/about/picofme.png`
- `docs/public/about/example-website.webp`
- `docs/public/about/example-website.png`
- `docs/public/about/photos/*`

## Verification Requirements

- The top navigation includes `About`
- `/docs/about/` resolves correctly in dev and build output
- The page renders with Starlight splash layout and no migrated `starfolio` navbar
- Local copied assets load under the docs base path
- The resulting page feels visually consistent with `lucode-starlight`
- Existing docs routes still build successfully

## Risks And Mitigations

### Risk: Styling drift toward a second theme

Mitigation: render the page as a Starlight splash page and reuse `ContainerSection`, `CardGrid`, and theme tokens before introducing custom CSS.

### Risk: React-only `starfolio` components are expensive to transplant

Mitigation: reimplement the homepage structure in Astro with plain data instead of moving the React runtime and section components into `docs`.

### Risk: Asset paths break because `docs` uses a base path

Mitigation: move local images into `docs/public/about/` and reference them with absolute paths rooted at `/about/...` within the docs site.
