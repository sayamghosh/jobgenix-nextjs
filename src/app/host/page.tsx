"use client";
import React, { useState } from "react";
import SwitchToggle from "@/components/buttons/toggle";
import { Montserrat } from "next/font/google";
import HostCard1 from "@/components/cards/hostCard1";
import HostCard2 from "@/components/cards/hostCard2";

import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function page() {
  const [fullTime, setFullTime] = useState(true);
  const [partTime, setPartTime] = useState(false);
  const [company, setCompany] = useState("Google LLC");
  
  const [jobType, setJobType] = useState({ fullTime: true, partTime: false });
  const [locationType, setLocationType] = useState({
    onsite: true,
    remote: false,
    hybrid: false,
  });
  return (
    <div
      className={`w-[1196px] px-10 mx-auto mt-30 h-[2214px] [background:var(--Neutrals-White,#FFF)] rounded-[15px] ${montserrat.className}`}
    >
      <form action="">
        {/* top section  */}
        <HostCard1 />
        <HostCard2 />
      </form>
    </div>
  );
}
