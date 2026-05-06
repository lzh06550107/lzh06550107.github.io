# Antora Home Books Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the Antora UI `home` page into a sectioned books landing page that derives card content from the existing navigation tree and keeps the Lucode docs-style header navigation.

**Architecture:** Keep the existing Antora header shell, but render a dedicated home landing partial when `page.home` is true. A new Handlebars helper will normalize `page.navigation` into section and leaf-card data so the template stays simple and the layout remains data-driven.

**Tech Stack:** Handlebars partials/helpers, Antora preview build pipeline, Node test runner, Lucode Antora CSS.

---

### Task 1: Lock the expected home-page rendering behavior

**Files:**
- Create: `packages/antora-ui/tests/ui-home.test.mjs`
- Modify: `packages/antora-ui/tests/ui.test.mjs`
- Test: `npm --prefix packages/antora-ui run test`

- [ ] **Step 1: Write the failing test**

```js
test('preview build renders home page sections and cards from navigation leaves', async () => {
  // Build preview pages into a temp dir and assert home markup exists.
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm --prefix packages/antora-ui run test`
Expected: FAIL because the home page still renders the old article flow and no `books-home` card layout exists.

- [ ] **Step 3: Add source-file guardrails**

```js
const expectedFiles = [
  'partials/home-landing.hbs',
  'helpers/booksHomeSections.js',
  'css/home.css',
]
```

- [ ] **Step 4: Run test to verify it still fails for the right reason**

Run: `npm --prefix packages/antora-ui run test`
Expected: FAIL with missing file and missing home markup assertions.

### Task 2: Render the dedicated home landing

**Files:**
- Create: `packages/antora-ui/src/partials/home-landing.hbs`
- Create: `packages/antora-ui/src/helpers/booksHomeSections.js`
- Modify: `packages/antora-ui/src/partials/article.hbs`
- Test: `npm --prefix packages/antora-ui run test`

- [ ] **Step 1: Implement navigation normalization helper**

```js
module.exports = function booksHomeSections (navigation) {
  // return [{ title, anchor, count, cards: [{ title, href, description, tags, coverText, accent }] }]
}
```

- [ ] **Step 2: Add home-only partial markup**

```hbs
<article class="books-home">
  <header class="books-home-hero">...</header>
  {{#each (booksHomeSections page.navigation)}}
    <section class="books-section">...</section>
  {{/each}}
</article>
```

- [ ] **Step 3: Switch `article.hbs` to the home partial when `page.home` is true**

```hbs
{{#if page.home}}
  {{> home-landing}}
{{else}}
  <article class="doc">...</article>
{{/if}}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm --prefix packages/antora-ui run test`
Expected: PASS for the new home rendering test.

### Task 3: Add landing-page styling and header resilience

**Files:**
- Create: `packages/antora-ui/src/css/home.css`
- Modify: `packages/antora-ui/src/css/site.css`
- Modify: `packages/antora-ui/src/css/header.css`
- Modify: `packages/antora-ui/src/css/body.css`
- Modify: `packages/antora-ui/src/css/main.css`
- Test: `npm --prefix packages/antora-ui run test`
- Verify: `npm --prefix packages/antora-ui run build`

- [ ] **Step 1: Add dedicated home landing styles**

```css
.books-home { ... }
.books-grid { ... }
.book-card { ... }
```

- [ ] **Step 2: Let the header nav scroll instead of collapsing into vertical text**

```css
.top-nav {
  overflow-x: auto;
  flex-wrap: nowrap;
}
```

- [ ] **Step 3: Make the home page use the full main column and hide sidebar/TOC rails**

```css
.body:has(.books-home) .docs-sidebar,
.body:has(.books-home) .docs-toc { display: none; }
```

- [ ] **Step 4: Run verification**

Run: `npm --prefix packages/antora-ui run test`
Expected: PASS

Run: `npm --prefix packages/antora-ui run build`
Expected: exit 0
