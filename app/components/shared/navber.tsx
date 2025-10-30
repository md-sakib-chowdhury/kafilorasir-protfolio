// ✅ Navbar.jsx
import bg from "../shared/bg.jpeg";
import img from "../shared/img kahafilsir.jpeg";
import arro from "../shared/arro.jpeg";

export default function Navbar() {
    return (
        <section className="relative w-full min-h-screen text-white overflow-hidden flex flex-col bg-gray-900">

            {/* 🔹 Background Image (Full Screen) */}
            <img
                src={bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover bg-[#f5f5f5]"
            />

            {/* 🔹 Overlay (optional for contrast) */}
         

            {/* 🔹 Top Navigation */}
            <nav className="relative z-20 flex justify-between items-center px-10 py-8">
                <div className="flex gap-90 text-xl font-medium text-black">
                    <a href="#home" className="hover:text-green-400 transition-colors">HOME</a>
                    <a href="#about" className="hover:text-green-400 transition-colors">ABOUT</a>
                    <a href="#thoughts" className="hover:text-green-400 transition-colors">THOUGHTS</a>
                </div>

                <div className="flex gap-8 text-xl font-medium text-black">
                    <a href="#mail" className="hover:text-green-400 transition-colors">MAIL</a>
                    <a href="#x" className="hover:text-green-400 transition-colors">X</a>
                    <a href="#fb" className="hover:text-green-400 transition-colors">FB</a>
                    <a href="#li" className="hover:text-green-400 transition-colors">LI</a>
                </div>
            </nav>

            {/* 🔹 Main Hero Section */}
            <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between px-10">

                {/* Left Section */}
                <div className="relative flex flex-col justify-center w-full md:w-1/4 text-center md:text-left">
                    <h1 className="text-[6rem] md:text-[8rem] font-black leading-none tracking-tight absolute top-[-450%] text-black">
                        KAHAFIL
                    </h1>
                    <h2 className="text-4xl font-bold text-black mt-4 absoulate top-[-5%]">2K25</h2>

                    {/* PORTFOLIO Line (Rotated Text) */}
                    <p className="rotate-[-90deg] origin-left text-black text-base tracking-[0.5em] absolute left-[4px] bottom-[-120px]">
                        /PORTFOLIO----------
                    </p>

                    {/* SCROLL DOWN — Fixed at Bottom of Left Section */}
                    <div className="absolute bottom-[-480%] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 flex justify-center md:justify-start items-center gap-3 text-sm text-black ">
                        <p>SCROLL DOWN</p>
                        <span className="animate-bounce text-xl">↓</span>
                    </div>
                </div>

                {/* Center Image Section */}
                <div className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0 group">
                    <img
                        src={img}
                        alt="Kahafil Sir"
                        className="w-[100%] md:w-[950px] mx-w[950px] object-cover h-auto object-contain relative z-20 filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />

                    {/* Arrow Label */}
                    <div className="absolute top-[55%] left-[-15%]  flex items-center gap-2">
                        <img
                            src={arro}
                            alt="Arrow"
                            className="w-[70px] md:w-[80px] h-[50px] md:h-[60px] object-contain absolute top-[50%] left-[130%] "
                        />
                        <p className="text-sm tracking-[0.3em] whitespace-nowrap text-black">IT CONSULTANT</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center w-full md:w-1/4 text-center md:text-right mt-10 md:mt-0">
                    <h3 className="text-2xl font-bold text-gray-400 mb-8 md:mb-16 absolute top-[10%] right-10">BIOGRAPHY</h3>
                    <p className="text-sm leading-relaxed mb-10 md:mb-20 px-4 md:px-0 text-black">
                        A visionary leader with 22+ years of experience in innovation and growth.
                        As MD of Goinnovior Limited and Co-Founder of 360D Soul, Lifeinnovior, and
                        Codeinnovior, he blends technology, business, and social impact —
                        delivering ICT and InfoSec solutions, promoting mental health, and enabling
                        free tech education.
                    </p>

                    <h1 className="text-[6rem] md:text-[8rem] font-black leading-none tracking-tight mt-auto text-black">
                        ORA
                    </h1>
                </div>
            </div>
        </section>
    );
}
