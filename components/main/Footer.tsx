"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

import { Container } from "@/components/container";

interface MenuItemType {
  nameKey: string;
  href: string;
}

const MenuListing: MenuItemType[] = [
  { nameKey: "hotel", href: "/hotel" },
  { nameKey: "offers", href: "/pakiety" },
  { nameKey: "business", href: "/biznes" },
  { nameKey: "events", href: "/przyjecia" },
  { nameKey: "dining", href: "/restauracja" },
  { nameKey: "spa", href: "/spa" },
  { nameKey: "entertainment", href: "/rozrywka" },
  { nameKey: "kids", href: "/dzieci" },
];

interface FooterProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
    footer?: {
      description: string;
      contact: string;
      location: string;
      events: string;
      conferences: string;
      findUs: string;
      quickNavigation: string;
      mapAlt: string;
      address: {
        street: string;
        city: string;
        country: string;
      };
      copyright: string;
      terms: string;
      privacy: string;
      childProtection: string;
    };
  };
}

export function Footer({ lang, dict }: FooterProps) {
  const getLocalizedHref = (path: string) => `/${lang}${path}`;

  // Fallback footer data in case dict.footer is undefined
  const footerData = dict.footer || {
    description:
      "Prawdziwa Avangarda w sercu malowniczego Różana. Elegancja, gościnność i bogactwo atrakcji tworzą tu przestrzeń pełną niezapomnianych wrażeń. Idealna na wypoczynek, spotkania biznesowe i rodzinne chwile.",
    contact: "Kontakt",
    location: "Lokalizacja",
    events: "Przyjęcia",
    conferences: "Konferencje",
    findUs: "Znajdź nas",
    quickNavigation: "Szybka nawigacja",
    mapAlt: "Mapa lokalizacji Hotel Avangarda",
    address: {
      street: "ul. Królowej Bony 3",
      city: "06-230, Różan",
      country: "Polska",
    },
    copyright: "Copyright © 2025 Hotel Avangarda. All rights reserved.",
    terms: "Regulamin",
    privacy: "Prywatność",
    childProtection: "Standard Ochrony Małoletnich",
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-avangarda rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-avangarda rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Container className="relative z-10">
        <div className="py-12 md:py-20">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content Section */}
            <div className="lg:col-span-7 space-y-12">
              {/* Logo and Description */}
              <div className="space-y-6">
                {/* Mobile: Center everything, Desktop: Left align */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                  <Link href={getLocalizedHref("/")} className="block">
                    <Image
                      src="/avangarda-logo-lg-2.png"
                      alt="Hotel Avangarda"
                      width={240}
                      height={120}
                      className="h-auto w-[180px] md:w-[220px] hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed text-center md:text-left">
                    {footerData.description}
                  </p>
                  {/* Social Media - centered on mobile */}
                  <div className="flex gap-4">
                    <Link
                      href="https://www.facebook.com/hotelavangarda"
                      className="w-10 h-10 bg-white/10 hover:bg-avangarda rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                      target="_blank"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/hotel_avangarda"
                      className="w-10 h-10 bg-white/10 hover:bg-avangarda rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                      target="_blank"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* General Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-avangarda rounded-full"></div>
                    {footerData.contact}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Phone className="h-5 w-5 text-white " />
                      </div>
                      <span className="text-white/80 text-sm">
                        +48 29 752 50 34
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Mail className="h-5 w-5 text-white " />
                      </div>
                      <Link
                        href="mailto:info@hotelavangarda.pl"
                        className="text-white hover:text-avangarda transition-colors text-sm"
                      >
                        info@hotelavangarda.pl
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-avangarda rounded-full"></div>
                    {footerData.location}
                  </h3>
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                      <MapPin className="h-5 w-5 text-white " />
                    </div>
                    <address className="not-italic text-white/80 text-sm leading-relaxed">
                      {footerData.address.street}
                      <br />
                      {footerData.address.city} <br />
                      {footerData.address.country}
                    </address>
                  </div>
                </div>

                {/* Events Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-avangarda rounded-full"></div>
                    {footerData.events}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Phone className="h-5 w-5 text-white " />
                      </div>
                      <span className="text-white/80 text-sm">
                        +48 505 158 200
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Mail className="h-5 w-5 text-white " />
                      </div>
                      <Link
                        href="mailto:agnieszka.kobylinska@hotelavangarda.pl"
                        className="text-white hover:text-avangarda transition-colors text-sm"
                      >
                        agnieszka.kobylinska@hotelavangarda.pl
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Conference Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <div className="w-1 h-6 bg-avangarda rounded-full"></div>
                    {footerData.conferences}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Phone className="h-5 w-5 text-white " />
                      </div>
                      <span className="text-white/80 text-sm">
                        +48 505 158 210
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-8 h-8 bg-transparent flex items-center justify-center ">
                        <Mail className="h-5 w-5 text-white " />
                      </div>
                      <Link
                        href="mailto:konferencje@hotelavangarda.pl"
                        className="text-white hover:text-avangarda transition-colors text-sm"
                      >
                        konferencje@hotelavangarda.pl
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="lg:col-span-5 space-y-8">
              {/* Map Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <div className="w-1 h-6 bg-avangarda rounded-full"></div>
                  {footerData.findUs}
                </h3>
                <div className="relative group">
                  <div className="relative aspect-[3/3] overflow-hidden">
                    <Image
                      src="/mapa-ava.png"
                      alt={footerData.mapAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Quick Navigation */}
          <div className="mt-12 space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-avangarda rounded-full"></div>
              {footerData.quickNavigation}
            </h3>
            {/* Full viewport width navigation */}
            {/* Mobile: 2 columns, Desktop: horizontal flex */}
            <div className="grid grid-cols-2 gap-2 md:flex md:gap-3 md:justify-center md:flex-wrap lg:justify-between">
              {MenuListing.map((item) => (
                <Link
                  key={item.nameKey}
                  href={getLocalizedHref(item.href)}
                  className="group flex items-center gap-2 px-3 py-3 md:px-6 hover:text-avangarda transition-all duration-300 hover:scale-105 whitespace-nowrap justify-center md:justify-start"
                >
                  <span className="text-sm text-white group-hover:text-avangarda uppercase tracking-wide">
                    {dict.nav[item.nameKey]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                {footerData.copyright}
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href={getLocalizedHref("/regulamin")}
                  className="text-white/60 hover:text-avangarda transition-colors text-sm"
                >
                  {footerData.terms}
                </Link>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <Link
                  href={getLocalizedHref("/prywatnosc")}
                  className="text-white/60 hover:text-avangarda transition-colors text-sm"
                >
                  {footerData.privacy}
                </Link>
                <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                <Link
                  href={getLocalizedHref("/prywatnosc")}
                  className="text-white/60 hover:text-avangarda transition-colors text-sm"
                >
                  {footerData.childProtection}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
