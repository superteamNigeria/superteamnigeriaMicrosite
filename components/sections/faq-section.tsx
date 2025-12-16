"use client";

import { useState } from "react";

const faqs = [
  {
    id: "001",
    question: "What is SuperteamNG?",
    answer:
      "SuperteamNG is the Nigerian chapter of the global Superteam network — a community of developers, designers, creators, and operators building and earning within the Solana ecosystem through bounties, hackathons, grants, and real-world projects.",
  },
  {
    id: "002",
    question: "Who can join SuperteamNG?",
    answer:
      "Anyone interested in Solana, web3, and building meaningful projects can join — developers, designers, writers, marketers, community managers, and beginners looking to learn and grow in the ecosystem.",
  },
  {
    id: "003",
    question: "How do members earn through SuperteamNG?",
    answer:
      "Members earn by completing bounties, contributing to ecosystem projects, participating in hackathons, and working with startups and protocols building on Solana. Most opportunities are paid in crypto, often USDC.",
  },
  {
    id: "004",
    question: "Is SuperteamNG free to join?",
    answer:
      "Yes. Joining SuperteamNG is free. Members can access community resources, events, learning opportunities, and earning programs without paying a membership fee.",
  },
  {
    id: "005",
    question: "What kind of events does SuperteamNG host?",
    answer:
      "SuperteamNG hosts hackathons, workshops, ecosystem calls, demo days, watch parties, and in-person meetups designed to help members learn, network, and collaborate on Solana-based projects.",
  },
  {
    id: "006",
    question: "How do I get started with SuperteamNG?",
    answer:
      "You can get started by joining the SuperteamNG community, introducing yourself, exploring available bounties and events, and contributing based on your skills and interests.",
  },
];

export const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>("001");

  return (
    <section
      className="relative mx-2 mb-4 min-h-screen overflow-hidden rounded-xl bg-black py-20 sm:mx-4 sm:py-32"
      id="faq"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent"></div>
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center text-white/70 text-md tracking-tighter">
              FAQ
            </div>
          </div>
        </div>

        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-medium text-4xl text-white tracking-tighter font-serif sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently asked <span className="text-emerald-500">questions</span>
          </h2>
          <p className="mx-auto max-w-xl text-white/60 text-sm tracking-tighter sm:text-base">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a className="text-white hover:underline" href="#contact">
              Get in touch
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="group relative border-neutral-800 border-t"
              >
                <button
                  aria-label={isOpen ? "Show less" : "Show more"}
                  className="relative flex w-full items-center justify-between py-6"
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-neutral-500 text-sm transition-colors duration-200 group-hover:text-neutral-400">
                      ({faq.id})
                    </span>
                    <h3 className="font-medium font-serif text-lg transition-colors duration-200 group-hover:text-neutral-200 text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center">
                    {isOpen ? (
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
                        className="lucide lucide-minus h-5 w-5 text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400"
                      >
                        <path d="M5 12h14"></path>
                      </svg>
                    ) : (
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
                        className="lucide lucide-plus h-5 w-5 text-neutral-500 transition-colors duration-200 group-hover:text-neutral-400"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                    )}
                  </div>
                </button>
                {isOpen && faq.answer && (
                  <div className="relative overflow-hidden" style={{ height: "auto", opacity: 1 }}>
                    <div className="pb-8">
                      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                        <div className="max-w-xl space-y-4">
                          <p className="text-neutral-400" style={{ opacity: 1 }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

