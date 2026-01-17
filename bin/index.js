#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { downloadTemplate } from 'giget';
import path from 'path';
import fs from 'fs';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Get package.json for version
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'));

// ============================================================================
// CONSTANTS
// ============================================================================

const REPO = 'github:vudovn/antigravity-kit';
const TEMPLATES_FOLDER = 'templates';
const TEMP_FOLDER = '.temp_ag_kit';

// Kit configurations
const KITS = {
    antigravity: {
        name: 'Antigravity Kit',
        folder: '.agent',
        description: 'Claude Code / Antigravity agent skills',
        emoji: '🚀',
    },
    amp: {
        name: 'Amp Kit',
        folder: '.agents',
        description: 'Ampcode agent skills',
        emoji: '⚡',
    },
};

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Display ASCII banner
 * @param {string} kitType - Kit type (antigravity or amp)
 */
const showBanner = (kitType = 'antigravity') => {
    const kit = KITS[kitType] || KITS.antigravity;
    console.log(chalk.blueBright(`
    ╔══════════════════════════════════════╗
    ║      ${kit.emoji} ${kit.name.toUpperCase().padEnd(20)} ${kit.emoji}       ║
    ╚══════════════════════════════════════╝
    `));
};

/**
 * Ask user for confirmation
 * @param {string} question - Question to ask
 * @returns {Promise<boolean>}
 */
const confirm = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(chalk.yellow(`${question} (y/N): `), (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
        });
    });
};

/**
 * Clean up temporary directory
 * @param {string} tempDir - Temp directory path
 */
const cleanup = (tempDir) => {
    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
    }
};

/**
 * Copy agent folder from temp to destination
 * @param {string} tempDir - Temp directory
 * @param {string} destDir - Destination directory
 * @param {string} sourceFolder - Source folder name (.agent or .agents)
 */
const copyAgentFolder = (tempDir, destDir, sourceFolder) => {
    const sourceAgent = path.join(tempDir, TEMPLATES_FOLDER, sourceFolder);

    if (!fs.existsSync(sourceAgent)) {
        throw new Error(`Could not find ${TEMPLATES_FOLDER}/${sourceFolder} folder in source repository!`);
    }

    fs.cpSync(sourceAgent, destDir, { recursive: true });
};

/**
 * Update .gitignore to include agent folder
 * @param {string} targetDir - Target project directory
 * @param {string} agentFolder - Agent folder name
 * @returns {boolean} - True if .gitignore was updated
 */
const updateGitignore = (targetDir, agentFolder) => {
    const gitignorePath = path.join(targetDir, '.gitignore');
    const entryToAdd = agentFolder;

    // Check if .gitignore exists
    if (fs.existsSync(gitignorePath)) {
        const content = fs.readFileSync(gitignorePath, 'utf-8');
        const lines = content.split(/\r?\n/);

        // Check if agent folder is already in .gitignore
        const hasEntry = lines.some(line =>
            line.trim() === entryToAdd ||
            line.trim() === `${entryToAdd}/` ||
            line.trim() === `/${entryToAdd}` ||
            line.trim() === `/${entryToAdd}/`
        );

        if (!hasEntry) {
            // Add agent folder to .gitignore
            const newContent = content.endsWith('\n')
                ? `${content}${entryToAdd}\n`
                : `${content}\n${entryToAdd}\n`;
            fs.writeFileSync(gitignorePath, newContent);
            return true;
        }
    } else {
        // Create new .gitignore with agent folder
        fs.writeFileSync(gitignorePath, `${entryToAdd}\n`);
        return true;
    }

    return false;
};

/**
 * Detect which kit type to use based on options or command name
 * @param {object} options - Command options
 * @returns {string} - Kit type
 */
const detectKitType = (options) => {
    // If explicitly specified via --kit option
    if (options.kit) {
        return options.kit;
    }

    // Default based on command name (amp-kit → amp, ag-kit → antigravity)
    return options.defaultKit || 'antigravity';
};

// ============================================================================
// COMMANDS
// ============================================================================

/**
 * Initialize agent folder in project
 */
const initCommand = async (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    const kitType = detectKitType(options);
    const kit = KITS[kitType];
    
    showBanner(kitType);

    const tempDir = path.join(targetDir, TEMP_FOLDER);
    const agentDir = path.join(targetDir, kit.folder);

    // Check if agent folder already exists
    if (fs.existsSync(agentDir)) {
        if (!options.force) {
            console.log(chalk.yellow(`⚠️  Folder ${kit.folder} already exists at: ${agentDir}`));
            const shouldOverwrite = await confirm('Do you want to overwrite it?');

            if (!shouldOverwrite) {
                console.log(chalk.gray('Operation cancelled.'));
                process.exit(0);
            }
        }
        console.log(chalk.gray(`Overwriting ${kit.folder} folder...`));
    }

    const spinner = ora({
        text: `Downloading ${kit.name}...`,
        color: 'cyan',
    }).start();

    try {
        // Download repository using giget
        const repoSource = options.branch ? `${REPO}#${options.branch}` : REPO;
        await downloadTemplate(repoSource, {
            dir: tempDir,
            force: true,
        });

        spinner.text = 'Installing...';

        // Delete old agent folder if exists (always clean install)
        if (fs.existsSync(agentDir)) {
            fs.rmSync(agentDir, { recursive: true, force: true });
        }

        // Copy agent folder
        copyAgentFolder(tempDir, agentDir, kit.folder);

        // Update .gitignore
        const gitignoreUpdated = updateGitignore(targetDir, kit.folder);

        // Cleanup
        cleanup(tempDir);

        spinner.succeed(chalk.green('Installation successful!'));

        // Success message
        console.log(chalk.gray('\n────────────────────────────────────────'));
        console.log(chalk.white(`📁 ${kit.name} Result:`));
        console.log(`   ${chalk.cyan(kit.folder)} → ${chalk.gray(agentDir)}`);
        if (gitignoreUpdated) {
            console.log(`   ${chalk.cyan('.gitignore')} → Added ${chalk.yellow(kit.folder)}`);
        }
        console.log(chalk.gray('────────────────────────────────────────'));
        console.log(chalk.green('\n🎉 Happy coding!\n'));
    } catch (error) {
        spinner.fail(chalk.red(`❌ Error: ${error.message}`));
        cleanup(tempDir);
        process.exit(1);
    }
};

/**
 * Update existing agent folder
 */
const updateCommand = async (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    const kitType = detectKitType(options);
    const kit = KITS[kitType];
    
    showBanner(kitType);

    const agentDir = path.join(targetDir, kit.folder);

    // Check if agent folder exists
    if (!fs.existsSync(agentDir)) {
        console.log(chalk.red(`❌ Could not find ${kit.folder} folder at: ${targetDir}`));
        const command = kitType === 'amp' ? 'amp-kit init' : 'ag-kit init';
        console.log(chalk.yellow(`💡 Tip: Run ${chalk.cyan(command)} to install first.`));
        process.exit(1);
    }

    if (!options.force) {
        console.log(chalk.yellow(`⚠️  Update will overwrite the entire ${kit.folder} folder`));
        const shouldUpdate = await confirm('Are you sure you want to continue?');

        if (!shouldUpdate) {
            console.log(chalk.gray('Operation cancelled.'));
            process.exit(0);
        }
    }

    // Call init with force option
    await initCommand({ ...options, force: true, kit: kitType });
};

/**
 * Show status of agent folder
 */
const statusCommand = (options) => {
    const targetDir = path.resolve(options.path || process.cwd());
    
    console.log(chalk.blueBright('\n📊 Agent Kit Status\n'));

    let foundAny = false;

    for (const [kitType, kit] of Object.entries(KITS)) {
        const agentDir = path.join(targetDir, kit.folder);

        if (fs.existsSync(agentDir)) {
            foundAny = true;
            const stats = fs.statSync(agentDir);
            const files = fs.readdirSync(agentDir, { recursive: true });

            console.log(chalk.green(`✅ ${kit.name} Installed`));
            console.log(chalk.gray('────────────────────────────────────────'));
            console.log(`📁 Path:     ${chalk.cyan(agentDir)}`);
            console.log(`📅 Modified: ${chalk.gray(stats.mtime.toLocaleString('en-US'))}`);
            console.log(`📄 Files:    ${chalk.yellow(files.length)} items`);
            console.log(chalk.gray('────────────────────────────────────────\n'));
        }
    }

    if (!foundAny) {
        console.log(chalk.red('❌ No agent kits installed'));
        console.log(chalk.yellow(`💡 Run ${chalk.cyan('ag-kit init')} for Antigravity Kit (Claude Code)`));
        console.log(chalk.yellow(`💡 Run ${chalk.cyan('amp-kit init')} for Amp Kit (Ampcode)\n`));
    }
};

/**
 * List available kits
 */
const listCommand = () => {
    console.log(chalk.blueBright('\n📦 Available Agent Kits\n'));
    console.log(chalk.gray('────────────────────────────────────────'));
    
    for (const [key, kit] of Object.entries(KITS)) {
        console.log(`${kit.emoji} ${chalk.cyan(kit.name)} (${chalk.gray(key)})`);
        console.log(`   Folder: ${chalk.yellow(kit.folder)}`);
        console.log(`   ${chalk.gray(kit.description)}`);
        console.log();
    }
    
    console.log(chalk.gray('────────────────────────────────────────'));
    console.log(chalk.white('\nUsage:'));
    console.log(`  ${chalk.cyan('ag-kit init')}      Install Antigravity Kit (.agent)`);
    console.log(`  ${chalk.cyan('amp-kit init')}     Install Amp Kit (.agents)`);
    console.log(`  ${chalk.cyan('ag-kit init --kit amp')}  Specify kit type explicitly\n`);
};

// ============================================================================
// CLI DEFINITION
// ============================================================================

const program = new Command();

// Detect if called as amp-kit
const isAmpKit = process.argv[1]?.includes('amp-kit');
const defaultKit = isAmpKit ? 'amp' : 'antigravity';
const cliName = isAmpKit ? 'amp-kit' : 'ag-kit';

program
    .name(cliName)
    .description(`CLI tool to install and manage ${isAmpKit ? 'Amp Kit' : 'Antigravity Kit'}`)
    .version(pkg.version, '-v, --version', 'Display version number');

// Command: init
program
    .command('init')
    .description(`Install ${isAmpKit ? '.agents' : '.agent'} folder into your project`)
    .option('-f, --force', 'Overwrite if folder already exists', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .option('-k, --kit <type>', 'Kit type: antigravity (.agent) or amp (.agents)')
    .action((options) => initCommand({ ...options, defaultKit }));

// Command: update
program
    .command('update')
    .description(`Update ${isAmpKit ? '.agents' : '.agent'} folder to the latest version`)
    .option('-f, --force', 'Skip confirmation prompt', false)
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .option('-b, --branch <name>', 'Select repository branch')
    .option('-k, --kit <type>', 'Kit type: antigravity (.agent) or amp (.agents)')
    .action((options) => updateCommand({ ...options, defaultKit }));

// Command: status
program
    .command('status')
    .description('Check installation status')
    .option('-p, --path <dir>', 'Path to the project directory', process.cwd())
    .action(statusCommand);

// Command: list
program
    .command('list')
    .description('List available agent kits')
    .action(listCommand);

// Parse arguments
program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
