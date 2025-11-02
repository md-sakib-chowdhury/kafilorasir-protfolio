export default function Contain() {
    const items = [
        "🌐 Facebook",
        "📸 Instagram",
        "💼 LinkedIn",
        "🐦 Twitter",
        "💬 WhatsApp",
        "▶️ YouTube",
        "🐙 GitHub",
        "🎵 TikTok",
    ];

    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-black overflow-hidden">
            {/* Inline style for animation */}
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0%); }
                    }
                    .marquee, .marquee-reverse {
                        display: flex;
                        width: 200%; /* double width because of duplication */
                        animation: marquee 20s linear infinite;
                    }
                    .marquee-reverse {
                        animation: marquee-reverse 20s linear infinite;
                    }
                `}
            </style>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 absolute top-[30%] left-[10%]">
                I help brands to drive results.
            </h1>

            {/* First Marquee (Left to Right seamless) */}
            <div className="w-[80vw] overflow-hidden whitespace-nowrap mb-20 py-10">
                <div className="marquee flex gap-10 text-2xl font-semibold text-black">
                    {/* Duplicate items for seamless effect */}
                    {[...items, ...items].map((item, i) => (
                        <span key={i} className="inline-block pr-10">{item}</span>
                    ))}
                </div>
            </div>

            {/* Second Marquee (Right to Left seamless) */}
            <div className="w-[80vw] overflow-hidden whitespace-nowrap">
                <div className="marquee-reverse flex gap-10 text-2xl font-semibold text-black">
                    {[...items, ...items].map((item, i) => (
                        <span key={i} className="inline-block pr-10">{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
