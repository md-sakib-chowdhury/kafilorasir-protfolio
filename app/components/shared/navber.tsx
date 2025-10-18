import { Link } from "react-router";
import bg from "../shared/bg.jpeg"; // ✅ adjust path if needed

export default function Navbar() {
    return (
        <div>
            {/* Navbar Section */}
            <div className="flex justify-between items-center mx-5 my-5">

                <div className="flex gap-6">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/thoughts">THOUGHTS</Link>
                </div>
                <div className="flex gap-4">
                    <Link to="/">MAIL</Link>
                    <Link to="/">X</Link>
                    <Link to="/">FB</Link>
                    <Link to="/">LI</Link>
                </div>
            </div>

            {/* Image Section (under navbar) */}
            <div className="mt-4 flex justify-center">
                <img
                    src={bg}
                    alt="Background"
                    className="w-full max-h-[400px] object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
