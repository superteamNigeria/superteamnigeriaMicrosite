"use client";

import React from "react";

export const Metrics = () => {
  const metrics = [
    {
      value: "151+",
      label: "Projects",
      desc: "Launched Products",
    },
    {
      value: "$1M+",
      label: "Community GDP",
      desc: "Earned By Members",
    },
    {
      value: "27k+",
      label: "Community",
      desc: "Active Builders",
    },
  ];

  return (
    <section className="mx-auto my-12 w-full max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {metrics.map(({ value, label, desc }) => (
          <div
            key={label}
            className="relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/70 px-6 py-8 text-center transition-all hover:border-white/20"
          >
            <h3 className="text-4xl font-semibold tracking-tighter font-serif text-white md:text-5xl lg:text-6xl">
              {value}
            </h3>
            <p className="mt-2 text-lg font-medium tracking-tight text-white/70 md:text-xl">
              {label}
            </p>
            <span className="mt-1 text-sm tracking-tighter text-white/50">
              {desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
