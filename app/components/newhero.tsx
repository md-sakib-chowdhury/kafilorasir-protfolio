import lp from "./shared/lp.png"; // replace with your image path
import lp2 from "./shared/lp2.png"
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

            <h1 className="text-4xl md:text-5xl font-bold text-left w-[80%]">
                Some solutions that I created.
            </h1>


            {/* Tabs */}
            <div className="flex flex-wrap justify-center items-center gap-18 mb-10 py-10 px-30 text-xl font-medium">
                {tabs.map((tab, index) => {
                    const isActive = tab === "Blog"; // default active tab

                    return (
                        <>
                            <span className="relative cursor-pointer group">
                                {tab}
                                {/* Underline */}
                                <span
                                    className={`
              absolute left-0 -bottom-1 h-1 bg-black transition-three
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
                                ></span>
                            </span>

                            {/* Add "/" separator except for the last item */}
                            {index !== tabs.length - 1 && (
                                <span className="mx-2 text-gray-500">/</span>
                            )}
                        </>
                    );
                })}
            </div>



            {/* Single Image */}
            <div className="flex flex-wrap justify-between gap-8">
                {/* 1️⃣ First Image with Text */}
                <div className="w-full md:w-[48%] text-left">
                    <img
                        src={lp}
                        alt="Cybersecurity Visual"
                        className="w-[75%] h-[55%] ml-50 object-cover rounded-lg shadow-lg"
                    />

                    <div className="mt-4 ml-50">
                        <p className="text-gray-500 text-sm">Cybersecurity</p>
                        <p className="text-gray-400 text-xs mb-1">May 25, 2025</p>
                        <h2 className="text-lg md:text-xl font-bold mb-2">
                            Why Cybersecurity is No Longer Optional for Businesses
                        </h2>
                        <p className="text-gray-700 text-sm">
                            <span className="uppercase block">
                                As our world becomes more digital, the threats facing organizations
                            </span>
                            <span className="block">
                                grow more complex and dangerous. Cybersecurity is no longer a lu...
                            </span>
                        </p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                            Show More
                        </button>
                    </div>
                </div>

                {/* 2️⃣ Second Image with Text */}
                <div className="w-full md:w-[48%] text-left">
                    <img
                        src={lp2}
                        alt="Education Visual"
                        className="w-[75%] h-[55%] ml-5 object-cover rounded-lg shadow-lg"
                    />

                    <div className="mt-4 ml-5">
                        <p className="text-gray-500 text-sm">Education, Social Impact</p>
                        <p className="text-gray-400 text-xs mb-1">May 25, 2025</p>
                        <h2 className="text-lg md:text-xl font-bold mb-2">
                            Tech for Good: How Codeinnovior is Shaping Future Innovators
                        </h2>
                        <p className="text-gray-700 text-sm">
                            <span className="uppercase block ml-0">
                                When we launched Codeinnovior, the mission was simple — MAKE.
                            </span>
                            <span className="block">
                                Technology shouldn’t just be for a few —..
                            </span>
                        </p>
                        <button className="mt-3 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                            Show More
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-2xl py-20">
                <h3>Testimonials
                    <p>"Kahafil Ora is a visionary leader with a rare blend of technical depth and strategic foresight. His insights on cybersecurity and infrastructure optimization have been invaluable to our team. Collaborating with him has always meant progress and clarity."</p>
                </h3>
            </div>
        </section>
    );
}
