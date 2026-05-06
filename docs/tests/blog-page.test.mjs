import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const contentConfigPath = path.join(docsRoot, 'src', 'content.config.ts');
const blogIndexPath = path.join(docsRoot, 'src', 'pages', 'blog', 'index.astro');
const blogPostRoutePaths = [
    path.join(docsRoot, 'src', 'pages', 'blog', '[slug].astro'),
    path.join(docsRoot, 'src', 'pages', 'blog', '[...slug].astro'),
];
const samplePostPath = path.join(docsRoot, 'src', 'content', 'blog', 'engineering-writing.mdx');

test('blog content collection is registered', () => {
    const configSource = fs.readFileSync(contentConfigPath, 'utf8');

    assert.match(configSource, /defineCollection/, 'expected content collections to be defined in content.config.ts');
    assert.match(configSource, /glob\s*\(/, 'expected the blog collection to use Astro glob loader');
    assert.match(configSource, /base:\s*['"]\.\/src\/content\/blog['"]/, 'expected the blog loader to read from src/content/blog');
    assert.match(configSource, /export\s+const\s+collections\s*=\s*\{[\s\S]*\bblog\b\s*[:,}]/, 'expected the blog collection to be exported from content.config.ts');
});

test('blog routes exist', () => {
    assert.equal(fs.existsSync(blogIndexPath), true, 'expected blog index route to exist');
    assert.equal(
        blogPostRoutePaths.some((routePath) => fs.existsSync(routePath)),
        true,
        'expected a blog post route to exist as [slug].astro or [...slug].astro'
    );
});

test('blog index route uses the Starlight shell and post collection data', () => {
    assert.equal(fs.existsSync(blogIndexPath), true, 'expected blog index route to exist');

    const indexSource = fs.readFileSync(blogIndexPath, 'utf8');

    assert.match(indexSource, /StarlightPage/, 'expected blog index to reuse the Starlight page shell');
    assert.match(indexSource, /getCollection\('blog'/, 'expected blog index to read from the blog collection');
    assert.match(indexSource, /!data\.draft/, 'expected blog index to exclude draft posts');
    assert.match(
        indexSource,
        /sort\(\s*\(\s*a\s*,\s*b\s*\)\s*=>\s*b\.data\.pubDate\.getTime\(\)\s*-\s*a\.data\.pubDate\.getTime\(\)\s*\)/s,
        'expected blog index to sort posts newest first by pubDate'
    );
    assert.match(indexSource, /post\.data\.title/, 'expected blog cards to render the post title');
    assert.match(indexSource, /post\.data\.description/, 'expected blog cards to render the post description');
    assert.match(indexSource, /post\.data\.category/, 'expected blog cards to render the post category');
    assert.match(indexSource, /post\.data\.readingTime/, 'expected blog cards to render the post reading time');
    assert.match(indexSource, /post\.data\.pubDate/, 'expected blog cards to render the post publication date');
});

test('blog post route uses static paths and renders full post content', () => {
    const blogPostRoutePath = blogPostRoutePaths.find((routePath) => fs.existsSync(routePath));

    assert.notEqual(blogPostRoutePath, undefined, 'expected a blog post route file to exist');

    const postRouteSource = fs.readFileSync(blogPostRoutePath, 'utf8');

    assert.match(postRouteSource, /StarlightPage/, 'expected blog post route to reuse the Starlight page shell');
    assert.match(postRouteSource, /getStaticPaths/, 'expected blog post route to define getStaticPaths');
    assert.match(postRouteSource, /getCollection\('blog'/, 'expected blog post route to read from the blog collection');
    assert.match(postRouteSource, /!data\.draft/, 'expected blog post route to exclude draft posts');
    assert.match(postRouteSource, /params:\s*\{\s*slug:/, 'expected blog post route to generate slug params');
    assert.match(postRouteSource, /render\(post\)/, 'expected blog post route to render the full blog content');
    assert.match(postRouteSource, /post\.data\.title/, 'expected blog post route to render the post title');
    assert.match(postRouteSource, /post\.data\.description/, 'expected blog post route to render the post description');
    assert.match(postRouteSource, /post\.data\.category/, 'expected blog post route to render the post category');
    assert.match(postRouteSource, /post\.data\.readingTime/, 'expected blog post route to render the post reading time');
    assert.match(postRouteSource, /post\.data\.pubDate/, 'expected blog post route to render the post publication date');
    assert.match(postRouteSource, /<Content\s*\/>/, 'expected blog post route to render the article body');
});

test('blog seed post includes the required metadata', () => {
    assert.equal(fs.existsSync(samplePostPath), true, 'expected engineering-writing.mdx to exist');

    const postSource = fs.readFileSync(samplePostPath, 'utf8');
    const frontmatter = postSource.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] ?? '';

    assert.notEqual(frontmatter, '', 'expected engineering-writing.mdx to include frontmatter');
    assert.match(frontmatter, /title:/);
    assert.match(frontmatter, /description:/);
    assert.match(frontmatter, /pubDate:/);
    assert.match(frontmatter, /category:/);
    assert.match(frontmatter, /readingTime:/);
    assert.match(frontmatter, /draft:\s*false/);
});
