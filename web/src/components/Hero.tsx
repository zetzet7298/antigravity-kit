// SVG Icons
const ArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
        />
    </svg>
);

const GitHubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const SparklesIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
    >
        <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
            clipRule="evenodd"
        />
    </svg>
);

// Stats data
const stats = [
    { value: "35+", label: "Skills" },
    { value: "10", label: "Rules" },
    { value: "57", label: "UI Styles" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
            {/* Background Glows */}
            <div className="bg-glow bg-glow-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 animate-pulse-glow" />
            <div className="bg-glow bg-glow-purple top-1/4 right-0 translate-x-1/4" />

            <div className="container-content relative z-10 text-center px-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8">
                    <span className="badge badge-accent">
                        <SparklesIcon />
                        AI Agent Toolkit
                    </span>
                </div>

                {/* Headline */}
                <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
                    <span className="gradient-text">Supercharge</span> Your AI Coding
                    Assistant for Antigravity
                </h1>

                {/* Subheadline */}
                <p className="text-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    A comprehensive collection of{" "}
                    <span className="text-white font-medium">skills</span>,{" "}
                    <span className="text-white font-medium">rules</span>, and{" "}
                    <span className="text-white font-medium">workflows</span> to expand
                    the capabilities of AI coding agents.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a href="#how-it-works" className="btn-primary">
                        Get Started
                        <ArrowRightIcon />
                    </a>
                    <a
                        href="https://github.com/vudovn/antigravity-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <GitHubIcon />
                        View on GitHub
                    </a>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--color-text-secondary)]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent pointer-events-none" />
        </section>
    );
}
