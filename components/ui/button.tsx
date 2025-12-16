import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const buttonVariants = {
  default:
    "bg-black text-white hover:bg-black/90 dark:bg-white/95 dark:text-black dark:hover:bg-white/80",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700",
  outline:
    "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
  ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800",
  link: "bg-transparent underline-offset-4 hover:underline text-black dark:text-white hover:bg-transparent",
};

const buttonSizes = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3 rounded-md",
  lg: "h-10 px-8 rounded-md",
  icon: "h-9 w-9 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium shadow-sm rounded-lg tracking-tighter transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
