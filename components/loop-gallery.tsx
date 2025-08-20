"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface LoopGalleryProps {
  images: GalleryImage[];
  title?: string;
  titleColor?: "light" | "dark";
  backgroundTheme?: "light" | "dark";
}

export default function LoopGallery({
  images,
  title = "Zapraszamy",
  titleColor = "light",
  backgroundTheme = "light",
}: LoopGalleryProps) {
  const titleColorClass = titleColor === "dark" ? "text-white" : "text-primary";
  const [isPaused, setIsPaused] = useState(false);

  // Double the images for seamless infinite scroll
  const doubleImages = [...images, ...images];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className={`py-8 w-full ${backgroundTheme === "dark" ? "relative -mt-16" : "mb-16"}`}
    >
      {/* Dark Background Gradient */}
      {backgroundTheme === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a3a3c] via-[#3a3a3c] to-[#2a2a2c]"></div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-8 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-avangarda"></div>
          <h2
            className={`text-2xl font-semibold text-center ${titleColorClass}`}
          >
            {title}
          </h2>
          <div className="h-px flex-1 bg-avangarda"></div>
        </div>
      </div>

      {/* Infinite Scroll Gallery - True Edge to Edge */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-auto overflow-y-hidden scrollbar-hide z-10"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className={`infinite-scroll flex gap-3 md:gap-6 ${isPaused ? "paused" : ""}`}
          style={{ width: "fit-content" }}
        >
          {doubleImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] lg:w-[30vw] xl:w-[35vw]"
            >
              <div className="relative aspect-[11/10] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={100}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .infinite-scroll {
          animation: scroll-left 40s linear infinite;
        }

        .infinite-scroll.paused {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.div>
  );
}
