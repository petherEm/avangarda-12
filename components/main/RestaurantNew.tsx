"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface RestaurantProps {
  dict: {
    restaurants: {
      title: string;
      description: string;
      details: string;
    };
  };
  lang?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const RestaurantNew = ({ dict, lang }: RestaurantProps) => {
  // Determine the correct URL based on language
  const restaurantUrl = lang === "en" ? "/en/restaurants" : "/pl/restauracja";

  return (
    <Container className="bg-white w-full text-primary py-8 md:py-20 mb-18 md:mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Whiskey image on left, text content on right */}
        <motion.div
          className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left half - Whiskey image */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-[250px] md:h-[400px]"
          >
            <Image
              src="/main/whiskey.jpeg"
              alt="Whiskey"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>

          {/* Right half - Text content with button below */}
          <div className="flex flex-col justify-center">
            <AnimatedDecorativeBar />
            <motion.h1
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="title-light"
            >
              {dict.restaurants.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="main-paragraph-light"
            >
              {dict.restaurants.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link href={restaurantUrl}>
                <Button size="lg" variant="fillRight">
                  {dict.restaurants.details || "Dowiedz się więcej"}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Row - Two plate images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* First plate image */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full h-[230px] md:h-[330px]"
          >
            <Image
              src="/main/plate-01.jpeg"
              alt="Plate 1"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Second plate image */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full h-[230px] md:h-[330px]"
          >
            <Image
              src="/main/plate-02.jpeg"
              alt="Plate 2"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default RestaurantNew;
