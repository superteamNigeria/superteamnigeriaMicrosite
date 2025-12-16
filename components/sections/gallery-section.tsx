"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const GallerySection = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => `/community/${i}.png`);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative mb-4 flex min-h-[70vh] items-center justify-center overflow-hidden rounded-xl py-16 sm:mx-4 sm:py-24 bg-black"
      id="gallery"
    >
      <div className="relative min-h-[70vh] w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`Community member ${currentIndex + 1}`}
                width={600}
                height={600}
                className="rounded-2xl mx-auto scale-130"
                priority
                style={{ objectFit: "contain" }}
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
