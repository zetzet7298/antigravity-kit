// Social Icons
const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500">
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const CoffeeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M3.75 6a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75ZM3.75 12a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        <path d="M5.25 9.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9ZM3.75 18a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75ZM18.75 7.5a2.25 2.25 0 0 0 0 4.5h.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-.75Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="border-t border-[var(--color-border)] py-12">
            <div className="container-content px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Made with love */}
                    <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                        <span>Made with</span>
                        <HeartIcon />
                        <span>by</span>
                        <a
                            href="https://github.com/vudovn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                        >
                            VudoVN
                        </a>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/vudovn/antigravity-kit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer"
                            aria-label="GitHub Repository"
                        >
                            <GitHubIcon />
                        </a>

                        {/* Buy me a coffee */}
                        <a
                            href="https://img.vietqr.io/image/mbbank-0779330918-compact2.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-colors cursor-pointer"
                        >
                            <CoffeeIcon />
                            <span className="text-sm">Buy me a coffee</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-[var(--color-text-muted)] text-sm">
                    © {new Date().getFullYear()} Antigravity Kit. MIT License.
                </div>
            </div>
        </footer>
    );
}
