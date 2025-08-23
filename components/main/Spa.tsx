"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface SpaProps {
  lang?: string;
  dict?: any;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

const Spa = ({ lang = "pl", dict }: SpaProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const spaUrl = lang === "en" ? "/en/spa" : "/pl/spa";

  // Parallax scroll effects - Images move inside static frames
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Faster, more responsive spring animations
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Extreme parallax - images move way beyond frame boundaries
  const mainImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]),
    springConfig
  );
  const secondaryImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]),
    springConfig
  );

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <Container className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10 md:mb-10 lg:mb-12 xl:mb-8">
        {/* Static Background - No Parallax */}
        <div className="absolute inset-0 lg:max-h-[1200px] z-0">
          <BackgroundLogoBottomDark />
        </div>

        <section className="relative z-20">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Content Section - Mobile First */}
              <motion.div
                ref={contentRef}
                className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="text-center flex flex-col items-center">
                  <AnimatedDecorativeBar />
                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark whitespace-pre-line"
                  >
                    {dict?.spa?.main?.title}
                  </motion.h1>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark whitespace-pre-line"
                  >
                    {dict?.spa?.main?.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Mobile Images */}
              <motion.div
                className="relative mb-4 sm:mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="relative z-50 -mt-4 space-y-4 overflow-hidden">
                  <div className="w-full aspect-[6/5] sm:aspect-[4/3] relative overflow-hidden">
                    <motion.div
                      className="relative w-full"
                      style={{
                        y: mainImageY,
                        height: "140%",
                        top: "-20%",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <Image
                        src="/spa/spa-new-01.jpeg"
                        alt="SPA lady"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </div>

                  <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <motion.div
                      className="relative w-full"
                      style={{
                        y: secondaryImageY,
                        height: "140%",
                        top: "-20%",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Image
                        src="/spa/spa-couple.jpeg"
                        alt="SPA couple"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Features List - Mobile */}
              <motion.div
                className="space-y-3 sm:space-y-4 md:space-y-6 sm:px-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="text-center flex flex-col items-center"
                >
                  <AnimatedDecorativeBar />
                  <motion.h2
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark whitespace-pre-line"
                  >
                    {dict?.spa?.main?.wellnessTitle}
                  </motion.h2>
                </motion.div>

                <motion.p
                  variants={slideInFromRight}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  {dict?.spa?.main?.wellnessDescription}
                </motion.p>

                <motion.p
                  variants={slideInFromRight}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  {dict?.spa?.main?.wellnessDescription2}
                </motion.p>

                <motion.p
                  variants={slideInFromRight}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="main-paragraph-dark"
                >
                  {dict?.spa?.main?.wellnessDescription3}
                </motion.p>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex justify-center pt-4 sm:pt-6"
                >
                  <Link href={spaUrl}>
                    <Button
                      size="lg"
                      variant="fillRight"
                      className="px-6 sm:px-8 py-2 sm:py-3"
                    >
                      {dict?.spa?.main?.learnMore}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop Layout - Title moved to left, single images per column */}
            <div className="hidden lg:block">
              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 relative">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Title moved to left column */}
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <AnimatedDecorativeBar />
                    <motion.h1
                      variants={fadeInUp}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="title-dark text-left whitespace-pre-line"
                    >
                      {dict?.spa?.main?.title}
                    </motion.h1>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    className="space-y-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.p
                      variants={fadeInLeft}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-lg leading-relaxed text-white whitespace-pre-line"
                    >
                      {dict?.spa?.main?.description}
                    </motion.p>

                    <motion.div
                      variants={fadeInLeft}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <Link href={spaUrl}>
                        <Button
                          size="lg"
                          variant="fillRight"
                          className="border-none"
                        >
                          {dict?.spa?.main?.learnMore}
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Tall Narrow Image - Lower width, bigger height, extending beyond gray */}
                  <motion.div
                    className="relative mt-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <div className="relative h-[600px] xl:h-[760px] w-[100%] overflow-hidden">
                      <motion.div
                        className="relative w-full"
                        style={{
                          y: mainImageY,
                          height: "140%",
                          top: "-20%",
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Image
                          src="/spa/spa-couple.jpeg"
                          alt="SPA couple"
                          fill
                          priority
                          className="object-cover"
                          quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Single Top Image - Lower width, bigger height, extending beyond gray */}
                  <motion.div
                    className="relative -mt-36 overflow-hidden"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <div className="relative h-[500px] xl:h-[700px] w-[100%] mr-auto overflow-hidden">
                      <motion.div
                        className="relative w-full"
                        style={{
                          y: secondaryImageY,
                          height: "120%",
                          top: "0%",
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <Image
                          src="/spa/spa-new-01.jpeg"
                          alt="SPA lady"
                          fill
                          className="object-cover object-right"
                          quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Statistics List */}
                  <motion.div
                    className="space-y-6 pt-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <AnimatedDecorativeBar />
                      <motion.h1
                        variants={fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="title-dark text-left whitespace-pre-line"
                      >
                        {dict?.spa?.main?.wellnessTitle}
                      </motion.h1>
                    </motion.div>
                    <motion.p
                      variants={slideInFromRight}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="text-lg leading-relaxed text-white whitespace-pre-line"
                    >
                      {dict?.spa?.main?.wellnessDescription}
                    </motion.p>

                    <motion.p
                      variants={slideInFromRight}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-lg leading-relaxed text-white whitespace-pre-line"
                    >
                      {dict?.spa?.main?.wellnessDescription2}
                    </motion.p>

                    <motion.p
                      variants={slideInFromRight}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="text-lg leading-relaxed text-white whitespace-pre-line"
                    >
                      {dict?.spa?.main?.wellnessDescription3}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Spa;
