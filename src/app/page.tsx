import React from "react";
import Link from "next/link";
import Jobcard from "../components/cards/jobcard";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Sora } from "next/font/google";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${sorafont.className}`}>
      {/* Hero Section */}
      <div
        className={`relative w-full -z-10 h-screen flex flex-col items-center justify-center px-4`}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-[#333333] text-3xl md:text-5xl font-bold">
            Get Job-Ready, The
          </h1>
          <h1 className="font-bold text-3xl md:text-5xl text-[#0073E6]">
            JobGenix Way!
          </h1>
          <p className="text-[10px] md:text-[11px] tracking-tight max-md:max-w-60 md:text-sm font-light">
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
        <div className="vector absolute -bottom-[300px] md:-bottom-[425px]">
          <Image
            src={"/grooming/bottomVector.png"}
            height={900}
            width={900}
            alt="vector"
            className="w-[300px] md:w-[900px]"
          />
        </div>
      </div>

      {/* Learn Section */}
      <section className="w-full z-10 bg-[#021C2D] px-4">
        <div className="w-full flex flex-col gap-3 items-center justify-center text-white py-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Learn.<span className="text-[#0073E6]">Slay.</span>Get Hired.
          </h1>
          <p className="text-xs md:text-sm font-thin w-full md:w-96">
            A power-packed space designed to sharpen your skills, boost
            confidence, and make you job-ready.{" "}
            <span className="text-[#0073E6] font-semibold">Pick a track</span>{" "}
            &#38;{" "}
            <span className="text-[#0073E6] font-semibold">Start now!</span>
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:w-[85%] mx-auto gap-6 justify-center items-center pb-10">
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
      </section>

      {/* Future Section */}
      <div className="text-center py-16 h-full w-full max-w-2xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Your Future&apos;s Calling <br />
          <span className="text-gray-800">Are You Ready to Answer?</span>
        </h2>

        <p className="mt-2 text-blue-500 text-sm md:text-base">
          <span className="cursor-pointer hover:underline">Get matched.</span>{" "}
          <span className="cursor-pointer text-black hover:underline">
            Get mentored.
          </span>{" "}
          <span className="cursor-pointer hover:underline">Get hired.</span>
        </p>

        <div className="flex flex-col items-center justify-center w-full mt-4 space-y-4 xl:space-y-0">
          {/* Icons Row */}
          <div className="flex justify-between items-center w-full md:w-9/12 max-w-sm xl:max-w-full">
            <img
              src="/graphic/leftCurvedArrow.png"
              alt=""
              className="w-10 md:w-14"
            />
            <img
              src="/graphic/rightCurvedArrow.png"
              alt=""
              className="w-10 md:w-14"
            />
          </div>

          {/* Call to Action Button */}
          <button className="-mt-4 md:-mt-1 bg-blue-500 px-3 py-2 text-white xl:px-6 xl:py-3 rounded-full flex items-center gap-2 font-medium text-sm md:text-base hover:bg-blue-600 transition">
            Create Your Free Account & Start Today
            <Image src={"/graphic/arrow-right-circle.png"} width={20} height={20} alt="arrow" ></Image>
          </button>
        </div>
      </div>
    </div>
  );
}
