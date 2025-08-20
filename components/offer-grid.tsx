"use client";

import { motion } from "framer-motion";
import type { Offers } from "../sanity.types";
import { useRef, useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag, Calendar, Clock, CalendarDays } from "lucide-react";
import { imageUrl } from "@/lib/imageUrl";

interface OfferGridProps {
  offers: Offers[];
  lang?: string;
  dict?: any;
  getLocalizedContent?: (offer: Offers) => {
    name: string;
    subtitle: string;
    daysNights: string;
    description: string;
    price: string | null;
    validityPeriod: string | null;
    perPersonPerNight: string;
  };
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function OfferGrid({
  offers,
  lang = "en",
  dict,
  getLocalizedContent,
}: OfferGridProps) {
  // Existing state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Add new state for category filtering
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Default getLocalizedContent function if not provided
  const defaultGetLocalizedContent = (offer: Offers) => {
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
    const formatDate = (dateString: string) => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    const validFrom = offer.validFrom ? formatDate(offer.validFrom) : null;
    const validUntil = offer.validUntil ? formatDate(offer.validUntil) : null;
    const validityPeriod =
      validFrom && validUntil ? `${validFrom} - ${validUntil}` : null;

    const perPersonPerNight = lang === "pl" ? "/os./noc" : "/person/night";

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

  const localizedContentFunction =
    getLocalizedContent || defaultGetLocalizedContent;

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Check if offer is expired
  const isOfferExpired = (dateString?: string) => {
    if (!dateString) return false;
    try {
      const expiryDate = new Date(dateString);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return expiryDate < today;
    } catch (e) {
      return false;
    }
  };

  // Extract unique categories
  const categories = useMemo(() => {
    const categoriesSet = new Set<string>();

    offers?.forEach((offer) => {
      offer.categories?.forEach((category) => {
        if (category._ref) {
          categoriesSet.add(category._ref);
        }
      });
    });

    return Array.from(categoriesSet);
  }, [offers]);

  // Filter offers by selected category and expired status
  const filteredOffers = useMemo(() => {
    let filtered = offers?.filter((offer) => !isOfferExpired(offer.validUntil));

    if (selectedCategory) {
      filtered = filtered.filter((offer) =>
        offer.categories?.some((category) => category._ref === selectedCategory)
      );
    }

    return filtered;
  }, [offers, selectedCategory]);

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

  // Handle scroll event to update indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newPosition = container.scrollLeft;
      const newIndex = Math.round(newPosition / cardWidth);

      setScrollPosition(newPosition);
      setActiveIndex(newIndex);
    }
  };

  // Category filter component
  const CategoryFilter = () => (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">
        {dict?.components?.filterByCategory || "Filter by category"}
      </h3>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium capitalize transition-colors ${
            selectedCategory === null
              ? "bg-avangarda text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          {lang === "pl" ? "Wszystkie" : "All"}
        </button>

        {categories.map((categoryId) => {
          const matchingOffer = offers?.find((offer) =>
            offer.categories?.some((cat) => cat._ref === categoryId)
          );

          const categoryObj = matchingOffer?.categories?.find(
            (cat) => cat._ref === categoryId
          );

          const categoryName =
            lang === "pl"
              ? categoryObj?.title || categoryId
              : categoryObj?.entitle || categoryObj?.title || categoryId;

          return (
            <button
              key={categoryId}
              onClick={() => setSelectedCategory(categoryId)}
              className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium capitalize transition-colors ${
                selectedCategory === categoryId
                  ? "bg-avangarda text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {categoryName}
            </button>
          );
        })}
      </div>
    </div>
  );

  // If on mobile or tablet, show the carousel view
  if (isMobile) {
    return (
      <div className="relative">
        <CategoryFilter />

        <div className="hidden sm:flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous offer"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft
              className={`h-5 w-5 ${scrollPosition <= 10 ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next offer"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

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
          {filteredOffers?.map((offer, index) => {
            const localizedContent = localizedContentFunction(offer);

            return (
              <motion.div
                key={offer._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[85%] sm:w-[75%] md:w-[48%] snap-start group"
              >
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={
                        offer.image
                          ? imageUrl(offer.image).url()
                          : "/placeholder.svg"
                      }
                      alt={localizedContent.name}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                      <Link
                        href={`/${lang}/pakiety/${offer.slug?.current}`}
                        className="block"
                      >
                        <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
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
                        <p className="text-white/90 text-sm md:text-base mb-6">
                          {localizedContent.description.length > 150
                            ? `${localizedContent.description.substring(0, 150)}...`
                            : localizedContent.description}
                        </p>
                      </div>

                      <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link
                          href={`/${lang}/pakiety/${offer.slug?.current}`}
                          className="block w-full"
                        >
                          <Button
                            size="default"
                            className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all"
                          >
                            {dict?.components?.details || "Details"}
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
                            {lang === "pl" ? "Od" : "From"}:
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

        <div className="flex justify-center gap-2 mt-4">
          {filteredOffers?.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-avangarda" : "w-2 bg-gray-300"
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const container = scrollContainerRef.current;
                  const cardWidth =
                    container.querySelector("div")?.offsetWidth || 0;
                  container.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }
              }}
              aria-label={`Go to offer ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop grid view
  return (
    <>
      <CategoryFilter />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredOffers?.map((offer) => {
          const localizedContent = localizedContentFunction(offer);

          return (
            <motion.div
              key={offer._id}
              variants={item}
              layout
              className="group"
            >
              <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={
                      offer.image
                        ? imageUrl(offer.image).url()
                        : "/placeholder.svg"
                    }
                    alt={localizedContent.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 48vw, 32vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                    <Link
                      href={`/${lang}/pakiety/${offer.slug?.current}`}
                      className="block"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
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
                      <p className="text-white/90 text-sm md:text-base mb-6">
                        {localizedContent.description.length > 150
                          ? `${localizedContent.description.substring(0, 150)}...`
                          : localizedContent.description}
                      </p>
                    </div>

                    <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      <Link
                        href={`/${lang}/pakiety/${offer.slug?.current}`}
                        className="block w-full"
                      >
                        <Button
                          size="default"
                          className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all"
                        >
                          {dict?.components?.details || "Details"}
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
                          {lang === "pl" ? "Od" : "From"}:
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
      </motion.div>
    </>
  );
}

export default OfferGrid;
