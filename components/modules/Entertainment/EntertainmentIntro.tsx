"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Waves,
  Trees,
  Footprints,
  FishIcon as Swimming,
  Clock,
  Baby,
  PlayIcon as Playground,
  Leaf,
  Users,
  Target,
  Gamepad2,
  Flame,
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
  HeartPlus,
  SoapDispenserDroplet,
  SunSnow,
  HeartPulse,
  Sailboat,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

export default function OutdoorEntertainment({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* 1. HOTEL PEŁEN MOŻLIWOŚCI SECTION */}
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
                src="/entertainment/hotel-features-main-01.jpeg"
                alt={dict.entertainmentIntro.hotelFull.imageAlt}
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
                  {dict.entertainmentIntro.hotelFull.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light whitespace-pre-line"
                >
                  {dict.entertainmentIntro.hotelFull.description}
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
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.klubCoola
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.klubCoola
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.hotelFull.features.pool.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.pool
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.hotelFull.features.spa.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.entertainmentIntro.hotelFull.features.spa.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.weekends
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.weekends
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.location
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.location
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
                {dict.entertainmentIntro.hotelFull.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/hotel-features-04.jpeg"
                  alt={dict.entertainmentIntro.hotelFull.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/entertain-hotel-new-04.jpeg"
                  alt={dict.entertainmentIntro.hotelFull.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/hotel-features-02.jpeg"
                  alt={dict.entertainmentIntro.hotelFull.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/hotel-features-03.jpeg"
                  alt={dict.entertainmentIntro.hotelFull.gallery.alt4}
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
          {/* 2. KLUB COOLA SECTION - INVERTED */}
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
                  {dict.entertainmentIntro.klubCoola.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.entertainmentIntro.klubCoola.description}
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
                    <Circle className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.klubCoola.features.bowling.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.klubCoola.features.bowling
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.klubCoola.features.billiard
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.klubCoola.features.billiard
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.klubCoola.features.games.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.klubCoola.features.games
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Baby className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.klubCoola.features.playroom
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.klubCoola.features.playroom
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <UtensilsCrossed className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.klubCoola.features.bar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.entertainmentIntro.klubCoola.features.bar.description}
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.klubCoola.features.lounge.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.klubCoola.features.lounge
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
                src="/klub/coola-new-05.jpeg"
                alt={dict.entertainmentIntro.klubCoola.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Klub Coola Gallery with Dark Background */}
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
                  src="/klub/coola-new-01.jpeg"
                  alt="Rzutki w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/klub/coola-new-02.jpeg"
                  alt="Cymbergaj w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/klub/coola-new-03.jpeg"
                  alt="Bilard w Klubie Coola"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/klub/coola-new-04.jpeg"
                  alt="Bar w Klubie Coola"
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
          {/* 3. SPA SUBSECTION SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/entertainment/entertain-spa-main-01.jpeg"
                alt={dict.entertainmentIntro.spaSection.imageAlt}
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
                  {dict.entertainmentIntro.spaSection.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.entertainmentIntro.spaSection.description}
                </motion.p>
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
                    <HeartPlus className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.spaSection.features.massages
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.massages
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SoapDispenserDroplet className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.spaSection.features.treatments
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.treatments
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.spaSection.features.pool.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.pool
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.spaSection.features.jacuzzi
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.jacuzzi
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SunSnow className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.spaSection.features.saunas.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.saunas
                        .description
                    }
                  </p>
                </div>
                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <HeartPulse className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.spaSection.features.saltCave
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.spaSection.features.saltCave
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
                {dict.entertainmentIntro.spaSection.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/entertain-spa-01.jpeg"
                  alt={dict.entertainmentIntro.spaSection.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/entertain-spa-02.jpeg"
                  alt={dict.entertainmentIntro.spaSection.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/entertain-spa-04.jpeg"
                  alt={dict.entertainmentIntro.spaSection.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/entertain-spa-03.jpeg"
                  alt={dict.entertainmentIntro.spaSection.gallery.alt4}
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
                  {dict.entertainmentIntro.activeRest.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light whitespace-pre-line"
                >
                  {dict.entertainmentIntro.activeRest.description}
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
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.activeRest.features.kayaking
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.activeRest.features.kayaking
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.activeRest.features.pedalBoats
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.activeRest.features.pedalBoats
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <VolleyballIcon className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.activeRest.features.volleyball
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Sportowa rywalizacja na piasku
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bike className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.activeRest.features.bikes.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.activeRest.features.bikes
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Footprints className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">Nordic walking</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.activeRest.features.nordicWalking
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Dumbbell className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.entertainmentIntro.activeRest.features.gym.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.activeRest.features.gym
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
                src="/entertainment/hotel-features-main-02.jpeg"
                alt="Aktywny wypoczynek"
                fill
                className="object-cover object-right"
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
                  src="/outdoor/active-rest-03.jpeg"
                  alt="Aktywny wypoczynek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/outdoor/active-rest-04.jpeg"
                  alt="Aktywny wypoczynek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/outdoor/active-rest-02.jpeg"
                  alt="Aktywny wypoczynek"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/outdoor/active-rest-05.jpeg"
                  alt="Aktywny wypoczynek"
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
          {/* 5. WEEKENDY PEŁNE ATRAKCJI SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
            >
              <Image
                src="/entertainment/weekend-enter-main-01.jpeg"
                alt={dict.entertainmentIntro.weekends.imageAlt}
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
                  {dict.entertainmentIntro.weekends.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="main-paragraph-light"
                >
                  {dict.entertainmentIntro.weekends.description}
                </motion.p>
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
                      {
                        dict.entertainmentIntro.weekends.features.liveMusic
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.weekends.features.liveMusic
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.weekends.features.danceParties
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.weekends.features.danceParties
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Utensils className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.weekends.features.tastingDinners
                          .title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.weekends.features.tastingDinners
                        .description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.weekends
                          .features.seasonal.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.weekends
                        .features.seasonal.description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.weekends
                          .features.localEvents.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.weekends
                        .features.localEvents.description
                    }
                  </p>
                </div>

                <div className="bg-avangarda/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trees className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {
                        dict.entertainmentIntro.hotelFull.features.weekends
                          .features.nature.title
                      }
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {
                      dict.entertainmentIntro.hotelFull.features.weekends
                        .features.nature.description
                    }
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Fort Gallery with Dark Background */}
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
                {
                  dict.entertainmentIntro.hotelFull.features.weekends
                    .galleryTitle
                }
              </h2>
              <div className="h-px flex-1 bg-white/30"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/weekend-enter-04.jpeg"
                  alt={
                    dict.entertainmentIntro.hotelFull.features.weekends.gallery
                      .alt1
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/entertainment/weekend-enter-01.jpeg"
                  alt={
                    dict.entertainmentIntro.hotelFull.features.weekends.gallery
                      .alt2
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/weekend-enter-02.jpeg"
                  alt={
                    dict.entertainmentIntro.hotelFull.features.weekends.gallery
                      .alt3
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/entertainment/weekend-enter-03.jpeg"
                  alt={
                    dict.entertainmentIntro.hotelFull.features.weekends.gallery
                      .alt4
                  }
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
