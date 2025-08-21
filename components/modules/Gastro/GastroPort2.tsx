"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Clock, Users, Star, Quote } from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { ALL_MENUS_QUERYResult } from "@/sanity.types";
import { fileUrl } from "@/lib/fileUrl";
import Link from "next/link";

interface GastroPortProps {
  dict?: any;
  lang?: string;
  menus: ALL_MENUS_QUERYResult;
}

export default function GastroBarPrzystan({
  dict,
  lang = "pl",
  menus = [],
}: GastroPortProps) {
  const phoneNumber = "+48 29 752 50 34";

  return (
    <div id="bar-przystan">
      <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white text-primary w-full lg:py-20">
        <div className="max-w-7xl mx-auto sm:px-4">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16  sm:px-4 whitespace-pre-line">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative aspect-[4/5] h-[500px]md:h-[660px] w-full overflow-hidden "
            >
              <Image
                src="/restaurant/rest-bar-main-01.jpeg"
                alt={dict.gastroPort.imageAlt}
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
                  {dict.gastroPort.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Image
                    src="/rest-logos/przystan.png"
                    alt={dict.gastroPort.logoAlt}
                    width={250}
                    height={65}
                    className="hidden sm:block flex-shrink-1"
                  />
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light"
              >
                {dict.gastroPort.description}
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
                      {dict.gastroPort.menuButton}
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="outline"
                    disabled
                    className="flex items-center gap-2"
                  >
                    <Utensils className="h-4 w-4" />
                    {dict.gastroPort.menuUnavailable}
                  </Button>
                )}
                <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <Button className="w-fit" variant="fillRight">
                    <Calendar className="h-4 w-4" />
                    {dict.gastroPort.reserveButton}
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
                <div className="bg-avangarda/10 p-4 ">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.gastroPort.openingHours}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.gastroPort.openingHoursDetails.seasonMayJuneSep}
                  </p>
                  <p className="text-sm text-slate-600">
                    {dict.gastroPort.openingHoursDetails.seasonMayJuneSepHours}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {dict.gastroPort.openingHoursDetails.seasonJulAug}
                  </p>
                  <p className="text-sm text-slate-600">
                    {dict.gastroPort.openingHoursDetails.seasonJulAugHours}
                  </p>
                </div>
                <div className="bg-avangarda/10 p-4 ">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-avangarda" />
                    <h3 className="font-medium text-primary">
                      {dict.gastroPort.reservations}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {dict.gastroPort.phone}
                  </p>
                  <p className="text-sm text-slate-600">
                    {dict.gastroPort.email}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 sm:px-4 whitespace-pre-line"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Quote className="h-8 w-8 text-avangarda" />
              <h2 className="text-3xl font-semibold text-center">
                {dict.gastroPort.guestOpinionsTitle}
              </h2>
            </div>

            <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-slate-600">
              {dict.gastroPort.guestOpinionsSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dict.gastroPort.testimonials.map(
                (testimonial: any, index: number) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-avangarda/10 p-6  relative"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4">
                      <Quote className="h-6 w-6 text-avangarda" />
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
                    <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author Info */}
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
        </div>
      </Container>
    </div>
  );
}
