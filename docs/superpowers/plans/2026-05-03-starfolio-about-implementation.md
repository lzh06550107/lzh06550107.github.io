# Starfolio About Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an `About` destination to the docs top navigation and render the `starfolio` homepage content inside a Starlight-native splash page styled primarily with `lucode-starlight`.

**Architecture:** Keep the page inside the Starlight docs collection by creating `docs/src/content/docs/about.mdx` with `template: splash`. Render the migrated homepage content through a docs-local Astro landing component and a plain data module derived from `starfolio`, while copying only the required local assets into `docs/public/about/`.

**Tech Stack:** Astro, Astro Starlight, lucode-starlight, MDX, Node test runner

---

## File Structure

- Create: `docs/src/content/docs/about.mdx`
- Create: `docs/src/components/about/AboutLanding.astro`
- Create: `docs/src/data/about.ts`
- Create: `docs/tests/about-page.test.mjs`
- Create: `docs/public/about/picofme.png`
- Create: `docs/public/about/example-website.webp`
- Create: `docs/public/about/example-website.png`
- Create: `docs/public/about/photos/photo1.jpg` through `photo9.jpg`
- Modify: `docs/astro.config.mjs`

### Task 1: Add a failing About smoke test

**Files:**
- Create: `docs/tests/about-page.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const aboutPath = path.join(repoRoot, 'src', 'content', 'docs', 'about.mdx');
const configPath = path.join(repoRoot, 'astro.config.mjs');

test('About page source exists and is wired into docs navigation', () => {
  assert.equal(fs.existsSync(aboutPath), true, 'expected about.mdx to exist');

  const aboutSource = fs.readFileSync(aboutPath, 'utf8');
  assert.match(aboutSource, /template:\s+splash/);
  assert.match(aboutSource, /import\s+AboutLanding/);

  const configSource = fs.readFileSync(configPath, 'utf8');
  assert.match(configSource, /label:\s+'About'/);
  assert.match(configSource, /link:\s+'\/about\/'/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test docs/tests/about-page.test.mjs`
Expected: FAIL because `docs/src/content/docs/about.mdx` does not exist and the `About` nav link is missing.

- [ ] **Step 3: Commit**

Skip commit if the repository metadata is unavailable in the workspace. Otherwise:

```bash
git add docs/tests/about-page.test.mjs
git commit -m "test: add about page smoke test"
```

### Task 2: Create the docs-local About data and page

**Files:**
- Create: `docs/src/data/about.ts`
- Create: `docs/src/content/docs/about.mdx`

- [ ] **Step 1: Write the minimal About data module**

Create a plain exported object with:

- hero data
- summary text
- section labels and headings
- work items
- education items
- skills list as strings
- projects list with links and local image paths
- photos list with local image paths
- hackathon items
- contact links

- [ ] **Step 2: Create the Starlight page entry**

Use frontmatter shaped like:

```md
---
title: About
description: A demo About page that migrates the Starfolio homepage into Lucode Starlight.
template: splash
editUrl: false
hero:
  layout: split-right
  announcement:
    text: Starfolio homepage, reworked for Lucode Starlight
    link: /about/
  actions:
    - text: Getting Started
      link: /guides/getting-started/
      icon: right-arrow
    - text: Explore Showcase
      link: /showcase/starlight-components/
      variant: minimal
sidebar:
  hidden: true
---

import AboutLanding from '../../components/about/AboutLanding.astro';

<AboutLanding />
```

- [ ] **Step 3: Run the smoke test to verify it still fails only on nav wiring**

Run: `node --test docs/tests/about-page.test.mjs`
Expected: FAIL because the top-nav `About` entry is still missing from `docs/astro.config.mjs`.

### Task 3: Implement the About landing component

**Files:**
- Create: `docs/src/components/about/AboutLanding.astro`

- [ ] **Step 1: Build the page with lucode-starlight primitives**

Render:

- hero with avatar, heading, description, and CTA buttons
- markdown-like about summary
- work and education lists
- skill chips
- project cards
- photo grid
- hackathon timeline rows
- contact CTA panel

Prefer:

- `ContainerSection`
- `LinkButton`
- `Card`
- `CardGrid`

Use component-scoped CSS for only the layouts not already provided by the theme.

- [ ] **Step 2: Keep the styling docs-native**

Ensure the component uses:

- theme tokens like `var(--border)`, `var(--muted-foreground)`, `var(--surface-40)`, `var(--radius)`
- restrained surfaces and spacing consistent with other Lucode splash pages
- no imported `starfolio` global stylesheet

- [ ] **Step 3: Run Astro build as an implementation smoke check**

Run: `npm --prefix docs run build`
Expected: build may still fail if assets or nav wiring are incomplete, but the component should compile without syntax errors.

### Task 4: Wire the top navigation and copy assets

**Files:**
- Modify: `docs/astro.config.mjs`
- Create: `docs/public/about/picofme.png`
- Create: `docs/public/about/example-website.webp`
- Create: `docs/public/about/example-website.png`
- Create: `docs/public/about/photos/photo1.jpg` through `photo9.jpg`

- [ ] **Step 1: Add the About navigation item**

Insert into `lucode({ navLinks: [...] })`:

```js
{ label: 'About', link: '/about/' }
```

Place it alongside the existing top-level nav items without removing the existing links.

- [ ] **Step 2: Copy the required homepage assets into docs**

Copy:

- `starfolio/public/picofme.png` -> `docs/public/about/picofme.png`
- `starfolio/public/example-website.webp` -> `docs/public/about/example-website.webp`
- `starfolio/public/example-website.png` -> `docs/public/about/example-website.png`
- `starfolio/public/photos/*` -> `docs/public/about/photos/`

- [ ] **Step 3: Run the smoke test to verify the source wiring passes**

Run: `node --test docs/tests/about-page.test.mjs`
Expected: PASS

### Task 5: Verify the full docs build

**Files:**
- Verify only

- [ ] **Step 1: Run the full docs build**

Run: `npm --prefix docs run build`
Expected: PASS with generated output including the About page.

- [ ] **Step 2: If the build passes, spot-check generated output**

Run: `find docs/dist -maxdepth 3 \( -path 'docs/dist/about' -o -path 'docs/dist/about/index.html' \)`
Expected: output contains `docs/dist/about/index.html`

- [ ] **Step 3: Commit**

Skip commit if the repository metadata is unavailable in the workspace. Otherwise:

```bash
git add docs/astro.config.mjs docs/src/content/docs/about.mdx docs/src/components/about/AboutLanding.astro docs/src/data/about.ts docs/tests/about-page.test.mjs docs/public/about
git commit -m "feat: add starfolio-inspired about page"
```

## Self-Review

- Spec coverage: navigation, page route, migrated sections, docs-native styling, and asset handling are all covered by Tasks 1 through 5.
- Placeholder scan: commands, file paths, and expected outcomes are specified concretely.
- Type consistency: all paths and page names consistently target `about` under the `docs` app.
