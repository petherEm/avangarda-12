"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Bath,
  Tv,
  Wifi,
  Wind,
  Sofa,
  Refrigerator,
  Coffee,
  Maximize,
  ChevronLeft,
  ChevronRight,
  Users,
  Square,
  Phone,
  Check,
  Star,
  Home,
  Utensils,
  Bed,
  ShowerHead,
  AlarmSmoke,
  SoapDispenserDroplet, // Add this import
  Zap, // Electric/power icon
  Fan,
  Columns4,
  Pentagon, // Another good option for air flow
} from "lucide-react";
import type { RoomType } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

// Room Image Gallery with Swipe Support
function RoomImageGallery({
  images,
  roomName,
}: {
  images: string[];
  roomName: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: "pan-y pinch-zoom" }}
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${roomName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
            draggable={false}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Navigation Arrows - Desktop */}
        <div className="absolute inset-0 items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            disabled={isTransitioning}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white shadow-lg disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            disabled={isTransitioning}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white shadow-lg disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        {/* Image Counter */}
        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            Przesuń aby przeglądać
          </div>
        </div>
      </div>

      {/* Thumbnail Strip - Moved down with more spacing */}
      <div className="mt-6 flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }
            }}
            disabled={isTransitioning}
            className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden transition-all border-4 rounded-lg ${
              index === currentIndex
                ? "border-avangarda opacity-100 scale-95 shadow-lg"
                : "border-gray-300 scale-100 opacity-60 hover:opacity-80 hover:border-avangarda/50"
            }`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// Room Amenities Component
function RoomAmenities({ room, dict }: { room: RoomType; dict: any }) {
  const t = (key: string) => getNestedValue(dict, key) || key;

  // Icon mapping for room features
  const getFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case "bed":
        return Home;
      case "hairdryer":
        return AlarmSmoke; // Better for hair dryer (represents air flow)
      case "bath":
        return ShowerHead;
      case "tv":
        return Tv;
      case "towel":
        return Columns4;
      case "bathrobe":
        return Pentagon;
      case "toiletries":
        return SoapDispenserDroplet;
      case "wifi":
        return Wifi;
      case "ac":
        return Wind;
      case "fridge":
        return Refrigerator;
      case "sofa":
        return Sofa;
      case "kitchen":
        return Utensils;
      case "dining":
        return Utensils;
      case "balcony":
        return Maximize;
      case "audio":
        return Tv;
      case "coffee":
        return Coffee;
      case "lounge":
        return Home;
      default:
        return Check;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {room.features.map((feature, index) => {
        const IconComponent = getFeatureIcon(feature.icon);
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-3 bg-avangarda/10 p-4"
          >
            <div className="flex-shrink-0">
              <IconComponent className="h-5 w-5 text-avangarda" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {t(feature.nameKey)}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

interface RoomDetailsProps {
  room: RoomType;
  dict: any;
  lang: string;
}

export default function RoomDetails({ room, dict, lang }: RoomDetailsProps) {
  const t = (key: string) => getNestedValue(dict, key) || key;
  const phoneNumber = "+48 574 383 282";

  // Booking sidebar component to reuse
  const BookingSidebar = () => (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="lg:sticky lg:top-24"
    >
      <div className="bg-white shadow-xl">
        <div className=" border-b border-gray-100">
          <div className="text-center mb-6">
            <div className="py-4 w-full bg-avangarda">
              <h2 className="text-2xl text-white! p-2">
                Rezerwuj bezpośrednio! Zapewniamy najlepszą cenę!
              </h2>
            </div>

            <div className="mt-4 text-3xl font-bold text-avangarda mb-2">
              {t(room.priceKey)}
            </div>
          </div>

          <div className="flex justify-center">
            <Link href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
              <Button variant="fillRight" className="w-fit">
                <Phone className="h-5 w-5 mr-2" />
                Zarezerwuj
              </Button>
            </Link>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {t("rooms.whatsIncluded.title") || "Co jest wliczone"}
          </h3>
          <div className="space-y-3">
            {[
              t("rooms.whatsIncluded.breakfast") || "Śniadanie",
              t("rooms.whatsIncluded.poolSaunaJacuzzi") ||
                "Basen, sauny, jacuzzi",
              t("rooms.whatsIncluded.saltCave") || "Grota solna",
              t("rooms.whatsIncluded.gym") || "Siłownia",
              t("rooms.whatsIncluded.playroom") || "Sala zabaw dla dzieci",
              t("rooms.whatsIncluded.dailyHousekeeping") ||
                "Codzienne sprzątanie pokoju",
              t("rooms.whatsIncluded.parking") || "Parking",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-avangarda flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image - Full Width */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/hotel/hotel-02.jpg"
          alt="Hotel Avangarda"
          fill
          className="object-cover"
          sizes="100vw"
          quality={95}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <Container className="py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation - Moved above title */}
          <div className="mb-6">
            <Link
              href={`/${lang}/hotel`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-avangarda transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Powrót do pokoi</span>
            </Link>
          </div>

          {/* Room Header */}
          <div className="mb-12">
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {t(room.nameKey)}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-avangarda" />
                <span className="font-medium">{t(room.capacityKey)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-avangarda" />
                <span className="font-medium">{t(room.bedsKey)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-5 w-5 text-avangarda" />
                <span className="font-medium">
                  {t(`rooms.${room.id}.size`) || "21m²"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-avangarda" />
                <span className="text-2xl font-bold text-avangarda">
                  {t(room.priceKey)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <RoomImageGallery
                  images={room.images}
                  roomName={t(room.nameKey)}
                />
              </motion.div>

              {/* Room Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Opis pokoju
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t(room.descriptionKey)}
                </p>
              </motion.div>

              {/* Mobile Booking Card - Show only on mobile after room description */}
              <div className="block lg:hidden">
                <BookingSidebar />
              </div>

              {/* Room Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("rooms.amenitiesTitle") || "Udogodnienia w pokoju"}
                </h2>
                <RoomAmenities room={room} dict={dict} />
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kluczowe warunki
                </h2>
                <div className="bg-avangarda/10 p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Zameldowanie / Wymeldowanie
                      </h3>
                      <p className="text-sm text-gray-600">
                        Zameldowanie: 14:00
                      </p>
                      <p className="text-sm text-gray-600">
                        Wymeldowanie: 10:00 / 11:00 w weekendy i Święta
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Polityka anulowania
                      </h3>
                      <p className="text-sm text-gray-600">
                        W zależności od wybranej opcji przy rezerwacji
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Płatność
                      </h3>
                      <p className="text-sm text-gray-600">
                        Płatność wymagana przy zameldowaniu
                      </p>
                      <p className="text-sm text-gray-600">
                        Gotówka / karta płatnicza
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Dodatkowe informacje
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Palenie zabronione na terenie całego obiektu</li>
                      <li>• Cisza nocna: 22:00 - 7:00</li>
                      <li>• Wymagany dokument tożsamości przy zameldowaniu</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Pets Policy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Polityka dotycząca zwierząt
                </h2>
                <div className="bg-avangarda/10 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-avangarda/20 rounded-full flex items-center justify-center">
                      <Check className="h-6 w-6 text-avangarda" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Zwierzęta mile widziane!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Z przyjemnością ugościmy Wasze futrzane przyjaciół
                        zgodnie z poniższymi wytycznymi:
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Opłata za zwierzę
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        50 zł za zwierzę, za noc
                      </p>

                      <h4 className="font-medium text-gray-900 mb-2">
                        Maksimum
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        2 zwierzęta na pokój
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Limit wagi
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Do 25kg na zwierzę
                      </p>

                      <h4 className="font-medium text-gray-900 mb-2">
                        Wcześniejsze zgłoszenie
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Prosimy o informację przy rezerwacji
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-avangarda/20 pt-4 mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Zasady dotyczące zwierząt
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Zwierzęta muszą być pod stałym nadzorem</li>
                      <li>
                        • Zwierzęta nie są dozwolone w restauracji i strefie spa
                      </li>
                      <li>• Właściciele odpowiadają za wszelkie szkody</li>
                      <li>• Może być wymagane poświadczenie szczepień</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Desktop Booking Sidebar - Hidden on mobile */}
            <div className="lg:col-span-1 hidden lg:block">
              <BookingSidebar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
