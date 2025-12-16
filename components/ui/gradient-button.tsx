/**
 * @author: @dorian_baffier
 * @description: Gradient Button (Dark Mode Only, Wider & Less Vertical Padding)
 * @version: 1.0.2
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type ColorVariant = "emerald" | "purple" | "orange";

interface DarkGradientColors {
  border: string;
  overlay: string;
  accent: string;
  text: string;
  glow: string;
  textGlow: string;
  hover: string;
}

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  label?: string;
  className?: string;
  variant?: ColorVariant;
  href?: string;
}

const darkGradientColors: Record<ColorVariant, DarkGradientColors> = {
  emerald: {
    border: "from-[#336C4F] via-[#0C1F21] to-[#0D6437]",
    overlay: "from-[#347B52]/40 via-[#0C1F21] to-[#0D6437]/30",
    accent: "from-[#87F6B7]/10 via-[#0C1F21] to-[#17362A]/50",
    text: "from-[#8AEECA] to-[#73F8A8]",
    glow: "rgba(135,246,183,0.1)",
    textGlow: "rgba(135,246,183,0.4)",
    hover: "from-[#17362A]/20 via-[#87F6B7]/10 to-[#17362A]/20",
  },
  purple: {
    border: "from-[#6B46C1] via-[#0C1F21] to-[#553C9A]",
    overlay: "from-[#7E22CE]/40 via-[#0C1F21] to-[#6B46C1]/30",
    accent: "from-[#E9D8FD]/10 via-[#0C1F21] to-[#44337A]/50",
    text: "from-[#E9D8FD] to-[#D6BCFA]",
    glow: "rgba(159,122,234,0.1)",
    textGlow: "rgba(159,122,234,0.4)",
    hover: "from-[#44337A]/20 via-[#B794F4]/10 to-[#44337A]/20",
  },
  orange: {
    border: "from-[#C05621] via-[#0C1F21] to-[#9C4221]",
    overlay: "from-[#DD6B20]/40 via-[#0C1F21] to-[#C05621]/30",
    accent: "from-[#FED7AA]/10 via-[#0C1F21] to-[#7B341E]/50",
    text: "from-[#FED7AA] to-[#FBD38D]",
    glow: "rgba(237,137,54,0.1)",
    textGlow: "rgba(237,137,54,0.4)",
    hover: "from-[#7B341E]/20 via-[#ED8936]/10 to-[#7B341E]/20",
  },
};

export function GradientButton({
  label,
  icon,
  children,
  className,
  variant,
  href,
  ...props
}: GradientButtonProps) {
  const colors = darkGradientColors[variant || "emerald"];

  return !href ? (
    <Button
      variant="ghost"
      className={cn(
        "group relative min-w-[200px] px-4 h-10 rounded-lg overflow-hidden transition-all duration-500", // <--- smaller vertical padding (h-10), much wider (min-w-[200px], px-8)
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg p-[2px] bg-linear-to-b",
          colors.border
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-lg opacity-90",
            "bg-[#0C1F21]"
          )}
        />
      </div>

      <div
        className={cn(
          "absolute inset-[2px] rounded-lg opacity-95",
          "bg-[#0C1F21]"
        )}
      />

      <div
        className={cn(
          "absolute inset-[2px] bg-linear-to-r rounded-lg opacity-90",
          "from-[#0C1F21] via-[#0C1F21] to-[#0C1F21]"
        )}
      />

      <div
        className={cn(
          "absolute inset-[2px] bg-linear-to-b rounded-lg opacity-80",
          colors.overlay
        )}
      />

      <div
        className={cn(
          "absolute inset-[2px] bg-linear-to-br rounded-lg",
          colors.accent
        )}
      />

      <div
        className={cn(
          "absolute inset-[2px] rounded-lg",
          `shadow-[inset_0_0_10px_${colors.glow}]`
        )}
      />

      <div className="relative flex items-center justify-center gap-2">
        <span
          className={cn(
            "text-lg font-light bg-linear-to-b bg-clip-text text-transparent tracking-tighter",
            colors.text,
            `drop-shadow-[0_0_12px_${colors.textGlow}]`
          )}
        >
          {label}
        </span>
      </div>

      <div
        className={cn(
          "absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-linear-to-r group-hover:opacity-100 rounded-lg",
          colors.hover
        )}
      />
    </Button>
  ) : (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "group relative min-w-[200px] px-4 h-10 rounded-lg overflow-hidden transition-all duration-500", // <--- smaller vertical padding (h-10), much wider (min-w-[200px], px-8)
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-lg p-[2px] bg-linear-to-b",
            colors.border
          )}
        >
          <div
            className={cn(
              "absolute inset-0 rounded-lg opacity-90",
              "bg-[#0C1F21]"
            )}
          />
        </div>

        <div
          className={cn(
            "absolute inset-[2px] rounded-lg opacity-95",
            "bg-[#0C1F21]"
          )}
        />

        <div
          className={cn(
            "absolute inset-[2px] bg-linear-to-r rounded-lg opacity-90",
            "from-[#0C1F21] via-[#0C1F21] to-[#0C1F21]"
          )}
        />

        <div
          className={cn(
            "absolute inset-[2px] bg-linear-to-b rounded-lg opacity-80",
            colors.overlay
          )}
        />

        <div
          className={cn(
            "absolute inset-[2px] bg-linear-to-br rounded-lg",
            colors.accent
          )}
        />

        <div
          className={cn(
            "absolute inset-[2px] rounded-lg",
            `shadow-[inset_0_0_10px_${colors.glow}]`
          )}
        />

        <div className="relative flex items-center justify-center gap-2">
          <span
            className={cn(
              "text-lg font-light bg-linear-to-b bg-clip-text text-transparent tracking-tighter",
              colors.text,
              `drop-shadow-[0_0_12px_${colors.textGlow}]`
            )}
          >
            {label || children}
          </span>
        </div>

        <div
          className={cn(
            "absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-linear-to-r group-hover:opacity-100 rounded-lg",
            colors.hover
          )}
        />
      </Button>
    </Link>
  );
}
