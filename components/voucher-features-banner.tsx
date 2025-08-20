"use client";

import { Gift, Clock, BadgeCheck, CreditCard, Shield } from "lucide-react";

interface VoucherFeaturesBannerProps {
  lang: string;
}

const VoucherFeaturesBanner = ({ lang }: VoucherFeaturesBannerProps) => {
  const features = [
    {
      icon: Gift,
      text: lang === "pl" ? "Idealny prezent" : "Perfect gift",
    },
    {
      icon: Clock,
      text: lang === "pl" ? "Ważny 12 miesięcy" : "Valid 12 months",
    },
    {
      icon: BadgeCheck,
      text: lang === "pl" ? "Elegancki design" : "Elegant design",
    },
    {
      icon: CreditCard,
      text: lang === "pl" ? "Łatwy zakup" : "Easy Purchase",
    },
    {
      icon: Gift,
      text: lang === "pl" ? "Personalizacja" : "Personalization",
    },
    {
      icon: Shield,
      text: lang === "pl" ? "Gwarancja" : "Guarantee",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#404042] to-[#5a5a5c] text-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-avangarda/20 rounded-full flex items-center justify-center">
                <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-avangarda" />
              </div>
              <span className="text-white/90 text-sm md:text-base leading-tight">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherFeaturesBanner;
