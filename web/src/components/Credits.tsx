// External Link Icon
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
    </svg>
);

// UI UX Icon
const PaletteIcon = () => (
    <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 sm:w-8 sm:h-8"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
            <linearGradient id="innerGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
        </defs>
        <circle
            cx={24}
            cy={24}
            r={22}
            stroke="url(#logoGradient)"
            strokeWidth={3}
            fill="none"
        />
        <rect
            x={14}
            y={14}
            width={12}
            height={12}
            rx={2}
            fill="url(#logoGradient)"
            opacity="0.9"
        />
        <rect
            x={18}
            y={18}
            width={12}
            height={12}
            rx={2}
            fill="url(#innerGradient)"
            opacity="0.8"
        />
        <rect
            x={22}
            y={22}
            width={12}
            height={12}
            rx={2}
            fill="url(#logoGradient)"
            opacity="0.9"
        />
        <circle cx={36} cy={12} r={2} fill="#F97316" />
        <circle cx={12} cy={36} r="1.5" fill="#3B82F6" />
    </svg>

);

// ClaudeKit Icon
const CpuChipIcon = () => (
    <img src="/images/claudekit.png" />
);

const credits = [
    {
        icon: <PaletteIcon />,
        name: "UI UX Pro Max",
        description:
            "Design Intelligence for Claude Code - 50 styles, 21 color palettes, 50 font pairings, 20 chart types",
        link: "https://ui-ux-pro-max-skill.nextlevelbuilder.io/",
        color: "",
    },
    {
        icon: <CpuChipIcon />,
        name: "ClaudeKit",
        description:
            "Production-ready AI subagents, workflows, and integrations for software development",
        link: "https://claudekit.cc/",
        color: "",
    },
];

export default function Credits() {
    return (
        <section id="credits" className="section relative overflow-hidden">
            {/* Background Glow */}
            <div className="bg-glow bg-glow-purple left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" />

            <div className="container-content relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="heading-lg mb-4">
                        Built Upon <span className="gradient-text">Amazing Tools</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        Special thanks to the creators of these incredible projects that
                        make Antigravity Kit possible.
                    </p>
                </div>

                {/* Credit Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {credits.map((credit, index) => (
                        <a
                            key={index}
                            href={credit.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-card p-6 group cursor-pointer block"
                        >
                            {/* Icon with gradient background */}
                            <div
                                className={`
                  w-16 h-16 rounded-xl mb-4 flex items-center justify-center
                  bg-gradient-to-br ${credit.color} text-white
                `}
                            >
                                {credit.icon}
                            </div>

                            {/* Name with external link */}
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="heading-md">{credit.name}</h3>
                                <ExternalLinkIcon />
                            </div>

                            {/* Description */}
                            <p className="text-body text-sm">{credit.description}</p>

                            {/* Link hint */}
                            <div className="mt-4 text-sm text-[var(--color-accent)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Visit project
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
