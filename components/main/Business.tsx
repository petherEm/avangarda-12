"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface BusinessProps {
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

const Business = ({ lang = "pl", dict }: BusinessProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const businessUrl = lang === "en" ? "/en/biznes" : "/pl/biznes";

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
      <Container className="relative w-full py-8 sm:py-10 md:py-10 lg:py-10 xl:py-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-10 lg:mb-10">
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
                <div className="text-center">
                  <AnimatedDecorativeBar />
                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark whitespace-pre-line"
                  >
                    {dict?.business?.mainTitle || "Konferencje & Eventy"}
                  </motion.h1>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark whitespace-pre-line"
                  >
                    {dict?.business?.mainDescription ||
                      "Butikowy hotel, położony w cichym, zielonym zakątku Mazowsza, zaledwie godzinę drogi od Warszawy, oferuje możliwość wynajmu na wyłączność i stanowi doskonałe miejsce do organizacji wydarzeń biznesowych – od kameralnych spotkań zarządu po duże konferencje, eventy, targi i spotkania branżowe. Tworzymy długotrwałe relacje z Klientami Biznesowymi, zapewniając indywidualne, pełne zaangażowanie podejście oraz gotowość, by sprostać nawet najbardziej wymagającym projektom."}
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
                        src="/business/conf-new-01.jpeg"
                        alt="Sala konferencyjna"
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
                        src="/conference/conf-main.png"
                        alt="Kameralna sala konferencyjna"
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
                className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 overflow-x-hidden"
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    98
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    Miejsca hotelowe
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict?.business?.facilities?.rooms || "8 sal"}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict?.business?.facilities?.roomsDescription ||
                      "Sale konferencyjne (ponad 1000 m² / dla 600 osób)"}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict?.business?.facilities?.attractions || "Atrakcje"}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 text-left">
                    {dict?.business?.facilities?.attractionsDescription ||
                      "Kręgle, kajaki, basen, Spa"}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict?.business?.facilities?.outdoorDining ||
                      "Kolacje w plenerze"}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 text-left">
                    {dict?.business?.facilities?.outdoorDiningDescription ||
                      "Fort No. 4, Przystań Avangarda, Dymna Polana"}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="col-span-2 flex justify-center pt-4 sm:pt-6"
                >
                  <Link href={businessUrl}>
                    <Button
                      size="lg"
                      variant="fillRight"
                      className="px-6 sm:px-8 py-2 sm:py-3"
                    >
                      {dict?.business?.learnMore || "Dowiedz się więcej"}
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
                      {dict?.business?.mainTitle || "Konferencje & Eventy"}
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
                      {dict?.business?.mainDescription ||
                        "Butikowy hotel, położony w cichym, zielonym zakątku Mazowsza, zaledwie godzinę drogi od Warszawy, oferuje możliwość wynajmu na wyłączność i stanowi doskonałe miejsce do organizacji wydarzeń biznesowych – od kameralnych spotkań zarządu po duże konferencje, eventy, targi i spotkania branżowe. Tworzymy długotrwałe relacje z Klientami Biznesowymi, zapewniając indywidualne, pełne zaangażowanie podejście oraz gotowość, by sprostać nawet najbardziej wymagającym projektom."}
                    </motion.p>

                    <motion.div
                      variants={fadeInLeft}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <Link href={businessUrl}>
                        <Button
                          size="lg"
                          variant="fillRight"
                          className="border-none"
                        >
                          {dict?.business?.learnMore || "Dowiedz się więcej"}
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
                    <div className="relative h-[600px] xl:h-[700px] w-[100%] overflow-hidden">
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
                          src="/business/conf-new-01.jpeg"
                          alt="Duża sala konferencyjna"
                          fill
                          priority
                          className="object-cover object-[40%_60%]"
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
                          src="/conference/conf-main.png"
                          alt="Kameralna sala konferencyjna"
                          fill
                          className="object-cover object-[30%_70%]"
                          quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Statistics List */}
                  <motion.div
                    className="grid grid-cols-1 gap-4 pt-8"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        98
                      </div>
                      <div className="text-base text-white/80">
                        Miejsca hotelowe
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict?.business?.facilities?.rooms ||
                          "8 sal (ponad 1000 m²)"}
                      </div>
                      <div className="text-base text-white/80">
                        {dict?.business?.facilities?.roomsDescription ||
                          "Sale konferencyjne (ponad 1000 m² / dla 600 osób)"}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict?.business?.facilities?.attractions || "Atrakcje"}
                      </div>
                      <div className="text-base text-white/80">
                        {dict?.business?.facilities?.attractionsDescription ||
                          "Kręgle, kajaki, basen, Spa"}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict?.business?.facilities?.outdoorDining ||
                          "Kolacje w plenerze"}
                      </div>
                      <div className="text-base text-white/80">
                        {dict?.business?.facilities?.outdoorDiningDescription ||
                          "Fort No. 4, Przystań Avangarda, Dymna Polana"}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Bottom Button */}
                  {/* <motion.div
                    variants={slideInFromRight}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="pt-6"
                  >
                    <Link href={businessUrl}>
                      <Button
                        size="lg"
                        variant="fillRight"
                        className="border-none"
                      >
                        Dowiedz się więcej
                      </Button>
                    </Link>
                  </motion.div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Business;
