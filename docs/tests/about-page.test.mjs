import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.resolve(process.cwd(), 'docs');
const aboutPath = path.join(docsRoot, 'src', 'content', 'docs', 'about.mdx');
const configPath = path.join(docsRoot, 'astro.config.mjs');

test('About page source exists and is wired into docs navigation', () => {
    assert.equal(fs.existsSync(aboutPath), true, 'expected about.mdx to exist');

    const aboutSource = fs.readFileSync(aboutPath, 'utf8');
    assert.match(aboutSource, /template:\s+splash/);
    assert.match(aboutSource, /import\s+AboutLanding/);
    assert.match(aboutSource, /data-slot='doc-title'/);
    assert.match(aboutSource, /doc-title-description/);

    const configSource = fs.readFileSync(configPath, 'utf8');
    const navLinksBlock = configSource.match(/navLinks:\s*\[(.*?)\]/s)?.[1] ?? '';
    assert.match(navLinksBlock, /label:\s+'Blog'/);
    assert.match(navLinksBlock, /link:\s+'\/blog\/'/);
    assert.match(navLinksBlock, /label:\s+'Docs'/);
    assert.match(navLinksBlock, /link:\s+'\/docs\/'/);
    assert.match(navLinksBlock, /label:\s+'Books'/);
    assert.match(navLinksBlock, /link:\s+'https:\/\/notes-docs\.github\.io\/docs-site\/home\/'/);
    assert.match(navLinksBlock, /label:\s+'About'/);
    assert.match(navLinksBlock, /link:\s+'\/about\/'/);
});

test('Docs root page is wired to the landing-home content', () => {
    const indexPath = path.join(docsRoot, 'src', 'content', 'docs', 'index.mdx');
    const landingPath = path.join(docsRoot, 'src', 'components', 'home', 'LandingHome.astro');
    const backgroundPath = path.join(docsRoot, 'public', 'home-assets', 'bg.jpg');

    assert.equal(fs.existsSync(indexPath), true, 'expected docs index.mdx to exist');
    assert.equal(fs.existsSync(landingPath), true, 'expected LandingHome.astro to exist');
    assert.equal(fs.existsSync(backgroundPath), true, 'expected landing background image to exist');

    const indexSource = fs.readFileSync(indexPath, 'utf8');
    assert.match(indexSource, /import\s+LandingHome/);
    assert.match(indexSource, /<LandingHome\s*\/>/);

    const landingSource = fs.readFileSync(landingPath, 'utf8');
    assert.match(landingSource, /landing-home/);
    assert.match(landingSource, /landing-home__bg/);
    assert.match(landingSource, /landing-home__wrapper/);
    assert.match(landingSource, /landing-home__portrait-wrap/);
    assert.match(landingSource, /landing-home__socials/);
    assert.match(landingSource, /scholar-portrait\.png/);
    assert.match(landingSource, /@fortawesome\/fontawesome-free\/css\/all\.min\.css/);
    assert.match(landingSource, /Lzh博客/);
    assert.match(landingSource, /LZH • Java • Go • PHP • Typescript • Engineer/);
    assert.match(landingSource, /fa-brands fa-github/);
    assert.match(landingSource, /fa-solid fa-envelope/);
    assert.match(landingSource, /@keyframes landingNeonPulse/);
    assert.match(landingSource, /@keyframes landingPortraitHalo/);
    assert.match(landingSource, /landing-home__portrait-wrap::after/);
    assert.match(landingSource, /url\('\/home-assets\/bg\.jpg'\)/);
    assert.match(landingSource, /animation:\s*landingBgDesktop 60s linear infinite/);
    assert.match(landingSource, /\[data-slot='layout'\],[\s\S]*background:\s*transparent !important/);
    assert.match(landingSource, /margin:\s*0 !important/);
    assert.match(landingSource, /width:\s*100vw !important/);
    assert.match(landingSource, /margin:\s*0 0 0 -50vw !important/);
    assert.match(landingSource, /align-items:\s*center/);
    assert.match(landingSource, /flex-wrap:\s*nowrap/);
    assert.match(landingSource, /justify-content:\s*center/);
    assert.match(landingSource, /width:\s*6em;/);
    assert.match(landingSource, /width:\s*2\.5em;/);
    assert.match(landingSource, /a:hover::before/);
    assert.match(landingSource, /\.landing-home__socials a \{[\s\S]*display:\s*flex/);
    assert.match(landingSource, /\.landing-home__socials a \{[\s\S]*align-items:\s*center/);
    assert.match(landingSource, /\.landing-home__socials a \{[\s\S]*justify-content:\s*center/);
    assert.match(landingSource, /\.landing-home__socials a \{[\s\S]*width:\s*100%/);
    assert.match(landingSource, /\.landing-home__socials a \{[\s\S]*height:\s*100%/);
    assert.match(landingSource, /\.landing-home__socials a::before \{[\s\S]*display:\s*flex/);
    assert.match(landingSource, /\.landing-home__socials a::before \{[\s\S]*align-items:\s*center/);
    assert.match(landingSource, /\.landing-home__socials a::before \{[\s\S]*justify-content:\s*center/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*display:\s*grid/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*grid-template-columns:\s*repeat\(4,\s*5\.2em\)/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*row-gap:\s*0\.25rem/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*column-gap:\s*0\.15rem/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*justify-content:\s*center/);
    assert.match(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*width:\s*5\.2em/);
    assert.doesNotMatch(landingSource, /@media only screen and \(min-width: 360px\) and \(max-width: 640px\)[\s\S]*flex-wrap:\s*wrap/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*display:\s*grid/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*grid-template-columns:\s*repeat\(4,\s*5em\)/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*row-gap:\s*0\.1rem/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*column-gap:\s*0\.1rem/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*justify-content:\s*center/);
    assert.match(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*width:\s*5em/);
    assert.doesNotMatch(landingSource, /@media only screen and \(max-width: 360px\)[\s\S]*flex-wrap:\s*wrap/);
});

test('Books page restores the previous docs splash content', () => {
    const booksPath = path.join(docsRoot, 'src', 'content', 'docs', 'books.mdx');
    assert.equal(fs.existsSync(booksPath), true, 'expected books.mdx to exist');

    const booksSource = fs.readFileSync(booksPath, 'utf8');
    assert.match(booksSource, /title:\s+Lucode Starlight/);
    assert.match(booksSource, /## What the Theme Changes/);
    assert.match(booksSource, /## Documentation Map/);
    assert.match(booksSource, /Explore the Showcase/);
});

test('About landing keeps the starfolio-style single-column structure markers', () => {
    const landingPath = path.join(docsRoot, 'src', 'components', 'about', 'AboutLanding.astro');
    assert.equal(fs.existsSync(landingPath), true, 'expected AboutLanding.astro to exist');

    const landingSource = fs.readFileSync(landingPath, 'utf8');
    assert.match(landingSource, /about-page-shell/);
    assert.match(landingSource, /hero-identity/);
    assert.match(landingSource, /hero-lede/);
    assert.match(landingSource, /section-title-display/);
    assert.match(landingSource, /narrative-copy/);
    assert.match(landingSource, /section-rail/);
    assert.match(landingSource, /skill-icon/);
    assert.match(landingSource, /skill-label/);
    assert.match(landingSource, /section-divider-pill/);
    assert.match(landingSource, /work-accordion-framed/);
    assert.match(landingSource, /project-grid/);
    assert.match(landingSource, /project-grid-aligned/);
    assert.match(landingSource, /project-grid-aligned\s*>\s*\*/);
    assert.match(landingSource, /project-card-shell/);
    assert.match(landingSource, /project-media-link/);
    assert.match(landingSource, /aspect-ratio:\s*16\s*\/\s*9/);
    assert.match(landingSource, /project-video/);
    assert.match(landingSource, /poster=/);
    assert.match(landingSource, /photo-columns/);
    assert.match(landingSource, /photo-columns\s*>?\s*\.photo-column/);
    assert.match(landingSource, /align-items:\s*start/);
    assert.match(landingSource, /align-content:\s*start/);
    assert.match(landingSource, /photo-trigger/);
    assert.match(landingSource, /photo-lightbox/);
    assert.match(landingSource, /data-photo-index/);
    assert.match(landingSource, /photoLightboxScript/);
    assert.match(landingSource, /photo-lightbox-nav/);
    assert.match(landingSource, /data-photo-lightbox-prev/);
    assert.match(landingSource, /data-photo-lightbox-next/);
    assert.match(landingSource, /scroll-snap-type:\s*x/);
    assert.match(landingSource, /flex:\s*0 0 100%/);
    assert.match(landingSource, /inline:\s*'center'/);
    assert.match(landingSource, /scrollbar-width:\s*none/);
    assert.match(landingSource, /::-webkit-scrollbar\s*\{/);
    assert.match(landingSource, /timeline-track/);
    assert.match(landingSource, /timeline-axis-centered/);
    assert.match(landingSource, /contact-title/);
    assert.match(landingSource, /contact-grid-pattern/);
    assert.match(landingSource, /contact-flicker-layer/);
    assert.match(landingSource, /contact-pill/);
    assert.match(landingSource, /@keyframes contactGridFlicker/);
    assert.match(landingSource, /resolveLocalPath/);
    assert.match(landingSource, /resolveSiteHref/);
});
