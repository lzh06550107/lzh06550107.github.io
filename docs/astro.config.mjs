// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

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
            customCss: ['./src/styles/global.css'],
            editLink: {
                baseUrl: 'https://github.com/lucas-labs/lucode-starlight-theme/edit/master/docs',
            },
            lastUpdated: true,
            plugins: [
                lucode({
                    navLinks: [
                        { label: 'Blog', link: '/blog/' },
                        { label: 'Docs', link: '/hermes-agent/getting-started/quickstart' },
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
                    href: 'https://github.com/lucas-labs/lucode-starlight-theme',
                },
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    autogenerate: { directory: 'hermes-agent/getting-started',},   
                },
                {
                    label: 'Using Hermes',
                    autogenerate: { directory: 'hermes-agent/using-hermes',},   
                },
                {
                    label: 'Features',
                    autogenerate: { directory: 'hermes-agent/features',},  
                },
                {
                    label: 'Messaging Platforms',
                    autogenerate: { directory: 'hermes-agent/messaging-platforms',},  
                },
                {
                    label: 'Integrations',
                    autogenerate: { directory: 'hermes-agent/integrations',},  
                },
                {
                    label: 'Guides & Tutorials',
                    autogenerate: { directory: 'hermes-agent/guides-tutorials',},  
                },
                {
                    label: 'Developer Guide',
                    autogenerate: { directory: 'hermes-agent/developer-guide',},  
                }
            ],
        }),
    ],

    vite: {
        plugins: [],
    },
});