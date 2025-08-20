"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Waves,
  Utensils,
  CalendarHeart,
  TreePine,
  Smile,
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface AboutProps {
  dict: {
    about: {
      title: string;
      description: string;
      address: string;
      phone: string;
      email: string;
      directions: {
        car: string;
        public: string;
      };
      hours: string;
    };
    hotelIntro: {
      learnMore: string;
      whatMakesUsDifferent: string;
      location: string;
      features: {
        uniqueLocation: {
          title: string;
          description: string;
        };
        wellness: {
          title: string;
          description: string;
        };
        cuisine: {
          title: string;
          description: string;
        };
        familyBusiness: {
          title: string;
          description: string;
        };
        hospitality: {
          title: string;
          description: string;
        };
      };
    };
  };
  lang: string;
}

const About = ({ dict, lang }: AboutProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects - Images move inside static frames
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations with no bouncing
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Parallax movements for both images
  const mainImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );
  const secondaryImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]),
    springConfig
  );

  return (
    <>
      <div ref={sectionRef} className="mt-10 md:mt-20 max-w-7xl mx-auto px-4">
        {/* Header Section with New Layout */}
        <div className="mb-12">
          {/* Mobile Layout - Content First, Then Image */}
          <div className="block lg:hidden">
            {/* Mobile Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <AnimatedDecorativeBar />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="title-light"
              >
                {dict.about.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="main-paragraph-light"
              >
                {dict.about.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-avangarda hover:bg-avangarda/90 text-white px-8 py-3 text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {dict.hotelIntro.learnMore}
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Single Image with Parallax */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative overflow-hidden shadow-lg h-[300px] sm:h-[400px] -mx-4"
            >
              <motion.div
                className="relative w-full"
                style={{
                  y: mainImageY,
                  height: "130%", // Larger than container for parallax
                  top: "-15%", // Center the oversized image
                }}
              >
                <Image
                  src="/hotel/hotel-04.jpg"
                  alt={dict.about.title}
                  fill
                  priority
                  className="object-cover"
                  quality={100}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Images Collage + Content */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Images Collage */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-12 gap-4 h-[600px]">
                {/* Large Main Image - Left Side with Parallax */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="col-span-7 relative overflow-hidden shadow-lg h-full"
                >
                  <motion.div
                    className="relative w-full"
                    style={{
                      y: mainImageY,
                      height: "130%", // Larger than container for parallax
                      top: "-15%", // Center the oversized image
                    }}
                  >
                    <Image
                      src="/hotel/hotel-04.jpg"
                      alt={dict.about.title}
                      fill
                      priority
                      className="object-cover"
                      quality={100}
                    />
                  </motion.div>
                </motion.div>

                {/* Right Column with Top Image and Parallax */}
                <div className="col-span-5 flex flex-col gap-4 h-full">
                  {/* Top Right Image with Parallax */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative overflow-hidden shadow-lg flex-1"
                  >
                    <motion.div
                      className="relative w-full"
                      style={{
                        y: secondaryImageY,
                        height: "125%", // Larger than container for parallax
                        top: "-12%", // Center the oversized image
                      }}
                    >
                      <Image
                        src="/diver/narew-03.jpeg"
                        alt="Scenic view"
                        fill
                        priority
                        className="object-cover"
                        quality={100}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="lg:col-span-5 space-y-6 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <AnimatedDecorativeBar />

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="title-light"
                >
                  {dict.about.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="main-paragraph-light whitespace-pre-line"
                >
                  {dict.about.description}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content - What Makes Us Different and Map */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - What Makes Us Different and Ratings Combined */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="mt-0 h-full flex flex-col">
              {/* What Makes Us Different Section */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-5">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    {dict.hotelIntro.whatMakesUsDifferent}
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>

                <ul className="space-y-4 whitespace-break-spaces">
                  {/* Green Location */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <TreePine className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-0.5">
                        {dict.hotelIntro.features.uniqueLocation.title}
                      </h3>
                      <p className="text-gray-600 text-md">
                        {dict.hotelIntro.features.uniqueLocation.description}
                      </p>
                    </div>
                  </li>

                  {/* Wellness & Spa */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <Waves className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-0.5">
                        {dict.hotelIntro.features.wellness.title}
                      </h3>
                      <p className="text-gray-600 text-md">
                        {dict.hotelIntro.features.wellness.description}
                      </p>
                    </div>
                  </li>

                  {/* Restaurant */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-0.5">
                        {dict.hotelIntro.features.cuisine.title}
                      </h3>
                      <p className="text-gray-600 text-md">
                        {dict.hotelIntro.features.cuisine.description}
                      </p>
                    </div>
                  </li>

                  {/* Events & Meetings */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <CalendarHeart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-0.5">
                        {dict.hotelIntro.features.familyBusiness.title}
                      </h3>
                      <p className="text-gray-600 text-md">
                        {dict.hotelIntro.features.familyBusiness.description}
                      </p>
                    </div>
                  </li>

                  {/* Hospitality */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <Smile className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold text-lg mb-0.5">
                        {dict.hotelIntro.features.hospitality.title}
                      </h3>
                      <p className="text-gray-600 text-md">
                        {dict.hotelIntro.features.hospitality.description}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map with Better Button Placement */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="space-y-4">
              {/* Map Header with Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    {dict.hotelIntro.location}
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>
                <Button
                  size="sm"
                  className="bg-avangarda hover:bg-avangarda/90 text-white transition-all"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/6eFZW5kQxosNaUR38",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Google Maps
                </Button>
              </div>

              {/* Map Image */}
              <div className="relative overflow-hidden h-full min-h-[400px] lg:min-h-[500px]">
                <div className="h-full w-full">
                  <Image
                    src="/mapa-ava.png"
                    alt="Map"
                    fill
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
