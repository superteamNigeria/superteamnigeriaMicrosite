"use client";

import { useState } from "react";
import { GradientButton } from "../ui/gradient-button";

export const PricingSection = () => {
  const [agentCount, setAgentCount] = useState(3);

  const basePrice = 29;
  const pricePerAgent = 19;
  const totalPrice = basePrice + agentCount * pricePerAgent;

  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-16 sm:mx-4 sm:py-24 dark:bg-black"
      id="pricing"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.02]"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-black dark:bg-white"></div>
            <div className="h-px w-4 bg-black dark:bg-white"></div>
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>

        <div className="mb-12 space-y-3 text-center">
          <h2 className="font-medium text-4xl text-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Pay as you scale
          </h2>
          <p className="mx-auto max-w-xl text-black/60 text-sm tracking-tighter sm:text-base dark:text-white/60">
            Choose the number of projects. Adjust anytime. No commitments.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="rounded-2xl border border-black/10 bg-black/5 p-6 sm:p-10 dark:border-white/5 dark:bg-zinc-900/50">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="font-medium text-emerald-500/85 text-xs tracking-tighter dark:text-emerald-500/85">
                      Pricing
                    </span>
                  </div>
                  <h3 className="mb-1.5 font-medium text-2xl text-black tracking-tighter sm:text-3xl dark:text-white">
                    Scale with your needs
                  </h3>
                  <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                    Start with any number of projects and adjust as your team
                    grows.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black text-sm tracking-tighter dark:text-white">
                      Number of Projects
                    </span>
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() =>
                          setAgentCount(Math.max(1, agentCount - 1))
                        }
                        className="inline-flex items-center justify-center h-7 w-7 rounded-lg border border-black/10 bg-transparent hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:hover:bg-white/5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-minus h-3.5 w-3.5 text-black dark:text-white"
                        >
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <div className="w-14 text-center">
                        <span className="font-semibold text-black text-xl tracking-tighter dark:text-white">
                          {agentCount}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setAgentCount(Math.min(50, agentCount + 1))
                        }
                        className="inline-flex items-center justify-center h-7 w-7 rounded-lg border border-black/10 bg-transparent hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:hover:bg-white/5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-plus h-3.5 w-3.5 text-black dark:text-white"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={agentCount}
                      onChange={(e) => setAgentCount(Number(e.target.value))}
                      className="range-slider h-1.5 w-full cursor-pointer rounded-lg accent-black dark:accent-white"
                      style={{
                        background: `linear-gradient(to right, rgb(0 0 0 / 0.8) ${
                          ((agentCount - 1) / 49) * 100
                        }%, rgb(0 0 0 / 0.1) ${
                          ((agentCount - 1) / 49) * 100
                        }%)`,
                      }}
                    />
                    <div className="mt-1.5 flex justify-between">
                      <span className="text-black/40 text-xs tracking-tighter dark:text-white/40">
                        1 project
                      </span>
                      <span className="text-black/40 text-xs tracking-tighter dark:text-white/40">
                        50 projects
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-black/10 border-t pt-4 dark:border-white/10">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <div className="flex items-end gap-1.5">
                      <span className="font-semibold text-5xl text-black tracking-tighter sm:text-6xl dark:text-white">
                        ${totalPrice}
                      </span>
                      <span className="mb-1.5 text-base text-black/60 tracking-tighter dark:text-white/60">
                        /month
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <GradientButton href="/login">
                        Start for Free
                      </GradientButton>
                      <p className="text-black/50 text-xs tracking-tighter dark:text-white/50">
                        No credit card required.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-0.5 text-black/50 text-xs tracking-tighter dark:text-white/50">
                    <p>
                      Base: ${basePrice}/mo + {agentCount} project
                      {agentCount !== 1 ? "s" : ""} × ${pricePerAgent}
                    </p>
                    <p className="text-black/40 dark:text-white/40">
                      Billed monthly, cancel anytime
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-3 font-medium text-black text-sm tracking-tighter dark:text-white">
                    Everything included:
                  </h4>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    "Community Access",
                    "Unlimited Projects",
                    "Advanced Collaboration Tools",
                    "Real-time Notifications",
                    "Custom Project Templates",
                    "Priority Support 24/7",
                    "Advanced Analytics Dashboard",
                    "Workflow Automation",
                    "Secure Data Processing",
                    "Regular Feature Updates",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check h-2.5 w-2.5 text-black dark:text-white"
                          >
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                      </div>
                      <span className="text-black/70 text-sm leading-tight tracking-tighter dark:text-white/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-black/10 border-t pt-6 dark:border-white/10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="mb-1 font-semibold text-3xl text-black tracking-tighter sm:text-4xl dark:text-white">
                        100+
                      </div>
                      <div className="text-black/50 text-xs tracking-tighter dark:text-white/50">
                        Projects created
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-3xl text-black tracking-tighter sm:text-4xl dark:text-white">
                        97%
                      </div>
                      <div className="text-black/50 text-xs tracking-tighter dark:text-white/50">
                        Success rate
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-3xl text-black tracking-tighter sm:text-4xl dark:text-white">
                        50K+
                      </div>
                      <div className="text-black/50 text-xs tracking-tighter dark:text-white/50">
                        Active members
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
