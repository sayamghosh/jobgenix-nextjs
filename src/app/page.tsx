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
          <p className="text-center w-96 text-xs font-thin">A power-packed space designed to sharpen your skills, boost confidence, and make you job-ready. <span className="text-[#0073E6]">Pick a track</span> &#38; <span className="text-[#0073E6]">Start now!</span></p>
        </div>
        <div className="w-full flex gap-8 justify-center items-center pb-30">
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
      </section>
    </div>
  );
}
