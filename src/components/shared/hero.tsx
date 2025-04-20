"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Sora } from "next/font/google";

const soraFont = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  // const [showJobs, setShowJobs] = useState(true);
  const jobsRef = useRef(null);
  const internshipRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    tl.to(jobsRef.current, { y: -20, opacity: 0, duration: 0.5 })
      .to(internshipRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4")
      .to(internshipRef.current, { y: 20, opacity: 0, duration: 0.5, delay: 1 })
      .to(jobsRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.4");
  }, []);

  return (
    <div
      className={`container mx-auto px-4 py-8 md:py-12 ${soraFont.className}`}
    >
      {/* Main content wrapper */}
      <div className="flex flex-col lg:flex-row">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          {/* Mentored badge */}
          <div>
            <div className="relative bg-[#F6F6F7] rounded-lg shadow-2xl p-2 w-64   mx-auto lg:ml-[90px] ml-3 lg:mx-0 mb-6 lg:mt-32">
              <div className="absolute top-1/2 -translate-y-1/2 left-2 w-3 h-3 bg-[#FFA500]  rounded-full"></div>
              <p className="ml-6">Mentored 200+ students</p>
            </div>
            <div className="relative bg-[#F6F6F7] rounded-lg shadow-2xl p-2 w-24  mx-auto lg:ml-[52%]  ml-3 lg:mx-0 mb-6 lg:mt-[-9.5%]">
              <div className="absolute top-1/2 -translate-y-1/2 left-2 w-3 h-3 bg-[#0073e6] rounded-full"></div>
              <p className="ml-6">Beta</p>
            </div>
          </div>

          {/* Main heading */}
          <div className="ml-5 lg:text-left lg:ml-20 mt-6 lg:mt-4">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold">
              Your Career,
            </h1>
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-extrabold text-[#0073e6] mt-2 lg:mt-4">
              Supercharged
            </h1>

            <button className="h-12 w-36 mt-6 text-xl font-light border-[#FFD17F] border-4 rounded-3xl overflow-hidden relative flex items-center justify-center">
              <span ref={jobsRef} className="absolute">
                Jobs
              </span>
              <span ref={internshipRef} className="opacity-0">
                Internship
              </span>
            </button>

            <div className="mobile-png flex">
              <p className="text-xs w-full text-[#A6A6A6] mt-2 lg:mt-2">
                From Campus to Career - We Help You <br />
                Land Your Dream Job Faster
              </p>
              {/* right testimonials */}
              <div className="relative  lg:h-[500px] lg:w-[500px] lg:absolute h-300 w-300 lg:top-80 lg:right-80">
                {/* card 1 */}
                <div className="absolute px-4 py-2 right-0 -top-[150px] rounded-[20px] border w-fit border-blue-400">
                  <div className="flex gap-2">
                    <Image
                      src={"/images/profile.png"}
                      height={50}
                      width={50}
                      alt="profile"
                      className="object-cover h-8 w-8 rounded-full"
                    ></Image>{" "}
                    <span className="flex flex-col">
                      <h1 className="text-xs">Emily Watson</h1>
                      <p className="text-[10px] max-w-40 font-light ">
                        UI/UX designer at Google
                      </p>
                    </span>
                  </div>
                  <p className="text-[10px] max-w-40 font-light mt-2">
                    "Landed my dream job in weeks! Jobgenix is live saver"
                  </p>
                </div>
                {/* card 2 */}
                <div className="absolute px-4 py-2 left-[150px] rounded-[20px] border w-fit border-blue-400">
                  <div className="flex gap-2">
                    <Image
                      src={"/images/profile.png"}
                      height={50}
                      width={50}
                      alt="profile"
                      className="object-cover h-8 w-8 rounded-full"
                    ></Image>{" "}
                    <span className="flex flex-col">
                      <h1 className="text-xs">Emily Watson</h1>
                      <p className="text-[10px] max-w-40 font-light ">
                        UI/UX designer at Google
                      </p>
                    </span>
                  </div>
                  <p className="text-[10px] max-w-40 font-light mt-2">
                    "Landed my dream job in weeks! Jobgenix is live saver"
                  </p>
                </div>
                {/* card 3 */}
                <div className="absolute px-4 py-2 top-[150px] right-0 rounded-[20px] border w-fit border-blue-400">
                  <div className="flex gap-2">
                    <Image
                      src={"/images/profile.png"}
                      height={50}
                      width={50}
                      alt="profile"
                      className="object-cover h-8 w-8 rounded-full"
                    ></Image>{" "}
                    <span className="flex flex-col">
                      <h1 className="text-xs">Emily Watson</h1>
                      <p className="text-[10px] max-w-40 font-light ">
                        UI/UX designer at Google
                      </p>
                    </span>
                  </div>
                  <p className="text-[10px] max-w-40 font-light mt-2">
                    "Landed my dream job in weeks! Jobgenix is live saver"
                  </p>
                </div> 
              </div>
            </div>
            <button className="h-8 w-28 lg:mt-3 absolute left-[95px] hidden xl:block bg-[#0073E6] rounded-lg text-white text-xs">
              Get started
            </button>
            <button className="h-8 w-28 lg:mt-3 lg:ml-3 ml-3 xl:hidden sm:block mt-4 bg-[#0073E6] rounded-lg text-white">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
