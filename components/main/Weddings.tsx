"use client";
import Image from "next/image";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import Link from "next/link";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

interface WeddingsProps {
  lang?: string;
  dict?: any;
}

const Weddings = ({ lang = "pl", dict }: WeddingsProps) => {
  const weddingsUrl = lang === "en" ? "/en/events" : "/pl/przyjecia";
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations with no bouncing
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Moderate parallax - images move within their frames but don't exceed boundaries
  const topRightImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );
  const bottomLeftImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    springConfig
  );
  const bottomMiddleImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]),
    springConfig
  );
  const bottomRightImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]),
    springConfig
  );

  return (
    <Container
      className="relative w-full py-18 md:py-28 md:mb-10"
      ref={sectionRef}
    >
      {/* Background Image */}
      <BackgroundLogoBottomDark />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Content Section */}
        <motion.div
          className="mb-8 md:mb-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AnimatedDecorativeBar />

          {/* Top Row: Complete left content with title, text, button + Big image on right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:items-start">
            {/* Left side - Title, Text and Button */}
            <div className="col-span-1 md:col-span-6 flex flex-col gap-4 md:gap-6">
              <motion.h1
                variants={fadeInUp}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="title-dark max-w-2xl whitespace-pre-line"
              >
                {dict?.weddings?.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="main-paragraph-dark whitespace-pre-line"
              >
                {dict?.weddings?.description}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link href={weddingsUrl}>
                  <Button size="lg" variant="fillRight" className="border-none">
                    {dict?.weddings?.learnMore}
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right side - Big image matching left column height - Hidden on mobile */}
            <div className="hidden md:block col-span-6 relative w-full h-full overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{
                  y: topRightImageY,
                  height: "120%", // Larger than container to accommodate movement
                  top: "-15%", // Center the oversized image
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src="/wedding/three.jpeg"
                  alt="Three cake"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row: One larger image and two smaller images side by side */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-7"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Larger image on the left - Only image shown on mobile */}
          <div className="col-span-1 md:col-span-6 relative w-full h-[250px] md:h-[350px] overflow-hidden">
            <motion.div
              className="relative w-full"
              style={{
                y: bottomLeftImageY,
                height: "120%", // Slightly larger for subtle movement
                top: "-10%", // Center the oversized image
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/wedding/dessert.jpeg"
                alt="Dessert"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Two smaller images side by side on the right - Hidden on mobile */}
          <div className="hidden md:grid col-span-6 grid-cols-2 gap-4 md:gap-6">
            {/* First smaller image */}
            <div className="relative w-full h-[350px] overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{
                  y: bottomMiddleImageY,
                  height: "120%", // Slightly larger for subtle movement
                  top: "-10%", // Center the oversized image
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  src="/wedding/daddy.jpeg"
                  alt={dict?.alts?.weddingDessertTable || "Słodki stół weselny"}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Second smaller image */}
            <div className="relative w-full h-[350px] overflow-hidden">
              <motion.div
                className="relative w-full"
                style={{
                  y: bottomRightImageY,
                  height: "120%", // Slightly larger for subtle movement
                  top: "-10%", // Center the oversized image
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Image
                  src="/wedding/decoration.jpeg"
                  alt="Dekoracje weselne"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Weddings;
