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
    },
    {
        id: 'scrapling',
        title: 'Scrapling',
        cardLabel: 'Scrapling 文档集',
        description: 'Scrapling 官方文档的简体中文镜像，覆盖介绍、概览、性能基准、解析、抓取、Spiders、CLI、AI MCP Server、教程、API Reference 与开发页面。',
        landing: '/scrapling/',
        ctaLabel: '进入 Scrapling 文档',
        featuredLinks: [
            { label: '概览', href: '/scrapling/overview/' },
            { label: '查询元素', href: '/scrapling/parsing/selection/' },
        ],
        sections: [
            {
                label: '基础',
                items: [
                    { label: '概览', link: '/scrapling/overview/' },
                    { label: '性能测试', link: '/scrapling/benchmarks/' },
                ],
            },
            {
                label: 'User Guide',
                items: [
                    {
                        label: 'Parsing',
                        items: [
                            { label: 'Querying elements', link: '/scrapling/parsing/selection/' },
                            { label: 'Main classes', link: '/scrapling/parsing/main_classes/' },
                            { label: 'Adaptive scraping', link: '/scrapling/parsing/adaptive/' },
                        ],
                    },
                    {
                        label: 'Fetching',
                        items: [
                            { label: 'Fetchers basics', link: '/scrapling/fetching/choosing/' },
                            { label: 'HTTP requests', link: '/scrapling/fetching/static/' },
                            { label: 'Dynamic websites', link: '/scrapling/fetching/dynamic/' },
                            { label: 'Dynamic websites with hard protections', link: '/scrapling/fetching/stealthy/' },
                        ],
                    },
                    {
                        label: 'Spiders',
                        items: [
                            { label: 'Architecture', link: '/scrapling/spiders/architecture/' },
                            { label: 'Getting started', link: '/scrapling/spiders/getting-started/' },
                            { label: 'Requests & Responses', link: '/scrapling/spiders/requests-responses/' },
                            { label: 'Sessions', link: '/scrapling/spiders/sessions/' },
                            { label: 'Proxy management & Blocking', link: '/scrapling/spiders/proxy-blocking/' },
                            { label: 'Generic crawlers', link: '/scrapling/spiders/generic-templates/' },
                            { label: 'Advanced features', link: '/scrapling/spiders/advanced/' },
                        ],
                    },
                    {
                        label: 'Command Line Interface',
                        items: [
                            { label: 'Overview', link: '/scrapling/cli/overview/' },
                            { label: 'Interactive shell', link: '/scrapling/cli/interactive-shell/' },
                            { label: 'Extract commands', link: '/scrapling/cli/extract-commands/' },
                        ],
                    },
                    {
                        label: 'Integrations',
                        items: [{ label: 'AI MCP server', link: '/scrapling/ai/mcp-server/' }],
                    },
                ],
            },
            {
                label: 'Tutorials',
                items: [
                    { label: 'A Free Alternative to AI for Robust Web Scraping', link: '/scrapling/tutorials/replacing_ai/' },
                    { label: 'Migrating from BeautifulSoup', link: '/scrapling/tutorials/migrating_from_beautifulsoup/' },
                ],
            },
            {
                label: 'Development',
                items: [
                    {
                        label: 'API Reference',
                        items: [
                            { label: 'Selector', link: '/scrapling/api-reference/selector/' },
                            { label: 'Fetchers', link: '/scrapling/api-reference/fetchers/' },
                            { label: 'MCP Server', link: '/scrapling/api-reference/mcp-server/' },
                            { label: 'Custom Types', link: '/scrapling/api-reference/custom-types/' },
                            { label: 'Response', link: '/scrapling/api-reference/response/' },
                            { label: 'Spiders', link: '/scrapling/api-reference/spiders/' },
                            { label: 'Proxy Rotation', link: '/scrapling/api-reference/proxy-rotation/' },
                        ],
                    },
                    { label: 'Writing your retrieval system', link: '/scrapling/development/adaptive_storage_system/' },
                    { label: 'Using Scrapling\'s custom types', link: '/scrapling/development/scrapling_custom_types/' },
                ],
            },
            { label: 'Support and Advertisement', link: '/scrapling/donate/' },
            { label: 'Contributing', link: 'https://github.com/D4Vinci/Scrapling/blob/main/CONTRIBUTING.md' },
            { label: 'Changelog', link: 'https://github.com/D4Vinci/Scrapling/releases' },
        ],
    },
    {
        id: 'stagehand',
        title: 'Stagehand',
        cardLabel: 'Stagehand 文档集',
        description: 'Stagehand 官方文档的简体中文镜像，已覆盖 First Steps、The Basics、Configuration、Best Practices 与 Integrations 五大章节。',
        landing: '/stagehand/',
        ctaLabel: '进入 Stagehand 文档',
        featuredLinks: [
            { label: 'Introduction 简介', href: '/stagehand/first-steps/introduction/' },
            { label: 'Agent', href: '/stagehand/basics/agent/' },
            { label: 'Browser 配置', href: '/stagehand/configuration/browser/' },
            { label: 'MCP Integration', href: '/stagehand/integrations/mcp/introduction/' },
        ],
        sections: [
            {
                label: 'First Steps',
                items: [
                    { label: 'Introduction', link: '/stagehand/first-steps/introduction/' },
                    { label: 'Quickstart', link: '/stagehand/first-steps/quickstart/' },
                    { label: 'Installation', link: '/stagehand/first-steps/installation/' },
                    { label: 'AI Rules', link: '/stagehand/first-steps/ai-rules/' },
                ],
            },
            {
                label: 'The Basics',
                items: [
                    { label: 'Agent', link: '/stagehand/basics/agent/' },
                    { label: 'Act', link: '/stagehand/basics/act/' },
                    { label: 'Extract', link: '/stagehand/basics/extract/' },
                    { label: 'Observe', link: '/stagehand/basics/observe/' },
                    { label: 'Evals', link: '/stagehand/basics/evals/' },
                ],
            },
            {
                label: 'Configuration',
                items: [
                    { label: 'Browser', link: '/stagehand/configuration/browser/' },
                    { label: 'Observability', link: '/stagehand/configuration/observability/' },
                    { label: 'Logging', link: '/stagehand/configuration/logging/' },
                    { label: 'Models', link: '/stagehand/configuration/models/' },
                ],
            },
            {
                label: 'Best Practices',
                items: [
                    { label: 'Caching Actions', link: '/stagehand/best-practices/caching-actions/' },
                    { label: 'Cost Optimization', link: '/stagehand/best-practices/cost-optimization/' },
                    { label: 'Deterministic Agent', link: '/stagehand/best-practices/deterministic-agent/' },
                    { label: 'Using Multiple Tabs', link: '/stagehand/best-practices/using-multiple-tabs/' },
                    { label: 'Deploying Stagehand', link: '/stagehand/best-practices/deploying-stagehand/' },
                    { label: 'History Tracking', link: '/stagehand/best-practices/history-tracking/' },
                    { label: 'Computer Use Agents', link: '/stagehand/best-practices/computer-use-agents/' },
                    { label: 'Agent Fallbacks', link: '/stagehand/best-practices/agent-fallbacks/' },
                    { label: 'Prompting Best Practices', link: '/stagehand/best-practices/prompting-best-practices/' },
                    { label: 'MCP Integrations', link: '/stagehand/best-practices/mcp-integrations/' },
                    { label: 'Speed Optimization', link: '/stagehand/best-practices/speed-optimization/' },
                ],
            },
            {
                label: 'Integrations',
                items: [
                    {
                        label: 'MCP Server',
                        items: [
                            { label: 'Introduction', link: '/stagehand/integrations/mcp/introduction/' },
                            { label: 'Configuration', link: '/stagehand/integrations/mcp/configuration/' },
                            { label: 'Setup', link: '/stagehand/integrations/mcp/setup/' },
                            { label: 'Tools', link: '/stagehand/integrations/mcp/tools/' },
                        ],
                    },
                    {
                        label: 'CrewAI',
                        items: [
                            { label: 'Introduction', link: '/stagehand/integrations/crew-ai/introduction/' },
                            { label: 'Configuration', link: '/stagehand/integrations/crew-ai/configuration/' },
                        ],
                    },
                    {
                        label: 'LangChain JS',
                        items: [
                            { label: 'Introduction', link: '/stagehand/integrations/langchain/introduction/' },
                            { label: 'Configuration', link: '/stagehand/integrations/langchain/configuration/' },
                        ],
                    },
                    {
                        label: 'Next.js + Vercel',
                        items: [
                            { label: 'Introduction', link: '/stagehand/integrations/vercel/introduction/' },
                            { label: 'Configuration', link: '/stagehand/integrations/vercel/configuration/' },
                        ],
                    },
                    {
                        label: 'Convex',
                        items: [
                            { label: 'Introduction', link: '/stagehand/integrations/convex/introduction/' },
                            { label: 'Configuration', link: '/stagehand/integrations/convex/configuration/' },
                        ],
                    },
                    { label: 'Playwright', link: '/stagehand/integrations/playwright/' },
                    { label: 'Puppeteer', link: '/stagehand/integrations/puppeteer/' },
                    { label: 'Selenium', link: '/stagehand/integrations/selenium/' },
                ],
            },
        ],
    },
    {
        id: 'agent-browser',
        title: 'agent-browser',
        cardLabel: 'agent-browser 文档集',
        description: 'agent-browser 是一个专为 AI Agent 设计的浏览器自动化 CLI',
        landing: '/agent-browser/',
        ctaLabel: '进入 agent-browser 文档',
        featuredLinks: [
            { label: 'Introduction 简介', href: '/agent-browser/' },
            { label: '安装', href: '/agent-browser/installation/' },
            { label: '快速开始', href: '/agent-browser/quick-start/' },
            { label: '命令参考', href: '/agent-browser/reference/commands/' },
        ],
        sections: [
            {
                label: 'Introduction',
                items: [
                    { label: 'agent-browser', link: '/agent-browser/' },
                    { label: '安装', link: '/agent-browser/installation/' },
                    { label: '快速开始', link: '/agent-browser/quick-start/' },
                    { label: 'Skills', link: '/agent-browser/skills/' },
                ],
            },
            {
                label: 'Reference',
                items: [
                    { label: '命令参考', link: '/agent-browser/reference/commands/' },
                    { label: '配置', link: '/agent-browser/reference/configuration/' },
                    { label: '选择器', link: '/agent-browser/reference/selectors/' },
                    { label: '快照', link: '/agent-browser/reference/snapshots/' },
                ],
            },
            {
                label: 'Features',
                items: [
                    { label: '会话', link: '/agent-browser/features/sessions/' },
                    { label: 'Dashboard', link: '/agent-browser/features/dashboard/' },
                    { label: 'Diffing', link: '/agent-browser/features/diffing/' },
                    { label: 'CDP 模式', link: '/agent-browser/features/cdp-mode/' },
                    { label: 'Streaming', link: '/agent-browser/features/streaming/' },
                    { label: 'Profiler', link: '/agent-browser/features/profiler/' },
                    { label: 'iOS Simulator', link: '/agent-browser/features/ios/' },
                    { label: '安全', link: '/agent-browser/features/security/' },
                    { label: 'Next.js + Vercel', link: '/agent-browser/features/next/' },
                    { label: 'Native Mode', link: '/agent-browser/features/native-mode/' },
                ],
            },
            {
                label: 'Providers',
                items: [
                    { label: 'AgentCore', link: '/agent-browser/providers/agentcore/' },
                    { label: 'Browser Use', link: '/agent-browser/providers/browser-use/' },
                    { label: 'Browserbase', link: '/agent-browser/providers/browserbase/' },
                    { label: 'Browserless', link: '/agent-browser/providers/browserless/' },
                    { label: 'Kernel', link: '/agent-browser/providers/kernel/' },
                ],
            },
            {
                label: 'Engines',
                items: [
                    { label: 'Chrome', link: '/agent-browser/engines/chrome/' },
                    { label: 'Lightpanda', link: '/agent-browser/engines/lightpanda/' },
                ],
            },
            {
                label: '更新日志',
                link: '/agent-browser/changelog/',
            },
        ]
    },
    {
    id: 'langchain',
    title: 'LangChain Python',
    cardLabel: 'LangChain Python 文档集',
    description: 'LangChain Python 官方文档的简体中文 Starlight 版本，覆盖概览、快速开始、核心组件、Middleware、Frontend、高级用法、Agent 开发与部署。',
    landing: '/langchain/',
    ctaLabel: '进入 LangChain 文档',
    featuredLinks: [
        { label: '概览', href: '/langchain/' },
        { label: '安装', href: '/langchain/get-started/install/' },
        { label: '快速开始', href: '/langchain/get-started/quickstart/' },
        { label: 'Agents', href: '/langchain/core-components/agents/' },
    ],
    sections: [
        { label: 'LangChain 概览', link: '/langchain/' },
        { label: 'Get started', autogenerate: { directory: 'langchain/get-started' } },
        { label: 'Core components', autogenerate: { directory: 'langchain/core-components' } },
        { label: 'Middleware', autogenerate: { directory: 'langchain/middleware' } },
        { label: 'Frontend', autogenerate: { directory: 'langchain/frontend' } },
        { label: 'Advanced usage', autogenerate: { directory: 'langchain/advanced' } },
        { label: 'Multi-agent', autogenerate: { directory: 'langchain/multi-agent' } },
        { label: 'Agent development', autogenerate: { directory: 'langchain/agent-development' } },
        { label: 'Deploy with LangSmith', autogenerate: { directory: 'langchain/deploy' } },
        { label: 'Examples', autogenerate: { directory: 'langchain/examples' } },
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

            if (section.autogenerate) {
                return {
                    label: section.label,
                    autogenerate: section.autogenerate,
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
