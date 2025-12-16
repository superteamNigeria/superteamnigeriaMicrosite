"use client";

import React from "react";
import { ClientTweetCard } from "@/components/ui/tweet-card";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  // Add real Twitter/X tweet IDs here
  const tweetIds = [
    "1964425668017406218", // Replace with actual tweet IDs from SuperteamNG community
    "1998297279359340593",
    "1984986436953854025",
    "1915452865323422204",
    "1986044809857958054",
    "1998715864401461482",
  ];

  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-black py-16 sm:mx-4 sm:py-24"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="h-px w-4 bg-white"></div>
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 font-medium text-4xl font-serif tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            What our <span className="text-emerald-500">community</span> says
          </h2>
          <p className="mx-auto max-w-2xl text-base tracking-tight text-white/70 sm:text-lg">
            Real feedback from builders, developers, and creators in the
            SuperteamNG ecosystem.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:grid">
          {tweetIds.map((tweetId, index) => (
            <div
              key={tweetId}
              className="group relative transition-transform duration-300 hover:scale-[1.02]"
            >
              <ClientTweetCard
                id={tweetId}
                className={cn(
                  "h-full border-white/10 bg-black/60 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-xl",
                  index % 3 === 0 && "border-emerald-500/20",
                  index % 3 === 1 && "border-blue-500/20",
                  index % 3 === 2 && "border-purple-500/20"
                )}
              />
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="custom-horizontal-scrollbar overflow-x-auto pb-4 md:hidden">
          <div className="flex gap-4">
            {tweetIds.map((tweetId, index) => (
              <div key={tweetId} className="min-w-[320px] shrink-0">
                <ClientTweetCard
                  id={tweetId}
                  className={cn(
                    "h-full border-white/10 bg-black/60 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-xl",
                    index % 3 === 0 && "border-emerald-500/20",
                    index % 3 === 1 && "border-blue-500/20",
                    index % 3 === 2 && "border-purple-500/20"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
