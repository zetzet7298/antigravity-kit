// SVG Icons
const BrainIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
);

const BookOpenIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
    </svg>
);

const BoltIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
    >
        <path
            fillRule="evenodd"
            d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
            clipRule="evenodd"
        />
    </svg>
);

const features = [
    {
        icon: <BrainIcon />,
        title: "35+ Domain Skills",
        description:
            "Expert knowledge in React, Next.js, Node.js, databases, testing, DevOps, and more. The agent automatically applies relevant expertise.",
    },
    {
        icon: <BookOpenIcon />,
        title: "10 Behavior Rules",
        description:
            "Structured guidelines that direct agent behavior including task classification, communication style, and quality checklists.",
    },
    {
        icon: <BoltIcon />,
        title: "Production Workflows",
        description:
            "Step-by-step procedures for common tasks. Invoke with slash commands like /request or /ui-ux-pro-max.",
    },
];

export default function Features() {
    return (
        <section id="features" className="section">
            <div className="container-content">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-4">
                        Everything You Need to{" "}
                        <span className="gradient-text">Level Up</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        A complete toolkit combining skills, rules, and workflows to
                        transform your AI coding assistant into a domain expert.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 cursor-pointer"
                        >
                            <div className="icon-wrapper mb-4">{feature.icon}</div>
                            <h3 className="heading-md mb-3">{feature.title}</h3>
                            <p className="text-body text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
