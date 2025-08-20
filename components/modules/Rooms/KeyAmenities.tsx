"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/container";
import { Heart, Star, Baby } from "lucide-react";

const amenities = [
  {
    image: "/frenchie.jpg",
    icon: Heart,
    title: "PRZYJAZNY DLA ZWIERZĄT",
    subtitle: "Twój pies jest mile widziany",
    description:
      "Zapraszamy Gości z czworonożnymi przyjaciółmi. Nasz hotel jest w pełni przystosowany do pobytu ze zwierzętami domowymi.",
  },
  {
    image: "/klub/klub-02.JPG",
    icon: Star,
    title: "WSZYSTKO W CENIE",
    subtitle: "Atrakcje wliczone w pobyt",
    description:
      "Cena pokoju obejmuje dostęp do wszystkich atrakcji hotelowych - SPA, basenu, sauny i strefy rekreacyjnej.",
  },
  {
    image: "/offers/offers-3.jpg",
    icon: Baby,
    title: "DLA NAJMŁODSZYCH",
    subtitle: "Udogodnienia dla dzieci",
    description:
      "Oferujemy pełne wyposażenie dla rodzin z dziećmi - łóżeczka, krzesełka do karmienia i strefę zabaw.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

interface KeyAmenitiesProps {
  className?: string;
}

const KeyAmenities = ({ className }: KeyAmenitiesProps) => {
  return (
    <div className={`relative py-20 md:py-32 bg-white ${className || ""}`}>
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-alata uppercase tracking-wider max-w-3xl mx-auto"
            >
              Zatroszczymy się o Twoje potrzeby
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Odkryj wyjątkowe udogodnienia, które czynią nasz hotel idealnym
              miejscem dla każdego gościa
            </motion.p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={amenity.image || "/placeholder.svg"}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-transparent flex items-center justify-center">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide group-hover:text-avangarda transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-avangarda font-semibold text-sm uppercase tracking-wider">
                      {amenity.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {amenity.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-avangarda to-avangarda/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KeyAmenities;
