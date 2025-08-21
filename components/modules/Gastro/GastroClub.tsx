"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Clock, Users, Star, Quote } from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { ALL_MENUS_QUERYResult } from "@/sanity.types";
import { fileUrl } from "@/lib/fileUrl";
import Link from "next/link";

interface GastroClubProps {
  dict?: any;
  lang?: string;
  menus: ALL_MENUS_QUERYResult;
}

export default function GastroClub({
  dict,
  lang = "pl",
  menus = [],
}: GastroClubProps) {
  const phoneNumber = "+48 29 752 50 34";

  return (
    <div id="klub-coola">
      <Container className="relative mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 text-white w-full py-14 lg:py-20">
        {/* Background Image - Add z-index to push it behind content */}
        <div className="absolute inset-0 -z-10">
          <BackgroundLogoBottomDark position="right" />
        </div>
        <div className="max-w-7xl mx-auto sm:px-4 whitespace-pre-line">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 sm:px-4">
            <div>
              <AnimatedDecorativeBar />

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 sm:justify-between mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="title-dark"
                >
                  {dict.gastroClub.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Image
                    src="/rest-logos/coola_light.png"
                    alt={dict.gastroClub.logoAlt}
                    width={120}
                    height={45}
                    className="hidden sm:block flex-shrink-1"
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-dark"
              >
                {dict.gastroClub.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {menus.length > 0 ? (
                  <a
                    href={fileUrl(menus[0]?.menuFile)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      {dict.gastroClub.menuButton}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="flex items-center gap-2 text-black"
                  >
                    <Utensils className="h-4 w-4" />
                    {dict.gastroClub.menuUnavailable}
                  </Button>
                )}
                <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <Button className="w-fit border-none" variant="fillRight">
                    <Calendar className="h-4 w-4" />
                    {dict.gastroClub.reserveButton}
                  </Button>
                </Link>
              </motion.div>

              {/* Quick Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-white">
                      {dict.gastroClub.openingHours}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80">
                    {dict.gastroClub.openingHoursDetails.weekdays}
                  </p>
                  <p className="text-sm text-white/80">
                    {dict.gastroClub.openingHoursDetails.weekend}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-white">
                      {dict.gastroClub.reservations}
                    </h3>
                  </div>
                  <p className="text-sm text-white/80">
                    {dict.gastroClub.phone}
                  </p>
                  <p className="text-sm text-white/80">
                    {dict.gastroClub.email}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[4/5] h-[600px] w-full overflow-hidden"
            >
              <Image
                src="/restaurant/rest-coola-main-02.jpeg"
                alt={dict.gastroClub.imageAlt}
                fill
                className="object-cover"
                quality={100}
              />
            </motion.div>
          </div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 sm:px-4"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px flex-1 bg-avangarda"></div>
              <Quote className="h-8 w-8 text-avangarda" />
              <h2 className="text-2xl font-semibold text-center text-white">
                {dict.gastroClub.guestOpinionsTitle}
              </h2>
              <div className="h-px flex-1 bg-avangarda"></div>
            </div>

            <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-white/80">
              {dict.gastroClub.guestOpinionsSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dict.gastroClub.testimonials.map(
                (testimonial: any, index: number) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-sm p-6 relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="h-6 w-6 text-avangarda/40" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-avangarda text-avangarda"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white/90 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-white/70">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-white/60">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
