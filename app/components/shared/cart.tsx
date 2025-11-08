import i1 from "../shared/i1.png"
import i2 from "../shared/i2.png"
import i3 from "../shared/i3.png"
import i4 from "../shared/i4.png"
export default function Inovation() {
    return (
        <>
            <div className=" w-10/12 mx-auto pt-20 PY-8">
                <h4 className="font-[poppins] text-2xl md:text-6xl font-extrabold text-[#444444]">
                    Creating Excellence Through Collaboration AND<br />
                    INOVATION.
                </h4>
                <hr className="my-6 border-t-2 border-[#333333] mt-15" />
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-10/12 mx-auto pb-10">
                {/* Card 1 */}
                <div className="card bg-base-100 w-full max-w-sm mx-auto ">
                    <figure>
                        <img src={i1} alt="Digital Transformation Strategy" className="w-full h-78 object-cover rounded-t-lg" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-xl">Digital Transformation Strategy</h2>
                        <p className="text-sm md:text-base">
                            Helping businesses modernize operations through tailored digital adoption plans—enhancing efficiency, reducing costs, and boosting productivity.
                        </p>
                        <div className="card-actions justify-start mt-2">
                            <button className="btn btn-primary btn-sm md:btn-md">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-100 w-full max-w-sm mx-auto ">
                    <figure>
                        <img src={i2} alt="Infrastructure" className="w-full h-78 object-cover rounded-t-lg" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-xl">Infrastructure</h2>
                        <p className="text-sm md:text-base">
                            Providing expert advice on building scalable, secure infrastructure—covering network setup, server architecture, data protection, and cybersecurity audits.
                        </p>
                        <div className="card-actions justify-start mt-2">
                            <button className="btn btn-primary btn-sm md:btn-md">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100 w-full max-w-sm mx-auto ">
                    <figure>
                        <img src={i3} alt="Startup & Innovation Coaching" className="w-full h-78 object-cover rounded-t-lg" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg md:text-xl">Startup & Innovation Coaching</h2>
                        <p className="text-sm md:text-base">
                            Guiding early-stage founders with business modeling, product-market fit, branding, team building, and tech stack decisions.
                        </p>
                        <div className="card-actions justify-start mt-2">
                            <button className="btn btn-primary btn-sm md:btn-md">Learn More</button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="card bg-base-100 w-full max-w-sm mx-auto">
                    <figure>
                        <img src={i4} alt="EdTech & Learning Program Design" className="w-full h-78 object-cover rounded-t-lg" />
                    </figure>
                    <div className="card-body">
                     
                        <div className="card-actions justify-start mt-2">
                            <button className="">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}