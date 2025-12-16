"use client";

import React from "react";

export const AboutSection = () => {
  // Adjusted according to prompt: only three core guilds
  const guilds = ["Developers", "Designers", "Writers"];

  return (
    <section
      id="about"
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-black py-16 sm:mx-4 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8 text-center">
          <div>
            <h2 className="mb-4 font-medium text-4xl text-white font-serif tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-emerald-500">SuperteamNG</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-left">
            <p className="text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
              Founded in June 2023, SuperteamNG has grown in both numbers and strength. Formed by{" "}
              <span className="font-medium text-white">Nzube Ezube</span> and{" "}
              <span className="font-medium text-white">Harrison Obiefule</span>,
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
                Over the past year, more than{" "}
                <span className="font-medium text-white">60 projects</span>{" "}
                have been built and submitted to both local and global hackathons with some of the projects emerging as winners in{" "}
                <span className="font-medium text-white">Renaissance</span>,{" "}
                <span className="font-medium text-white">Hyperdrive</span>, and{" "}
                <span className="font-medium text-white">cHack</span>.
              </p>
            </div>

            <div>
              <p className="mb-4 text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
                Our team is comprised of three core guilds:{" "}
                <span className="font-medium text-white">Developers</span>,{" "}
                <span className="font-medium text-white">Designers</span>, and{" "}
                <span className="font-medium text-white">Writers</span>. Open to all who are eager to join, these groups provide unique opportunities for collaboration and growth.
              </p>
            </div>

            <div>
              <p className="mb-4 text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
                We also host monthly ecosystem calls spanning across <span className="font-medium text-white">21 states</span> in Nigeria, fostering community engagement.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {guilds.map((guild, index) => {
              const colorClasses = [
                {
                  dot: "bg-emerald-400",
                  gradient: "from-emerald-500/10 to-transparent",
                  border: "border-emerald-400/20",
                },
                {
                  dot: "bg-blue-400",
                  gradient: "from-blue-500/10 to-transparent",
                  border: "border-blue-400/20",
                },
                {
                  dot: "bg-purple-400",
                  gradient: "from-purple-500/10 to-transparent",
                  border: "border-purple-400/20",
                },
              ];
              const colors = colorClasses[index % colorClasses.length];

              return (
                <div
                  key={guild}
                  className="group relative flex min-w-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-black/60 px-4 py-4 text-center transition-all hover:border-white/20 hover:shadow-lg sm:px-5 sm:py-5"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="relative">
                      <div
                        className={`h-3 w-3 rounded-full ${colors.dot} transition-all group-hover:scale-125 group-hover:shadow-lg`}
                      />
                      <div
                        className={`absolute inset-0 rounded-full ${colors.dot} opacity-20 blur-md transition-all group-hover:scale-150`}
                      />
                    </div>
                  </div>
                  <span className="relative z-10 whitespace-nowrap text-xs font-medium tracking-tight text-white sm:text-sm">
                    {guild}
                  </span>
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-br ${colors.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                  <div
                    className={`absolute inset-0 rounded-xl border-2 ${colors.border} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
