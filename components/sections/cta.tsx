"use client";

import React from "react";
import { MatrixFx } from "../ui/matrix";
import { GradientButton } from "../ui/gradient-button";

export const CtaSection = () => {
  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl py-16 sm:mx-4 sm:py-24"
      id="cta"
    >
      <div className="relative z-0 mx-auto my-12 flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-4xl border-2 border-emerald-300/20 px-6 py-12 shadow-lg bg-black/60">
        <div className="pointer-events-none absolute inset-0 z-0">
          <MatrixFx
            className="h-full w-full"
            height={24}
            colors={["#10b981"]}
            bulge={{
              type: "ripple",
              duration: 3,
              intensity: 20,
              repeat: true,
            }}
          />
        </div>

        {/* CTA content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="mb-2 text-3xl font-serif font-bold tracking-tight text-white">
            Ready to up your game?
          </h2>
          <p className="mb-7 max-w-md text-base tracking-tighter font-medium leading-relaxed text-white/70">
            Join the community and unlock next-level tools and collaboration.
          </p>
          <GradientButton
            href="https://discord.gg/C6EgkeEAed"
            className="px-8 py-2 text-lg"
          >
            Join the discord
          </GradientButton>
        </div>
      </div>
    </section>
  );
};
