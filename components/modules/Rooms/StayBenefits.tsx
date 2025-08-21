"use client";

import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { motion } from "framer-motion";
import {
  Shield,
  Tag,
  Gift,
  CheckCircle,
  Car,
  Wifi,
  Baby,
  Accessibility,
  BrushCleaning,
} from "lucide-react";

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

interface StayBenefitsProps {
  className?: string;
  dict: {
    stayBenefits: {
      benefits: {
        bestOffers: {
          title: string;
          description: string;
        };
        instantConfirmation: {
          title: string;
          description: string;
        };
        lowestPrices: {
          title: string;
          description: string;
        };
        securePayments: {
          title: string;
          description: string;
        };
        freeParking: {
          title: string;
          description: string;
        };
        freeWifi: {
          title: string;
          description: string;
        };
        childFriendly: {
          title: string;
          description: string;
        };
        dailyHousekeeping: {
          title: string;
          description: string;
        };
        accessibleFriendly: {
          title: string;
          description: string;
        };
      };
    };
  };
}

const StayBenefits = ({ className, dict }: StayBenefitsProps) => {
  const benefits = [
    {
      icon: Gift,
      title: dict.stayBenefits.benefits.bestOffers.title,
      description: dict.stayBenefits.benefits.bestOffers.description,
    },
    {
      icon: CheckCircle,
      title: dict.stayBenefits.benefits.instantConfirmation.title,
      description: dict.stayBenefits.benefits.instantConfirmation.description,
    },
    {
      icon: Tag,
      title: dict.stayBenefits.benefits.lowestPrices.title,
      description: dict.stayBenefits.benefits.lowestPrices.description,
    },
    {
      icon: Shield,
      title: dict.stayBenefits.benefits.securePayments.title,
      description: dict.stayBenefits.benefits.securePayments.description,
    },
    {
      icon: Car,
      title: dict.stayBenefits.benefits.freeParking.title,
      description: dict.stayBenefits.benefits.freeParking.description,
    },
    {
      icon: Wifi,
      title: dict.stayBenefits.benefits.freeWifi.title,
      description: dict.stayBenefits.benefits.freeWifi.description,
    },
    {
      icon: Baby,
      title: dict.stayBenefits.benefits.childFriendly.title,
      description: dict.stayBenefits.benefits.childFriendly.description,
    },
    {
      icon: BrushCleaning,
      title: dict.stayBenefits.benefits.dailyHousekeeping.title,
      description: dict.stayBenefits.benefits.dailyHousekeeping.description,
    },
    {
      icon: Accessibility,
      title: dict.stayBenefits.benefits.accessibleFriendly.title,
      description: dict.stayBenefits.benefits.accessibleFriendly.description,
    },
  ];

  return (
    <section className="w-full py-16 md:py-28 relative">
      <BackgroundLogoBottomDark />
      <div className="relative z-20 px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid - 2 columns on mobile, 3 columns on desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                {/* Benefit Item */}
                <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-5 hover:bg-white/5 transition-all duration-300 h-[120px] sm:h-[140px] lg:h-[150px] border-b border-r border-avangarda/40 last:border-r-0 lg:last:border-r lg:[&:nth-child(3n)]:border-r-0">
                  {/* Icon Circle */}
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-avangarda/30 bg-avangarda/10 flex items-center justify-center group-hover:border-avangarda group-hover:bg-avangarda/20 transition-all duration-300 mb-2 sm:mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-avangarda" />
                  </motion.div>

                  <div className="flex-1 flex flex-col justify-center">
                    <motion.h3
                      className="text-xs sm:text-sm lg:text-base font-bold text-white mb-1 sm:mb-2 uppercase tracking-wider group-hover:text-avangarda transition-colors duration-300 leading-tight"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit.title}
                    </motion.h3>
                    <p className="text-white/70 text-xs sm:text-xs lg:text-sm leading-tight group-hover:text-white/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayBenefits;
