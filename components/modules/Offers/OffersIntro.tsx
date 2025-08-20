"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";
import OfferGrid from "@/components/offer-grid";
import type { Offers } from "../../../sanity.types";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface OffersIntroProps {
  dict: {
      offers: {
        browseTitle: string;
      };
    };
  lang: string;
  offers: Offers[];
}

const OffersIntro = ({ dict, lang, offers }: OffersIntroProps) => {
  // Helper function for translations
    // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
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

    // Get per person per night text
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

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Offers Grid Section */}
        {offers && offers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="subtitle-light">{dict.offers.browseTitle}</h2>

            <OfferGrid
              offers={offers}
              lang={lang}
              getLocalizedContent={getLocalizedContent}
            />
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default OffersIntro;
