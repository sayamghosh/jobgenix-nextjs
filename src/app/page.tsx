import React from "react";
import Link from "next/link";
import Jobcard from "../components/cards/jobcard";
import Image from "next/image";

import { Sora } from "next/font/google";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div className={`${sorafont.className}`}>
      <div
        className={` relative w-full -z-10 h-screen flex flex-col items-center justify-center `}
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
        <div className="vector absolute -bottom-[425px]">
          <Image
            src={"/grooming/bottomVector.png"}
            height={900}
            width={900}
            alt="vector"
          ></Image>
        </div>
      </div>
      <section className="w-full z-10 bg-[#021C2D]">
        <div className="w-full flex  flex-col gap-3 items-center justify-center text-white py-10">
          <h1 className="text-3xl text-center font-semibold ">
            Learn.<span className="text-[#0073E6]">Slay.</span>Get Hired.
          </h1>
          <p className="text-center w-96 text-xs font-thin">
            A power-packed space designed to sharpen your skills, boost
            confidence, and make you job-ready.{" "}
            <span className="text-[#0073E6] font-semibold">Pick a track</span> &#38;{" "}
            <span className="text-[#0073E6] font-semibold">Start now!</span>
          </p>
        </div>
        <div className="w-full flex gap-8 justify-center items-center pb-30">
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
      </section>

      <section className="py-20 gap-4 relative">
        <Image src={"/graphic/leftCurvedArrow.png"} height={60} width={60} alt="vector" className="absolute left-[530px] top-[230px]" />
        <div className="flex flex-col gap-1 w-fit mx-auto  items-center">
          <h1 className="font-bold text-3xl text-[#333333] text-[56px]">
            Your Future&apos; Calling
          </h1>
          <h1 className="font-bold text-5xl text-[#333333] text-[56px]">
            JobGenix Way!
          </h1>
          <p className="mt-2">
            {" "}
            <span className="text-[#0073E6]">Get matched.</span> Get mentored.{" "}
            <span className="text-[#0073E6]">Get hired.</span>{" "}
          </p>
        </div>
        <Image src={"/graphic/rightCurvedArrow.png"} height={60} width={60} alt="vector" className="absolute right-[530px] top-[230px]" />

        <Link href={"/"} className="py-3 px-5 text-white rounded-full mx-auto mt-12 flex items-center w-fit bg-[#0073E6]  text-xs font-light">
          Create Your Free Account & Start Today{" "}
          <Image
            src={"/graphic/arrow-right-circle.png"}
            height={50}
            width={50}
            alt="arror"
            className="h-8 w-8 ml-2"
          ></Image>
        </Link>
      </section>
    </div>
  );
}
