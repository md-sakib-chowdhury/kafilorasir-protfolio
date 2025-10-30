export default function Blog() {
    return (
        <div className="flex flex-col md:flex-row items-start gap-10 px-10">
            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center md:items-start">
                {/* Heading */}
                <h1 className="text-6xl md:text-8xl font-bold text-center md:text-left mb-2">
                    leadership roles.
                </h1>

                {/* Underline */}
                <div className="w-4/5 md:w-full h-1 bg-black mb-6"></div>

                {/* Paragraph */}
                <p className="text-lg md:text-xl text-left max-w-2xl leading-relaxed">
                    I've worked with companies and clients, both in agency settings. I enjoy collaborating with clients who appreciate the importance of good design.
                </p>
            </div>

            {/* Right Column - Career Timeline */}
            <div className="flex-1 text-left space-y-6 text-lg md:text-xl">
                <div className="pb-2 border-b border-gray-400">
                    <strong>Goinnovior Limited</strong><br />
                    Founder & Managing Director<br />
                    2016-Present
                </div>

                <div className="pb-2 border-b border-gray-400">
                    <strong>360D Soul Limited</strong><br />
                    Founder & Managing Director<br />
                    2023-Present
                </div>

                <div className="pb-2 border-b border-gray-400">
                    <strong>CodeInnovior</strong><br />
                    Founder & Managing Director<br />
                    2020-Present
                </div>

                <div className="pb-2 border-b border-gray-400">
                    <strong>Skylark Soft Limited</strong><br />
                    Head of Businesses<br />
                    2022-2024
                </div>

                <div className="pb-2 border-b border-gray-400">
                    <strong>Impress Group</strong><br />
                    Head of Information Technology Operations<br />
                    2018-2022
                </div>

                <div className="pb-2 border-b border-gray-400">
                    <strong>Next IT Ltd.</strong><br />
                    Founder & Managing Director<br />
                    2016-2018
                </div>
            </div>
        </div>
    );
}