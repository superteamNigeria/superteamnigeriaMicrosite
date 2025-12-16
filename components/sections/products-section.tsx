"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const ProductsSection = () => {
  // Mirrored from product.superteamng.fun (Nectarfi, Chatter, Paj Cash, Bread) plus Zypp Protocol
  const products = [
    {
      id: 1,
      name: "Zypp Protocol",
      category: "DePin",
      description:
        "Send crypto offline! The payment engine for offline Solana transactions.",
      logo: "/product/zypp.png",
      // buildersLabel: "100+",
      link: "https://zypp.fun",
      xUrl: "https://x.com/use_zypp",
      siteUrl: "https://zypp.fun",
    },
    {
      id: 2,
      name: "Chatter",
      category: "DeFi",
      description: "Stablecoin payments in your DMs.",
      logo: "/product/chatter.png",
      // buildersLabel: "600+",
      link: "https://product.superteamng.fun/product/iuvV6XvCyzpJ7qStYplu",
      xUrl: "https://x.com/usechatter",
      siteUrl: "https://usechatter.com",
    },
    {
      id: 3,
      name: "Paj Cash",
      category: "DeFi",
      description:
        "Simplified crypto off‑ramping for everyone. Convert your crypto to fiat directly from your favorite wallet.",
      logo: "/product/pajcash.png",
      // buildersLabel: "900+",
      link: "https://product.superteamng.fun/product/DAU72ztbvBeoVEcOx2ML",
      xUrl: "https://x.com/paj_cash",
      siteUrl: "https://paj.cash",
    },
    {
      id: 4,
      name: "Airbills",
      category: "Stablecoins | PayFi",
      description:
        "A utility platform for paying bills and booking flights with stablecoins.",
      logo: "/product/airbills.png",
      // buildersLabel: "101–1k+",
      link: "https://product.superteamng.fun/product/w9m8EQuQj4eAOe3Bh408",
      xUrl: "https://x.com/airbillspay",
      siteUrl: "https://app.airbillspay.com/",
    },
  ];
// 
  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-black py-16 sm:mx-4 sm:py-24"
      id="products"
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

        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h2 className="mb-4 font-medium text-4xl font-serif tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our members are{" "}
              <span className="text-emerald-500">building...</span>
            </h2>
          </div>
          <div className="flex-1 lg:max-w-xl">
            <p className="text-base text-white/70 leading-relaxed tracking-tight sm:text-lg">
              Since our launch in June 2023, our community members have built
              over 80+ projects on the Solana network pushing its expansion
              beyond limits. Check out what we have.
            </p>
          </div>
        </div>

        <div className="custom-horizontal-scrollbar overflow-x-auto pb-4">
          <div className="flex gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex min-w-[320px] flex-col rounded-3xl border border-white/10 bg-black/60 transition-all hover:border-emerald-500/40 hover:shadow-2xl sm:min-w-[360px]"
              >
                {/* Hero Image Area */}
                <div className="relative h-56 w-full overflow-hidden rounded-3xl">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={product.id === 1}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pb 6 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-xl font-serif tracking-tight text-white sm:text-2xl">
                        {product.name}
                      </h3>
                      {product.category && (
                        <span className="mt-2 inline-flex whitespace-nowrap rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-tight text-emerald-300">
                          {product.category}
                        </span>
                      )}
                    </div>

                    {(product as any).xUrl || (product as any).siteUrl ? (
                      <div className="flex items-center gap-2 text-white/50">
                        {(product as any).xUrl && (
                          <Link
                            href={(product as any).xUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${product.name} on X`}
                            className="transition-colors hover:text-white"
                          >
                            <Icon icon="simple-icons:x" className="h-4 w-4" />
                          </Link>
                        )}
                        {(product as any).siteUrl && (
                          <Link
                            href={(product as any).siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${product.name} website`}
                            className="transition-colors hover:text-white"
                          >
                            <Icon icon="ph:globe-bold" className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    ) : null}
                  </div>

                  <p className="mb-4 flex-1 text-sm text-white/70 leading-relaxed tracking-tight sm:text-base">
                    {product.description}
                  </p>

                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-1 text-sm font-medium tracking-tight text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
             <div
               key="view-more-widget"
               className="group flex min-w-[320px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-emerald-500/60 bg-gradient-to-br from-black/70 to-emerald-950/70 hover:shadow-2xl transition-all hover:border-emerald-400/70 sm:min-w-[360px] cursor-pointer select-none p-8"
             >
               <div className="flex flex-col items-center text-center space-y-4 py-6">
                 {/* Eye-catching animated icon */}
                 <div className="relative">
                   <span className="flex h-16 w-16 text-4xl font-bold text-emerald-400 items-center justify-center rounded-full bg-emerald-500/10 shadow-inner ring-2 ring-emerald-400 group-hover:bg-emerald-400/20 transition-all animate-pulse">
                    ?
                   </span>
                   {/* <span className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 animate-bounce text-emerald-400 text-xs font-semibold">View More</span> */}
                 </div>
                 <h3 className="text-2xl font-semibold tracking-tight text-emerald-200 font-serif">
                   Discover More Products
                 </h3>
                 <p className="text-white/70 text-base max-w-xs">
                   Seeing something you like? Tap below to explore the full collection!
                 </p>
               </div>
               <Link
                 href="/products"
                 className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-6 py-2 text-base font-semibold text-black shadow-lg ring-emerald-500/10 ring-2 hover:bg-emerald-400 hover:text-white transition-all group-hover:scale-105 group-active:scale-95"
                 aria-label="View all products"
               >
                 View More
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="18"
                   height="18"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   className="ml-1 lucide lucide-arrow-right"
                 >
                   <path d="M5 12h14"></path>
                   <path d="M12 5l7 7-7 7"></path>
                 </svg>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
