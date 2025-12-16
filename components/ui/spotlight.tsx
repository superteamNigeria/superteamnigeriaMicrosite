"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

const useResponsiveSpotlight = ({
  translateY,
  width,
  height,
  smallWidth,
  xOffset,
}: {
  translateY: number;
  width: number;
  height: number;
  smallWidth: number;
  xOffset: number;
}) => {
  // Responsive: adjust spotlights for mobile vs desktop/tablet
  // We use a window.matchMedia approach, but fallback initially to mobile dimensions for SSR
  const [responsive, setResponsive] = React.useState<{
    translateY: number;
    width: number;
    height: number;
    smallWidth: number;
    xOffset: number;
  }>({
    translateY,
    width,
    height,
    smallWidth,
    xOffset,
  });

  React.useEffect(() => {
    function updateDimensions() {
      const isMobile = window.innerWidth < 640; // Tailwind's sm < 640px
      if (isMobile) {
        setResponsive({
          translateY: -120,
          width: 250,
          height: 650,
          smallWidth: 100,
          xOffset: 38,
        });
      } else if (window.innerWidth < 1024) {
        // Tablet
        setResponsive({
          translateY: -250,
          width: 400,
          height: 1100,
          smallWidth: 160,
          xOffset: 65,
        });
      } else {
        // Desktop
        setResponsive({
          translateY,
          width,
          height,
          smallWidth,
          xOffset,
        });
      }
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [translateY, width, height, smallWidth, xOffset]);
  return responsive;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(152, 78%, 80%, 0.13) 0%, hsla(152, 60%, 60%, 0.05) 50%, hsla(152, 60%, 35%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(152, 78%, 60%, 0.09) 0%, hsla(152, 60%, 46%, 0.04) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(152, 78%, 75%, 0.07) 0%, hsla(152, 60%, 34%, 0.03) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const {
    translateY: tY,
    width: w,
    height: h,
    smallWidth: sw,
    xOffset: xO,
  } = useResponsiveSpotlight({
    translateY,
    width,
    height,
    smallWidth,
    xOffset,
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xO, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${tY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${w}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xO, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-full h-full z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${tY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${w}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />

        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${sw}px`,
            height: `${h}px`,
          }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
};
