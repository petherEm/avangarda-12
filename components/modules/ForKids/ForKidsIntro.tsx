"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Trees,
  Footprints,
  FishIcon as Swimming,
  Baby,
  PlayIcon as Playground,
  Users,
  Target,
  Gamepad2,
  UtensilsCrossed,
  VolleyballIcon,
  Circle,
  Sparkles,
  Calendar,
  Music,
  Utensils,
  MapPin,
  Bike,
  Dumbbell,
  Download,
  Star,
  BedDouble,
  UtensilsCrossedIcon,
  ThermometerSun,
  HeartPlus,
  CandyCane,
  Tractor,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { fileUrl } from "@/lib/fileUrl";

interface ForKidsIntroProps {
  dict: any;
  lang: string;
  kidsOffers?: {
    familijnaNiedziela?: any;
    kidsSpa?: any;
    kidsAtrakcjeSezonowe?: any;
    kidsDziecieceUrodzinki?: any;
  };
}

export default function ForKidsIntro({
  dict,
  lang,
  kidsOffers,
}: ForKidsIntroProps) {
  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 1. HOTEL PRZYJAZNY DZIECIOM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/kids/kids-friendly-main-01.jpeg"
                alt={dict.forKidsIntro.kidsFriendly.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between whitespace-pre-line">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.forKidsIntro.kidsFriendly.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.forKidsIntro.kidsFriendly.description}
                </motion.p>
              </div>

              {/* Activity Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsParty.features.animations.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsParty.features.animations
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BedDouble className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.kidsFriendly.features.familyRooms
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsFriendly.features.familyRooms
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.kidsFriendly.features.roomAmenities
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsFriendly.features.roomAmenities
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <UtensilsCrossed className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.kidsFriendly.features.healthyKitchen
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsFriendly.features.healthyKitchen
                        .description
                    }
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Hotel Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                {dict.forKidsIntro.kidsFriendly.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-friendly-03.jpeg"
                  alt={dict.forKidsIntro.kidsFriendly.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-friendly-02.jpeg"
                  alt={dict.forKidsIntro.kidsFriendly.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-friendly-04.jpeg"
                  alt={dict.forKidsIntro.kidsFriendly.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-friendly-01.jpeg"
                  alt={dict.forKidsIntro.kidsFriendly.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4 whitespace-pre-line">
          {/* 2. Four Kids Play Zones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <div className="order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.forKidsIntro.fourPlayZones.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.forKidsIntro.fourPlayZones.description}
                </motion.p>
              </div>

              {/* Games Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.fourPlayZones.features.playRoom.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.fourPlayZones.features.playRoom
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.fourPlayZones.features.bowling.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.fourPlayZones.features.bowling
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.fourPlayZones.features.playground
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.fourPlayZones.features.playground
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ThermometerSun className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.fourPlayZones.features.marina.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.fourPlayZones.features.marina
                        .description
                    }
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2 relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/kids/kids-4-areas-main-01.jpeg"
                alt={dict.forKidsIntro.fourPlayZones.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Cztery Strefy with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8 whitespace-pre-line">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                {dict.forKidsIntro.fourPlayZones.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-4-areas-02.jpeg"
                  alt={dict.forKidsIntro.fourPlayZones.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-4-areas-01.jpeg"
                  alt={dict.forKidsIntro.fourPlayZones.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-4-areas-03.jpeg"
                  alt={dict.forKidsIntro.fourPlayZones.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-4-areas-04.jpeg"
                  alt={dict.forKidsIntro.fourPlayZones.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 3. Wellness & SPA for Kids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0 whitespace-pre-line">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/kids/kids-spa-01.jpeg"
                alt={dict.forKidsIntro.kidsSpa.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.forKidsIntro.kidsSpa.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.forKidsIntro.kidsSpa.description}
                </motion.p>

                {/* Download Buttons Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-600 mb-3">
                      {dict.forKidsIntro.kidsSpa.downloadTitle}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {kidsOffers?.familijnaNiedziela &&
                    kidsOffers.familijnaNiedziela.offerFile ? (
                      <Link
                        href={fileUrl(kidsOffers.familijnaNiedziela.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          {
                            dict.forKidsIntro.kidsSpa.downloadButtons
                              .familySunday
                          }
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="avangarda"
                        size="sm"
                        className="w-full text-xs"
                        disabled
                      >
                        <Download className="h-3 w-3" />
                        {dict.forKidsIntro.kidsSpa.downloadButtons.familySunday}
                      </Button>
                    )}

                    {kidsOffers?.kidsSpa && kidsOffers.kidsSpa.offerFile ? (
                      <Link
                        href={fileUrl(kidsOffers.kidsSpa.offerFile)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="w-full text-xs"
                        >
                          <Download className="h-3 w-3" />
                          {dict.forKidsIntro.kidsSpa.downloadButtons.kidsSpa}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="avangarda"
                        size="sm"
                        className="w-full text-xs"
                        disabled
                      >
                        <Download className="h-3 w-3" />
                        {dict.forKidsIntro.kidsSpa.downloadButtons.kidsSpa}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Kids Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsSpa.features.paddling.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.forKidsIntro.kidsSpa.features.paddling.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsSpa.features.shallowPool.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.forKidsIntro.kidsSpa.features.shallowPool.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartPlus className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsSpa.features.kidsSpaServices.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsSpa.features.kidsSpaServices
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsSpa.features.familySunday.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsSpa.features.familySunday
                        .description
                    }
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Kids Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                {dict.forKidsIntro.kidsSpa.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-spa-05.jpeg"
                  alt={dict.forKidsIntro.kidsSpa.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-spa-04.jpeg"
                  alt={dict.forKidsIntro.kidsSpa.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-spa-03.jpeg"
                  alt={dict.forKidsIntro.kidsSpa.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-spa-02.jpeg"
                  alt={dict.forKidsIntro.kidsSpa.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 4. AKTYWNY WYPOCZYNEK SECTION - INVERTED */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0 whitespace-pre-line">
            <div className="order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.forKidsIntro.seasonalAttractions.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.forKidsIntro.seasonalAttractions.description}
                </motion.p>

                {/* Download Button for Seasonal Attractions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-600 mb-3">
                      {dict.forKidsIntro.seasonalAttractions.downloadTitle}
                    </h3>
                  </div>

                  <div className="flex justify-start">
                    {kidsOffers?.kidsAtrakcjeSezonowe &&
                    kidsOffers.kidsAtrakcjeSezonowe.offerFile ? (
                      <Link
                        href={fileUrl(
                          kidsOffers.kidsAtrakcjeSezonowe.offerFile
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="text-xs"
                        >
                          <Download className="h-3 w-3" />
                          {dict.forKidsIntro.seasonalAttractions.downloadButton}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="avangarda"
                        size="sm"
                        className="text-xs"
                        disabled
                      >
                        <Download className="h-3 w-3" />
                        {dict.forKidsIntro.seasonalAttractions.downloadButton}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Activity Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CandyCane className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.seasonalAttractions.features
                          .santaVillage.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.seasonalAttractions.features
                        .santaVillage.description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tractor className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.seasonalAttractions.features
                          .pumpkinFarm.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.seasonalAttractions.features.pumpkinFarm
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <VolleyballIcon className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.seasonalAttractions.features
                          .inflatables.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.seasonalAttractions.features.inflatables
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bike className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.forKidsIntro.seasonalAttractions.features
                          .summerVacation.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.seasonalAttractions.features
                        .summerVacation.description
                    }
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2 relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/kids/mikolaj-04.jpeg"
                alt={dict.forKidsIntro.seasonalAttractions.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Activity Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8 whitespace-pre-line">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                {dict.forKidsIntro.seasonalAttractions.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/mikolaj-05.jpeg"
                  alt={dict.forKidsIntro.seasonalAttractions.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/mikolaj-02.jpeg"
                  alt={dict.forKidsIntro.seasonalAttractions.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/mikolaj-01.jpeg"
                  alt={dict.forKidsIntro.seasonalAttractions.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/mikolaj-03.jpeg"
                  alt={dict.forKidsIntro.seasonalAttractions.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 5. BIRTHDAY SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0 whitespace-pre-line">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/kids/kids-birthday-main-01.jpeg"
                alt={dict.forKidsIntro.kidsParty.imageAlt}
                fill
                className="object-cover object-bottom"
                quality={100}
              />
            </motion.div>

            <div className="flex flex-col justify-between">
              <div>
                <AnimatedDecorativeBar />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.forKidsIntro.kidsParty.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.forKidsIntro.kidsParty.description}
                </motion.p>

                {/* Download Button for Kids Birthday */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-slate-600 mb-3">
                      Pobierz informacje o urodzinkach:
                    </h3>
                  </div>

                  <div className="flex justify-start">
                    {kidsOffers?.kidsDziecieceUrodzinki &&
                    kidsOffers.kidsDziecieceUrodzinki.offerFile ? (
                      <Link
                        href={fileUrl(
                          kidsOffers.kidsDziecieceUrodzinki.offerFile
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Button
                          variant="avangarda"
                          size="sm"
                          className="text-xs"
                        >
                          <Download className="h-3 w-3" />
                          {dict.forKidsIntro.kidsParty.downloadButton}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="avangarda"
                        size="sm"
                        className="text-xs"
                        disabled
                      >
                        <Download className="h-3 w-3" />
                        {dict.forKidsIntro.kidsParty.downloadButton}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Weekend Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              >
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Music className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsParty.features.clubCoola.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.forKidsIntro.kidsParty.features.clubCoola.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsParty.features.fireplace.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.forKidsIntro.kidsParty.features.fireplace.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsParty.features.marina.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.forKidsIntro.kidsParty.features.marina.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.forKidsIntro.kidsParty.features.animations.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.forKidsIntro.kidsParty.features.animations
                        .description
                    }
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Birthday Gallery with Dark Background */}
      <div className="relative mb-16 py-28">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-white/30"></div>
              <h2 className="text-2xl font-semibold text-center text-white">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-birthday-05.jpeg"
                  alt={dict.forKidsIntro.kidsParty.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/kids/kids-birthday-03.jpeg"
                  alt={dict.forKidsIntro.kidsParty.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-birthday-04.jpeg"
                  alt={dict.forKidsIntro.kidsParty.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/kids/kids-birthday-02.jpeg"
                  alt={dict.forKidsIntro.kidsParty.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
