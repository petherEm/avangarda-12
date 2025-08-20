"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WEDDING_GALLERY } from "@/constants";

interface EventsGalleryProps {
  lang?: string;
  dict?: Record<string, string>;
}

// Duplicate the array for a seamless loop
const duplicatedImages = [...WEDDING_GALLERY, ...WEDDING_GALLERY];

const EventsGallery = ({ dict }: EventsGalleryProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <section className="w-full text-primary py-8 md:py-16 overflow-hidden">
      <div className=" w-full py-8 md:py-12">
        {/* Full-width Slider Container */}
        <div className="relative w-full">
          {/* First Row - Right to Left */}
          <div className="relative w-[100vw] overflow-hidden">
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
                  className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-square flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={dict?.[image.altKey] || image.altKey}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
