"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface EntertainmentProps {
  lang?: string;
  dict?: any;
}

const images = [
  { src: "/fort/fort-02.jpg", alt: "Entertainment 11" },
  { src: "/entertainment/13.JPG", alt: "Entertainment 13" },
  { src: "/entertainment/6.jpg", alt: "Entertainment 6" },
  { src: "/spa/pool-kids.jpg", alt: "Entertainment 12" },
  { src: "/entertainment/8.jpeg", alt: "Entertainment 8" },
  { src: "/entertainment/9.jpeg", alt: "Entertainment 9" },
  { src: "/entertainment/10.jpeg", alt: "Entertainment 10" },
];

// Duplicate the array for a seamless loop
const duplicatedImages = [...images, ...images];

const Entertainment = ({ lang = "pl", dict }: EntertainmentProps) => {
  const phoneNumber = "+48 29 752 50 34";

  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Determine the entertainment URL based on language
  const entertainmentUrl = lang === "en" ? "/en/rozrywka" : "/pl/rozrywka";

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="-mt-10 w-full text-primary overflow-hidden mb-8 relative">
      <div className="w-full md:py-6 xl:py-6 relative z-10">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 space-y-6">
          <h1 className="title-light text-center text-avangarda">
            {dict?.ctaGeneric?.title}
          </h1>

          <div className="flex flex-col md:flex-row items-center text-center md:items-center justify-center gap-4 md:gap-8">
            <p className="main-paragraph-light max-w-3xl">
              {dict?.ctaGeneric?.description}
            </p>
          </div>
        </div>

        {/* Full-width Slider Container */}
        <div className="relative w-full">
          {/* Connecting Line Behind Images */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
            <div
              className="w-full h-full opacity-20"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  #e31c79 10%, 
                  #e31c79 90%, 
                  transparent 100%
                )`,
              }}
            />
            {/* Animated pulse effect on the line */}
            <motion.div
              className="absolute top-0 left-0 h-full w-20 opacity-40"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  #e31c79 50%, 
                  transparent 100%
                )`,
              }}
              animate={{
                x: ["-100px", "calc(100vw + 100px)"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
          </div>

          {/* First Row - Right to Left */}
          <div className="relative w-[100vw] overflow-hidden z-10">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ width: "fit-content" }}
              initial={{ x: "0%" }}
              animate={
                shouldAnimate
                  ? {
                      x: ["0%", "-50%"],
                    }
                  : {}
              }
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`row1-${index}`}
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-[4/5] flex-shrink-0 overflow-hidden shadow-2xl"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex  items-center justify-center relative z-10">
          <Link
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="flex items-center gap-2"
          >
            <Button size="lg" className="w-fit" variant="fillRight">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              {dict?.ctaGeneric?.bookNow}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
