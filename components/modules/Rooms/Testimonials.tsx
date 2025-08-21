"use client";

import type React from "react";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { useState, useRef, useCallback } from "react";

interface TestimonialsProps {
  lang?: string;
  dict: {
    testimonials: {
      title: string;
      description: string;
      ratings: {
        tripadvisor: string;
        booking: string;
        google: string;
      };
    };
    testimonials: Array<{
      id: number;
      name: string;
      location: string;
      rating: number;
      text: string;
      platform: string;
    }>;
  };
}

const Testimonials = ({ lang = "pl", dict }: TestimonialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Use testimonials from dictionary, fallback to default if not provided
  const testimonials = dict?.testimonials || [
    {
      id: 1,
      name: "Ania",
      location: "Warszawa",
      rating: 5,
      text: "Niesamowite miejsce! Personel bardzo pomocny, pokoje czyste i wygodne. SPA to prawdziwa oaza spokoju. Na pewno wrócimy!",
      platform: "TripAdvisor",
    },
    {
      id: 2,
      name: "Michał",
      location: "Wyszków",
      rating: 5,
      text: "Hotel przekroczył nasze oczekiwania. Restauracja serwuje wyśmienite posiłki, a lokalizacja jest idealna na relaks z dala od miejskiego zgiełku.",
      platform: "Booking.com",
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      location: "Ostrołęka",
      rating: 5,
      text: "Organizowaliśmy tu wesele i wszystko było perfekcyjne. Obsługa na najwyższym poziomie, jedzenie wyśmienite, goście zachwyceni!",
      platform: "Google",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  // Minimum swipe distance required to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="w-full py-16 md:py-28 relative">
      <BackgroundLogoBottomDark />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section with Ratings */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <AnimatedDecorativeBar className="w-20 h-2 bg-avangarda mb-6" />
            <h1 className="title-dark capitalize">
              {dict.testimonialsSection?.title || "Co mówią nasi goście?"}
            </h1>
            <p className="main-paragraph-dark max-w-lg">
              {dict.testimonialsSection?.description ||
                "Poznaj opinie naszych gości i przekonaj się, dlaczego wybierają Hotel Avangarda"}
            </p>
          </div>

          {/* Right side - Ratings logos */}
          <div className="lg:w-1/2">
            {/* Mobile layout - single row with 3 items */}
            <div className="lg:hidden">
              <div className="flex gap-1 justify-between">
                {/* TripAdvisor */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="bg-white backdrop-blur-sm rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/BW-tripadvisor.png"
                        alt={
                          dict.testimonialsSection?.ratings?.tripadvisor ||
                          "TripAdvisor Reviews"
                        }
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2 w-2 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div className="text-sm font-bold text-white">4.8/5</div>
                      <div className="text-gray-300 text-xs">TripAdvisor</div>
                    </div>
                  </div>
                </div>

                {/* Booking.com */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="bg-white backdrop-blur-sm rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/BW-booking-6.png"
                        alt={
                          dict.testimonialsSection?.ratings?.booking ||
                          "Booking.com"
                        }
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2 w-2 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div className="text-sm font-bold text-white">9.2/10</div>
                      <div className="text-gray-300 text-xs">Booking.com</div>
                    </div>
                  </div>
                </div>

                {/* Google */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="bg-white backdrop-blur-sm rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/BW-google.jpg"
                        alt={
                          dict.testimonialsSection?.ratings?.google ||
                          "Google Reviews"
                        }
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-2 w-2 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div className="text-sm font-bold text-white">4.7/5</div>
                      <div className="text-gray-300 text-xs">Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {/* TripAdvisor */}
              <div className="text-center">
                <div className="bg-white backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/BW-tripadvisor.png"
                    alt={
                      dict.testimonialsSection?.ratings?.tripadvisor ||
                      "TripAdvisor Reviews"
                    }
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-white text-white mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-gray-300 text-sm">TripAdvisor</div>
              </div>

              {/* Booking.com */}
              <div className="text-center">
                <div className="bg-white backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/BW-booking-6.png"
                    alt={
                      dict.testimonialsSection?.ratings?.booking ||
                      "Booking.com"
                    }
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-white text-white mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">9.2/10</div>
                <div className="text-gray-300 text-sm">Booking.com</div>
              </div>

              {/* Google */}
              <div className="text-center">
                <div className="bg-white backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/BW-google.jpg"
                    alt={
                      dict.testimonialsSection?.ratings?.google ||
                      "Google Reviews"
                    }
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-white text-white mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.7/5</div>
                <div className="text-gray-300 text-sm">Google</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Desktop Grid / Mobile Slider */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm p-8 relative mt-8"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-avangarda p-3 rounded-full shadow-lg">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-white text-white mx-0.5"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-center mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="text-center border-t border-white/20 pt-6">
                  <p className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-300 mb-3">{testimonial.location}</p>
                  <Badge
                    variant="outline"
                    className="border-white text-white bg-transparent"
                  >
                    {testimonial.platform}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden">
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              ref={sliderRef}
            >
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-8 relative mt-8">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 left-8">
                        <div className="bg-avangarda p-3 rounded-full shadow-lg">
                          <Quote className="h-5 w-5 text-white" />
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex justify-center mb-6 mt-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-white text-white mx-0.5"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-white text-center mb-8 leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="text-center border-t border-white/20 pt-6">
                        <p className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-300 mb-3">
                          {testimonial.location}
                        </p>
                        <Badge
                          variant="outline"
                          className="border-white text-white bg-transparent"
                        >
                          {testimonial.platform}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label={
                  dict.testimonialsSection?.navigation?.previous ||
                  "Previous testimonial"
                }
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-avangarda" : "bg-white/30"
                    }`}
                    aria-label={
                      dict.testimonialsSection?.navigation?.goTo?.replace(
                        "{number}",
                        (index + 1).toString()
                      ) || `Go to testimonial ${index + 1}`
                    }
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label={
                  dict.testimonialsSection?.navigation?.next ||
                  "Next testimonial"
                }
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
