"use client";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative mx-2 mb-4 w-auto overflow-hidden rounded-xl bg-neutral-950 py-10 sm:mx-4 sm:py-12">
      <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent"></div>
      <div className="-translate-x-1/2 pointer-events-none absolute bottom-0 left-1/2">
        <span className="select-none font-bold text-[8rem] text-white/2 tracking-tighter sm:text-[10rem] md:text-[12rem] lg:text-[14rem] font-serif">
          SUPERTEAMNG
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs shrink-0">
            <Link
              className="font-bold text-4xl text-white tracking-tighter transition-opacity hover:opacity-90"
              href="/"
            >
              <Image src="/logo-full.png" alt="SuperteamNG" width={150} height={50} className="h-12 w-auto" />
            </Link>
            <p className="mt-3 text-white/60 text-sm tracking-tighter">
              A community built for you. Built for ALL.
            </p>
          </div>

          <div className="max-w-xs shrink-0 space-y-4">
            <h3 className="font-medium text-white text-sm tracking-tighter">Get in touch</h3>
            <p className="text-white/60 text-sm tracking-tighter">
              Join us on our journey to build the Solana ecosystem in Africa.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <Link
                  href="https://superteamnigeria.substack.com/subscribe"
                  className="inline-flex items-center justify-center w-full gap-2 whitespace-nowrap text-sm font-medium shadow-sm group h-10 w-10 rounded-lg bg-white p-0 text-black transition-all duration-300 hover:bg-white/90"
                  type="submit"
                >
                  Subscribe to our Substack
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
                    className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1 -rotate-45"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <p className="text-white/40 text-xs tracking-tighter">
                We&apos;ll send you updates about our projects and events.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-white/10 border-t pt-6 text-white/50 text-xs tracking-tighter sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SuperteamNG. All rights reserved.</p>
          <p>
            Made with 💚 by{" "}
            <Link className="transition-colors hover:text-white" href="https://x.com/josh_scriptz">
              Joshua Idele
            </Link>
          </p>
          <div className="flex gap-6">
            <Link className="transition-colors hover:text-white" href="#">
              Terms
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
