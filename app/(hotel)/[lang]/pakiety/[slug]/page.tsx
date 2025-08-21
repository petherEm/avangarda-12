import Image from "next/image";
import { Container } from "@/components/container";
import { getOfferBySlug } from "@/sanity/lib/offers/getOfferBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import { PortableText } from "@portabletext/react";
import {
  ArrowRight,
  Tag,
  Calendar,
  Utensils,
  Wifi,
  Coffee,
  SpadeIcon as Spa,
  Check,
  Clock,
  Users,
  Info,
  CalendarDays,
  BadgeCheck,
  Star,
  Gift,
  Camera,
  Shield,
  MapPin,
  BookOpen,
  UserSquare2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import Link from "next/link";
import type { Offers } from "../../../../../sanity.types";

interface Params {
  lang: string;
  slug: string;
}

// PortableText components for rendering block content
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-6">
        <Image
          src={imageUrl(value).url()}
          alt={value.alt || ""}
          width={800}
          height={600}
          className="rounded-lg"
        />
      </div>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-avangarda hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-gray-700">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-700">{children}</li>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-avangarda pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
};

const OffersPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the offer data using the slug
  const offer = await getOfferBySlug(slug);

  if (!offer) {
    return (
      <main className="bg-gray-50 min-h-screen font-raleway">
        <Container className="py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {lang === "pl"
                ? "Oferta nie została znaleziona"
                : "Offer not found"}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {lang === "pl"
                ? "Przepraszamy, ale nie możemy znaleźć tej oferty."
                : "Sorry, we couldn't find this offer."}
            </p>
            <Link href={`/${lang}/${lang === "pl" ? "pakiety" : "offers"}`}>
              <Button>
                {lang === "pl" ? "Powrót do ofert" : "Back to offers"}
              </Button>
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const subtitle = lang === "pl" ? offer.subtitle : offer.ensubtitle;
    const daysNights = lang === "pl" ? offer.daysNights : offer.endaysNights;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const offerListing =
      lang === "pl" ? offer.offerListing : offer.offerListingEn;
    const mainAttractions =
      lang === "pl" ? offer.mainAttractions : offer.mainAttractionsEn;
    const paidAttractions =
      lang === "pl" ? offer.paidAttractions : offer.paidAttractionsEn;
    const bookingConditions =
      lang === "pl" ? offer.bookingConditions : offer.bookingConditionsEn;
    const practicalInfo =
      lang === "pl" ? offer.practicalInfo : offer.practicalInfoEn;

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

    const perPersonPerNight = lang === "pl" ? "/os./noc" : "/person/night";

    return {
      name: name || "No title available",
      subtitle: subtitle || "",
      daysNights: daysNights || "",
      description,
      offerListing,
      mainAttractions,
      paidAttractions,
      bookingConditions,
      practicalInfo,
      price: formattedPrice,
      validityPeriod,
      perPersonPerNight,
      validUntil: offer.validUntil ? formatDate(offer.validUntil) : null,
    };
  };

  const localizedContent = getLocalizedContent(offer);

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      {/* Hero Section with space for navbar */}
      <section className="relative md:min-h-screen bg-[#404042] text-white">
        {/* Solid background color for the content area */}
        <div className="absolute top-0 left-0 bottom-0 md:w-1/2 w-full bg-[#404042] z-0"></div>

        {/* Top gradient for menu visibility */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-avangarda z-10"></div>

        {/* Mobile image - shown first on mobile, completely full width */}
        <div className="block md:hidden">
          <div className="relative w-full min-h-[100vw] bg-gray-200">
            <Image
              src={
                offer?.image
                  ? imageUrl(offer.image)
                      .width(800)
                      .height(800)
                      .quality(100)
                      .url()
                  : "/placeholder.svg?height=800&width=800&query=luxury+hotel+room"
              }
              alt={localizedContent.name}
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
            {/* Enhanced gradient overlay for better visibility at top and bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70"></div>
          </div>
        </div>

        <div className="relative z-10 md:min-h-screen flex flex-col md:block">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-screen">
              {/* Left content - positioned at bottom on desktop, normal flow on mobile */}
              <div className="md:col-span-5 flex flex-col md:justify-end pb-8 md:pb-16 pt-6 md:pt-0">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div>
                    <Badge className="mb-3 bg-avangarda hover:bg-avangarda/90 border-0 text-white px-3 py-1">
                      {lang === "pl" ? "Oferta Specjalna" : "Special Offer"}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                      {localizedContent.name}
                    </h1>
                    {localizedContent.subtitle && (
                      <p className="text-xl text-white/80 mb-4">
                        {localizedContent.subtitle}
                      </p>
                    )}
                    {localizedContent.price && (
                      <div className="flex items-center mb-4">
                        <Tag className="mr-2 h-6 w-6 text-avangarda" />
                        <span className="text-2xl md:text-3xl font-bold text-white/95">
                          {localizedContent.price}
                        </span>
                        <span className="text-sm text-white/70 ml-2">
                          {localizedContent.perPersonPerNight}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Key package details */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {localizedContent.daysNights && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-5 w-5 text-avangarda flex-shrink-0" />
                        <span className="text-white/90">
                          {localizedContent.daysNights}
                        </span>
                      </div>
                    )}
                    {offer.meals && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Utensils className="h-5 w-5 text-avangarda flex-shrink-0" />
                        <span className="text-white/90">{offer.meals}</span>
                      </div>
                    )}
                    {localizedContent.validityPeriod && (
                      <div className="flex items-center space-x-2 text-sm col-span-2">
                        <CalendarDays className="h-5 w-5 text-avangarda flex-shrink-0" />
                        <span className="text-white/90">
                          {lang === "pl" ? "Ważność:" : "Validity:"}{" "}
                          {localizedContent.validityPeriod}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description snippet */}
                  {localizedContent.description &&
                    localizedContent.description.length > 0 && (
                      <div className="text-white/90 text-lg leading-relaxed line-clamp-3">
                        <PortableText
                          value={localizedContent.description}
                          components={{
                            ...portableTextComponents,
                            block: {
                              normal: ({ children }: any) => (
                                <p className="text-white/90 leading-relaxed">
                                  {children}
                                </p>
                              ),
                            },
                          }}
                        />
                      </div>
                    )}

                  {/* Action Button */}
                  <div className="pt-1 md:pt-2">
                    <Link href="#CTA">
                      <Button
                        size="lg"
                        className="bg-avangarda hover:bg-avangarda/90 text-white border-0 shadow-lg shadow-[#E31C79]/20"
                      >
                        Zarezerwuj
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Empty columns to maintain grid spacing */}
              <div className="hidden md:block md:col-span-7"></div>
            </div>
          </div>
        </div>

        {/* Full height, full width image positioned absolutely - hidden on mobile */}
        <div className="absolute top-0 right-0 bottom-0 md:w-1/2 w-full h-screen md:h-auto hidden md:block">
          {/* Gradient overlay for darkening the image from top to middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10"></div>
          <Image
            src={
              offer?.image
                ? imageUrl(offer.image)
                    .width(800)
                    .height(1200)
                    .quality(100)
                    .url()
                : "/placeholder.svg?height=1200&width=800&query=luxury+hotel+room"
            }
            alt={localizedContent.name}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Enhanced Content Section */}
      <Container className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Package Overview */}
          {localizedContent.description &&
            localizedContent.description.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <Gift className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl" ? "Szczegóły oferty" : "Offer Details"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.description}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* What's included section */}
          {localizedContent.offerListing &&
            localizedContent.offerListing.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl" ? "Co jest wliczone" : "What's Included"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.offerListing}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Main Attractions */}
          {localizedContent.mainAttractions &&
            localizedContent.mainAttractions.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <Check className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl"
                        ? "Najważniejsze atrakcje"
                        : "Main Attractions"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.mainAttractions}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Paid Attractions */}
          {localizedContent.paidAttractions &&
            localizedContent.paidAttractions.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <Tag className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl"
                        ? "Atrakcje dodatkowo płatne"
                        : "Additional Paid Attractions"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.paidAttractions}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Booking Conditions */}
          {localizedContent.bookingConditions &&
            localizedContent.bookingConditions.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl"
                        ? "Warunki rezerwacji"
                        : "Booking Conditions"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.bookingConditions}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Practical Information */}
          {localizedContent.practicalInfo &&
            localizedContent.practicalInfo.length > 0 && (
              <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-avangarda" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {lang === "pl"
                        ? "Informacje praktyczne"
                        : "Practical Information"}
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <PortableText
                      value={localizedContent.practicalInfo}
                      components={portableTextComponents}
                    />
                  </div>
                </div>
              </div>
            )}

          {/* Contact Info */}
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                  <UserSquare2 className="h-6 w-6 text-avangarda" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {lang === "pl" ? "Kontakt" : "Contact"}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                  <Clock className="h-8 w-8 text-avangarda mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Check-in / Check-out
                  </h3>
                  <p className="text-gray-600 text-sm">15:00 / 11:00</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                  <Users className="h-8 w-8 text-avangarda mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {lang === "pl" ? "Rezerwacje" : "Reservations"}
                  </h3>
                  <p className="text-gray-600 text-sm">+48 574 383 282</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                  <MapPin className="h-8 w-8 text-avangarda mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {lang === "pl" ? "Lokalizacja" : "Location"}
                  </h3>
                  <p className="text-gray-600 text-sm">Różan nad Narwią</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Enhanced Call to action */}
      <div id="CTA">
        <OffersCTA dict={dict} lang={lang} />
      </div>
    </main>
  );
};

export default OffersPageId;
