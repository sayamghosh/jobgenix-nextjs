import React from "react";
import { Eye } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function LoginModal() {
  const logo =
    "https://s3-alpha-sig.figma.com/img/66fe/f6d5/97d560eac2dfb51eedeb938fb228a29c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dFBkqNY4hAeHADjrhieJRfojj0IZFRSIW1Pbsc~eDTTzhox17DJ8aFvEiVGExsSprXkiiv9IHwrOeVKmizKt~ITETAbrQMdpWmXT0O6Pe1RMfBfRccMxSbtr4MuAmnfqxaAu0YljKn16bm8GIUz5gI-UgYLYOHhOpTCkoJdHk9DoRTDYmwo0khQ2hAk5X9nuqpXD9s8zA-MfHr4F5bNfCMN~iU~Aw~8Md6pIzyaZY51qAsgMEqIbHhymg0GEVHEVLxul5AVrS37tBMs0ObjEsPGP7FfD8mYnq8t64WewxLcFRF~FpdQksvMEnN3leVsaKObb068JJATrqk7mZNeIkQ__";

  return (
    <div className={`fixed  inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center z-50 ${sora.className}"`}>
      <div className="border items-center border-[#333] rounded-[30px] text-white w-[400px] p-8 shadow-lg backdrop-blur-sm">
        <button className="absolute top-4 right-4 text-white text-xl">×</button>
        <div className="w-full flex justify-center pb-2">
          <div className="relative h-5 w-32 overflow-hidden">
            <Image src={logo} fill alt="logo"></Image>
          </div>
        </div>

        <p className="text-center text-xs text-gray-300 mb-3">
          Hey Rockstar, Ready to Level Up?
        </p>

        {/* Form */}
        <form className="space-y-2">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="enter your email address"
              className="w-full px-4 py-1 rounded-md border border-[#0073E6] bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0073E6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-1 rounded-md border border-[#0073E6] bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#0073E6]"
              />
              <button
                type="button"
                className="absolute right-3 top-[5px] text-gray-400"
              >
                <Eye />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xs rounded-md bg-[#0073E6] hover:bg-blue-700 transition font-light"
          >
            Sign Up
          </button>
        </form>
        <a
          href="#"
          className="hover:underline w-full flex justify-end text-xs text-gray-300 mt-2"
        >
          Forgot Password ?
        </a>

        <div className="text-center mt-4 text-xs font-light text-gray-300">
          Already have an account ?{" "}
          <a href="#" className="text-white hover:underline">
            Log in
          </a>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600" />
          <span className="px-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-600" />
        </div>

        <button className="w-full py-2 border border-white rounded-md flex items-center justify-center gap-2 bg-white text-black transition">
          <FcGoogle size={20} />
          Log in with Google
        </button>

        <p className="text-[12px] font-light text-center text-gray-400 mt-4">
          By clicking Sign Up, you agree to JobGenix <br />
          <span className="text-white"> User Agreement</span>, and
          <span className="text-white"> Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
