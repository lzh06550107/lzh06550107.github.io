# Engineering Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a real engineering blog to `docs` with a dedicated `blog` content collection, a `/blog/` list page, and per-post routes using real content.

**Architecture:** Keep the existing Starlight-powered docs site for docs content, but implement the blog as a separate Astro content collection and page route family. The `/blog/` index will fetch, filter, sort, and render posts directly from the new collection, while `/blog/[slug]` will render individual posts with the shared site header and theme tokens but without the docs sidebar model.

**Tech Stack:** Astro 6, Astro Content Collections, Starlight site shell, TypeScript, Node test runner, CSS in `docs/src/styles/global.css`.

---

### Task 1: Lock the expected blog behavior with a failing test

**Files:**
- Create: `docs/tests/blog-page.test.mjs`
- Modify: `docs/tests/about-page.test.mjs`
- Test: `node --test docs/tests/about-page.test.mjs docs/tests/blog-page.test.mjs`

- [ ] **Step 1: Write the failing blog smoke test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const contentConfigPath = path.join(docsRoot, 'src', 'content.config.ts');
const blogIndexPath = path.join(docsRoot, 'src', 'pages', 'blog', 'index.astro');
const blogPostPath = path.join(docsRoot, 'src', 'pages', 'blog', '[slug].astro');

test('blog content collection and routes exist', () => {
  const configSource = fs.readFileSync(contentConfigPath, 'utf8');
  assert.match(configSource, /blog:/);
  assert.match(configSource, /defineCollection/);

  assert.equal(fs.existsSync(blogIndexPath), true, 'expected blog index route to exist');
  assert.equal(fs.existsSync(blogPostPath), true, 'expected blog post route to exist');
});
```

- [ ] **Step 2: Add blog metadata expectations**

```js
const samplePostPath = path.join(docsRoot, 'src', 'content', 'blog', 'engineering-writing.mdx');
const postSource = fs.readFileSync(samplePostPath, 'utf8');
assert.match(postSource, /title:/);
assert.match(postSource, /pubDate:/);
assert.match(postSource, /category:/);
assert.match(postSource, /readingTime:/);
assert.match(postSource, /draft:\s*false/);
```

- [ ] **Step 3: Verify the test fails for the right reason**

Run: `node --test docs/tests/about-page.test.mjs docs/tests/blog-page.test.mjs`
Expected: FAIL because the `blog` collection, blog routes, and real seed posts do not exist yet.

- [ ] **Step 4: Extend the existing nav test to keep `Blog` in the header**

```js
const navLinksBlock = configSource.match(/navLinks:\s*\[(.*?)\]/s)?.[1] ?? '';
assert.match(navLinksBlock, /label:\s+'Blog'/);
assert.match(navLinksBlock, /link:\s+'\/blog\/'/);
```

### Task 2: Add the dedicated `blog` content collection and real seed posts

**Files:**
- Modify: `docs/src/content.config.ts`
- Create: `docs/src/content/blog/engineering-writing.mdx`
- Create: `docs/src/content/blog/astro-content-collections.mdx`
- Create: `docs/src/content/blog/ship-small-docs-improvements.mdx`
- Test: `node --test docs/tests/blog-page.test.mjs`

- [ ] **Step 1: Add the `blog` collection schema**

```ts
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: ExtendDocsSchema }),
  }),
  blog,
};
```

- [ ] **Step 2: Add the first real blog post**

```mdx
---
title: Writing Durable Engineering Notes
description: Why small, searchable technical notes age better than heroic documentation rewrites.
pubDate: 2026-05-05
category: Engineering Practice
readingTime: 6 min read
draft: false
---

Good engineering writing does not need to be exhaustive to be useful.
```

- [ ] **Step 3: Add two more real posts so sorting and category display can be validated**

```mdx
---
title: Building with Astro Content Collections
description: A practical pattern for typed content, route generation, and metadata-driven lists.
pubDate: 2026-05-03
category: Astro
readingTime: 8 min read
draft: false
---
```

```mdx
---
title: Shipping Small Docs Improvements
description: How to improve navigation, readability, and trust without redesigning an entire docs site.
pubDate: 2026-04-28
category: Documentation
readingTime: 5 min read
draft: false
---
```

- [ ] **Step 4: Verify the collection test turns green**

Run: `node --test docs/tests/blog-page.test.mjs`
Expected: PASS for schema presence and seed-post metadata checks.

### Task 3: Implement the `/blog/` list page and `/blog/[slug]` detail route

**Files:**
- Create: `docs/src/pages/blog/index.astro`
- Create: `docs/src/pages/blog/[slug].astro`
- Modify: `docs/tests/blog-page.test.mjs`
- Test: `node --test docs/tests/blog-page.test.mjs`

- [ ] **Step 1: Build the index route around `getCollection('blog')`**

```astro
---
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
  (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
);
---
```

- [ ] **Step 2: Render the two-column article cards**

```astro
<Layout title="Blog">
  <section class="blog-index-shell">
    <header class="blog-index-intro">
      <p class="blog-kicker">Blog</p>
      <h1>Engineering notes that stay useful</h1>
      <p>Long-lived technical writing about tools, systems, and practical software work.</p>
    </header>
    <div class="blog-grid">
      {posts.map((post) => (
        <a class="blog-card" href={`/blog/${post.slug}/`}>
          <div class="blog-meta-row">
            <span>{post.data.category}</span>
            <span>{post.data.readingTime}</span>
          </div>
          <h2>{post.data.title}</h2>
          <p>{post.data.description}</p>
          <time datetime={post.data.pubDate.toISOString()}>{post.data.pubDate.toLocaleDateString('en-US')}</time>
        </a>
      ))}
    </div>
  </section>
</Layout>
```

- [ ] **Step 3: Implement the per-post route**

```astro
---
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.slug }, props: { post } }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
```

- [ ] **Step 4: Render the post header and content**

```astro
<Layout title={post.data.title}>
  <article class="blog-post-shell">
    <header class="blog-post-header">
      <p class="blog-post-meta">{post.data.category} · {post.data.readingTime}</p>
      <h1>{post.data.title}</h1>
      <p>{post.data.description}</p>
    </header>
    <Content />
  </article>
</Layout>
```

- [ ] **Step 5: Strengthen the route test**

```js
const blogIndexSource = fs.readFileSync(blogIndexPath, 'utf8');
assert.match(blogIndexSource, /getCollection\('blog'/);
assert.match(blogIndexSource, /sort\(/);
assert.match(blogIndexSource, /blog-grid/);
assert.match(blogIndexSource, /readingTime/);
assert.match(blogIndexSource, /category/);

const blogPostSource = fs.readFileSync(blogPostPath, 'utf8');
assert.match(blogPostSource, /getStaticPaths/);
assert.match(blogPostSource, /render\(post\)/);
```

- [ ] **Step 6: Verify the route test passes**

Run: `node --test docs/tests/blog-page.test.mjs`
Expected: PASS

### Task 4: Add blog styling and verify the docs app build

**Files:**
- Modify: `docs/src/styles/global.css`
- Test: `node --test docs/tests/about-page.test.mjs docs/tests/blog-page.test.mjs`
- Verify: `npm --prefix docs run build`

- [ ] **Step 1: Add the blog index layout styles**

```css
.blog-index-shell {
  width: min(100%, 76rem);
  margin: 0 auto;
  padding: 4rem 1.5rem 5rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}
```

- [ ] **Step 2: Add article-card presentation and metadata styles**

```css
.blog-card {
  display: grid;
  gap: 0.9rem;
  padding: 1.5rem;
  border: 1px solid color-mix(in oklab, var(--border) 85%, transparent);
  border-radius: calc(var(--radius) + 2px);
  background: color-mix(in oklab, var(--background) 94%, transparent);
}

.blog-meta-row {
  display: flex;
  gap: 0.75rem;
  color: var(--muted-foreground);
  font-size: 0.82rem;
}
```

- [ ] **Step 3: Add post-page width and mobile fallbacks**

```css
.blog-post-shell {
  width: min(100%, 52rem);
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
}

@media (max-width: 960px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Run the docs tests**

Run: `node --test docs/tests/about-page.test.mjs docs/tests/blog-page.test.mjs`
Expected: PASS

- [ ] **Step 5: Run the docs build**

Run: `npm --prefix docs run build`
Expected: exit 0 with generated `/blog/` and `/blog/<slug>/` output.
