import React from "react";
import { Sora } from "next/font/google";
import { Pencil, Trash2, Eye, FileDown } from "lucide-react";
import ProfileCard from "@/components/cards/profileCard";
import Activity from "@/components/cards/activity";
import Image from "next/image";

const sorafont = Sora({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <>
    <div className="max-w-7xl mt-44 md:mt-30 mx-auto h-full md:flex justify-between">
      <ProfileCard />
      <Activity />
    </div>
    <div className="w-full flex justify-center mt-16">
      <Image src={"/images/refer.png"} height={900} width={900} alt='logo' className='object-cover w-full md:w-7xl' ></Image>
    </div>
    </>
  );
}
