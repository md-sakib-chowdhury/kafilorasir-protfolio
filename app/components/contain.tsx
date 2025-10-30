export default function Contain() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-black overflow-hidden">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 absolute top-[30%] left-[10%]">
                I help brands to drive results.
            </h1>


            {/* 🔹 First Marquee (Left to Right) */}
            <div className="w-[80vw] overflow-hidden whitespace-nowrap mb-5 py-10">
                <div className="animate-marquee flex gap-10 text-2xl font-semibold text-black">
                    {[
                        "🌐 Facebook",
                        "📸 Instagram",
                        "💼 LinkedIn",
                        "🐦 Twitter",
                        "💬 WhatsApp",
                        "▶️ YouTube",
                        "🐙 GitHub",
                        "🎵 TikTok",
                    ].map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </div>
            </div>

            {/* 🔹 Second Marquee (Right to Left - Reverse) */}
            <div className="w-[80vw] overflow-hidden whitespace-nowrap">
                <div className="animate-marquee-reverse flex gap-10 text-2xl font-semibold text-black">
                    {[
                        "🎵 TikTok",
                        "🐙 GitHub",
                        "▶️ YouTube",
                        "💬 WhatsApp",
                        "🐦 Twitter",
                        "💼 LinkedIn",
                        "📸 Instagram",
                        "🌐 Facebook",
                    ].map((item, i) => (
                        <span key={i}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
