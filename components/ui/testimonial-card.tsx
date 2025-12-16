"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  username: string;
  avatar: string;
  content: string;
  verified?: boolean;
  className?: string;
  borderColor?: "emerald" | "blue" | "purple" | "orange" | "pink";
}

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
    </g>
  </svg>
);

const VerifiedIcon = ({ className }: { className?: string }) => (
  <svg aria-label="Verified Account" viewBox="0 0 24 24" className={className}>
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
);

export const TestimonialCard = ({
  name,
  username,
  avatar,
  content,
  verified = false,
  className,
  borderColor = "emerald",
}: TestimonialCardProps) => {
  const borderColors = {
    emerald: "border-emerald-500/20 hover:border-emerald-500/40",
    blue: "border-blue-500/20 hover:border-blue-500/40",
    purple: "border-purple-500/20 hover:border-purple-500/40",
    orange: "border-orange-500/20 hover:border-orange-500/40",
    pink: "border-pink-500/20 hover:border-pink-500/40",
  };

  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-xl border p-5 backdrop-blur-md transition-all hover:shadow-xl",
        "border-black/10 bg-white/80 dark:border-white/10 dark:bg-black/60",
        borderColors[borderColor],
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-row items-start justify-between tracking-tight">
        <div className="flex items-center space-x-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-transparent">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-black dark:text-white">
                {name}
              </span>
              {verified && <VerifiedIcon className="h-4 w-4 text-blue-500" />}
            </div>
            <div className="text-sm text-black/50 dark:text-white/50">
              @{username}
            </div>
          </div>
        </div>
        <div className="text-[#3BA9EE] transition-all ease-in-out hover:scale-105">
          <TwitterIcon className="h-5 w-5" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 leading-relaxed tracking-tight">
        <p className="text-sm text-black/80 dark:text-white/80 sm:text-base">
          {content}
        </p>
      </div>

      {/* Decorative gradient overlay on hover */}
      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-linear-to-br opacity-0 transition-opacity group-hover:opacity-100",
          borderColor === "emerald" && "from-emerald-500/5 to-transparent",
          borderColor === "blue" && "from-blue-500/5 to-transparent",
          borderColor === "purple" && "from-purple-500/5 to-transparent",
          borderColor === "orange" && "from-orange-500/5 to-transparent",
          borderColor === "pink" && "from-pink-500/5 to-transparent"
        )}
      />
    </div>
  );
};
