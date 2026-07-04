// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import starlight from '@astrojs/starlight';
import lucode from '../packages/lucode-starlight/index.ts';
import { buildDocsetSidebar } from './src/data/docsets.mjs';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// https://astro.build/config
export default defineConfig({
    site: 'https://lzh06550107.github.io',
    base: '/',

    integrations: [
        starlight({
            title: 'lzh博客',
            logo: {
                src: './src/assets/logo.svg',
                alt: 'Lucode logo',
                replacesTitle: true,
            },
            customCss: ['./src/styles/global.css', 'katex/dist/katex.min.css',],
            editLink: {
                baseUrl: 'https://github.com/lucas-labs/lucode-starlight-theme/edit/master/docs',
            },
            lastUpdated: true,
            plugins: [
                lucode({
                    navLinks: [
                        { label: 'Blog', link: '/blog/' },
                        { label: 'Docs', link: '/docs/' },
                        { label: 'Books', link: 'https://notes-docs.github.io/docs-site/home/' },
                        { label: 'About', link: '/about/' },
                    ],
                    music: {
                        autoplay: true,
                        tracks: [
                            // Add your music tracks here, e.g.:
                            { title: '原来你也在这里', src: '/music/原来你也在这里.flac' },
                            { title: '山丘', src: '/music/山丘.flac' },
                            { title: '谁明浪子心', src: '/music/谁明浪子心.flac' },
                            { title: '凡人歌', src: '/music/凡人歌.mp3' },
                            { title: '南山南', src: '/music/南山南.flac' },
                            { title: '成都', src: '/music/成都.flac' }
                        ],
                    },
                }),
            ],
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/lzh06550107',
                },
            ],
            sidebar: buildDocsetSidebar(),
        }),
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
    vite: {
        resolve: {
            alias: [
                {
                    find: /^lucode-starlight\/styles\/base$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/styles/base.css', import.meta.url)),
                },
                {
                    find: /^lucode-starlight\/styles\/layers$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/styles/layers.css', import.meta.url)),
                },
                {
                    find: /^lucode-starlight\/styles\/theme$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/styles/theme.css', import.meta.url)),
                },
                {
                    find: /^lucode-starlight\/components$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/user-components.ts', import.meta.url)),
                },
                {
                    find: /^lucode-starlight\/components\/(.*)$/,
                    replacement: `${fileURLToPath(new URL('../packages/lucode-starlight/components', import.meta.url))}/$1`,
                },
                {
                    find: /^lucode-starlight\/schema$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/schema.ts', import.meta.url)),
                },
                {
                    find: /^lucode-starlight$/,
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight/index.ts', import.meta.url)),
                },
                {
                    find: '@lucode-starlight',
                    replacement: fileURLToPath(new URL('../packages/lucode-starlight', import.meta.url)),
                },
            ],
        },
        plugins: [],
    },
});
