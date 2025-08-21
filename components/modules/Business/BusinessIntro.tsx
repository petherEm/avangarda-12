"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Download, Phone } from "lucide-react";

import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { fileUrl } from "@/lib/fileUrl";

interface BusinessIntroProps {
  dict: {
    business: {
      title: string;
      subtitle: string;
      introDescription1: string;
      introDescription2: string;
      introDescription3: string;
      learnMore: string;
      downloadOffer: string;
    };
  };
  lang: string;
  businessOffers: any[];
  conferenceOffer?: any;
}

export default function BusinessIntro({
  dict,
  lang,
  businessOffers,
  conferenceOffer,
}: BusinessIntroProps) {
  const phoneNumber = "+48 574 383 282";

  // Use the specific conference offer or fallback to the first business offer
  const primaryBusinessOffer = conferenceOffer || businessOffers?.[0];

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-6">
          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              {dict.business.title} <br />
              <span className="text-2xl">{dict.business.subtitle}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light whitespace-pre-line"
            >
              {dict.business.introDescription1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light whitespace-pre-line"
            >
              {dict.business.introDescription2}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="main-paragraph-light whitespace-pre-line"
            >
              {dict.business.introDescription3}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="flex items-center gap-2"
              >
                <Button size="lg" className="w-fit" variant="fillRight">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  {dict.business.learnMore}
                </Button>
              </Link>
              {primaryBusinessOffer && primaryBusinessOffer.offerFile && (
                <Link
                  href={fileUrl(primaryBusinessOffer.offerFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Button variant="avangarda" size="lg">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    {dict.business.downloadOffer}
                  </Button>
                </Link>
              )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <Image
              src="/business/business-new.jpeg"
              alt={dict.business.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
