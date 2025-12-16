import React from "react";
import { GradientButton } from "../ui/gradient-button";

export const Hero = () => {
  return (
    <div className="w-full my-20 bg-black overflow-x-hidden!">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 border-2 border-red-500 bg-green-800/30 rounded-lg p-4">
        <h1 className="text-5xl md:text-[80px] font-bold text-center tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white to-neutral-400">
          A Community <br /> Built For{" "}
          <span className="text-emerald-500 text-shadow-md text-shadow-emerald-500 animate-bounce">
            All
          </span>
        </h1>
        </div>
        <p className="text-md md:text-xl font-medium text-center tracking-tighter max-w-md md:max-w-xl opacity-75">
          Join a community of like-minded individuals who are passionate about
          building the future of the internet.
        </p>
        <GradientButton variant="emerald">Get Started</GradientButton>
      </div>
    </div>
  );
};
