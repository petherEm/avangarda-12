"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Offers as OffersType } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  CalendarDays,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface OfferType {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface OffersProps {
  dict: {
    offers: {
      title: string;
      description: string;
      details: string;
      items: OfferType[];
      from: string;
      perPersonPerNight: string;
    };
  };
  lang: string;
  offers: OffersType[];
}

const Offers = ({ dict, lang, offers }: OffersProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to scroll the container
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => {
        const newPosition = container.scrollLeft;
        const newIndex = Math.round(newPosition / cardWidth);
        setScrollPosition(newPosition);
        setActiveIndex(newIndex);
      }, 300);
    }
  };

  // Enhanced scroll handler with better mobile support
  const handleScroll = () => {
    if (scrollContainerRef.current && !isScrolling) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newPosition = container.scrollLeft;
      const newIndex = Math.round(newPosition / cardWidth);
      // Ensure we don't go out of bounds
      const clampedIndex = Math.max(0, Math.min(newIndex, offers.length - 1));
      setScrollPosition(newPosition);
      setActiveIndex(clampedIndex);
    }
  };

  // Use Intersection Observer for better mobile detection
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(container.children).indexOf(
              entry.target as Element
            );
            if (index !== -1 && index !== activeIndex) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
        rootMargin: "0px",
      }
    );

    // Observe all offer cards
    const cards = container.querySelectorAll("[data-offer-card]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [offers.length, activeIndex]);

  // Function to format dates
  const formatDate = (dateString: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Function to get localized content
  const getLocalizedContent = (offer: OffersType) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const subtitle = lang === "pl" ? offer.subtitle : offer.ensubtitle;
    const daysNights = lang === "pl" ? offer.daysNights : offer.endaysNights;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const currency = "PLN";
    const formattedPrice = offer.price
      ? new Intl.NumberFormat(lang === "pl" ? "pl-PL" : "en-US", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(offer.price)
      : null;

    // Format validity dates
    const validFrom = offer.validFrom ? formatDate(offer.validFrom) : null;
    const validUntil = offer.validUntil ? formatDate(offer.validUntil) : null;
    const validityPeriod =
      validFrom && validUntil ? `${validFrom} - ${validUntil}` : null;

    // Get per person per night text
    const perPersonPerNight = lang === "pl" ? "/os./noc" : "/per/night";

    return {
      name: name || "No title available",
      subtitle: subtitle || "",
      daysNights: daysNights || "",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: formattedPrice,
      validityPeriod,
      perPersonPerNight,
    };
  };

  // Enhanced scroll to index function
  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      setIsScrolling(true);
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <div className="md:py-20 lg:py-26 mt-6 w-full text-primary">
      <Container className="py-8">
        {/* Centered Header Section - Same for Mobile and Desktop */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="flex justify-center mb-4">
              <AnimatedDecorativeBar />
            </div>
            <h1 className="title-light max-w-3xl mx-auto whitespace-pre-line">
              {dict.offers.title}
            </h1>
            <p className="main-paragraph-light max-w-4xl mx-auto whitespace-pre-line">
              {dict.offers.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}`}>
              <Button size="lg" variant="fillRight">
                Zobacz wszystkie
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden">
          <div className="relative -mx-4">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {offers.map((offer, index) => {
                const localizedContent = getLocalizedContent(offer);

                return (
                  <motion.div
                    key={offer._id}
                    data-offer-card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-none w-[280px] sm:w-[320px] snap-start group"
                  >
                    <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <Image
                          src={
                            imageUrl(offer.image!).url() || "/placeholder.svg"
                          }
                          alt={localizedContent.name}
                          fill
                          className="object-cover transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-all duration-300">
                          <Link
                            href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}/${offer.slug?.current}`}
                            className="block"
                          >
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors">
                              {localizedContent.name}
                            </h3>
                            {localizedContent.subtitle && (
                              <p className="text-sm text-white/80 mb-2">
                                {localizedContent.subtitle}
                              </p>
                            )}
                          </Link>
                          <div className="flex flex-col gap-2 mb-3">
                            <div className="flex gap-3">
                              {localizedContent.daysNights && (
                                <div className="flex items-center gap-1 text-xs text-white/90 font-bold">
                                  <Calendar className="h-3 w-3 text-avangarda" />
                                  <span>{localizedContent.daysNights}</span>
                                </div>
                              )}
                              {offer.meals && (
                                <div className="flex items-center gap-1 text-xs text-white/90 font-bold">
                                  <Clock className="h-3 w-3 text-avangarda" />
                                  <span>{offer.meals}</span>
                                </div>
                              )}
                            </div>
                            {localizedContent.validityPeriod && (
                              <div className="flex items-center gap-1 text-xs text-white/70 font-medium">
                                <CalendarDays className="h-3 w-3 text-avangarda" />
                                <span>{localizedContent.validityPeriod}</span>
                              </div>
                            )}
                          </div>
                          <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20">
                            <p className="text-white/90 text-sm mb-4">
                              {localizedContent.description.length > 100
                                ? `${localizedContent.description.substring(0, 100)}...`
                                : localizedContent.description}
                            </p>
                          </div>
                          <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                            <Link
                              href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}/${offer.slug?.current}`}
                              className="block w-full"
                            >
                              <Button
                                size="sm"
                                className="mt-2 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all hover:shadow-lg"
                              >
                                {dict.offers.details}
                                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                        {localizedContent.price && (
                          <div className="absolute top-3 right-3 bg-white text-pink-600 px-3 py-1 rounded-lg shadow-lg flex items-center gap-1 text-sm font-medium">
                            <Tag className="h-3 w-3" />
                            <span className="flex flex-col text-center leading-tight">
                              <span className="text-xs">
                                {dict.offers.from || "From"}:
                              </span>
                              <span className="font-bold">
                                {localizedContent.price}
                                {localizedContent.perPersonPerNight}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 z-20 p-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              style={{ top: "calc(40% - 1.5rem)" }}
              aria-label="Previous offer"
              disabled={scrollPosition <= 10}
            >
              <ChevronLeft
                className={`h-4 w-4 transition-all duration-300 ${
                  scrollPosition <= 10
                    ? "text-gray-300"
                    : "text-gray-600 group-hover:text-avangarda group-hover:-translate-x-0.5"
                }`}
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 z-20 p-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              style={{ top: "calc(40% - 1.5rem)" }}
              aria-label="Next offer"
            >
              <ChevronRight className="h-4 w-4 text-gray-600 transition-all duration-300 group-hover:text-avangarda group-hover:translate-x-0.5" />
            </button>

            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {offers.map((offer, index) => {
                const localizedContent = getLocalizedContent(offer);

                return (
                  <motion.div
                    key={offer._id}
                    data-offer-card
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-none w-[320px] xl:w-[380px] snap-start group"
                  >
                    <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        <Image
                          src={
                            imageUrl(offer.image!).url() || "/placeholder.svg"
                          }
                          alt={localizedContent.name}
                          fill
                          className="object-cover transition-transform duration-700"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                          <Link
                            href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}/${offer.slug?.current}`}
                            className="block"
                          >
                            <h3 className="text-xl xl:text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
                              {localizedContent.name}
                            </h3>
                            {localizedContent.subtitle && (
                              <p className="text-base text-white/80 mb-3">
                                {localizedContent.subtitle}
                              </p>
                            )}
                          </Link>
                          <div className="flex flex-col gap-2 mb-4">
                            <div className="flex gap-4">
                              {localizedContent.daysNights && (
                                <div className="flex items-center gap-1.5 text-sm text-white/90 font-bold">
                                  <Calendar className="h-4 w-4 text-avangarda" />
                                  <span>{localizedContent.daysNights}</span>
                                </div>
                              )}
                              {offer.meals && (
                                <div className="flex items-center gap-1.5 text-sm text-white/90 font-bold">
                                  <Clock className="h-4 w-4 text-avangarda" />
                                  <span>{offer.meals}</span>
                                </div>
                              )}
                            </div>
                            {localizedContent.validityPeriod && (
                              <div className="flex items-center gap-1.5 text-sm text-white/70 font-medium">
                                <CalendarDays className="h-4 w-4 text-avangarda" />
                                <span>{localizedContent.validityPeriod}</span>
                              </div>
                            )}
                          </div>
                          <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                            <p className="text-white/90 text-sm xl:text-base mb-6">
                              {localizedContent.description.length > 150
                                ? `${localizedContent.description.substring(0, 150)}...`
                                : localizedContent.description}
                            </p>
                          </div>
                          <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                            <Link
                              href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}/${offer.slug?.current}`}
                              className="block w-full"
                            >
                              <Button
                                size="default"
                                className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all hover:shadow-lg"
                              >
                                {dict.offers.details}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                        {localizedContent.price && (
                          <div className="absolute top-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                            <Tag className="h-4 w-4" />
                            <span className="flex flex-col text-center leading-tight">
                              <span className="text-sm">
                                {dict.offers.from || "From"}:
                              </span>
                              <span className="font-bold">
                                {localizedContent.price}
                                {localizedContent.perPersonPerNight}
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Scroll Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {offers.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === activeIndex
                      ? "w-8 bg-avangarda shadow-md shadow-avangarda/30"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to offer ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offers;
