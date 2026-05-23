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
            { label: '快速开始', href: '/codex/getting-started/quickstart/' },
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
                    { label: 'Config Basics', link: '/codex/configuration/config-basic/' },
                    { label: 'Advanced Config', link: '/codex/configuration/config-advanced/' },
                    { label: 'Config Reference', link: '/codex/configuration/config-reference/' },
                    { label: 'Sample Config', link: '/codex/configuration/config-sample/' },
                    { label: 'Permissions 权限', link: '/codex/configuration/permissions/' },
                    { label: 'Speed 加速', link: '/codex/configuration/speed/' },
                    { label: 'Rules 规则', link: '/codex/configuration/rules/' },
                    { label: 'Hooks 钩子', link: '/codex/configuration/hooks/' },
                    { label: 'AGENTS.md', link: '/codex/configuration/agents-md/' },
                    { label: 'MCP 协议', link: '/codex/configuration/mcp/' },
                    {
                        label: 'Plugins 插件',
                        autogenerate: { directory: 'codex/configuration/plugins' },
                    },
                    { label: 'Skills 技能', link: '/codex/configuration/skills/' },
                    { label: 'Subagents 子智能体', link: '/codex/configuration/subagents/' },
                ],
            },
            {
                label: '管理',
                items: [
                    { label: 'Authentication', link: '/codex/administration/auth/' },
                    {
                        label: 'Enterprise',
                        autogenerate: { directory: 'codex/administration/enterprise' },
                    },
                    { label: 'Agent approvals & security', link: '/codex/administration/agent-approvals-security/' },
                    { label: 'Remote connections', link: '/codex/administration/remote-connections/' },
                    { label: 'Windows', link: '/codex/administration/windows/' },
                ],
            },
            {
                label: '自动化',
                items: [
                    { label: 'Non-interactive Mode', link: '/codex/automation/noninteractive/' },
                    { label: 'Codex SDK', link: '/codex/automation/sdk/' },
                    { label: 'App Server', link: '/codex/automation/app-server/' },
                    { label: 'MCP Server', link: '/codex/automation/mcp-server/' },
                    { label: 'GitHub Action', link: '/codex/automation/github-action/' },
                ],
            },
            {
                label: '学习',
                items: [
                    { label: '最佳实践', link: '/codex/learn/best-practices/' },
                    { label: '视频教程', link: '/codex/learn/videos/' },
                    { label: '构建 AI 团队', link: '/codex/learn/building-ai-teams/' },
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
        id: 'claude-code',
        title: 'Claude Code',
        cardLabel: 'Claude Code 文档集',
        description: 'Anthropic Claude Code 文档，当前已包含快速上手、核心概念、完整“使用 Claude Code”章节，以及“平台与集成”中的概览、Remote Control、Claude Code on the web（入门、参考、Routines、Plan in the cloud、Ultrareview）、Claude Code on desktop（入门、参考、Scheduled tasks、Desktop 更新日志）、Chrome 扩展、Computer use、Visual Studio Code、JetBrains IDEs、Code Review、GitHub Actions、GitHub Enterprise Server、GitLab CI/CD 与 Claude Code in Slack 等简体中文翻译。',
        landing: '/claude-code/',
        ctaLabel: '进入 Claude Code 文档',
        featuredLinks: [
            { label: '概览', href: '/claude-code/getting-started/overview/' },
            { label: '快速开始', href: '/claude-code/getting-started/quickstart/' },
        ],
        sections: [
            {
                label: '快速上手',
                items: [
                    { label: '概览', link: '/claude-code/getting-started/overview/' },
                    { label: '快速开始', link: '/claude-code/getting-started/quickstart/' },
                    { label: '更新日志', link: '/claude-code/getting-started/changelog/' },
                ],
            },
            {
                label: '核心概念',
                items: [
                    { label: 'Claude Code 的工作原理', link: '/claude-code/core-concepts/how-claude-code-works/' },
                    { label: '扩展 Claude Code', link: '/claude-code/core-concepts/extend-claude-code/' },
                    { label: '探索 .claude 目录', link: '/claude-code/core-concepts/explore-the-claude-directory/' },
                    { label: '探索上下文窗口', link: '/claude-code/core-concepts/explore-the-context-window/' },
                    { label: '提示缓存', link: '/claude-code/core-concepts/prompt-caching/' },
                ],
            },
            {
                label: '使用 Claude Code',
                items: [
                    { label: '存储说明与记忆', link: '/claude-code/use-claude-code/store-instructions-and-memories/' },
                    { label: '权限模式', link: '/claude-code/use-claude-code/permission-modes/' },
                    { label: '管理会话', link: '/claude-code/use-claude-code/manage-sessions/' },
                    { label: '常见工作流', link: '/claude-code/use-claude-code/common-workflows/' },
                    { label: 'Prompt 库', link: '/claude-code/use-claude-code/prompt-library/' },
                    { label: '最佳实践', link: '/claude-code/use-claude-code/best-practices/' },
                ],
            },
            {
                label: '平台与集成',
                items: [
                    { label: '平台与集成概览', link: '/claude-code/platforms-and-integrations/overview/' },
                    { label: 'Remote Control', link: '/claude-code/platforms-and-integrations/remote-control/' },
                    {
                        label: 'Claude Code on the web',
                        items: [
                            {
                                label: 'Get started',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-the-web/get-started/',
                            },
                            {
                                label: 'Reference',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-the-web/reference/',
                            },
                            {
                                label: 'Routines',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-the-web/routines/',
                            },
                            {
                                label: 'Plan in the cloud',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-the-web/plan-in-the-cloud/',
                            },
                            {
                                label: 'Ultrareview',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-the-web/ultrareview/',
                            },
                        ],
                    },
                    {
                        label: 'Claude Code on desktop',
                        items: [
                            {
                                label: 'Get started',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-desktop/get-started/',
                            },
                            {
                                label: 'Reference',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-desktop/reference/',
                            },
                            {
                                label: 'Scheduled tasks',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-desktop/scheduled-tasks/',
                            },
                            {
                                label: 'Desktop changelog',
                                link: '/claude-code/platforms-and-integrations/claude-code-on-desktop/desktop-changelog/',
                            },
                        ],
                    },
                    { label: 'Chrome extension (beta)', link: '/claude-code/platforms-and-integrations/chrome-extension-beta/' },
                    { label: 'Computer use (preview)', link: '/claude-code/platforms-and-integrations/computer-use-preview/' },
                    { label: 'Visual Studio Code', link: '/claude-code/platforms-and-integrations/visual-studio-code/' },
                    { label: 'JetBrains IDEs', link: '/claude-code/platforms-and-integrations/jetbrains-ides/' },
                    {
                        label: 'Code review & CI/CD',
                        items: [
                            { label: 'Code Review', link: '/claude-code/platforms-and-integrations/code-review/' },
                            { label: 'GitHub Actions', link: '/claude-code/platforms-and-integrations/github-actions/' },
                            {
                                label: 'GitHub Enterprise Server',
                                link: '/claude-code/platforms-and-integrations/github-enterprise-server/',
                            },
                            { label: 'GitLab CI/CD', link: '/claude-code/platforms-and-integrations/gitlab-ci-cd/' },
                        ],
                    },
                    { label: 'Claude Code in Slack', link: '/claude-code/platforms-and-integrations/claude-code-in-slack/' },
                ],
            },
        ],
    }
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
