"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface TrustedCompaniesProps {
  dict?: any;
  lang?: string;
}

export default function TrustedCompanies({
  dict,
  lang = "pl",
}: TrustedCompaniesProps) {
  const companies = [
    {
      name: "eTravel",
      logo: "/firm-testimonials/eTravel-1.png",
    },
    {
      name: "GladioGroup",
      logo: "/firm-testimonials/gladiogroup.png",
    },
    {
      name: "InterRisk Vienna Insurance Group",
      logo: "/firm-testimonials/interrisk.png",
    },
    {
      name: "Emolium",
      logo: "/firm-testimonials/emolium.png",
    },
    {
      name: "DeveloperGO",
      logo: "/firm-testimonials/developergo.png",
    },
    {
      name: "Iwostin Clinical Skin Care",
      logo: "/firm-testimonials/iwostin.png",
    },
    {
      name: "Krüger Group",
      logo: "/firm-testimonials/kruger-1.png",
    },
    {
      name: "Kaufland",
      logo: "/firm-testimonials/kaufland.jpg",
    },
    {
      name: "PKO Bank Polski",
      logo: "/firm-testimonials/pkobp-2.png",
    },
    {
      name: "Wszechnica",
      logo: "/firm-testimonials/wszechnica.png",
    },
    {
      name: "FRBS",
      logo: "/firm-testimonials/frbs.png",
    },
    {
      name: "AWF",
      logo: "/firm-testimonials/awf.png",
    },
    {
      name: "JYSK",
      logo: "/firm-testimonials/jysk.png",
    },
    {
      name: "BS Wasewo",
      logo: "/firm-testimonials/BS_Wasewo.png",
    },
  ];

  // Split companies into two rows
  const firstRow = companies.slice(0, 7);
  const secondRow = companies.slice(7, 14);

  return (
    <div className="bg-white w-full text-primary py-8 lg:py-10">
      {/* Header Section - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center">
            <AnimatedDecorativeBar />
            <h1 className="title-light">
              {dict.business.trustedCompanies.title}
            </h1>
          </div>
          <p className="main-paragraph-light max-w-2xl mx-auto whitespace-pre-line">
            {dict.business.trustedCompanies.description}
          </p>
        </motion.div>
      </div>

      {/* Moving Logos Section - Full Width */}
      <div className="w-full space-y-8">
        {/* First Row - Moving Right */}
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {firstRow.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 mx-6 hover:scale-105 transition-transform"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} ${dict.business.trustedCompanies.logoAlt}`}
                width={180}
                height={120}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </Marquee>

        {/* Second Row - Moving Left */}
        <Marquee
          speed={40}
          gradient={false}
          direction="right"
          pauseOnHover={false}
        >
          {secondRow.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 mx-6 hover:scale-105 transition-transform"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} ${dict.business.trustedCompanies.logoAlt}`}
                width={180}
                height={120}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Bottom Text - Contained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            {dict.business.trustedCompanies.bottomText}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
