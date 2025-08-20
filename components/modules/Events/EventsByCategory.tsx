"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Download, Star, TreePine, Users } from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import Link from "next/link";
import { useRef } from "react";
import { fileUrl } from "@/lib/fileUrl";

interface EventTypesProps {
  dict: {
    eventsByCategory: {
      downloadOffer: string;
      whatMakesUsSpecial: string;
      eventTypes: {
        wesela: {
          title: string;
          subtitle: string;
          description: string;
          features: string[];
        };
        komunie: {
          title: string;
          subtitle: string;
          description: string;
          features: string[];
        };
        "uroczystosci-rodzinne": {
          title: string;
          subtitle: string;
          description: string;
          features: string[];
        };
        "przyjecia-plenerowe": {
          title: string;
          subtitle: string;
          description: string;
          features: string[];
        };
      };
    };
  };
  lang?: string;
  eventsData?: any[];
}

export default function EventTypes({
  dict,
  lang = "pl",
  eventsData = [],
}: EventTypesProps) {
  // Group events by type
  const eventsByType = eventsData.reduce(
    (acc, event) => {
      if (!acc[event.eventType]) {
        acc[event.eventType] = [];
      }
      acc[event.eventType].push(event);
      return acc;
    },
    {} as Record<string, any[]>
  );

  const eventTypes = [
    {
      id: "wesela",
      title: dict.eventsByCategory.eventTypes.wesela.title,
      subtitle: dict.eventsByCategory.eventTypes.wesela.subtitle,
      description: dict.eventsByCategory.eventTypes.wesela.description,
      features: dict.eventsByCategory.eventTypes.wesela.features,
      icon: Heart,
      color: "bg-avangarda/10",
      accentColor: "text-pink-600",
      image: "/wedding/wedding-table.jpeg",
      galleryImages: [
        "/wedding/wedding-main.jpeg",
        "/wedding/wedding-music.jpeg",
      ],
      imagePosition: "left",
      events: eventsByType["wesela"] || [],
    },
    {
      id: "komunie",
      title: dict.eventsByCategory.eventTypes.komunie.title,
      subtitle: dict.eventsByCategory.eventTypes.komunie.subtitle,
      description: dict.eventsByCategory.eventTypes.komunie.description,
      features: dict.eventsByCategory.eventTypes.komunie.features,
      icon: Star,
      color: "bg-blue-50",
      accentColor: "text-blue-600",
      image: "/first-comunion/girl-baloons.jpeg",
      galleryImages: [
        "/first-comunion/cakes.jpeg",
        "/first-comunion/forks.jpeg",
      ],
      imagePosition: "right",
      events: eventsByType["komunie"] || [],
    },
    {
      id: "uroczystosci-rodzinne",
      title: dict.eventsByCategory.eventTypes["uroczystosci-rodzinne"].title,
      subtitle:
        dict.eventsByCategory.eventTypes["uroczystosci-rodzinne"].subtitle,
      description:
        dict.eventsByCategory.eventTypes["uroczystosci-rodzinne"].description,
      features:
        dict.eventsByCategory.eventTypes["uroczystosci-rodzinne"].features,
      icon: Users,
      color: "bg-amber-50",
      accentColor: "text-amber-600",
      image: "/wedding/events-other-03.jpeg",
      galleryImages: [
        "/wedding/events-other-01.jpeg",
        "/wedding/events-other-02.jpeg",
      ],
      imagePosition: "left",
      events: eventsByType["uroczystosci-rodzinne"] || [],
    },
    {
      id: "przyjecia-plenerowe",
      title: dict.eventsByCategory.eventTypes["przyjecia-plenerowe"].title,
      subtitle:
        dict.eventsByCategory.eventTypes["przyjecia-plenerowe"].subtitle,
      description:
        dict.eventsByCategory.eventTypes["przyjecia-plenerowe"].description,
      features:
        dict.eventsByCategory.eventTypes["przyjecia-plenerowe"].features,
      icon: TreePine,
      color: "bg-green-50",
      accentColor: "text-green-600",
      image: "/outdoor/outdoor-event-03.jpeg",
      galleryImages: [
        "/outdoor/outdoor-event-01.jpg",
        "/outdoor/outdoor-event-02.jpeg",
      ],
      imagePosition: "right",
      events: eventsByType["przyjecia-plenerowe"] || [],
    },
  ];

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-14">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Event Types Sections */}
        <div className="space-y-20 px-4 sm:px-0">
          {eventTypes.map((event, index) => {
            const isImageLeft = event.imagePosition === "left";
            return (
              <EventSection
                key={event.id}
                event={event}
                index={index}
                isImageLeft={isImageLeft}
                dict={dict}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Separate component for each event section to handle parallax
function EventSection({
  event,
  index,
  isImageLeft,
  dict,
}: {
  event: any;
  index: number;
  isImageLeft: boolean;
  dict: {
    eventsByCategory: {
      downloadOffer: string;
      whatMakesUsSpecial: string;
    };
  };
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 400, damping: 40, restDelta: 0.001 };

  // Parallax movements for images
  const mainImageY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]),
    springConfig
  );
  const galleryImage1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]),
    springConfig
  );
  const galleryImage2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]),
    springConfig
  );

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="md:mb-28"
    >
      {/* Main Content */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch mb-12`}
      >
        {/* Main Image - Enhanced with Parallax - Hidden on mobile/tablet */}
        <div
          className={`hidden lg:block lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative w-full aspect-[4/3] lg:aspect-[4/5] overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full"
              style={{
                y: mainImageY,
                height: "130%", // Larger than container for parallax
                top: "-15%", // Center the oversized image
              }}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Text Content - Full width on mobile/tablet */}
        <div
          className={`lg:col-span-6 space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"} flex flex-col`}
        >
          <div className="flex-1 whitespace-pre-line">
            <AnimatedDecorativeBar />
            <div className="flex items-center gap-2 mb-2">
              <h1 className="title-light">{event.title}</h1>
            </div>
            <p className="main-paragraph-light mb-6">{event.description}</p>

            <h4 className="font-medium mb-3">
              {dict.eventsByCategory.whatMakesUsSpecial}
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {event.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Download Buttons */}
          <div className="flex flex-col gap-3">
            {event.events.length > 0 ? (
              event.events.map((eventItem: any) => (
                <a
                  key={eventItem._id}
                  href={eventItem.menuFile ? fileUrl(eventItem.menuFile) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="w-fit">
                    <Download className="h-4 w-4 mr-2" />
                    {eventItem.menuName.toUpperCase()}
                  </Button>
                </a>
              ))
            ) : (
              <Link
                href="/business/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-avangarda hover:bg-avangarda/90 text-white font-alata px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                  variant="default"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {dict.eventsByCategory.downloadOffer}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Gallery Section with Parallax - Fixed Height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-80">
        {/* Large Gallery Image */}
        <div className="lg:col-span-8">
          <div className="relative w-full h-full aspect-[16/9] lg:aspect-auto overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full h-full"
              style={{
                y: galleryImage1Y,
                height: "120%", // Larger for parallax movement
                top: "-10%", // Center the oversized image
              }}
            >
              <Image
                src={event.galleryImages[0] || "/placeholder.svg"}
                alt={`${event.title} gallery 1`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Smaller Gallery Image */}
        <div className="lg:col-span-4">
          <div className="relative w-full h-full aspect-[16/9] lg:aspect-auto overflow-hidden shadow-lg">
            <motion.div
              className="relative w-full h-full"
              style={{
                y: galleryImage2Y,
                height: "125%", // Larger for parallax movement
                top: "-12%", // Center the oversized image
              }}
            >
              <Image
                src={event.galleryImages[1] || "/placeholder.svg"}
                alt={`${event.title} gallery 2`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
