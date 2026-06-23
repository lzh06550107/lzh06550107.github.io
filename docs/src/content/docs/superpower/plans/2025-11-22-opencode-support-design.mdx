---
title: "OpenCode 支持设计"
description: "由 Markdown 原样翻译并转换为 Astro Starlight MDX 格式。"
---

**日期：** 2025-11-22
**作者：** Bot & Jesse
**状态：** 设计完成，等待实施

## 概览

添加 full superpowers support for OpenCode.ai using a 原生 OpenCode plugin 架构 that shares core functionality with the 现有 Codex implementation.

## 背景

OpenCode.ai is a coding agent similar to Claude Code and Codex. Previous attempts to port superpowers to OpenCode (PR #93, PR #116) used file-copying approaches. This 设计 takes a different approach: building a 原生 OpenCode plugin using their JavaScript/TypeScript plugin system while sharing code with the Codex implementation.

### 平台之间的关键差异

- **Claude Code**: Native Anthropic plugin system + 基于文件的 skills
- **Codex**: No plugin system → bootstrap markdown + CLI script
- **OpenCode**: JavaScript/TypeScript plugins with 事件 hooks and 自定义工具 API

### OpenCode's Agent 系统

- **主 agent**: Build (default, full access) and Plan (restricted, read-only)
- **子 agent**: General (research, searching, multi-step 任务)
- **调用**: Automatic 派发 by primary agents OR 手动 `@mention` syntax
- **配置**: Custom agents in `opencode.json` or `~/.config/opencode/agent/`

## 架构

### 高层结构

1. **共享核心模块** (`lib/skills-core.js`)
   - Common skill discovery and parsing logic
   - Used by both Codex and OpenCode implementations

2. **平台专用封装**
   - Codex: CLI script (`.codex/superpowers-codex`)
   - OpenCode: Plugin module (`.opencode/plugin/superpowers.js`)

3. **Skill 目录**
   - Core: `~/.config/opencode/superpowers/skills/` (or installed location)
   - Personal: `~/.config/opencode/skills/` (shadows core skills)

### 代码复用策略

Extract common functionality from `.codex/superpowers-codex` into shared module:

```javascript
// lib/skills-core.js
module.exports = {
  extractFrontmatter(filePath),      // Parse name + description from YAML
  findSkillsInDir(dir, maxDepth),    // Recursive SKILL.md discovery
  findAllSkills(dirs),                // Scan multiple directories
  resolveSkillPath(skillName, dirs), // Handle shadowing (personal > core)
  checkForUpdates(repoDir)           // Git fetch/status check
};
```

### Skill Frontmatter Format

Current format (no `when_to_use` field):

```yaml
---
name: skill-name
description: Use when [condition] - [what it does]; [additional context]
---
```

## OpenCode Plugin Implementation

### Custom Tools

**Tool 1: `use_skill`**

Loads a specific skill's content into the conversation (equivalent to Claude's Skill tool).

```javascript
{
  name: 'use_skill',
  description: 'Load and read a specific skill to guide your work',
  schema: z.object({
    skill_name: z.string().describe('Name of skill (e.g., "superpowers:brainstorming")')
  }),
  execute: async ({ skill_name }) => {
    const { skillPath, content, frontmatter } = resolveAndReadSkill(skill_name);
    const skillDir = path.dirname(skillPath);

    return `# ${frontmatter.name}
# ${frontmatter.description}
# Supporting tools and docs are in ${skillDir}
# ============================================

${content}`;
  }
}
```

**Tool 2: `find_skills`**

Lists all 可用 skills with metadata.

```javascript
{
  name: 'find_skills',
  description: 'List all available skills',
  schema: z.object({}),
  execute: async () => {
    const skills = discoverAllSkills();
    return skills.map(s =>
      `${s.namespace}:${s.name}
  ${s.description}
  Directory: ${s.directory}
`).join('\n');
  }
}
```

### Session Startup Hook

当 a 新 session starts (`session.started` event):

1. **Inject using-superpowers content**
   - Full content of the using-superpowers skill
   - Establishes mandatory workflows

2. **运行 find_skills 自动**
   - Display full list of 可用 skills upfront
   - Include skill 目录 for each

3. **Inject 工具映射 instructions**
   ```markdown
   **Tool Mapping for OpenCode:**
   When skills reference tools you don't have, substitute:
   - `TodoWrite` → `update_plan`
   - `Task` with subagents → Use OpenCode subagent system (@mention)
   - `Skill` tool → `use_skill` custom tool
   - Read, Write, Edit, Bash → Your native equivalents

   **Skill directories contain:**
   - Supporting scripts (run with bash)
   - Additional documentation (read with read tool)
   - Utilities specific to that skill
   ```

4. **Check for updates** (non-blocking)
   - Quick git fetch with timeout
   - Notify if updates 可用

### Plugin Structure

```javascript
// .opencode/plugin/superpowers.js
const skillsCore = require('../../lib/skills-core');
const path = require('path');
const fs = require('fs');
const { z } = require('zod');

export const SuperpowersPlugin = async ({ client, directory, $ }) => {
  const superpowersDir = path.join(process.env.HOME, '.config/opencode/superpowers');
  const personalDir = path.join(process.env.HOME, '.config/opencode/skills');

  return {
    'session.started': async () => {
      const usingSuperpowers = await readSkill('using-superpowers');
      const skillsList = await findAllSkills();
      const toolMapping = getToolMappingInstructions();

      return {
        context: `${usingSuperpowers}\n\n${skillsList}\n\n${toolMapping}`
      };
    },

    tools: [
      {
        name: 'use_skill',
        description: 'Load and read a specific skill',
        schema: z.object({
          skill_name: z.string()
        }),
        execute: async ({ skill_name }) => {
          // Implementation using skillsCore
        }
      },
      {
        name: 'find_skills',
        description: 'List all available skills',
        schema: z.object({}),
        execute: async () => {
          // Implementation using skillsCore
        }
      }
    ]
  };
};
```

## File Structure

```
superpowers/
├── lib/
│   └── skills-core.js           # NEW: Shared skill logic
├── .codex/
│   ├── superpowers-codex        # UPDATED: Use skills-core
│   ├── superpowers-bootstrap.md
│   └── INSTALL.md
├── .opencode/
│   ├── plugin/
│   │   └── superpowers.js       # NEW: OpenCode plugin
│   └── INSTALL.md               # NEW: Installation guide
└── skills/                       # Unchanged
```

## 实施计划

### Phase 1: Refactor Shared Core

1. 创建 `lib/skills-core.js`
   - Extract frontmatter parsing from `.codex/superpowers-codex`
   - Extract skill discovery logic
   - Extract path resolution (with shadowing)
   - 更新 to use only `name` and `description` (no `when_to_use`)

2. 更新 `.codex/superpowers-codex` to use shared core
   - Import from `../lib/skills-core.js`
   - 移除 duplicated code
   - Keep CLI wrapper logic

3. Test Codex 实施 still works
   - 验证 bootstrap command
   - 验证 use-skill command
   - 验证 find-skills command

### Phase 2: Build OpenCode Plugin

1. 创建 `.opencode/plugin/superpowers.js`
   - Import shared core from `../../lib/skills-core.js`
   - Implement plugin function
   - Define custom tools (use_skill, find_skills)
   - Implement session.started hook

2. 创建 `.opencode/INSTALL.md`
   - 安装 instructions
   - Directory setup
   - 配置 guidance

3. Test OpenCode 实施
   - 验证 session startup bootstrap
   - 验证 use_skill tool works
   - 验证 find_skills tool works
   - 验证 skill 目录 are accessible

### Phase 3: Documentation & Polish

1. 更新 README with OpenCode support
2. 添加 OpenCode 安装 to main docs
3. 更新 RELEASE-NOTES
4. Test both Codex and OpenCode work correctly

## Next Steps

1. **创建 隔离工作区** (using git worktrees)
   - Branch: `feature/opencode-support`

2. **Follow TDD where applicable**
   - Test shared core functions
   - Test skill discovery and parsing
   - Integration tests for both 平台

3. **Incremental 实施**
   - Phase 1: Refactor shared core + update Codex
   - 验证 Codex still works before moving on
   - Phase 2: Build OpenCode plugin
   - Phase 3: Documentation and polish

4. **Testing strategy**
   - Manual testing with real OpenCode 安装
   - 验证 skill 加载, 目录, scripts work
   - Test both Codex and OpenCode side-by-side
   - 验证 tool mappings work correctly

5. **PR and merge**
   - 创建 PR with complete 实施
   - Test in clean environment
   - Merge to main

## Benefits

- **Code reuse**: Single 事实来源 for skill discovery/parsing
- **Maintainability**: Bug fixes apply to both 平台
- **Extensibility**: Easy to add future 平台 (Cursor, Windsurf, etc.)
- **Native integration**: Uses OpenCode's plugin system properly
- **Consistency**: Same skill experience across all 平台
