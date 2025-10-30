import { FaArrowUp } from "react-icons/fa";
import f1 from "./shared/f1.png";

import f2 from "./shared/f2.png";
import f3 from "./shared/f3.png";
import f4 from "./shared/f4.png";
import f5 from "./shared/f5.png";
import f6 from "./shared/f6.png";

export default function Footer() {
    return (
        <>
            {/* 🔹 Image Row */}
            <div className="overflow-x-auto">
                <div className="grid grid-cols-6 min-w-max md:min-w-0">
                    {[f1, f2, f3, f4, f5, f6].map((img, i) => {
                        // Determine which logo to show (Instagram, Facebook, LinkedIn)
                        const icons = [
                            "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // Instagram
                            "https://cdn-icons-png.flaticon.com/512/733/733547.png",  // Facebook
                            "https://cdn-icons-png.flaticon.com/512/174/174857.png",  // LinkedIn
                        ];
                        const icon = icons[i % 3]; // repeat 1→Instagram, 2→Facebook, 3→LinkedIn

                        return (
                            <div
                                key={i}
                                className="relative group overflow-hidden"
                            >
                                {/* Main Image */}
                                <img
                                    src={img}
                                    alt={`Footer image ${i + 1}`}
                                    className="w-60 md:w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay (logo + fade) */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <img
                                        src={icon}
                                        alt="Social Icon"
                                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>



            {/* 🔹 Large Center Title */}
            <div className="flex justify-center items-center overflow-hidden px-2 pt-10">
                <h1 className="font-extrabold text-[#444] uppercase leading-none whitespace-nowrap text-[clamp(3.5rem,14.7vw,300px)] tracking-tighter">
                    KAHAFIL ORA
                </h1>
            </div>

            {/* 🔹 Main Footer Content */}
            <div className="w-full mx-auto px-6 md:px-12 py-10 text-[#444] font-[poppins]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 text-[18px] leading-relaxed">
                    {/* Column 1 */}
                    <div className="flex flex-col items-start text-2xl">
                        <ul className="space-y-2">
                            <li className="font-medium">Kahafil@Goinnovior.Com</li>
                            <li>+880 1622-992222</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-start md:items-center text-2xl">
                        <ul className="space-y-2 capitalize">
                            <li>Goinnovior Limited</li>
                            <li>360d Soul Limited</li>
                            <li>Codinnovior</li>
                            <li>Lifeinnovior</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-start md:items-center text-2xl">
                        <ul className="space-y-2 capitalize">
                            <li>Lift 4, House 774, Road 11, Avenue</li>
                            <li>Mirpur DOHS</li>
                            <li>Dhaka 1216</li>
                            <li>Bangladesh</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col items-start md:items-center text-2xl">
                        <ul className="space-y-2 capitalize">
                            <li>X</li>
                            <li>LinkedIn</li>
                            <li>YouTube</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 🔹 Bottom Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-x-10 gap-y-6 text-[18px] leading-relaxed bg-[#EBEBEB] text-[#444] font-[poppins] pt-10 pb-5">
                <p>Copyright © 2025 Kahafil Ora</p>
                <p>Privacy & Policy</p>
                <p>Terms & Conditions</p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center justify-center p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                    title="Back to top"
                >
                    <FaArrowUp size={22} />
                </button>
            </div>
        </>
    );
}
