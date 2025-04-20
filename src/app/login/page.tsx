import React from "react";
import LoginCard from "@/components/Modals/loginModal";
import Hero from "@/components/shared/hero";
import Companies from "@/components/marquee/companies";

export default function Page() {
  return (
    <div className="">
      <Hero></Hero>
      <LoginCard></LoginCard>
    </div>
  );
}
