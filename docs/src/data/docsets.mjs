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
                    {   label: 'Skills 技能',
                        autogenerate: { directory: 'codex/configuration/skills' },
                    },
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
                    {
                        label: 'Chrome extension (beta)',
                        link: '/claude-code/platforms-and-integrations/chrome-extension-beta/',
                    },
                    {
                        label: 'Computer use (preview)',
                        link: '/claude-code/platforms-and-integrations/computer-use-preview/',
                    },
                    {
                        label: 'Visual Studio Code',
                        link: '/claude-code/platforms-and-integrations/visual-studio-code/',
                    },
                    { label: 'JetBrains IDEs', link: '/claude-code/platforms-and-integrations/jetbrains-ides/' },
                    {
                        label: 'Code review & CI/CD',
                        items: [
                            { label: 'Code Review', link: '/claude-code/platforms-and-integrations/code-review/' },
                            {
                                label: 'GitHub Actions',
                                link: '/claude-code/platforms-and-integrations/github-actions/',
                            },
                            {
                                label: 'GitHub Enterprise Server',
                                link: '/claude-code/platforms-and-integrations/github-enterprise-server/',
                            },
                            { label: 'GitLab CI/CD', link: '/claude-code/platforms-and-integrations/gitlab-ci-cd/' },
                        ],
                    },
                    {
                        label: 'Claude Code in Slack',
                        link: '/claude-code/platforms-and-integrations/claude-code-in-slack/',
                    },
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
                    {
                        label: 'A Free Alternative to AI for Robust Web Scraping',
                        link: '/scrapling/tutorials/replacing_ai/',
                    },
                    {
                        label: 'Migrating from BeautifulSoup',
                        link: '/scrapling/tutorials/migrating_from_beautifulsoup/',
                    },
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
                    {
                        label: 'Using Scrapling\'s custom types',
                        link: '/scrapling/development/scrapling_custom_types/',
                    },
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
        ],
    },
    {
        id: 'fiddler-everywhere',
        title: 'Fiddler Everywhere',
        cardLabel: 'Fiddler Everywhere 文档集',
        description: 'Fiddler Everywhere 官方文档的简体中文 Starlight 版本，按 `sidebar.json` 中定义的顺序整理。',
        landing: '/fiddler-everywhere/',
        ctaLabel: '进入 Fiddler Everywhere 文档',
        featuredLinks: [
            { label: 'Introduction', href: '/fiddler-everywhere/' },
            { label: 'Installation & Setup', href: '/fiddler-everywhere/installation-and-setup/' },
            { label: 'Capture Traffic', href: '/fiddler-everywhere/capture-traffic/' },
            { label: 'Inspect Traffic', href: '/fiddler-everywhere/inspect-traffic/' },
        ],
        sections: [
            {
                label: 'Introduction',
                items: [
                    { label: 'Introduction', link: '/fiddler-everywhere/' },
                    { label: 'Installation & Setup', link: '/fiddler-everywhere/installation-and-setup/' },
                    { label: 'Capture Traffic', link: '/fiddler-everywhere/capture-traffic/' },
                    { label: 'Inspect Traffic', link: '/fiddler-everywhere/inspect-traffic/' },
                    { label: 'Modify & Filter Traffic', link: '/fiddler-everywhere/modify-and-filter-traffic/' },
                    { label: 'Agent Tools', link: '/fiddler-everywhere/agent-tools/' },
                    { label: 'Agent Cache', link: '/fiddler-everywhere/agent-cache/' },
                    { label: 'Compose API Requests', link: '/fiddler-everywhere/compose-api-requests/' },
                    { label: 'Collaboration', link: '/fiddler-everywhere/collaboration/' },
                    { label: 'Debugging Assistant', link: '/fiddler-everywhere/debugging-assistant/' },
                    { label: 'Rules Presets', link: '/fiddler-everywhere/rules-presets/' },
                    { label: 'User Interface', link: '/fiddler-everywhere/user-interface/' },
                    { label: 'Security', link: '/fiddler-everywhere/security/' },
                    { label: 'Support', link: '/fiddler-everywhere/support/' },
                    {
                        label: 'Fiddler Everywhere Reporter',
                        link: '/fiddler-everywhere/fiddler-everywhere-reporter/',
                    },
                ],
            },
        ],
    },
    {
        id: 'penpot',
        title: 'Penpot',
        cardLabel: 'Penpot 文档集',
        description: 'Penpot 用户指南的简体中文 Starlight 版本，覆盖入门、账户与团队、设计、设计系统、原型、导入导出、开发工具与插件集成。',
        landing: '/penpot/',
        ctaLabel: '进入 Penpot 文档',
        featuredLinks: [
            { label: '概览', href: '/penpot/' },
            { label: '第一步', href: '/penpot/first-steps/' },
            { label: '设计', href: '/penpot/designing/' },
            { label: '设计系统', href: '/penpot/design-systems/' },
        ],
        sections: [
            {
                label: '第一步',
                items: [
                    { label: '概览', link: '/penpot/first-steps/' },
                    { label: '云端或自托管', link: '/penpot/first-steps/cloud-selfhost/' },
                    { label: '界面导览', link: '/penpot/first-steps/the-interface/' },
                    { label: '快捷键', link: '/penpot/first-steps/shortcuts/' },
                    { label: '教程与信息', link: '/penpot/first-steps/info/' },
                    { label: 'WebGL 故障排查', link: '/penpot/first-steps/troubleshooting-webgl/' },
                    { label: '最佳实践', link: '/penpot/best-practice/' },
                ],
            },
            {
                label: '设计',
                items: [
                    { label: '概览', link: '/penpot/designing/' },
                    { label: '工作区基础', link: '/penpot/designing/workspace-basics/' },
                    { label: '图层', link: '/penpot/designing/layers/' },
                    { label: '颜色与描边', link: '/penpot/designing/color-stroke/' },
                    { label: '文本与排版', link: '/penpot/designing/text-typo/' },
                    { label: '弹性布局', link: '/penpot/designing/flexible-layouts/' },
                ],
            },
            {
                label: '设计系统',
                items: [
                    { label: '概览', link: '/penpot/design-systems/' },
                    { label: '资产', link: '/penpot/design-systems/assets/' },
                    { label: '库', link: '/penpot/design-systems/libraries/' },
                    { label: '组件', link: '/penpot/design-systems/components/' },
                    { label: '变体', link: '/penpot/design-systems/variants/' },
                    { label: '设计令牌', link: '/penpot/design-systems/design-tokens/' },
                ],
            },
            {
                label: '原型与测试',
                items: [
                    { label: '概览', link: '/penpot/prototyping-testing/' },
                    { label: '原型', link: '/penpot/prototyping-testing/prototyping/' },
                    { label: '演示与查看模式', link: '/penpot/prototyping-testing/testing-view-mode/' },
                ],
            },
            { label: '开发工具', link: '/penpot/dev-tools/' },
            { label: '插件与集成', link: '/penpot/plugins-integrations/' },
            {
                label: '导出与导入',
                items: [
                    { label: '概览', link: '/penpot/export-import/' },
                    { label: '导入/导出 Penpot 文件', link: '/penpot/export-import/export-import-files/' },
                    { label: '导出图层', link: '/penpot/export-import/exporting-layers/' },
                ],
            },
            {
                label: '账户与团队',
                items: [
                    { label: '概览', link: '/penpot/account-teams/' },
                    { label: '你的账户', link: '/penpot/account-teams/your-account/' },
                    { label: '团队', link: '/penpot/account-teams/teams/' },
                    { label: '项目与文件', link: '/penpot/account-teams/projects-files/' },
                    { label: '评论', link: '/penpot/account-teams/comments/' },
                ],
            },
        ],
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
    },
    {
        id: 'langgraph',
        title: 'LangGraph',
        cardLabel: 'LangGraph 文档集',
        description: 'LangGraph Python 官方文档的简体中文 Starlight 版本，覆盖入门、核心能力、生产部署、前端和 API 使用。',
        landing: '/langgraph/',
        ctaLabel: '进入 LangGraph 文档',
        featuredLinks: [
            { label: '概览', href: '/langgraph/' },
            { label: '快速开始', href: '/langgraph/quickstart/' },
            { label: '持久化', href: '/langgraph/persistence/' },
            { label: 'Graph API', href: '/langgraph/graph-api/' },
        ],
        sections: [
            {
                label: 'Get started',
                items: [
                    { label: '安装 LangGraph', link: '/langgraph/install/' },
                    { label: '快速开始', link: '/langgraph/quickstart/' },
                    { label: '运行本地服务器', link: '/langgraph/local-server/' },
                    { label: '更新日志', link: '/langgraph/changelog-py/' },
                    { label: '以 LangGraph 的方式思考', link: '/langgraph/thinking-in-langgraph/' },
                    { label: '工作流与智能体', link: '/langgraph/workflows-agents/' },
                ],
            },
            {
                label: 'Capabilities',
                items: [
                    { label: '持久化', link: '/langgraph/persistence/' },
                    { label: '容错', link: '/langgraph/fault-tolerance/' },
                    { label: '事件流', link: '/langgraph/event-streaming/' },
                    { label: '流式输出', link: '/langgraph/streaming/' },
                    { label: '中断与人工介入', link: '/langgraph/interrupts/' },
                    { label: '时间旅行', link: '/langgraph/use-time-travel/' },
                    { label: '记忆', link: '/langgraph/add-memory/' },
                    { label: '子图', link: '/langgraph/use-subgraphs/' },
                ],
            },
            {
                label: 'Production',
                items: [
                    { label: '应用结构', link: '/langgraph/application-structure/' },
                    { label: '测试', link: '/langgraph/test/' },
                    { label: '向后兼容', link: '/langgraph/backward-compatibility/' },
                    { label: 'LangSmith Studio', link: '/langgraph/studio/' },
                    { label: 'Agent Chat UI', link: '/langgraph/ui/' },
                    { label: 'LangSmith 部署', link: '/langgraph/deploy/' },
                    { label: 'LangSmith 可观测性', link: '/langgraph/observability/' },
                ],
            },
            {
                label: 'Frontend',
                items: [
                    { label: '前端概览', link: '/langgraph/frontend/overview/' },
                    { label: '图执行可视化', link: '/langgraph/frontend/graph-execution/' },
                ],
            },
            {
                label: 'LangGraph APIs',
                items: [
                    { label: 'Graph API 概览', link: '/langgraph/graph-api/' },
                    { label: 'Functional API 概览', link: '/langgraph/functional-api/' },
                    { label: 'LangGraph Runtime', link: '/langgraph/pregel/' },
                    { label: '使用 Graph API', link: '/langgraph/use-graph-api/' },
                    { label: '使用 Functional API', link: '/langgraph/use-functional-api/' },
                    { label: '选择 Graph API 还是 Functional API', link: '/langgraph/choosing-apis/' },
                ],
            },
            {
                label: 'Guides',
                items: [
                    { label: '构建自定义 RAG 智能体', link: '/langgraph/agentic-rag/' },
                    { label: '构建自定义 SQL 智能体', link: '/langgraph/sql-agent/' },
                    { label: '案例研究', link: '/langgraph/case-studies/' },
                ],
            },
        ],
    },
    {
        id: 'camoufox',
        title: 'Camoufox',
        cardLabel: 'Camoufox 文档集',
        description: 'Camoufox 官方文档的简体中文镜像，按官网菜单顺序整理。',
        landing: '/camoufox/',
        ctaLabel: '进入 Camoufox 文档',
        featuredLinks: [
            { label: '介绍', href: '/camoufox/' },
            { label: 'Python 接口', href: '/camoufox/python/' },
            { label: '指纹注入', href: '/camoufox/fingerprint/' },
            { label: '隐身概览', href: '/camoufox/stealth/' },
        ],
        sections: [
            { label: '介绍', link: '/camoufox/' },
            { label: '功能列表', link: '/camoufox/features/' },
            {
                label: '隐身', items: [
                    { label: '隐身概览', link: '/camoufox/stealth/' },
                ],
            },
            {
                label: 'Python', items: [
                    { label: 'Python 接口', link: '/camoufox/python/' },
                    { label: '安装', link: '/camoufox/python/installation/' },
                    { label: '用法', link: '/camoufox/python/usage/' },
                    { label: 'GeoIP 与代理支持', link: '/camoufox/python/geoip/' },
                    { label: '主世界执行', link: '/camoufox/python/main-world-eval/' },
                    { label: '远程服务器', link: '/camoufox/python/remote-server/' },
                    { label: '虚拟显示', link: '/camoufox/python/virtual-display/' },
                    { label: 'BrowserForge 集成', link: '/camoufox/python/browser-forge-integration/' },
                    { label: '传递配置', link: '/camoufox/python/passing-config/' },
                ],
            },
            {
                label: '指纹注入', items: [
                    { label: '概览', link: '/camoufox/fingerprint/' },
                    { label: 'Navigator', link: '/camoufox/fingerprint/navigator/' },
                    { label: 'Cursor Movement', link: '/camoufox/fingerprint/cursor-movement/' },
                    { label: 'Fonts', link: '/camoufox/fingerprint/fonts/' },
                    { label: 'Screen', link: '/camoufox/fingerprint/screen/' },
                    { label: 'Window', link: '/camoufox/fingerprint/window/' },
                    { label: 'Document', link: '/camoufox/fingerprint/document/' },
                    { label: 'WebGL', link: '/camoufox/fingerprint/webgl/' },
                    { label: '地理位置与 Intl', link: '/camoufox/fingerprint/geolocation/' },
                    { label: 'HTTP Headers', link: '/camoufox/fingerprint/http-headers/' },
                    { label: 'webrtc IP', link: '/camoufox/fingerprint/webrtc-ip/' },
                    { label: 'Media & Audio', link: '/camoufox/fingerprint/media-audio/' },
                    { label: 'Voices', link: '/camoufox/fingerprint/voices/' },
                    { label: 'addons', link: '/camoufox/fingerprint/addons/' },
                    { label: 'miscellaneous', link: '/camoufox/fingerprint/miscellaneous/' },
                ],
            },
            {
                label: '开发', items: [
                    { label: '开发概览', link: '/camoufox/development/' },
                    { label: '构建系统', link: '/camoufox/development/build-system/' },
                    { label: '在 CLI 中构建', link: '/camoufox/development/build-cli/' },
                    { label: '在 Docker 中构建', link: '/camoufox/development/build-docker/' },
                    { label: '开发工具', link: '/camoufox/development/development-tools/' },
                    { label: '泄漏调试', link: '/camoufox/development/leak-debugging/' },
                ],
            },
        ],
    },
    {
        id: 'comfy',
        title: 'ComfyUI',
        cardLabel: 'ComfyUI 文档集',
        description: 'ComfyUI 官方文档的简体中文 Starlight 版本（按官方菜单顺序整理）',
        landing: '/comfy/',
        ctaLabel: '进入 ComfyUI 文档',
        featuredLinks: [
            { label: '介绍', href: '/comfy/' },
            { label: '系统要求', href: '/comfy/installation/system-requirements/' },
            { label: '开始 AI 绘图之旅', href: '/comfy/get-started/first-generation/' },
            { label: '界面概览', href: '/comfy/interface/overview/' },
        ],
        sections: [
            {
                label: '开始使用',
                items: [
                    { label: '介绍', link: '/comfy/' },
                    {
                        label: '本地（自托管）',
                        items: [
                            { label: '系统要求', link: '/comfy/installation/system-requirements/' },
                            { label: '手动安装', link: '/comfy/installation/manual-install/' },
                        ],
                    },
                    {
                        label: '安装自定义节点',
                        items: [
                            { label: '如何安装自定义节点', link: '/comfy/installation/install-custom-node/' },
                            {
                                label: 'ComfyUI-Manager',
                                items: [
                                    { label: '概述', link: '/comfy/manager/overview/' },
                                    { label: '安装', link: '/comfy/manager/install/' },
                                ],
                            },
                        ],
                    },
                    { label: '开始 AI 绘图之旅', link: '/comfy/get-started/first-generation/' },
                ],
            },
            {
                label: '基础概念',
                items: [
                    { label: '工作流', link: '/comfy/development/core-concepts/workflow/' },
                ],
            },
            {
                label: '界面指南',
                items: [
                    { label: '界面概览', link: '/comfy/interface/overview/' },
                ],
            },
        ],
    },
    {
        id: 'playwright',
        title: 'Playwright',
        cardLabel: 'Playwright 文档集',
        description: 'Playwright 官方文档简体中文 Starlight 版本',
        landing: '/playwright/',
        ctaLabel: '进入 Playwright 文档',
        featuredLinks: [
            { label: '简介', href: '/playwright/' },
            { label: '编写测试', href: '/playwright/getting-started/writing-tests/' },
            { label: '定位器', href: '/playwright/guides/locators/' },
            { label: '最佳实践', href: '/playwright/guides/best-practices/' },
        ],
        sections: [
            {
                label: '开始使用',
                items: [
                    { label: 'Playwright 简介', link: '/playwright/' },
                    { label: '编写测试', link: '/playwright/getting-started/writing-tests/' },
                    { label: '生成测试', link: '/playwright/getting-started/codegen-intro/' },
                    { label: '运行与调试测试', link: '/playwright/getting-started/running-debugging-tests/' },
                    { label: '设置 CI', link: '/playwright/getting-started/setting-up-ci/' },
                    { label: 'Trace Viewer', link: '/playwright/getting-started/trace-viewer/' },
                    { label: 'VS Code', link: '/playwright/getting-started/vscode/' },
                ],
            },
            {
                label: 'Playwright Test',
                items: [
                    { label: 'Playwright Test 智能体', link: '/playwright/playwright-test/agents/' },
                    { label: '注解', link: '/playwright/playwright-test/annotations/' },
                    { label: '命令行', link: '/playwright/playwright-test/command-line/' },
                    { label: '配置', link: '/playwright/playwright-test/configuration/' },
                    { label: '配置(use)', link: '/playwright/playwright-test/configuration-use/' },
                    { label: '模拟', link: '/playwright/playwright-test/emulation/' },
                    { label: '夹具', link: '/playwright/playwright-test/fixtures/' },
                    { label: '全局设置与清理', link: '/playwright/playwright-test/global-setup-teardown/' },
                    { label: '并行', link: '/playwright/playwright-test/parallel/' },
                    { label: '参数化测试', link: '/playwright/playwright-test/parameterize-tests/' },
                    { label: '项目', link: '/playwright/playwright-test/projects/' },
                    { label: '报告器', link: '/playwright/playwright-test/reporters/' },
                    { label: '重试', link: '/playwright/playwright-test/retries/' },
                    { label: '分片', link: '/playwright/playwright-test/sharding/' },
                    { label: '超时', link: '/playwright/playwright-test/timeouts/' },
                    { label: 'TypeScript', link: '/playwright/playwright-test/typescript/' },
                    { label: 'UI 模式', link: '/playwright/playwright-test/ui-mode/' },
                    { label: 'Web 服务器', link: '/playwright/playwright-test/webserver/' },
                ],
            },
            {
                label: 'Guides',
                autogenerate: { directory: 'playwright/guides' },
            },
            {
                label: '发布说明',
                items: [
                    { label: '发布说明', link: '/playwright/release-notes/' },
                    { label: 'Canary 发布', link: '/playwright/canary-releases/' },
                ],
            },
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
