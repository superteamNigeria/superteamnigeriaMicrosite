"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";

const navLinks = [
  { href: "/", label: "Home", type: "internal" },
  { href: "#about", label: "About", type: "internal" },
  { href: "#features", label: "Features", type: "internal" },
  { href: "#testimonials", label: "Testimonials", type: "internal" },
  { href: "#faq", label: "FAQ", type: "internal" },
  {
    href: "https://product.superteamng.fun",
    label: "Projects",
    type: "external",
  },
  { href: "#", label: "Events", type: "coming-soon" },
  { href: "https://earn.superteam.fun", label: "Earn", type: "external" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50">
        <header className="w-full tracking-tighter transition-all duration-300 shadow-sm bg-black/20 backdrop-blur-md">
          <div className="px-6 py-3">
            <div className="flex h-14 items-center justify-between">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  aria-label="SuperteamNG"
                  className="font-bold text-white text-xl tracking-tighter transition-colors"
                >
                  <Image
                    src="/logo.png"
                    alt="SuperteamNG"
                    width={100}
                    height={100}
                    className="w-10 h-10"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="-translate-x-1/2 absolute left-1/2 hidden transform items-center gap-2 md:flex">
                {navLinks.map((link) => {
                  if (link.type === "coming-soon") {
                    return (
                      <div
                        key={link.label}
                        className="group relative rounded-lg px-3 py-1 text-md tracking-tighter transition-colors text-white hover:bg-white/15 cursor-not-allowed opacity-75"
                      >
                        <span>{link.label}</span>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black shadow-lg dark:bg-black dark:text-white">
                            Coming Soon
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-white"></div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (link.type === "external") {
                    return (
                      <Link
                        key={link.label}
                        aria-label={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg px-3 py-1 text-md tracking-tighter transition-colors text-white hover:bg-white/15"
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  const handleClick = (
                    e: React.MouseEvent<HTMLAnchorElement>
                  ) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  };

                  return (
                    <Link
                      key={link.label}
                      aria-label={link.label}
                      href={link.href}
                      onClick={handleClick}
                      className="rounded-lg px-3 py-1 text-white text-md tracking-tighter transition-colors hover:bg-white/15"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop Get Started Button */}
              <div className="hidden items-center gap-3 md:flex">
                <GradientButton href="https://discord.gg/C6EgkeEAed">
                  Get onboarded
                </GradientButton>
              </div>

              {/* Mobile Menu */}
              <div className="flex items-center gap-2 md:hidden">
                <button
                  aria-expanded={open}
                  aria-label="Toggle navigation"
                  className="flex h-10 w-10 items-center justify-center transition hover:bg-accent/40"
                  onClick={() => setOpen((prev) => !prev)}
                  type="button"
                >
                  <span className="flex flex-col items-start justify-center gap-1.5">
                    <span
                      className={`block h-0.5 w-6 rounded-full bg-white transition shadow-xl ${
                        open ? "translate-y-[5px] rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`block h-0.5 w-3 rounded-full bg-white transition shadow-xl ${
                        open ? "-translate-y-[5px] -rotate-45 w-6" : ""
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/25 w-screen h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-50 h-screen w-[min(320px,80vw)] border-l border-white/10 bg-background px-6 py-8 shadow-2xl"
              initial={{ opacity: 0, x: 32, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, scale: 0.98 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
                <button
                  aria-label="Close navigation"
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent/60"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  if (link.type === "coming-soon") {
                    return (
                      <div
                        key={link.label}
                        className="flex items-center justify-between text-white text-lg font-medium tracking-tight py-2 px-4 rounded-full opacity-75 cursor-not-allowed touch-none"
                      >
                        <span>{link.label}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/60">
                          Soon
                        </span>
                      </div>
                    );
                  }

                  if (link.type === "external") {
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        onTouchEnd={() => setOpen(false)}
                        className="flex items-center justify-between text-lg font-medium tracking-tight py-3 px-4 rounded-full transition text-white hover:text-white/80 hover:bg-white/5 active:bg-white/10 touch-manipulation"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    );
                  }

                  const handleClick = (
                    e: React.MouseEvent<HTMLAnchorElement>
                  ) => {
                    e.stopPropagation();
                    setOpen(false);
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }, 100);
                    }
                  };

                  const handleTouch = (
                    e: React.TouchEvent<HTMLAnchorElement>
                  ) => {
                    e.stopPropagation();
                    setOpen(false);
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }, 100);
                    }
                  };

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={handleClick}
                      onTouchEnd={handleTouch}
                      className="flex items-center justify-between text-lg font-medium tracking-tight py-3 px-4 rounded-full transition hover:text-foreground/80 text-white dark:hover:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 touch-manipulation"
                    >
                      <span>{link.label}</span>
                      {link.href.startsWith("#") ? null : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link
                  href="https://discord.gg/C6EgkeEAed"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  onTouchEnd={() => setOpen(false)}
                  className="block"
                >
                  <GradientButton href="https://discord.gg/C6EgkeEAed">
                    Join the discord
                  </GradientButton>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
