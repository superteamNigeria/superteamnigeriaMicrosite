"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { GradientButton } from "../ui/gradient-button";
import { Spotlight } from "../ui/spotlight";
import { ArrowUpRightIcon } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative mx-2 mt-1 mb-4 flex bg-[#0a0a0a] min-h-[calc(100vh-5.5rem)] w-full items-center justify-center overflow-hidden rounded-xl py-6 sm:mx-4 sm:py-10">
      <Spotlight />
      {/* Background text */}
      <div
        className="-right-24 pointer-events-none absolute -bottom-8 origin-bottom-right"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="select-none font-bold text-[7rem] tracking-tighter sm:text-[8rem] md:text-[10rem] lg:text-[10rem] text-white/10">
          SuperteamNG
        </span>
      </div>
      <div
        className="-left-24 pointer-events-none absolute -bottom-8 origin-bottom-right"
        style={{ writingMode: "vertical-lr" }}
      >
        <span className="select-none font-bold text-[7rem] tracking-tighter sm:text-[8rem] md:text-[10rem] lg:text-[10rem] text-white/10">
          SuperteamNG
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full px-4">
        <div className="space-y-8 text-center">
          <div className="flex justify-center">
            <Link
              href="https://x.com/SuperteamNG/status/1958515474368446975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-md tracking-tighter text-white/80 bg-emerald-600/10 rounded-full px-4 py-1 border border-emerald-400/60 hover:bg-emerald-400/10 hover:scale-105 transition-all duration-300"
            >
              <Icon icon="simple-icons:x" className="w-3 h-3 text-white/80" />
              <span className="text-sm text-white/90">We just crossed $1M in GDP</span>
              <ArrowUpRightIcon className="w-4 h-4 ml-2 text-white/80" />
            </Link>
          </div>

          <h1 className="font-semibold text-4xl tracking-tight font-serif text-white sm:text-5xl md:text-6xl lg:text-7xl">
            A Community. Built for You <br />
            Built,{" "}
            <span className="italic text-emerald-400/90">
              for ALL.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base tracking-tighter sm:text-lg md:text-xl text-white/70">
            We are building the Solana ecosystem in Africa through innovative
            projects and community building.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <GradientButton href="https://discord.gg/C6EgkeEAed" variant="emerald">
              Join the discord
            </GradientButton>
          </div>

          <div className="flex items-center justify-center gap-8 pt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="-space-x-3 flex">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white/80 shadow-md transition-all hover:z-10 hover:scale-110"
                  >
                    <Image
                      src={`/community/${i}.png`}
                      alt={`Member ${i}`}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
                <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-dashed shadow-md transition-all hover:z-10 hover:scale-110 border-white/20 bg-[#171717]">
                  <span className="font-semibold text-white text-xs">
                    ?
                  </span>
                </div>
              </div>
              <span className="text-white/50 tracking-tight">
                <span className="font-medium text-white/80">
                  27k+
                </span>{" "}
                members
              </span>
            </div>

            <div className="h-4 w-px bg-white/10"></div>

            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-white"
                    viewBox="0 0 20 20"
                  >
                    <title>5.0 star rating</title>
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                  </svg>
                ))}
              </div>
              <span className="text-white/50 tracking-tight">
                5.0 rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
