import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const contentConfigPath = path.join(docsRoot, 'src', 'content.config.ts');
const blogIndexPath = path.join(docsRoot, 'src', 'pages', 'blog', 'index.astro');
const globalStylesPath = path.join(docsRoot, 'src', 'styles', 'global.css');
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
    assert.match(postRouteSource, /previousPost/, 'expected blog post route to compute the previous blog post');
    assert.match(postRouteSource, /nextPost/, 'expected blog post route to compute the next blog post');
    assert.match(postRouteSource, /blog-post-nav/, 'expected blog post route to render previous and next blog links');
});

test('blog post styles tighten the reading rhythm', () => {
    const stylesSource = fs.readFileSync(globalStylesPath, 'utf8');

    assert.match(
        stylesSource,
        /\.blog-post-shell\s*:where\(h2\)\s*\{[\s\S]*margin-top:\s*2rem;[\s\S]*margin-bottom:\s*0\.9rem;/,
        'expected blog post h2 spacing to be tighter'
    );
    assert.match(
        stylesSource,
        /\.blog-post-shell\s*:where\(p\)\s*\{[\s\S]*margin:\s*0\s+0\s+1rem;[\s\S]*line-height:\s*1\.72;/,
        'expected blog paragraphs to use tighter spacing'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.main\s*>\s*main\s*\{[\s\S]*gap:\s*1rem\s*!important;/,
        'expected blog post content column to reduce the default vertical gap'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s+\.sl-markdown-content\s*:not\(h1, h2, h3, h4, h5, h6, \.sl-heading-wrapper\)\s*\+\s*:is\(\.sl-heading-wrapper\)\s*\{[\s\S]*margin-top:\s*2rem;/,
        'expected blog post heading wrapper spacing to be tighter than the global docs default'
    );
    assert.match(
        stylesSource,
        /\.blog-post-shell\s*:where\(hr\)\s*\{[\s\S]*margin:\s*1\.1rem 0;/,
        'expected blog post separators to use tighter spacing'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*48rem\)\s*18rem\s*!important;[\s\S]*gap:\s*1\.5rem\s*!important;/,
        'expected blog post desktop layout to pull the TOC closer to the article'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s*\{[\s\S]*align-self:\s*start;[\s\S]*position:\s*sticky;[\s\S]*height:\s*calc\(100vh - var\(--header-height\) - 1\.5rem\);[\s\S]*overflow:\s*hidden;[\s\S]*min-height:\s*0;/,
        'expected the blog TOC column to stay sticky while its inner TOC handles scrolling'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s*>\s*div\s*\{[\s\S]*height:\s*100%;[\s\S]*min-height:\s*0;/,
        'expected the blog TOC inner wrapper to fill the sticky column height'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+starlight-toc\s*\{[\s\S]*overflow-y:\s*auto;[\s\S]*scrollbar-width:\s*none;[\s\S]*scroll-behavior:\s*smooth;[\s\S]*overscroll-behavior:\s*contain;[\s\S]*min-height:\s*0;[\s\S]*box-sizing:\s*border-box;/,
        'expected long blog TOCs to scroll smoothly inside the sticky TOC without showing a visible scrollbar'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+nav\[aria-labelledby='starlight__on-this-page'\]\s+a\[aria-current\]\s*\{[\s\S]*font-weight:\s*600;/,
        'expected the active blog TOC item to have a stronger visual highlight'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+nav\[aria-labelledby='starlight__on-this-page'\]\s+a\[aria-current\]\s*\{[\s\S]*background:/,
        'expected the active blog TOC item to rely on background emphasis instead of a side marker'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+nav\[aria-labelledby='starlight__on-this-page'\]\s+a\[aria-current\]::before\s*\{[\s\S]*content:\s*none\s*!important;/,
        'expected the active blog TOC item to explicitly remove the thin side marker'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+nav\[aria-labelledby='starlight__on-this-page'\]\s+a:hover\s*\{[\s\S]*transform:\s*translateX\(1px\);/,
        'expected the blog TOC hover state to be easier to scan'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+nav\[aria-labelledby='starlight__on-this-page'\]\s+ul ul\s*\{[\s\S]*border-left:\s*0;/,
        'expected nested blog TOC levels to avoid showing a left guide line'
    );
    assert.match(
        stylesSource,
        /main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*>\s*\.toc\s+starlight-toc::\-webkit-scrollbar\s*\{[\s\S]*display:\s*none;/,
        'expected the blog TOC scrollbar to be visually hidden'
    );
    assert.match(
        stylesSource,
        /@media\s*\(max-width:\s*50rem\)\s*\{[\s\S]*main\[data-slot='docs'\]:has\(\.blog-post-shell\)\s*\{[\s\S]*grid-template-columns:\s*1fr\s*!important;/,
        'expected blog post layout to collapse cleanly for mobile screens'
    );
    assert.match(
        stylesSource,
        /\.blog-post-shell\s*\{[\s\S]*display:\s*block;/,
        'expected blog post article container to use normal document flow instead of a grid gap between every element'
    );
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
