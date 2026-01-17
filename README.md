# 🚀 Antigravity Kit / ⚡ Amp Kit

> **AI Agent Capability Expansion Toolkit** - A comprehensive collection of skills, rules, and workflows to supercharge AI coding assistants.

[![Skills](https://img.shields.io/badge/Skills-41-blue)](#-skills-41)
[![Agents](https://img.shields.io/badge/Agents-16-green)](#-agents-16)
[![Workflows](https://img.shields.io/badge/Workflows-11-orange)](#-workflows-11)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Supported-blueviolet)](#-installation)
[![Ampcode](https://img.shields.io/badge/Ampcode-Supported-orange)](#-installation)

---

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Supported Platforms](#-supported-platforms)
- [Skills](#-skills)
- [Rules](#-rules)
- [Workflows](#-workflows)
- [Installation](#-installation)
- [Usage](#-usage)
- [Credits](#-credits)
- [Contributing](#-contributing)

---

## 🎯 Introduction

**Antigravity Kit / Amp Kit** is a comprehensive collection of:

- **Skills** - Domain-specific expertise (React, Node.js, Database, Testing, UI/UX...)
- **Rules** - Guidelines and constraints for agent behavior
- **Workflows** - Step-by-step procedures for common tasks

This toolkit combines the best of:
- 🎨 **[UI UX Pro Max](https://ui-ux-pro-max-skill.nextlevelbuilder.io/)** - Design Intelligence with 50 styles, 21 palettes, 50 font pairings
- 🛠️ **[ClaudeKit](https://claudekit.cc/)** - Production-ready AI subagents, workflows, and integrations

Designed to integrate with AI agents supporting the **Agent Skills** standard.

---

## 🔌 Supported Platforms

This toolkit supports multiple AI coding assistants:

| Platform | Folder | Command | Agent File |
|----------|--------|---------|------------|
| **Claude Code** (Antigravity) | `.agent/` | `ag-kit` | `CLAUDE.md` |
| **Ampcode** | `.agents/` | `amp-kit` | `AGENTS.md` |

Both platforms share the same skills, rules, and workflows - just with different folder structures.

---

## 🧠 Skills (41)

Skills are domain-specific expertise modules. The agent automatically identifies and uses the appropriate skill for each task.

### Frontend & UI

| Skill | Description |
|-------|-------------|
| `react-patterns` | React hooks, state, performance |
| `nextjs-best-practices` | App Router, Server Components |
| `vue-expert` | Vue 3, Composition API, Pinia |
| `frontend-design` | UI/UX patterns, design systems |
| `tailwind-patterns` | Tailwind CSS utilities |
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 fonts |

### Backend & API

| Skill | Description |
|-------|-------------|
| `api-patterns` | REST, GraphQL, HTTP semantics |
| `nestjs-expert` | NestJS modules, DI, decorators |
| `nodejs-best-practices` | Node.js async, modules |
| `python-patterns` | Python standards, FastAPI |

### Database

| Skill | Description |
|-------|-------------|
| `database-design` | Schema design, optimization |
| `prisma-expert` | Prisma ORM, migrations |

### Testing & Quality

| Skill | Description |
|-------|-------------|
| `testing-patterns` | Jest, Vitest, test strategies |
| `webapp-testing` | E2E testing, Playwright |
| `tdd-workflow` | Test-driven development |
| `code-review-checklist` | Code review standards |
| `lint-and-validate` | Linting, validation |
| `typescript-expert` | TypeScript patterns |

### DevOps & Infrastructure

| Skill | Description |
|-------|-------------|
| `deployment-procedures` | CI/CD, deploy workflows |
| `docker-expert` | Containerization, Compose |
| `server-management` | Infrastructure management |
| `bash-linux` | Linux commands, shell scripts |
| `powershell-windows` | Windows PowerShell |

### Security

| Skill | Description |
|-------|-------------|
| `vulnerability-scanner` | Security auditing |
| `red-team-tactics` | Offensive security |

### Architecture & Planning

| Skill | Description |
|-------|-------------|
| `app-builder` | Full-stack app scaffolding |
| `architecture` | System design patterns |
| `plan-writing` | Task planning, breakdown |
| `brainstorming` | Socratic questioning |

### Specialized

| Skill | Description |
|-------|-------------|
| `mobile-design` | Mobile UI/UX patterns |
| `game-development` | Game logic, mechanics |
| `performance-profiling` | Web Vitals, optimization |
| `seo-fundamentals` | SEO, visibility |
| `i18n-localization` | Internationalization |
| `geo-fundamentals` | GenAI optimization |
| `mcp-builder` | Model Context Protocol |
| `parallel-agents` | Multi-agent patterns |
| `behavioral-modes` | Agent personas |
| `systematic-debugging` | Troubleshooting |
| `documentation-templates` | Doc formats |
| `clean-code` | Coding standards |

---

## 🤖 Agents (16)

Specialized AI agents for different domains:

| Agent | Focus |
|-------|-------|
| `orchestrator` | Multi-agent coordination |
| `project-planner` | Discovery, task planning |
| `frontend-specialist` | Web UI/UX |
| `backend-specialist` | API, business logic |
| `database-architect` | Schema, SQL |
| `mobile-developer` | iOS, Android |
| `game-developer` | Game logic |
| `devops-engineer` | CI/CD, Docker |
| `security-auditor` | Security compliance |
| `penetration-tester` | Offensive security |
| `test-engineer` | Testing strategies |
| `debugger` | Root cause analysis |
| `performance-optimizer` | Speed, Vitals |
| `seo-specialist` | Ranking, visibility |
| `documentation-writer` | Manuals, docs |
| `explorer-agent` | Codebase analysis |

---

## 🔄 Workflows (11)

Workflows are step-by-step procedures. Invoke with slash command.

| Command | Description |
|---------|-------------|
| `/brainstorm` | Socratic discovery |
| `/create` | Create new features |
| `/debug` | Debug issues |
| `/deploy` | Deploy application |
| `/enhance` | Improve existing code |
| `/orchestrate` | Multi-agent coordination |
| `/plan` | Task breakdown |
| `/preview` | Preview changes |
| `/status` | Check project status |
| `/test` | Run tests |
| `/ui-ux-pro-max` | Design with 50 styles |

---

## 📦 Installation

### Install Global (Recommended)

```bash
# Install globally
npm install -g @vudovn/antigravity-kit

# Then use commands anywhere
cd your-project
```

#### For Claude Code (Antigravity)

```bash
# Install .agent folder
ag-kit init

# Update to the latest version
ag-kit update

# Check installation status
ag-kit status
```

#### For Ampcode

```bash
# Install .agents folder
amp-kit init

# Update to the latest version
amp-kit update

# Check installation status
amp-kit status
```

### Using npx (No Install)

```bash
cd your-project

# For Claude Code
npx @vudovn/antigravity-kit init

# For Ampcode
npx @vudovn/antigravity-kit init --kit amp
```

### CLI Commands

| Command | Description |
|---------|-------------|
| `ag-kit init` | Install `.agent` folder (Claude Code) |
| `amp-kit init` | Install `.agents` folder (Ampcode) |
| `ag-kit update` | Update `.agent` to the latest version |
| `amp-kit update` | Update `.agents` to the latest version |
| `ag-kit status` | Check installation status for all kits |
| `ag-kit list` | List available agent kits |

#### Command Options

```bash
# init options
ag-kit init [options]
  -f, --force           # Overwrite if folder already exists
  -p, --path <dir>      # Path to the project directory
  -b, --branch <name>   # Select repository branch
  -k, --kit <type>      # Kit type: antigravity or amp

# update options
ag-kit update [options]
  -f, --force           # Skip confirmation prompt
  -p, --path <dir>      # Path to the project directory
  -b, --branch <name>   # Select repository branch
  -k, --kit <type>      # Kit type: antigravity or amp

# status options
ag-kit status [options]
  -p, --path <dir>      # Path to the project directory
```

---

## 🚀 Usage

### Skills

Skills are automatically applied. The agent reads the skill when it identifies a related task:

```
User: "Fix bug in this React component"
Agent: (automatically uses react-expert skill)
```

### Rules

Rules apply based on activation type:
- **always_on**: Always active
- **model_decision**: Agent decides when to apply
- **glob**: Applied when working with files matching pattern

### Workflows

Invoke workflows with slash commands:

```
User: Prompt
Agent: (follows the workflow)
```

---

## 🙏 Credits

This project is built upon and inspired by:

| Project | Description | Link |
|---------|-------------|------|
| **UI UX Pro Max** | Design Intelligence for Claude Code - 50 styles, 21 color palettes, 50 font pairings, 20 chart types | [ui-ux-pro-max-skill.nextlevelbuilder.io](https://ui-ux-pro-max-skill.nextlevelbuilder.io/) |
| **ClaudeKit** | Production-ready AI subagents, workflows, and integrations for software development | [claudekit.cc](https://claudekit.cc/) |

Special thanks to the creators of these amazing tools for making AI-assisted development more powerful and accessible.

---

## 🤝 Contributing

### Adding a New Skill

#### For Claude Code (.agent)
1. Create folder: `.agent/skills/your-skill/`
2. Create `SKILL.md` with format:

#### For Ampcode (.agents)
1. Create folder: `.agents/skills/your-skill/`
2. Create `SKILL.md` with format:

```markdown
---
name: your-skill
description: Skill description. Use when X or Y.
---

# Your Skill

Instructions for the agent...
```

### Adding a New Rule

#### For Claude Code
1. Create file: `.agent/rules/your-rule.md`

#### For Ampcode
1. Create file: `.agents/rules/your-rule.md`

2. Add frontmatter:

```markdown
---
activation: always_on | model_decision | glob
glob: "**/*.tsx"  # if using glob
description: When to apply  # if using model_decision
---

# Your Rule

Content...
```

### Adding a New Workflow

#### For Claude Code
1. Create file: `.agent/workflows/your-workflow.md`

#### For Ampcode
1. Create file: `.agents/workflows/your-workflow.md`

2. Format:

```markdown
---
description: Workflow description
---

# Your Workflow

## Step 1: ...
## Step 2: ...
```

### Adding a Custom Command (Ampcode only)

1. Create file: `.agents/commands/your-command.md`
2. Format:

```markdown
Your command prompt template here...

Use $ARGUMENTS for dynamic input.
```

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/vudovn">VudoVN</a>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/vudovn">
    <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me a Coffee" />
  </a>
</p>
