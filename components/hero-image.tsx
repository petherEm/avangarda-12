"use client";

import { Container } from "@/components/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedDecorativeBar } from "./animated-decorative-bar";

// Option 1: Center Aligned Title with Animation - Moved Down
export function HeroImageCentered({ image, title }) {
  return (
    <div className="relative w-full h-[70vh] md:h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 pointer-events-none" />

      {/* Centered Title - Moved Down */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ paddingTop: "15vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-avangarda mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}

// Option 2: Left-aligned with vertical centering - Moved Down
export function HeroImageLeftCentered({ image, title }) {
  return (
    <div className="relative w-full h-[70vh] md:h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/30 pointer-events-none" />

      {/* Left-centered title - Moved Down */}
      <Container
        className="relative h-full flex items-center"
        style={{ paddingTop: "15vh" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="w-20 h-1 bg-avangarda mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
        </motion.div>
      </Container>
    </div>
  );
}

// Option 3: Lower Third Placement
export function HeroImageLowerThird({ image, title }) {
  return (
    <div className="relative w-full h-[70vh] md:h-screen">
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} hero background`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={100}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10 pointer-events-none" />

      {/* Lower Third Title Placement */}
      <Container className="absolute inset-x-0 bottom-0 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <AnimatedDecorativeBar />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-normal">
            {title}
          </h1>
        </motion.div>
      </Container>
    </div>
  );
}

// Default export with your preferred option
export default HeroImageLowerThird;
