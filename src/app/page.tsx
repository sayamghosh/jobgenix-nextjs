import React from "react";
import Link from "next/link";
import Jobcard from "./components/cards/jobcard";

import { Sora } from "next/font/google";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div>
      <div
        className={`${sorafont.className} w-full h-screen flex flex-col items-center justify-center `}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-[#333333] text-5xl font-bold">
            Get Job-Ready, The
          </h1>
          <h1 className="font-bold text-5xl text-[#0073E6]">JobGenix Way!</h1>
          <p className="text-xs font-light">
            Master skills, ace interviews & land your dream job with expert
            guidance.
          </p>
          <Link
            className="py-3 px-5 text-white rounded-md bg-[#0073E6] mt-4 text-xs font-light"
            href={"/"}
          >
            Start Your Journey Now
          </Link>
        </div>
      </div>
      <section className="w-full bg-[#021C2D]">
        <div className="w-full flex  flex-col gap-3 items-center justify-center text-white py-10">
          <h1 className="text-3xl text-center font-semibold ">
            Learn.<span className="text-[#0073E6]">Slay.</span>Get Hired.
          </h1>
          <p className="text-center w-96 text-xs font-thin">
            A power-packed space designed to sharpen your skills, boost
            confidence, and make you job-ready.{" "}
            <span className="text-[#0073E6]">Pick a track</span> &#38;{" "}
            <span className="text-[#0073E6]">Start now!</span>
          </p>
        </div>
        <div className="w-full flex gap-8 justify-center items-center pb-30">
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
      </section>

      <section className="relative bg-[#021C2D] w-full overflow-hidden">
        {/* White curved section */}
        <div
          className="relative z-10 w-full bg-white flex flex-col items-center justify-center px-4 pb-32 pt-24"
          style={{
            clipPath: "circle(130% at 50% 0)", // Play with size for perfect match
          }}
        >
          <h1 className="text-4xl font-bold text-black">
            job<span className="text-[#0073E6]">Genix</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Powering Dreams, One Career at a Time.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#0073E6] text-white rounded-full shadow-md hover:bg-[#005bb5] transition">
            Create Your Free Account & Start Today
          </button>
        </div>

        {/* Dark subscribe section */}
        <div className="relative z-0 text-white text-center py-16 px-4">
          <h2 className="text-2xl font-semibold mb-4">Subscribe</h2>
          <p className="mb-6">Join our community to receive updates</p>
          <form className="flex justify-center items-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-black w-64 focus:outline-none"
            />
            <button className="px-5 py-2 bg-[#0073E6] rounded-full hover:bg-[#005bb5] transition">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </section>

      <div className="w-full h-screen bg-[#021C2D]"></div>
    </div>
  );
}
