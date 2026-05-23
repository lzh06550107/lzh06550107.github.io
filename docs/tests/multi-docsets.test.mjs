import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const configPath = path.join(docsRoot, 'astro.config.mjs');
const registryPath = path.join(docsRoot, 'src', 'data', 'docsets.mjs');
const docsPortalPath = path.join(docsRoot, 'src', 'content', 'docs', 'docs.mdx');
const docsPortalComponentPath = path.join(docsRoot, 'src', 'components', 'home', 'DocsPortal.astro');
const sidebarPath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'Sidebar.astro'
);
const drawerPath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'parts',
    'Drawer.astro'
);
const paginationPath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'Pagination.astro'
);
const pageTitlePath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'PageTitle.astro'
);
const footerPath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'Footer.astro'
);
const pageFramePath = path.join(
    process.cwd(),
    'packages',
    'lucode-starlight',
    'components',
    'overrides',
    'PageFrame.astro'
);

test('multi-docset registry defines product docsets for the docs portal', () => {
    assert.equal(fs.existsSync(registryPath), true, 'expected docset registry to exist');

    const registrySource = fs.readFileSync(registryPath, 'utf8');
    assert.match(registrySource, /export const docsets = \[/);
    assert.match(registrySource, /id:\s*'hermes-agent'/);
    assert.match(registrySource, /landing:\s*'\/hermes-agent\/'/);
    assert.doesNotMatch(registrySource, /id:\s*'sdk'/);
});

test('docs navigation points to a docs portal instead of a single product quickstart', () => {
    const configSource = fs.readFileSync(configPath, 'utf8');
    const navLinksBlock = configSource.match(/navLinks:\s*\[(.*?)\]/s)?.[1] ?? '';

    assert.match(navLinksBlock, /label:\s+'Docs'/);
    assert.match(navLinksBlock, /link:\s+'\/docs\/'/);
    assert.doesNotMatch(navLinksBlock, /hermes-agent\/getting-started\/quickstart/);
});

test('docs portal page exists and renders a dedicated multi-docset landing component', () => {
    assert.equal(fs.existsSync(docsPortalPath), true, 'expected docs portal page to exist');
    assert.equal(fs.existsSync(docsPortalComponentPath), true, 'expected docs portal component to exist');

    const portalSource = fs.readFileSync(docsPortalPath, 'utf8');
    assert.match(portalSource, /title:\s+文档中心/);
    assert.match(portalSource, /description:\s+当前站点内各个产品文档集的统一入口页/);
    assert.match(portalSource, /sidebar:\s*\n\s*hidden:\s*true/);
    assert.match(portalSource, /import\s+DocsPortal/);
    assert.match(portalSource, /<DocsPortal\s*\/>/);
});

test('docs portal registry and overview pages expose Chinese-facing copy', () => {
    const registrySource = fs.readFileSync(registryPath, 'utf8');
    const portalSource = fs.readFileSync(docsPortalComponentPath, 'utf8');
    const hermesIndexSource = fs.readFileSync(
        path.join(docsRoot, 'src', 'content', 'docs', 'hermes-agent', 'index.mdx'),
        'utf8'
    );

    assert.match(registrySource, /cardLabel:\s*'Hermes Agent 文档集'/);
    assert.match(registrySource, /ctaLabel:\s*'进入 Hermes 文档'/);
    assert.match(registrySource, /label:\s*'概览'/);
    assert.match(registrySource, /label:\s*'快速上手'/);

    assert.match(portalSource, /文档中心/);
    assert.match(portalSource, /选择你要查看的产品文档/);
    assert.match(portalSource, /按产品独立导航/);
    assert.match(portalSource, /产品使用文档/);

    assert.match(hermesIndexSource, /title:\s+Hermes Agent 概览/);
    assert.match(hermesIndexSource, /## 从这里开始/);
    assert.match(hermesIndexSource, /## 这个文档集包含什么/);
});

test('Claude Code card only exposes overview and quickstart links on the docs portal', () => {
    const registrySource = fs.readFileSync(registryPath, 'utf8');
    const claudeFeaturedLinks =
        registrySource.match(/id:\s*'claude-code'[\s\S]*?featuredLinks:\s*\[(.*?)\]\s*,\s*sections:/s)?.[1] ?? '';

    assert.match(claudeFeaturedLinks, /\/claude-code\/getting-started\/overview\//);
    assert.match(claudeFeaturedLinks, /\/claude-code\/getting-started\/quickstart\//);
    assert.equal((claudeFeaturedLinks.match(/href:/g) ?? []).length, 2);
    assert.doesNotMatch(claudeFeaturedLinks, /\/claude-code\/getting-started\/changelog\//);
    assert.doesNotMatch(claudeFeaturedLinks, /\/claude-code\/platforms-and-integrations\/overview\//);
});

test('sidebar and drawer filter docs navigation down to the active docset', () => {
    const sidebarSource = fs.readFileSync(sidebarPath, 'utf8');
    const drawerSource = fs.readFileSync(drawerPath, 'utf8');

    assert.match(sidebarSource, /Astro\.url\.pathname/);
    assert.match(sidebarSource, /filterSidebarEntriesForPath/);
    assert.match(sidebarSource, /const filteredSidebar = filterSidebarEntriesForPath/);
    assert.match(sidebarSource, /<SidebarSublist sublist=\{filteredSidebar\} \/>/);

    assert.match(drawerSource, /filterSidebarEntriesForPath/);
    assert.match(drawerSource, /const filteredSidebar = filterSidebarEntriesForPath/);
    assert.match(drawerSource, /filteredSidebar\.map/);
    assert.match(drawerSource, /hasSidebar &&/);
});

test('pagination and title actions stay within the active docset', () => {
    const paginationSource = fs.readFileSync(paginationPath, 'utf8');
    const pageTitleSource = fs.readFileSync(pageTitlePath, 'utf8');

    assert.match(paginationSource, /filterPaginationForPath/);
    assert.match(paginationSource, /const \{ prev, next \} = filterPaginationForPath/);

    assert.match(pageTitleSource, /filterPaginationForPath/);
    assert.match(pageTitleSource, /const \{ prev, next \} = filterPaginationForPath/);
});

test('portal and docset landing pages suppress the duplicate markdown title content', () => {
    const portalSource = fs.readFileSync(docsPortalComponentPath, 'utf8');
    const hermesIndexSource = fs.readFileSync(
        path.join(docsRoot, 'src', 'content', 'docs', 'hermes-agent', 'index.mdx'),
        'utf8'
    );

    assert.match(portalSource, /\[data-slot='doc-title'\]/);
    assert.doesNotMatch(hermesIndexSource, /^#\s+Hermes Agent/m);
});

test('footer respects per-page editUrl frontmatter when rendering edit links', () => {
    const footerSource = fs.readFileSync(footerPath, 'utf8');

    assert.match(footerSource, /data:\s*\{\s*template,\s*editUrl\s*\}/);
    assert.match(footerSource, /const showEditLink = editUrl !== false && editLink\?\.baseUrl \? true : false;/);
});

test('page frame only makes the top-level site header sticky', () => {
    const pageFrameSource = fs.readFileSync(pageFramePath, 'utf8');

    assert.match(pageFrameSource, /> header \{/);
    assert.doesNotMatch(pageFrameSource, /\n\s*header \{/);
});

test('docs portal cards use fixed grid tracks so card content aligns vertically', () => {
    const portalSource = fs.readFileSync(docsPortalComponentPath, 'utf8');

    assert.match(portalSource, /\.docs-portal__grid\s*\{[\s\S]*align-items:\s*stretch;/);
    assert.match(portalSource, /\.docs-portal__grid\s*\{[\s\S]*grid-auto-rows:\s*1fr;/);
    assert.match(portalSource, /\.docs-portal__grid > \*\s*\{[\s\S]*margin:\s*0 !important;/);
    assert.match(portalSource, /\.docs-portal__hero\s*\{[\s\S]*position:\s*static;/);
    assert.match(portalSource, /\.docs-portal__hero\s*\{[\s\S]*top:\s*auto;/);
    assert.match(portalSource, /\.docs-portal__card\s*\{[\s\S]*grid-template-rows:\s*min-content 1fr;/);
    assert.match(portalSource, /\.docs-portal__card-copy\s*\{[\s\S]*grid-template-rows:\s*min-content min-content 1fr;/);
    assert.match(portalSource, /\.docs-portal__card-copy\s*\{[\s\S]*min-height:\s*12rem;/);
    assert.match(portalSource, /\.docs-portal__actions\s*\{[\s\S]*align-content:\s*end;/);
    assert.match(portalSource, /\.docs-portal__primary\s*\{[\s\S]*width:\s*100%;/);
    assert.match(portalSource, /\.docs-portal__primary\s*\{[\s\S]*background-color:\s*#262626;/);
    assert.match(portalSource, /\.docs-portal__primary\s*\{[\s\S]*-webkit-text-fill-color:\s*#ffffff;/);
    assert.match(portalSource, /@media \(max-width:\s*60rem\)\s*\{[\s\S]*\.docs-portal__card-copy\s*\{[\s\S]*min-height:\s*auto;/);
    assert.match(portalSource, /@media \(max-width:\s*60rem\)\s*\{[\s\S]*\.docs-portal__hero h1\s*\{[\s\S]*font-size:\s*clamp\(1\.85rem,\s*10\.5vw,\s*3rem\);/);
    assert.match(portalSource, /@media \(max-width:\s*60rem\)\s*\{[\s\S]*\.docs-portal__hero-meta\s*\{[\s\S]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
});
