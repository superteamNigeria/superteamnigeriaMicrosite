"use client";

import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// Array of partner logo filenames in /public/partners.
// Add new logos here as needed!
const partnerLogos = [
  "solflare.jpeg",
  "jupiter.jpg",
  "meteora.jpeg",
  "quicknode.png",
  "legends.jpg",
  "niya.jpg",
  "surfpool.jpeg",
  "blueshift.jpeg",
  "codigo.jpeg",
  "devfun.jpeg",
  "metaplex.jpeg",
];

// Fallback alt texts for each logo (optional)
const altTexts: Record<string, string> = {
  "solflare.jpeg": "Solflare",
  "jupiter.jpeg": "Jupiter",
  "metora.jpeg": "Metora",
  "quicknode.png": "Quicknode",
  "legends.jpg": "Legends",
  "niya.jpg": "Niya",
  "surfpool.jpeg": "Surfpool",
  "blueshift.jpeg": "Blueshift",
  "codigo.jpeg": "Codigo",
  "devfun.jpeg": "Devfun",
  "metaplex.jpeg": "Metaplex",
};

export const PartnersSection = () => {
  // To control hover index (if you want only one hovered at a time)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-20 md:py-28 w-full select-none bg-black overflow-hidden"
      id="partners"
      aria-label="Our Partners"
    >
      {/* Decorative glow background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-125 w-250 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-emerald-500/5 via-emerald-400/8 to-green-500/5 blur-3xl hidden lg:hidden" />
        <div className="absolute left-1/2 top-1/2 h-75 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-emerald-500/5 via-emerald-400/8 to-green-500/5 blur-3xl block md:hidden" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 to-green-400">
              Powered
            </span>{" "}
            by our partners
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-white/80 font-medium leading-relaxed">
            We&apos;re proud to collaborate with industry leaders who share our
            vision for innovation and excellence in the blockchain space.
          </p>
        </div>
        {/* Logo Marquee */}
        <div className="relative h-40 sm:h-44 flex items-center overflow-hidden">
          <Marquee
            pauseOnHover
            speed={100}
            gradient={true}
            gradientWidth={80}
            gradientColor="#000000"
            className="w-full py-4"
            autoFill={true}
          >
            <div className="flex items-center gap-8 px-2">
              {partnerLogos.map((logo, i) => (
                <div
                  key={logo}
                  className="flex flex-col items-center group mx-4"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  tabIndex={0}
                  aria-label={
                    altTexts[logo] || logo.replace(/\.(png|svg|jpg|jpeg)/, "")
                  }
                  style={{ outline: "none" }}
                >
                  <div className="relative p-0.5 transition-all duration-300 group">
                    <div className="relative p-2 sm:p-3 rounded-lg transition-colors">
                      <Image
                        src={`/partners/${logo}`}
                        alt={
                          altTexts[logo] ||
                          logo.replace(/\.(png|svg|jpg|jpeg)/, "")
                        }
                        width={120}
                        height={80}
                        className={`transition-all duration-300 ease-out h-12 sm:h-16 w-auto rounded-2xl border border-neutral-800/50
                          ${
                            hoveredIndex === i
                              ? "saturate-100 opacity-100"
                              : "saturate-0 opacity-70"
                          }`}
                        style={{
                          // filter: "brightness(1.2) contrast(1.1)",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </div>
                  <span
                    className={` text-xs font-medium uppercase tracking-wider text-neutral-400 transition-all duration-300 transform
                      ${
                        hoveredIndex === i
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                  >
                    {altTexts[logo] || logo.replace(/\.(png|svg|jpg|jpeg)/, "")}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
