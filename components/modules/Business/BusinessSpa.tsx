"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { Download } from "lucide-react";
import { fileUrl } from "@/lib/fileUrl";

interface BusinessSpaProps {
  lang?: string;
  dict?: any;
  spaOffer?: any;
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

const BusinessSpa = ({ lang = "pl", dict, spaOffer }: BusinessSpaProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const spaUrl = lang === "en" ? "/en/business-spa" : "/pl/biznes-spa";

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

  // Services without icons
  const services = [
    {
      title: dict?.business?.spa?.services?.massages?.title || "Masaże",
      subtitle:
        dict?.business?.spa?.services?.massages?.subtitle ||
        "Relaks i regeneracja",
    },
    {
      title:
        dict?.business?.spa?.services?.faceTreatments?.title ||
        "Zabiegi na twarz",
      subtitle:
        dict?.business?.spa?.services?.faceTreatments?.subtitle ||
        "Światowe marki kosmetyków",
    },
    {
      title:
        dict?.business?.spa?.services?.bodyTreatments?.title ||
        "Zabiegi na ciało",
      subtitle:
        dict?.business?.spa?.services?.bodyTreatments?.subtitle ||
        "Pielęgnacja od stóp do głów",
    },
    {
      title: dict?.business?.spa?.services?.workshops?.title || "Warsztaty Spa",
      subtitle:
        dict?.business?.spa?.services?.workshops?.subtitle ||
        "Baw się i ucz pięknie!",
    },
    {
      title:
        dict?.business?.spa?.services?.vouchers?.title || "Vouchery do Spa",
      subtitle:
        dict?.business?.spa?.services?.vouchers?.subtitle ||
        "Wyraź swoją wdzięczność",
    },
    {
      title:
        dict?.business?.spa?.services?.daySpaBusiness?.title ||
        "Biznesowe Day Spa",
      subtitle:
        dict?.business?.spa?.services?.daySpaBusiness?.subtitle ||
        "Inny sposób na integrację",
    },
  ];

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
      <Container className="relative w-full py-8 sm:py-12 md:py-16 lg:py-16 xl:py-20 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-10 md:mb-10 lg:mb-12">
        {/* Static Background - No Parallax */}
        <div className="absolute inset-0 lg:max-h-[1800px] xl:max-h-[1500px] z-0">
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
                <div className="text-left">
                  <AnimatedDecorativeBar />
                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark text-left"
                  >
                    {dict?.business?.spa?.title}
                  </motion.h1>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg leading-relaxed text-white"
                  >
                    {dict?.business?.spa?.description}
                  </motion.p>

                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg leading-relaxed text-white"
                  >
                    {dict?.business?.spa?.description2}
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
                        src="/business/ladies.jpeg"
                        alt="Ladies in SPA"
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
                        src="/business/gents.jpeg"
                        alt="Gents in SPA"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Second Section - Mobile */}
              <motion.div
                className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="text-left">
                  <AnimatedDecorativeBar />
                  <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="title-dark text-left"
                  >
                    {dict?.business?.spa?.leftTitle || "Usługi SPA dla firm"}
                  </motion.h1>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-lg leading-relaxed text-white"
                  >
                    {dict?.business?.spa?.leftDescription ||
                      "W naszym Hotelu doskonale rozumiemy, jak ważna jest równowaga między pracą a relaksem, dlatego przygotowaliśmy specjalną ofertę usług SPA dla biznesu Zapoznaj się z ofertą warsztatów SPA dla firm, które będą atrakcyjnym urozmaiceniem standardowych konferencji, wyróżnij najlepszych pracowników obdarowując ich voucherem do SPA lub skorzystaj z propozycji zorganizowania dla swojej firmy Biznes Day SPA, gdzie w relaksującej atmosferze wzmocnicie relacje w zespole."}
                  </motion.p>
                </div>
              </motion.div>

              {/* Services Grid - Mobile - All 6 services without icons */}
              <motion.div
                className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 pb-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={slideInFromRight}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    className="p-3 sm:p-4 border-b-2 border-avangarda bg-white/10 backdrop-blur-sm min-h-[100px] sm:min-h-[120px] flex flex-col justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-sm font-medium text-white mb-1">
                      {service.title}
                    </div>
                    <div className="text-xs text-white/80">
                      {service.subtitle}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button - Mobile */}
              <motion.div
                variants={slideInFromRight}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex justify-center pt-4 sm:pt-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {spaOffer && spaOffer.offerFile ? (
                  <Link
                    href={fileUrl(spaOffer.offerFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="fillRight"
                      className="px-6 sm:px-8 py-2 sm:py-3"
                    >
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      {dict?.business?.spa?.downloadOffer}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="lg"
                    variant="fillRight"
                    className="px-6 sm:px-8 py-2 sm:py-3"
                    disabled
                  >
                    Oferta niedostępna
                  </Button>
                )}
              </motion.div>
            </div>

            {/* Desktop Layout - Title moved to left, single images per column */}
            <div className="hidden lg:block whitespace-pre-line">
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
                      className="title-dark text-left"
                    >
                      {dict?.business?.spa?.title}
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
                      className="text-lg leading-relaxed text-white"
                    >
                      {dict?.business?.spa?.description}
                    </motion.p>

                    <motion.p
                      variants={fadeInLeft}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-lg leading-relaxed text-white"
                    >
                      {dict?.business?.spa?.description2}
                    </motion.p>

                    <motion.div
                      variants={fadeInLeft}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {spaOffer && spaOffer.offerFile ? (
                        <Link
                          href={fileUrl(spaOffer.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            variant="fillRight"
                            className="border-none"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {dict?.business?.spa?.downloadOffer}
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          size="lg"
                          variant="fillRight"
                          className="border-none"
                          disabled
                        >
                          Oferta niedostępna
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Tall Narrow Image - Lower width, bigger height, extending beyond gray */}
                  <motion.div
                    className="relative mt-18"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <div className="relative h-[700px] xl:h-[880px] w-[100%] overflow-hidden">
                      <motion.div
                        className="relative w-full"
                        style={{
                          y: mainImageY,
                          height: "130%",
                          top: "-10%",
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Image
                          src="/business/gents.jpeg"
                          alt="Gents in SPA"
                          fill
                          priority
                          className="object-cover object-right"
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
                    className="relative -mt-46 overflow-hidden"
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
                          src="/business/ladies.jpeg"
                          alt="ladies in SPA"
                          fill
                          className="object-cover object-centert"
                          quality={100}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Title moved to right column */}
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <AnimatedDecorativeBar />
                    <motion.h1
                      variants={fadeInUp}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="title-dark text-left"
                    >
                      {dict?.business?.spa?.leftTitle || "Usługi SPA dla firm"}
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
                      className="text-lg leading-relaxed text-white"
                    >
                      {dict?.business?.spa?.leftDescription ||
                        "W naszym Hotelu doskonale rozumiemy, jak ważna jest równowaga między pracą a relaksem, dlatego przygotowaliśmy specjalną ofertę usług SPA dla biznesu Zapoznaj się z ofertą warsztatów SPA dla firm, które będą atrakcyjnym urozmaiceniem standardowych konferencji, wyróżnij najlepszych pracowników obdarowując ich voucherem do SPA lub skorzystaj z propozycji zorganizowania dla swojej firmy Biznes Day SPA, gdzie w relaksującej atmosferze wzmocnicie relacje w zespole."}
                    </motion.p>

                    <motion.div
                      variants={fadeInLeft}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {spaOffer && spaOffer.offerFile ? (
                        <Link
                          href={fileUrl(spaOffer.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="lg"
                            variant="fillRight"
                            className="border-none"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {dict?.business?.spa?.downloadOffer}
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          size="lg"
                          variant="fillRight"
                          className="border-none"
                          disabled
                        >
                          Oferta niedostępna
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Services Grid - Desktop - All 6 services without icons */}
                  <motion.div
                    className="grid grid-cols-3 gap-3 pt-8 pb-16"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={slideInFromRight}
                        transition={{ delay: 0.1 * index, duration: 0.6 }}
                        className="p-4 border-b-2 border-avangarda bg-white/10 backdrop-blur-sm min-h-[140px] flex flex-col justify-center whitespace-pre-line"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg font-medium text-white mb-2">
                          {service.title}
                        </div>
                        <div className="text-sm text-white/80">
                          {service.subtitle}
                        </div>
                      </motion.div>
                    ))}
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

export default BusinessSpa;
