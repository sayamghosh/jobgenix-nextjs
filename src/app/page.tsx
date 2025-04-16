import React from "react";
import Link from "next/link";

import { Sora } from "next/font/google";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div
      className={`${sorafont.className} w-full h-screen flex flex-col items-center justify-center `}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-[#333333] text-5xl font-bold">
          Get Job-Ready, The
        </h1>
        <h1 className="font-bold text-5xl text-[#0073E6]">JobGenix Way!</h1>
        <p className="text-xs font-light">Master skills, ace interviews & land your dream job with expert guidance.</p>
        <Link className="py-3 px-5 text-white rounded-md bg-[#0073E6] mt-4 text-xs font-light" href={"/"}>Start Your Journey Now</Link>
      </div>
    </div>
  );
}
