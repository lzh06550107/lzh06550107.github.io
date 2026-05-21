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
                    { label: '技能目录', autogenerate: { directory: 'hermes-agent/features/skills' } },
                    { label: '高级', autogenerate: { directory: 'hermes-agent/features/advanced' } },
                ],
            },
            { label: '消息平台', directory: 'hermes-agent/messaging-platforms' },
            { label: '集成', directory: 'hermes-agent/integrations' },
            { label: '指南与教程', directory: 'hermes-agent/guides-tutorials' },
            {
                label: '开发者指南',
                items: [
                    { label: '贡献指南', link: '/hermes-agent/developer-guide/contributing/' },
                    { label: '架构', autogenerate: { directory: 'hermes-agent/developer-guide/architecture' } },
                    { label: '扩展', autogenerate: { directory: 'hermes-agent/developer-guide/extending' } },
                    { label: '内部机制', autogenerate: { directory: 'hermes-agent/developer-guide/internals' } },
                ],
            },
        ],
    },
    {
        id: 'codex',
        title: 'Codex',
        cardLabel: 'Codex 文档集',
        description: 'OpenAI Codex 编程智能体的产品文档——涵盖概览、使用、配置、自动化与学习资源。',
        landing: '/codex/',
        ctaLabel: '进入 Codex 文档',
        featuredLinks: [
            { label: '概览', href: '/codex/getting-started/overview/' },
            { label: '快速开始', href: 'https://developers.openai.com/codex/quickstart' },
        ],
        sections: [
            {
                label: '开始入门',
                items: [
                    { label: '概览', link: '/codex/getting-started/overview/' },
                    { label: '快速开始', link: '/codex/getting-started/quickstart/' },
                    { label: '使用场景', link: '/codex/getting-started/use-cases/' },
                    { label: '迁移到 Codex', link: '/codex/getting-started/migrate/' },
                    { label: '价格方案', link: '/codex/getting-started/pricing/' },
                    { label: '开源', link: '/codex/getting-started/open-source/' },
                    {
                        label: 'Concepts',
                        autogenerate: { directory: 'codex/getting-started/concepts' },
                    },
                ],
            },
            {
                label: '使用 Codex',
                items: [
                    {
                        label: 'App 桌面应用',
                        autogenerate: { directory: 'codex/app' },
                    },
                    {
                        label: 'IDE 扩展',
                        autogenerate: { directory: 'codex/ide' },
                    },
                    {
                        label: 'CLI',
                        autogenerate: { directory: 'codex/cli' },
                    },
                    {
                        label: 'Web 云端',
                        autogenerate: { directory: 'codex/cloud' },
                    },
                    {
                        label: '集成',
                        autogenerate: { directory: 'codex/integrations' },
                    },
                    {
                        label: 'Codex Security',
                        autogenerate: { directory: 'codex/security' },
                    },
                ],
            },
            {
                label: '配置',
                items: [
                    { label: 'Config Basics', link: '/codex/config-basic/' },
                    { label: 'Advanced Config', link: '/codex/config-advanced/' },
                    { label: 'Config Reference', link: '/codex/config-reference/' },
                    { label: 'Sample Config', link: '/codex/config-sample/' },
                    { label: 'Permissions 权限', link: '/codex/permissions/' },
                    { label: 'Speed 加速', link: '/codex/speed/' },
                    { label: 'Rules 规则', link: '/codex/rules/' },
                    { label: 'Hooks 钩子', link: '/codex/hooks/' },
                    { label: 'AGENTS.md', link: '/codex/agents-md/' },
                    { label: 'MCP 协议', link: '/codex/mcp/' },
                    {
                        label: 'Plugins 插件',
                        autogenerate: { directory: 'codex/plugins' },
                    },
                    { label: 'Skills 技能', link: '/codex/skills/' },
                    { label: 'Subagents 子智能体', link: '/codex/subagents/' },
                ],
            },
            {
                label: '管理',
                items: [
                    {
                        label: '认证',
                        autogenerate: { directory: 'codex' },
                    },
                ],
            },
            {
                label: '自动化',
                items: [
                    { label: 'Non-interactive Mode', link: '/codex/noninteractive/' },
                    { label: 'Codex SDK', link: '/codex/sdk/' },
                    { label: 'App Server', link: '/codex/app-server/' },
                    { label: 'MCP Server', link: '/codex/mcp-server/' },
                    { label: 'GitHub Action', link: '/codex/github-action/' },
                ],
            },
            {
                label: '学习',
                items: [
                    { label: '最佳实践', link: '/codex/learn/best-practices/' },
                    { label: '视频教程', link: '/codex/learn/videos/' },
                    { label: '构建 AI 团队', link: '/codex/building-ai-teams/' },
                ],
            },
            {
                label: '发布',
                items: [
                    { label: '更新日志', link: '/codex/releases/changelog/' },
                    { label: '功能成熟度', link: '/codex/releases/feature-maturity/' },
                ],
            },
            {
                label: '发布',
                items: [
                    { label: '更新日志', link: '/codex/releases/changelog/' },
                    { label: '功能成熟度', link: '/codex/releases/feature-maturity/' },
                    { label: '开源', link: '/codex/releases/open-source/' },
                ],
            },
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

            if (section.link) {
                return {
                    label: section.label,
                    link: section.link,
                };
            }

            return {
                label: section.label,
                autogenerate: { directory: section.directory },
            };
        }),
    ]);
}
