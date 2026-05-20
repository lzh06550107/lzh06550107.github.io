export const docsets = [
    {
        id: 'hermes-agent',
        title: 'Hermes Agent',
        cardLabel: 'Hermes Agent 文档集',
        description: '覆盖安装、日常使用、集成接入与架构说明的 Hermes Agent 产品文档。',
        landing: '/hermes-agent/',
        ctaLabel: '进入 Hermes 文档',
        featuredLinks: [
            { label: '快速开始', href: '/hermes-agent/getting-started/quickstart/' },
            { label: '功能概览', href: '/hermes-agent/features/overview/' },
        ],
        sections: [
            { label: '快速上手', directory: 'hermes-agent/getting-started' },
            { label: '使用 Hermes', directory: 'hermes-agent/using-hermes' },
            {
                label: '功能',
                items: [
                    { label: '功能概览', link: '/hermes-agent/features/overview/' },
                    { label: 'Nous 工具网关', link: '/hermes-agent/features/tool-gateway/' },
                    { label: '核心能力', autogenerate: { directory: 'hermes-agent/features/core' } },
                    { label: '自动化', autogenerate: { directory: 'hermes-agent/features/automation' } },
                    { label: '媒体与网页', autogenerate: { directory: 'hermes-agent/features/media-web' } },
                    { label: '管理', autogenerate: { directory: 'hermes-agent/features/management' } },
                    { label: '技能目录', autogenerate: { directory: 'hermes-agent/features/advanced' } },
                    { label: '高级', autogenerate: { directory: 'hermes-agent/features/skills' } },
                ],
            },
            { label: '消息平台', directory: 'hermes-agent/messaging-platforms' },
            { label: '集成', directory: 'hermes-agent/integrations' },
            { label: '指南与教程', directory: 'hermes-agent/guides-tutorials' },
            { label: '开发者指南', directory: 'hermes-agent/developer-guide' },
        ],
    },
    {
        id: 'sdk',
        title: 'SDK',
        cardLabel: 'SDK 文档集',
        description: '用于演示多文档集能力的 SDK 产品文档，包含安装与客户端配置说明。',
        landing: '/sdk/',
        ctaLabel: '进入 SDK 文档',
        featuredLinks: [
            { label: '安装', href: '/sdk/getting-started/installation/' },
            { label: '客户端配置', href: '/sdk/reference/client-configuration/' },
        ],
        sections: [
            { label: '快速上手', directory: 'sdk/getting-started' },
            { label: '参考', directory: 'sdk/reference' },
        ],
    },
];

export function buildDocsetSidebar() {
    return docsets.flatMap((docset) => [
        { label: '概览', link: docset.landing },
        ...docset.sections.map((section) => {
            if (section.items) {
                return {
                    label: section.label,
                    items: section.items,
                };
            }

            return {
                label: section.label,
                autogenerate: { directory: section.directory },
            };
        }),
    ]);
}
