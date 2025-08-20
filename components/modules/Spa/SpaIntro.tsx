"use client";
import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Sparkles,
  Dumbbell,
  Calendar,
  Banknote,
  Star,
  Quote,
  Download,
} from "lucide-react";
import { SPA_FEATURED_SERVICES } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import Link from "next/link";
import { fileUrl } from "@/lib/fileUrl";

interface SpaIntroProps {
  dict: any;
  lang: string;
  spaOffers: any[];
  specificSpaOffers?: {
    familijnaNiedziela?: any;
    basenDaySpa?: any;
    kidsSpa?: any;
    zabiegiNaCialo?: any;
    zabiegiNaTwarz?: any;
    masazeIRytualy?: any;
  };
}

export default function SpaIntro({
  dict,
  lang,
  spaOffers,
  specificSpaOffers,
}: SpaIntroProps) {
  const phoneNumber = "+48 505 158 200";

  // Helper function to get nested dictionary values using dot notation
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Get the first spa offer for download fallback
  const primarySpaOffer = spaOffers?.[0];

  return (
    <>
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4 whitespace-pre-line">
          {/* SPA SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-main-03.jpeg"
                alt={dict.spaIntro.spa.imageAlt}
                fill
                className="object-cover object-[60%_40%]"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.spaIntro.spa.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                {dict.spaIntro.spa.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                {/* Improved Download Buttons Layout */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-slate-600 mb-3">
                    {dict.spaIntro.spa.downloadMenusTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {specificSpaOffers?.masazeIRytualy &&
                  specificSpaOffers.masazeIRytualy.offerFile ? (
                    <Link
                      href={fileUrl(specificSpaOffers.masazeIRytualy.offerFile)}
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
                        {dict.spaIntro.spa.downloadButtons.massagesRituals}
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
                      {dict.spaIntro.spa.downloadButtons.massagesRituals}
                    </Button>
                  )}

                  {specificSpaOffers?.zabiegiNaTwarz &&
                  specificSpaOffers.zabiegiNaTwarz.offerFile ? (
                    <Link
                      href={fileUrl(specificSpaOffers.zabiegiNaTwarz.offerFile)}
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
                        {dict.spaIntro.spa.downloadButtons.faceTreatments}
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
                      {dict.spaIntro.spa.downloadButtons.faceTreatments}
                    </Button>
                  )}

                  {specificSpaOffers?.zabiegiNaCialo &&
                  specificSpaOffers.zabiegiNaCialo.offerFile ? (
                    <Link
                      href={fileUrl(specificSpaOffers.zabiegiNaCialo.offerFile)}
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
                        {dict.spaIntro.spa.downloadButtons.bodyTreatments}
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
                      {dict.spaIntro.spa.downloadButtons.bodyTreatments}
                    </Button>
                  )}

                  {specificSpaOffers?.kidsSpa &&
                  specificSpaOffers.kidsSpa.offerFile ? (
                    <Link
                      href={fileUrl(specificSpaOffers.kidsSpa.offerFile)}
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
                        {dict.spaIntro.spa.downloadButtons.kidsSpa}
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
                      {dict.spaIntro.spa.downloadButtons.kidsSpa}
                    </Button>
                  )}
                </div>

                {/* Main CTA Button */}
                {/* <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <Button className="w-full" variant="fillRight">
                    <Calendar className="h-4 w-4" />
                    {dict.spaIntro.spa.reserveVisitButton}
                  </Button>
                </Link> */}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Testimonials Section */}
      <Container className="bg-white w-full text-primary">
        {/* Spa Testimonials - RIGHT AFTER BESTSELLERS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Quote className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">
              {dict.spaIntro.testimonials.title}
            </h2>
          </div>
          <p className="main-paragraph-light mb-8 text-center max-w-3xl mx-auto">
            {dict.spaIntro.testimonials.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.spaIntro.testimonials.reviews.map(
              (testimonial: any, index: number) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-avangarda/10 p-6 relative"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-avangarda" />
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-avangarda text-avangarda"
                      />
                    ))}
                  </div>
                  <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </Container>

      {/* Spa Bestsellers - FULL WIDTH DARK BACKGROUND - RIGHT AFTER SPA INTRO */}
      <div className="relative mb-16 py-16 sm:pb-24 md:pb-28 bg-avangarda text-white whitespace-pre-line">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 sm:px-0"
          >
            <h3 className="text-2xl font-medium mb-6 text-center text-white">
              {dict.spaIntro.spa.authorTreatmentsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SPA_FEATURED_SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-none bg-white/95 backdrop-blur-sm flex flex-col"
                >
                  {/* Image container - no padding at top */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.imageKey || "/placeholder.svg"}
                      alt={t(service.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content container with proper spacing */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-medium text-primary mb-2 text-lg">
                      {t(service.nameKey)}
                    </h4>
                    <p className="text-md text-gray-600 mb-4 leading-relaxed flex-grow">
                      {t(service.descriptionKey)}
                    </p>
                    <p className="text-avangarda font-medium leading-relaxed mt-auto">
                      {t(service.priceKey)} / {t(service.durationKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary ">
        <div className="max-w-7xl mx-auto sm:px-4 whitespace-pre-line">
          {/* SWIMMING POOL SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/pool-main-01.jpeg"
                alt={dict.spaIntro.pool.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.spaIntro.pool.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                {dict.spaIntro.pool.description1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                {dict.spaIntro.pool.description2}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-slate-600 mb-3">
                    {dict.spaIntro.pool.downloadPackagesTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specificSpaOffers?.familijnaNiedziela &&
                  specificSpaOffers.familijnaNiedziela.offerFile ? (
                    <Link
                      href={fileUrl(
                        specificSpaOffers.familijnaNiedziela.offerFile
                      )}
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
                        {dict.spaIntro.pool.downloadButtons.familySunday}
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
                      {dict.spaIntro.pool.downloadButtons.familySunday}
                    </Button>
                  )}

                  {specificSpaOffers?.basenDaySpa &&
                  specificSpaOffers.basenDaySpa.offerFile ? (
                    <Link
                      href={fileUrl(specificSpaOffers.basenDaySpa.offerFile)}
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
                        {dict.spaIntro.pool.downloadButtons.daySpa}
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
                      {dict.spaIntro.pool.downloadButtons.daySpa}
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pool Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                {dict.spaIntro.pool.galleryTitle}
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-kids.jpg"
                  alt={dict.spaIntro.pool.galleryImages.poolKids}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/pool-03.jpg"
                  alt={dict.spaIntro.pool.galleryImages.poolRelax}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/pool-02.jpg"
                  alt={dict.spaIntro.pool.galleryImages.poolView}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/spa-pool-01.jpeg"
                  alt={dict.spaIntro.pool.galleryImages.poolLighting}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* GROTA SOLNA SECTION - FULL WIDTH DARK BACKGROUND */}
      <div className="relative mb-16 py-16">
        <BackgroundLogoBottomDark position="right" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start sm:px-0 whitespace-pre-line">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square w-full overflow-hidden"
            >
              <Image
                src="/spa/spa-1.png"
                alt={dict.spaIntro.saltCave.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-dark"
                >
                  {dict.spaIntro.saltCave.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                {dict.spaIntro.saltCave.description1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                {dict.spaIntro.saltCave.description2}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                {dict.spaIntro.saltCave.description3}
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      <Container className="bg-white w-full text-primary">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* Salt Room Gallery - RIGHT AFTER GROTA SOLNA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-03.jpeg"
                  alt={dict.spaIntro.saltCave.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/spa/spa-salt-02.jpeg"
                  alt="Strefa relaksu w grocie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/spa-salt-03.jpeg"
                  alt={dict.spaIntro.saltCave.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/spa/spa-salt-04.jpeg"
                  alt={dict.spaIntro.saltCave.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* GYM SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[7/6] w-full overflow-hidden"
            >
              <Image
                src="/gym/gym-06.jpg"
                alt={dict.spaIntro.gym.gallery.alt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>

            <div>
              <AnimatedDecorativeBar />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-light"
                >
                  {dict.spaIntro.gym.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light whitespace-pre-line"
              >
                {dict.spaIntro.gym.description}
              </motion.p>
              <p></p>
            </div>
          </div>

          {/* Gym Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20 sm:px-0"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <h2 className="text-2xl font-semibold text-center text-primary">
                Zapraszamy
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-05.jpg"
                  alt={dict.spaIntro.gym.gallery.alt1}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image - always visible */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gym/gym-04.jpg"
                  alt={dict.spaIntro.gym.gallery.alt2}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/gym/gym-02.jpg"
                  alt={dict.spaIntro.gym.gallery.alt3}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image - hidden on mobile */}
              <div className="relative aspect-[16/10] overflow-hidden hidden sm:block">
                <Image
                  src="/gym/gym-01.jpg"
                  alt={dict.spaIntro.gym.gallery.alt4}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
