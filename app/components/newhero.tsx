import lp from "./shared/lp.png"; // replace with your image path

export default function Newhero() {
    const tabs = [
        "Blogs & Articles",
        "Public Speaking & Training",
        "Recent Event Activities",
        "Social Activities",
    ];

    return (
        <section className="flex flex-col items-center px-10 py-16">
            {/* Big Heading */}
            <h1 className="text-6xl md:text-8xl font-bold text-center mb-8">
                Some solutions that I created.
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {tabs.map((tab) => (
                    <span
                        key={tab}
                        className="text-xl font-medium cursor-pointer relative group"
                    >
                        {tab}
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
                    </span>
                ))}
            </div>

            {/* Single Image */}
            <div className="w-full max-w-2xl">
                <img
                    src={lp}
                    alt="Visual"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
            <div className="text-2xl">
                <h3>Testimonials
                    <p>"Kahafil Ora is a visionary leader with a rare blend of technical depth and strategic foresight. His insights on cybersecurity and infrastructure optimization have been invaluable to our team. Collaborating with him has always meant progress and clarity."</p>
                </h3>
            </div>
        </section>
    );
}
