"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  Bed,
  Bath,
  Tv,
  Wifi,
  Wind,
  Sofa,
  Refrigerator,
  Coffee,
  Home,
  Utensils,
  Maximize,
  Music,
  Droplets,
  Armchair,
  ChevronLeft,
  ChevronRight,
  ShowerHead,
  X,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ROOMS_DATA, type RoomType } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Map feature icons to Lucide components
const featureIcons = {
  bed: Bed,
  bath: Bath,
  tv: Tv,
  wifi: Wifi,
  ac: Wind,
  sofa: Sofa,
  fridge: Refrigerator,
  coffee: Coffee,
  kitchen: Home,
  dining: Utensils,
  balcony: Maximize,
  audio: Music,
  shower: ShowerHead,
  lounge: Armchair,
  default: Check,
};

// Modern Image Slider Component with Swipe Support
function ModernImageSlider({
  images,
  roomName,
  onImageClick,
}: {
  images: string[];
  roomName: string;
  onImageClick: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="relative h-[300px] md:h-[350px] overflow-hidden group">
      {/* Main Image */}
      <motion.div
        ref={sliderRef}
        key={currentIndex}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y pinch-zoom" }} // Allow vertical scroll but handle horizontal swipes
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${roomName} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={95}
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Swipe indicator for mobile */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 md:hidden transition-opacity duration-300">
          <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
            Swipe to browse
          </div>
        </div>
      </motion.div>

      {/* Navigation Arrows - Hidden on mobile, shown on desktop */}
      <div className="absolute inset-0 items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevImage}
          disabled={isTransitioning}
          className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white shadow-lg disabled:opacity-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextImage}
          disabled={isTransitioning}
          className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white shadow-lg disabled:opacity-50"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// Modern Gallery Dialog
function ModernGallery({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
  roomName,
}: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  roomName: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] bg-black/95 border-none p-0">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 text-white">
            <div>
              <h3 className="text-xl font-semibold">{roomName}</h3>
              <p className="text-white/70">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Image */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex] || "/placeholder.svg"}
                  alt={`${roomName} - Image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30"
              >
                <ChevronLeft className="h-8 w-8" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30"
              >
                <ChevronRight className="h-8 w-8" />
              </motion.button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="p-6 bg-black/50">
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg transition-all ${
                    index === currentIndex
                      ? "ring-2 ring-avangarda opacity-100"
                      : "opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Modern Room Card Component
function ModernRoomCard({
  room,
  index,
  dict,
  lang,
}: {
  room: RoomType;
  index: number;
  dict: any;
  lang: string;
}) {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const phoneNumber = "+48 574 383 282";

  // Helper function for dynamic key access (only needed for room data)
  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };
  const t = (key: string) => getNestedValue(dict, key) || key;

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setShowGallery(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        className="bg-white overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 w-full h-full flex flex-col"
      >
        {/* Large Image Slider */}
        <div className="w-full">
          <ModernImageSlider
            images={room.images}
            roomName={t(room.nameKey)}
            onImageClick={openGallery}
          />
        </div>

        {/* Room Details */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t(room.nameKey)}
            </h3>
            <div className="flex justify-between items-start">
              <p className="text-xl font-bold text-avangarda">
                {t(room.priceKey)}
              </p>
              <div className="text-right">
                <p className="text-lg text-gray-600 font-medium">
                  {t(room.capacityKey)}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  {t(room.sizeKey)}
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed flex-1 line-clamp-4">
            {t(room.descriptionKey)}
          </p>

          <div className="flex flex-col gap-3 mt-auto">
            <Link href={`/${lang}/hotel/${room.id}`}>
              <Button variant="fillRight" className="w-full">
                {lang === "pl" ? "Szczegóły" : "Details"}
              </Button>
            </Link>
            <Link
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button className="w-full bg-avangarda font-alata px-3 py-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm transition-colors duration-300">
                Zarezerwuj
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modern Gallery */}
      <ModernGallery
        images={room.images}
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        initialIndex={galleryIndex}
        roomName={t(room.nameKey)}
      />
    </>
  );
}

interface RoomsIntroProps {
  dict: {
    rooms: {
      title: string;
      description: string;
      chooseRoom: string;
      amenitiesTitle: string;
      roomAmenities: {
        ac: string;
        tv: string;
        bathroom: string;
        beverages: string;
      };
      whatsIncluded: {
        title: string;
        breakfast: string;
        poolSaunaJacuzzi: string;
        saltCave: string;
        gym: string;
        playroom: string;
        dailyHousekeeping: string;
        parking: string;
      };
    };
  };
  lang: string;
}

export default function RoomsIntro({ dict, lang }: RoomsIntroProps) {
  // Filter rooms by building type
  const mainBuildingRooms = ROOMS_DATA.filter(
    (room) => room.building === "main"
  );
  const externalBuildingRooms = ROOMS_DATA.filter(
    (room) => room.building === "external"
  );

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section with Building Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
          {/* Building Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/rooms/room-intro.png"
              alt={lang === "pl" ? "Budynek Główny" : "Main Building"}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              quality={100}
            />
          </motion.div>

          {/* Text Content - Aligned to start at same height as image */}
          <div className="flex flex-col justify-start">
            <div className="space-y-6">
              <AnimatedDecorativeBar />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="title-light"
              >
                {dict.rooms.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="main-paragraph-light whitespace-pre-line"
              >
                {dict.rooms.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Wind, text: dict.rooms.roomAmenities.ac },
                    { icon: Tv, text: dict.rooms.roomAmenities.tv },
                    {
                      icon: ShowerHead,
                      text: dict.rooms.roomAmenities.bathroom,
                    },
                    { icon: Coffee, text: dict.rooms.roomAmenities.beverages },
                  ].map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 bg-avangarda/10  p-3"
                    >
                      <div className="flex-shrink-0">
                        <amenity.icon className="h-5 w-5 text-avangarda" />
                      </div>
                      <span className="text-sm font-medium flex-1">
                        {amenity.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Room Selection Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="subtitle-light text-center mb-8"
          >
            {dict.rooms.chooseRoom}
          </motion.h2>

          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 rounded-2xl p-2 h-14">
              <TabsTrigger
                value="main"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold"
              >
                {lang === "pl" ? "Budynek Główny" : "Main Building"}
              </TabsTrigger>
              <TabsTrigger
                value="external"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold"
              >
                {lang === "pl" ? "Budynek Zewnętrzny" : "External Building"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="main" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {mainBuildingRooms.map((room, index) => (
                  <ModernRoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    dict={dict}
                    lang={lang}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="external" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {externalBuildingRooms.map((room, index) => (
                  <ModernRoomCard
                    key={room.id}
                    room={room}
                    index={index}
                    dict={dict}
                    lang={lang}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </Container>
  );
}
