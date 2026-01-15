import Link from "next/link";

// SVG Icons
const RocketIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
            clipRule="evenodd"
        />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
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

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-4 right-4 z-50">
            <div className="glass-navbar rounded-full max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <div className="text-[var(--color-accent)]">
                        {/* <RocketIcon /> */}
                        <img src="/images/logo.png" alt="Logo" className="w-5" />
                    </div>
                    <span className="font-semibold text-lg hidden sm:inline">
                        Antigravity Kit
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="#features"
                        className="text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
                    >
                        Features
                    </a>
                    <a
                        href="#skills"
                        className="text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
                    >
                        Skills
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
                    >
                        How It Works
                    </a>
                    <a
                        href="#credits"
                        className="text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
                    >
                        Credits
                    </a>
                </div>

                {/* GitHub Link */}
                <a
                    href="https://github.com/vudovn/antigravity-kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer"
                >
                    <GitHubIcon />
                    <span className="hidden sm:inline text-sm">GitHub</span>
                </a>
            </div>
        </nav>
    );
}
