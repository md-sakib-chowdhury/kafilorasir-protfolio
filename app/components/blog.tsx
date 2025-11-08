

export default function Blog() {

    return (
        <div className="flex flex-col md:flex-row items-start gap-10 px-40 py-20">
            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center md:items-start">
                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold  md:text-left mb-8">
                    leadership roles.
                </h1>

                {/* Underline */}
                <div className="w-[213%] h-1 bg-black mb-8"></div>

                {/* Paragraph */}
                <p className="text-lg md:text-xl text-left max-w-2xl leading-relaxed">
                    I've worked with companies and clients,<br />
                    both in agency settings. I enjoy<br />
                    collaborating with clients who appreciate<br />
                    the importance of good design.
                </p>
            </div>

            {/* Right Column - Career Timeline */}

            {/* Leadership items */}
            <div className="w-[50%] space-y-8 text-lg md:text-xl">

                <div className="pb-10 mt-40 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>Goinnovior Limited</strong>
                    <span>Founder & Managing Director</span>
                    <span>2016-Present</span>
                </div>

                <div className="pb-10 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>360D Soul Limited</strong>
                    <span>Founder & Managing Director</span>
                    <span>2023-Present</span>
                </div>

                <div className="pb-10 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>CodeInnovior</strong>
                    <span>Founder & Managing, Director</span>
                    <span>2020-Present</span>
                </div>

                <div className="pb-10 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>Skylark Soft Limited</strong>
                    <span>Head of Businesses</span>
                    <span>2022-2024</span>
                </div>

                <div className="pb-10 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>Impress Group</strong>
                    <span>Head of Information Technology Operations</span>
                    <span>2018-2022</span>
                </div>

                <div className="pb-10 border-b-2 border-gray-200 flex justify-between items-center">
                    <strong>Next IT Ltd.</strong>
                    <span>Founder & Managing Director</span>
                    <span>2016-2018</span>
                </div>
                {/* Leadership Items Section */}
                <div className="w-full space-y-6 text-lg md:text-xl">

                    {/* ... all your leadership items ... */}

                </div>

                {/* Underline Section */}
                <div className="w-[250%] h-1 bg-black mt-40 -ml-210"></div>

            </div>

        </div>

    );
}