"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Link from "next/link";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { Download } from "lucide-react";
import { fileUrl } from "@/lib/fileUrl";

interface BusinessBanquetsProps {
  lang?: string;
  dict: {
    business: {
      banquets: {
        title: string;
        description1: string;
        description2: string;
        downloadOffer: string;
        offerUnavailable: string;
        offers: {
          banquet: string;
          buffet: string;
          business: string;
          served: string;
        };
        features: {
          businessDinners: {
            title: string;
            description: string;
          };
          banquets: {
            title: string;
            description: string;
          };
          galas: {
            title: string;
            description: string;
          };
          themedEvenings: {
            title: string;
            description: string;
          };
          culinaryShows: {
            title: string;
            description: string;
          };
          music: {
            title: string;
            description: string;
          };
        };
      };
    };
  };
  banquetOffers?: {
    main?: any;
    banquet?: any;
    buffet?: any;
    business?: any;
    served?: any;
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
};

const BusinessBanquets = ({
  lang = "pl",
  dict,
  banquetOffers,
}: BusinessBanquetsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );

  // Define the 4 download buttons
  const downloadButtons = [
    {
      key: "banquet",
      offer: banquetOffers?.banquet,
      label: dict.business.banquets.offers?.banquet || "Kolacja Bankiet",
    },
    {
      key: "buffet",
      offer: banquetOffers?.buffet,
      label: dict.business.banquets.offers?.buffet || "Kolacja Bufetowa",
    },
    {
      key: "business",
      offer: banquetOffers?.business,
      label: dict.business.banquets.offers?.business || "Kolacja Biznesowa",
    },
    {
      key: "served",
      offer: banquetOffers?.served,
      label: dict.business.banquets.offers?.served || "Kolacja Serwowana",
    },
  ];

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <Container className="relative w-full py-8 sm:py-12 md:py-16 lg:py-18 xl:py-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-14 lg:mb-14">
        {/* Background */}
        <div className="absolute inset-0 lg:max-h-[1100px] z-0">
          <BackgroundLogoBottomDark />
        </div>

        <section className="relative z-20">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              {/* Content Section - Mobile */}
              <motion.div
                className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12 whitespace-pre-line"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="">
                  <AnimatedDecorativeBar />
                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark"
                  >
                    {dict.business.banquets.title}
                  </motion.h1>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    {dict.business.banquets.description1}
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="main-paragraph-dark"
                  >
                    {dict.business.banquets.description2}
                  </motion.p>
                </div>

                {/* Download Buttons - Mobile - 2x2 Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-2 sm:gap-3 pt-4"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {downloadButtons.map((button, index) => (
                    <motion.div
                      key={button.key}
                      variants={slideInFromRight}
                      transition={{ delay: 0.5 + 0.1 * index, duration: 0.6 }}
                    >
                      {button.offer && button.offer.offerFile ? (
                        <Link
                          href={fileUrl(button.offer.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="fillRight"
                            className="w-full px-2 py-2 text-xs sm:text-sm"
                          >
                            <Download className="h-3 w-3 mr-1" />
                            {button.label}
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          size="sm"
                          variant="fillRight"
                          className="w-full px-2 py-2 text-xs sm:text-sm"
                          disabled
                        >
                          {button.label}
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Mobile Image */}
              <motion.div
                className="relative mb-8 sm:mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <motion.div
                    className="relative w-full"
                    style={{
                      y: imageY,
                      height: "120%",
                      top: "-10%",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Image
                      src="/business/fingerfood.jpeg"
                      alt="Finger food platter"
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Features List - Mobile */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
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
                    {dict.business.banquets.features.businessDinners.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {
                      dict.business.banquets.features.businessDinners
                        .description
                    }
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict.business.banquets.features.banquets.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict.business.banquets.features.banquets.description}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict.business.banquets.features.galas.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict.business.banquets.features.galas.description}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict.business.banquets.features.themedEvenings.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict.business.banquets.features.themedEvenings.description}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict.business.banquets.features.culinaryShows.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict.business.banquets.features.culinaryShows.description}
                  </div>
                </motion.div>

                <motion.div
                  variants={slideInFromRight}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="p-3 sm:p-4 border-b-2 border-avangarda"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                    {dict.business.banquets.features.music.title}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80">
                    {dict.business.banquets.features.music.description}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Desktop Layout - Image left, content right */}
            <div className="hidden lg:block">
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 relative items-start whitespace-pre-line">
                {/* Left Column - Image aligned with DecorativeBar */}
                <motion.div
                  className="relative"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <div className="relative h-[800px] xl:h-[1000px] w-full overflow-hidden">
                    <motion.div
                      className="relative w-full"
                      style={{
                        y: imageY,
                        height: "110%",
                        top: "-10%",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Image
                        src="/business/fingerfood.jpeg"
                        alt="Finger food platter"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Content starting with DecorativeBar */}
                <div className="space-y-8">
                  {/* Title and Text */}
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <AnimatedDecorativeBar />
                    <motion.h1
                      variants={fadeInUp}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="title-dark text-left mb-6"
                    >
                      {dict.business.banquets.title}
                    </motion.h1>

                    <motion.div
                      className="space-y-6 mb-8"
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <motion.p
                        variants={fadeInLeft}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg leading-relaxed text-white"
                      >
                        {dict.business.banquets.description1}
                      </motion.p>

                      <motion.p
                        variants={fadeInLeft}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg leading-relaxed text-white"
                      >
                        {dict.business.banquets.description2}
                      </motion.p>

                      {/* Download Buttons - Desktop - 2x2 Grid */}
                      <motion.div
                        className="grid grid-cols-2 gap-3"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {downloadButtons.map((button, index) => (
                          <motion.div
                            key={button.key}
                            variants={fadeInLeft}
                            transition={{
                              delay: 0.5 + 0.1 * index,
                              duration: 0.6,
                            }}
                          >
                            {button.offer && button.offer.offerFile ? (
                              <Link
                                href={fileUrl(button.offer.offerFile)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  size="default"
                                  variant="fillRight"
                                  className="w-full border-none"
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  {button.label}
                                </Button>
                              </Link>
                            ) : (
                              <Button
                                size="default"
                                variant="fillRight"
                                className="w-full border-none"
                                disabled
                              >
                                {button.label}
                              </Button>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Features List - Desktop */}
                  <motion.div
                    className="grid grid-cols-2 gap-6"
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
                        {dict.business.banquets.features.businessDinners.title}
                      </div>
                      <div className="text-base text-white/80">
                        {
                          dict.business.banquets.features.businessDinners
                            .description
                        }
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict.business.banquets.features.banquets.title}
                      </div>
                      <div className="text-base text-white/80">
                        {dict.business.banquets.features.banquets.description}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict.business.banquets.features.galas.title}
                      </div>
                      <div className="text-base text-white/80">
                        {dict.business.banquets.features.galas.description}
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict.business.banquets.features.themedEvenings.title}
                      </div>
                      <div className="text-base text-white/80">
                        {
                          dict.business.banquets.features.themedEvenings
                            .description
                        }
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict.business.banquets.features.culinaryShows.title}
                      </div>
                      <div className="text-base text-white/80">
                        {
                          dict.business.banquets.features.culinaryShows
                            .description
                        }
                      </div>
                    </motion.div>

                    <motion.div
                      variants={slideInFromRight}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="p-4 border-b-2 border-avangarda"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {dict.business.banquets.features.music.title}
                      </div>
                      <div className="text-base text-white/80">
                        {dict.business.banquets.features.music.description}
                      </div>
                    </motion.div>
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

export default BusinessBanquets;
