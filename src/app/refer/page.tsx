'use client';
import React from 'react'
import ReferCard from '@/components/cards/referCard';
import Image from 'next/image';

import { Sora } from "next/font/google";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

const accordionData = [
    {
      title: "Connection Request Tips",
      content: "Keep your message short, specific, and personalized. Mention shared interests or goals.",
    },
    {
      title: "Email to HR",
      content: "Hi [HR Name], I'm excited about the opportunity at [Company]. Please find my resume attached. Looking forward to connecting.",
    },
    {
      title: "Follow-Up Mail",
      content: "Just checking in regarding the role I applied for last week. I remain very interested and look forward to any updates!",
    },
  ];


export default function Page() {


  return (
    <>
    <div className={`${sorafont.className} w-full flex items-center justify-center py-6 bg-gradient-to-r from-white via-[#f8fafd] to-white mt-30 px-5 md:px-0`}>
      <div className="flex items-center space-x-4">
        {/* Left speed lines */}
        <Image src={"/graphic/referLeft.png"} height={100} width={100} alt='graphic'></Image>

        {/* Center text */}
        <h2 className="text-lg md:text-3xl font-semibold text-gray-800 whitespace-nowrap">
          Tap In, Get Referred, Glow Up.
        </h2>

        {/* Right speed lines */}
        <Image src={"/graphic/referRight.png"} height={100} width={100} alt='graphic'></Image>
      </div>
    </div>
    <div className='w-full flex flex-col items-center gap-4'>
    <ReferCard data={accordionData} />
    <ReferCard data={accordionData} />
    <Image src={"/images/refer.png"} height={500} width={500} alt='logo' className='object-cover md:w-[40%]' ></Image>
    </div>
    </>
  )
}
