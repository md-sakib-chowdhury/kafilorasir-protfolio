import middle from "./shared/midlle.jpeg"; // ✅ Correct import
import Frame from "./shared/Frames.png";
export default function AboutSection() {
    return (
        <section className="flex flex-col items-center px-6 md:px-20 py-16 gap-16">
            {/* Top Section - Heading + Description */}
            <div className="text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl text-gray-400 font-bold mb-4">
                    About Kahafil Ora
                </h2>
                <div className="w-full mt-5 py-10  text-black-400 text-[1.3rem] md:text-[1.25rem] sm:text-[1.3rem] leading-relaxed">
                    <p className="w-[80vw] text-2xl  tracking-wide uppercase -ml-50 mb-15 leading-[3.2rem]">
                        Kahafil Ora is an experienced IT Consultant known for delivering smart, tech-<br />
                        driven solutions to businesses.
                        With a strong grasp of IT infrastructure and digital<br />
                        strategy, he helps organizations improve efficiency and achieve their goals,<br />
                        through innovative technology.
                    </p>






                </div>

                <div className="-ml-50 w-[80vw] border-b-2 border-gray-800  mt-2"></div>
            </div>

            {/* Middle Section - 3 Columns */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full gap-10 md:gap-16">
                {/* Left Column */}
                <div className="flex flex-row items-start justify-between w-full px-25">
                    {/* Left Text Section */}
                    <div className="flex-1 flex flex-col gap-6 w-[75vw] text-left">
                        <h3 className="text-xl font-semibold px-4 text-gray-400">
                            DRIVING DIGITAL INNOVATION ACROSS<br />
                            BANGLADESH AND BEYOND

                        </h3>

                        <ul className="text-gray-700 space-y-1 text-lg font-medium px-4 ">
                            <li>Mentor</li>
                            <li>IT Strategist</li>
                            <li>Tech Entrepreneur</li>
                            <li>Cybersecurity Advocate</li>
                        </ul>

                        <div className="p-6  border-gray-200 w-fit leading-[2.2rem]">
                            <h3 className="font-semibold text-2xl mb-8">Contact</h3>
                            <p>Kahafil Ora</p>
                            <p>Dhaka | Bangladesh</p>
                            <p>+880 1622-992222</p>
                            <p>kahafil@goinnovior.com</p>
                        </div>
                    </div>

                    {/* Middle Column - Image */}

                    <div className="w-[270px] h-[450px] p-4 border-1 border-black rounded-full flex absolute right-170  overflow-hidden ">
                        <img
                            src={middle}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full grayscale transition-transform duration-700 ease-in-out hover:scale-105 hover:grayscale-0 hover:saturate-150"
                        />
                    </div>
                </div>


                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-5">
                    <div className="py-0 flex flex-col items-stretch space-y-8 w-[2vw] -ml-50">
                        {/* Years of Experience */}
                        <div className="flex flex-col items-center">
                            <p className="text-gray-500 text-3xl font-medium">Years of Experience</p>
                            <p className="text-6xl font-extrabold text-black mt-2">22+</p>
                        </div>

                        {/* Satisfaction Clients */}
                        <div className="flex flex-col items-center">
                            <p className="text-gray-500 text-3xl font-medium">Satisfaction Clients</p>
                            <p className="text-6xl font-extrabold text-black mt-2">100%</p>
                        </div>

                        {/* Clients Worldwide */}
                        <div className="flex flex-col items-center">
                            <p className="text-gray-500 text-3xl font-medium">Clients Worldwide</p>
                            <p className="text-6xl font-extrabold text-black mt-2">70+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10  text-left ">
                {/* Heading above animation */}
                <h1 className="text-4xl md:text-5xl font-bold text-black mx-5 mb-15 ">
                    I help brands to drive results.
                </h1>

                {/* Animation Image Section */}
                <div className="w-[70vw] overflow-hidden flex flex-col gap-10 ">
                    {/* First Row */}
                    <div className="flex items-center gap-20 animate-marquee">
                        {Array(4).fill().map((_, i) => (
                            <img
                                key={`row1-${i}`}
                                src={Frame}
                                alt="Kahafil Ora"
                                className="w-[20vw] h-auto object-cover "
                            />
                        ))}
                        {Array(4).fill().map((_, i) => (
                            <img
                                key={`row1-copy-${i}`}
                                src={Frame}
                                alt="Kahafil Ora"
                                className="w-[20vw] h-auto object-cover"
                            />
                        ))}
                    </div>

                    {/* Second Row (reverse direction) */}
                    <div className="flex items-center gap-10 animate-marquee-reverse">
                        {Array(4).fill().map((_, i) => (
                            <img
                                key={`row2-${i}`}
                                src={Frame}
                                alt="Kahafil Ora"
                                className="w-[20vw] h-auto object-cover"
                            />
                        ))}
                        {Array(4).fill().map((_, i) => (
                            <img
                                key={`row2-copy-${i}`}
                                src={Frame}
                                alt="Kahafil Ora"
                                className="w-[20vw] h-auto object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section >
    );
}
