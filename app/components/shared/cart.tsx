import bg from "../shared/bg.jpeg";
import lpimg from "../shared/lpimg.png";
import lpimg2 from "../shared/lpimg2.png";
import { useState } from "react";

export default function Cart() {
    const images = [lpimg, lpimg2, bg];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-black">
            {/* Hero Background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>


            <section className="relative z-10 w-full flex flex-col px-6 md:px-20 py-16 gap-20">

                {/* Top Hero Text */}
                <div className="text-center md:text-left max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Creating Excellence Through Collaboration and Innovation.
                    </h1>
                    <div className="w-24 h-1 bg-black mt-4"></div>
                </div>

                {/* First Feature - Faysal Ahmmed */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Text Left */}


                    {/* Image Right */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={lpimg2}
                            alt="Faysal Ahmmed"
                            className="w-[300px] md:w-[450px] h-auto object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                            Faysal Ahmmed
                        </h2>
                        <div className="w-24 h-[3px] bg-gray-800 mt-3 mb-4"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A software engineer with excellent skills and academic scores.
                            Very dedicated person in AI, deep learning along with research and Backend development.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
                            Learn More →
                        </button>
                    </div>
                </div>

                {/* Second Feature - Slideshow / Cloud Migration */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image Left */}
                    <div className="flex-1 flex justify-center md:order-1 order-2">
                        <img
                            src={images[currentIndex]}
                            alt="Cloud Migration Slide"
                            className="w-[100px] md:w-[250px] lg:w-[450px] h-auto object-cover rounded-2xl shadow-lg transition-all duration-700 ease-in-out"
                        />
                    </div>

                    {/* Text Right */}
                    <div className="flex-1 text-left md:order-2 order-1">
                        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                            Cloud Migration
                        </h2>
                        <div className="w-24 h-[3px] bg-gray-800 mt-3 mb-4"></div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Move legacy infrastructure to cloud for scalability and reliability.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
                            Learn More →
                        </button>
                    </div>

                    {/* Slideshow Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-3xl bg-black/50 text-white p-2 rounded-full hover:bg-black transition-all duration-300"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl bg-black/50 text-white p-2 rounded-full hover:bg-black transition-all duration-300"
                    >
                        ›
                    </button>
                </div>

            </section>
        </div>
    );
}
