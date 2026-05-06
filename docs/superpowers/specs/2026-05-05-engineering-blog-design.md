# Engineering Blog Design

## Goal

Add a real blog to `docs` with its own content collection, a `/blog/` index page, and per-post routes, using the existing `lucode-starlight` visual language while keeping the blog distinct from the docs sidebar system.

## Approved Scope

- Add a top-level `Blog` navigation item in the docs header that points to `/blog/`
- Create a dedicated `blog` content collection separate from the existing `docs` collection
- Build a blog index page at `/blog/`
- Render real blog entries from content files instead of placeholder cards
- Sort blog posts by publish date descending
- Display category tags on blog cards
- Display reading time on blog cards
- Use a two-column card grid on larger screens and collapse responsively on smaller screens
- Build post detail pages at `/blog/<slug>/`
- Reuse the current site header, theme, and overall design system

## Explicit Non-Goals

- Do not add blog search in this pass
- Do not add category filtering or tag archive pages
- Do not add RSS, newsletter, comments, or pagination
- Do not add a heavy editorial hero or magazine-style landing treatment
- Do not merge blog entries into the Starlight docs sidebar tree
- Do not change the rest of the docs information architecture beyond the approved top-nav update

## Approach

### Content Model

The blog will use its own Astro Content Collection rather than the existing `docs` collection. This keeps article metadata, routing, and rendering concerns separate from the Starlight docs system and avoids forcing blog posts into docs-specific navigation and schema assumptions.

Each blog post will live in `docs/src/content/blog/` as Markdown or MDX content with typed frontmatter. The minimum frontmatter fields are:

- `title`
- `description`
- `pubDate`
- `category`
- `readingTime`
- `draft`

Optional fields can be added later, but this pass should avoid speculative schema growth.

### Routing Model

The blog index page will be implemented as a regular Astro page at `/blog/`. It will fetch all non-draft blog entries, sort them by descending `pubDate`, and render them as cards.

Post detail pages will be implemented with a dynamic Astro route at `/blog/[...slug].astro` or `/blog/[slug].astro`, depending on whether nested post paths are needed. Since the current request does not require nested blog folders, a single-segment slug route is sufficient for the first pass.

### Index Page Layout

The blog index should behave like an engineering article list, not a marketing splash page.

The page structure will be:

1. Existing site header
2. A compact page intro block with:
   - `Blog` title
   - One short sentence describing the purpose of the writing
3. A responsive post grid

The post grid should be:

- Two columns on larger screens
- One column on smaller screens
- Ordered by newest first

Each card should include:

- Post title
- Publish date
- Category tag
- Reading time
- Short description/excerpt

The whole card should be clickable.

### Post Page Layout

Each blog post page should reuse the current site shell, theme tokens, and typography rhythm, but it should not be forced into the docs sidebar model.

The top of the post page should include:

- Title
- Publish date
- Category
- Reading time
- Description

Below that, the full Markdown or MDX content should render in a readable single-column layout.

The implementation may reuse the current content styling where practical, but blog post templates should not depend on the docs navigation tree or docs breadcrumbs.

### Styling Strategy

Prefer existing `lucode-starlight` tokens and typography values over inventing a second visual system.

The blog index page should use:

- restrained spacing
- strong hierarchy for titles
- low-emphasis metadata rows
- compact category pills
- clean hover states

The cards should look like durable technical article entries rather than product marketing panels. Avoid oversized illustrations, glossy promo treatments, or heavy decorative framing.

### Real Seed Content

The first pass should include at least two or three real blog entries so the index page can validate:

- date sorting
- category display
- reading time display
- route generation
- card density and alignment

The content can be lightweight but must be real files in the new collection, not mocked data in the page component.

## File Boundaries

### New Files

- `docs/src/content/blog/*`
  - Real blog entries with typed frontmatter
- `docs/src/pages/blog/index.astro`
  - Blog index page
- `docs/src/pages/blog/[slug].astro`
  - Blog post detail route

### Modified Files

- `docs/src/content.config.ts`
  - Add the `blog` content collection schema
- `docs/astro.config.mjs`
  - Keep the approved top-nav entries including `Blog`
- `docs/src/styles/global.css`
  - Add page-level blog list and blog post styling if needed

### Optional Supporting Files

- `docs/src/components/blog/*`
  - Extract card or metadata components only if the page templates become too dense

## Verification Requirements

- `/blog/` resolves correctly in dev and build output
- Blog posts are loaded from the new `blog` collection
- Draft posts are excluded from the public blog index
- Posts are sorted newest first
- Each card shows title, date, category, reading time, and description
- The blog index uses a two-column layout on larger screens
- `/blog/<slug>/` pages render successfully
- Existing docs pages continue to work
- The docs top navigation includes `Home`, `Blog`, `Docs`, `Books`, and `About`

## Risks And Mitigations

### Risk: Mixing blog and docs concerns

Mitigation: keep blog entries in a separate collection and route family instead of trying to adapt the Starlight docs collection for article publishing.

### Risk: Over-designing the first version

Mitigation: constrain the first pass to a compact intro, a sortable real article list, and detail pages. Defer filtering, featured posts, and feed features.

### Risk: Inconsistent metadata across posts

Mitigation: define a typed collection schema with required fields for date, category, description, and reading time before adding seed posts.

### Risk: Blog pages inheriting docs-only layout assumptions

Mitigation: implement the blog index and post routes as regular Astro pages with direct control over content queries and page structure.
