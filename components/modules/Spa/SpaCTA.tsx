"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Gift, Heart } from "lucide-react";
import { useState } from "react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

const SpaCTA = ({ dict, lang }) => {
  const [isHovering, setIsHovering] = useState(false);
  const phoneNumber = "+48 22 752 50 34";

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-primary text-white relative overflow-hidden mb-28 "
    >
      <div className="flex min-h-screen lg:min-h-[600px]">
        {/* Image Section - Full height, half width, edge to edge */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/spa/voucher.jpg"
            alt="Voucher SPA"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-12">
          <div className="max-w-lg">
            {/* Mobile image */}
            <div className="lg:hidden relative aspect-[4/3] w-full overflow-hidden mb-8">
              <Image
                src="/spa/voucher.jpg"
                alt="Voucher SPA"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center lg:text-left">
              <AnimatedDecorativeBar />
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                {lang === "pl"
                  ? "Voucher SPA - idealny prezent dla bliskich"
                  : "SPA Voucher - perfect gift for loved ones"}
              </h2>

              <p className="text-lg mb-6 text-gray-300">
                {lang === "pl"
                  ? "Podaruj chwile relaksu i regeneracji. Nasze vouchery SPA to doskonały sposób na okazanie troski o najbliższych. Dostępne w różnych wariantach - od pojedynczych zabiegów po kompleksowe pakiety wellness."
                  : "Give the gift of relaxation and rejuvenation. Our SPA vouchers are the perfect way to show care for your loved ones. Available in various options - from individual treatments to comprehensive wellness packages."}
              </p>

              <div className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm">
                    {lang === "pl"
                      ? "Ważność 6 miesięcy"
                      : "Valid for 6 months"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm">
                    {lang === "pl"
                      ? "Eleganckie opakowanie"
                      : "Elegant packaging"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span className="text-sm">
                    {lang === "pl"
                      ? "Możliwość personalizacji"
                      : "Personalization available"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    size="lg"
                    variant="fillRight"
                    className="w-fit border-none"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <Phone className="h-5 w-5" />
                    {isHovering
                      ? phoneNumber
                      : lang === "pl"
                        ? "Zamów voucher"
                        : "Order voucher"}
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                {lang === "pl"
                  ? "Zadzwoń, aby poznać dostępne opcje i zamówić voucher"
                  : "Call to learn about available options and order your voucher"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpaCTA;
