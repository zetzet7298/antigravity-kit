"use client";

import { useState } from "react";

// Category Icons
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
);

const ServerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M4.08 5.227A3 3 0 0 1 6.979 3H17.02a3 3 0 0 1 2.9 2.227l2.113 7.926A5.228 5.228 0 0 0 18.75 12H5.25a5.228 5.228 0 0 0-3.284 1.153L4.08 5.227Z" />
        <path fillRule="evenodd" d="M5.25 13.5a3.75 3.75 0 1 0 0 7.5h13.5a3.75 3.75 0 1 0 0-7.5H5.25Zm10.5 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
    </svg>
);

const CircleStackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
        <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
        <path d="M12 18.75c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 18.164 9.315 18.75 12 18.75Z" />
    </svg>
);

const BeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z" clipRule="evenodd" />
    </svg>
);

const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5Z" clipRule="evenodd" />
    </svg>
);

// Skills data by category
const skillCategories = [
    {
        id: "frontend",
        name: "Frontend",
        icon: <CodeIcon />,
        skills: [
            { name: "react-expert", description: "React 18/19, hooks, patterns, performance" },
            { name: "nextjs-expert", description: "App Router, Server Components, SSR" },
            { name: "css-expert", description: "CSS architecture, responsive, design systems" },
            { name: "state-management-expert", description: "Redux, Zustand, React Query" },
            { name: "ui-ux-pro-max", description: "50 styles, 21 palettes, 50 font pairings" },
        ],
    },
    {
        id: "backend",
        name: "Backend",
        icon: <ServerIcon />,
        skills: [
            { name: "nodejs-expert", description: "Async patterns, modules, performance" },
            { name: "nestjs-expert", description: "Module architecture, DI, testing" },
            { name: "rest-api-expert", description: "RESTful design, HTTP semantics" },
            { name: "auth-expert", description: "JWT, OAuth 2.0, RBAC, security" },
        ],
    },
    {
        id: "database",
        name: "Database",
        icon: <CircleStackIcon />,
        skills: [
            { name: "prisma-expert", description: "Schema design, migrations, queries" },
            { name: "database-expert", description: "General database optimization" },
            { name: "postgres-expert", description: "PostgreSQL-specific patterns" },
            { name: "mongodb-expert", description: "MongoDB document modeling" },
        ],
    },
    {
        id: "testing",
        name: "Testing",
        icon: <BeakerIcon />,
        skills: [
            { name: "testing-expert", description: "General testing strategies" },
            { name: "jest-expert", description: "Jest framework, mocking" },
            { name: "vitest-expert", description: "Vitest, Vite integration" },
            { name: "playwright-expert", description: "E2E testing, browser automation" },
        ],
    },
    {
        id: "devops",
        name: "DevOps",
        icon: <CloudIcon />,
        skills: [
            { name: "devops-expert", description: "CI/CD, infrastructure" },
            { name: "docker-expert", description: "Containerization, Compose" },
            { name: "github-actions-expert", description: "GitHub Actions workflows" },
            { name: "git-expert", description: "Git workflows, conflicts" },
        ],
    },
    {
        id: "quality",
        name: "Code Quality",
        icon: <SparklesIcon />,
        skills: [
            { name: "code-review", description: "Comprehensive code review" },
            { name: "refactoring-expert", description: "Code smell detection" },
            { name: "typescript-expert", description: "TypeScript patterns, type system" },
            { name: "accessibility-expert", description: "WCAG compliance, a11y" },
        ],
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("frontend");

    const currentCategory = skillCategories.find((c) => c.id === activeCategory);

    return (
        <section id="skills" className="section relative overflow-hidden">
            {/* Background Glow */}
            <div className="bg-glow bg-glow-purple left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />

            <div className="container-content relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="heading-lg mb-4">
                        <span className="gradient-text">35+</span> Domain Expert Skills
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        The agent automatically identifies and uses the appropriate skill
                        for each task, bringing domain expertise to every interaction.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-200 cursor-pointer
                ${activeCategory === category.id
                                    ? "bg-[var(--color-accent)] text-white"
                                    : "bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
                                }
              `}
                        >
                            {category.icon}
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentCategory?.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="glass-card p-4 cursor-pointer"
                        >
                            <code className="text-[var(--color-accent)] text-sm font-mono">
                                {skill.name}
                            </code>
                            <p className="text-body text-sm mt-2">{skill.description}</p>
                        </div>
                    ))}
                </div>

                {/* More Skills Note */}
                <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
                    + many more specialized skills for AI SDK, Vite, Webpack, and advanced
                    debugging
                </p>
            </div>
        </section>
    );
}
