import Image from "next/image";
import { Container } from "@/components/container";
import { getVoucherBySlug } from "@/sanity/lib/offers/getVoucherBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import {
  Info,
  Gift,
  Shield,
  HelpCircle,
  Phone,
  Calendar,
  CreditCard,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  Star,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import { Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import VoucherFeaturesBanner from "@/components/voucher-features-banner";
import Link from "next/link";

interface Params {
  lang: string;
  slug: string;
}

const VoucherPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the voucher data using the slug
  const voucher = await getVoucherBySlug(slug);

  // Function to get localized content
  const getLocalizedContent = (voucher: any) => {
    const name = lang === "pl" ? voucher?.plname : voucher?.enname;
    const description =
      lang === "pl" ? voucher?.pldescription : voucher?.endescription;
    return {
      name: name || "No title available",
      description: description,
      value: voucher?.voucherValue || 0,
    };
  };

  // Get the localized content for the current voucher
  const localizedContent = voucher
    ? getLocalizedContent(voucher)
    : {
        name: "Gift Voucher",
        description: "No description available",
        value: 0,
      };

  // Format value with currency
  const formattedValue = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: "PLN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.value);

  // Convert description array to string
  const descriptionText = Array.isArray(localizedContent.description)
    ? localizedContent.description
        ?.map((block: any) =>
          block._type === "block"
            ? block.children?.map((child: any) => child.text).join("")
            : ""
        )
        .join("")
    : localizedContent.description || "";

  // Benefits data structure
  const voucherBenefits = [
    {
      title: dict.vouchers.benefits.flexibility.title,
      description: dict.vouchers.benefits.flexibility.description,
      icon: Clock,
    },
    {
      title: dict.vouchers.benefits.universality.title,
      description: dict.vouchers.benefits.universality.description,
      icon: Star,
    },
    {
      title: dict.vouchers.benefits.personalization.title,
      description: dict.vouchers.benefits.personalization.description,
      icon: Sparkles,
    },
    {
      title: dict.vouchers.benefits.security.title,
      description: dict.vouchers.benefits.security.description,
      icon: Shield,
    },
  ];

  // Usage steps data structure
  const usageSteps = [
    {
      step: 1,
      title: dict.vouchers.howToUse.step1.title,
      description: dict.vouchers.howToUse.step1.description,
      icon: Phone,
    },
    {
      step: 2,
      title: dict.vouchers.howToUse.step2.title,
      description: dict.vouchers.howToUse.step2.description,
      icon: Calendar,
    },
    {
      step: 3,
      title: dict.vouchers.howToUse.step3.title,
      description: dict.vouchers.howToUse.step3.description,
      icon: Heart,
    },
  ];

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
                voucher?.voucherImage
                  ? imageUrl(voucher.voucherImage)
                      .width(800)
                      .height(800)
                      .quality(90)
                      .url()
                  : "/placeholder.svg?height=800&width=800&query=gift+voucher"
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
                      {dict.vouchers.hero.badge}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                      {localizedContent.name}
                    </h1>
                    <div className="flex items-center mb-4">
                      <Tag className="mr-2 h-6 w-6 text-avangarda" />
                      <span className="text-2xl md:text-3xl font-bold text-white/95">
                        {dict.vouchers.hero.cashVoucher}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-md leading-relaxed">
                    {descriptionText}
                  </p>

                  {/* Single Action Button */}
                  <div className="pt-1 md:pt-2">
                    <Link href="#voucherCTA">
                      <Button
                        size="lg"
                        className="bg-avangarda hover:bg-avangarda/90 text-white border-0 shadow-lg shadow-[#E31C79]/20"
                      >
                        {dict.vouchers.hero.purchaseButton}
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
              voucher?.voucherImage
                ? imageUrl(voucher.voucherImage)
                    .width(800)
                    .height(1200)
                    .quality(90)
                    .url()
                : "/placeholder.svg?height=1200&width=800&query=gift+voucher"
            }
            alt={localizedContent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Enhanced Content Section */}
      <Container className="py-12 md:py-20">
        {voucher ? (
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Voucher Benefits - New Enhanced Section */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Gift className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict.vouchers.benefits.title}
                  </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {voucherBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-avangarda/30 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-avangarda/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-avangarda/20 transition-colors">
                        <benefit.icon className="h-8 w-8 text-avangarda" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to Use - Enhanced */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <HelpCircle className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict.vouchers.howToUse.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {usageSteps.map((step, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-avangarda to-avangarda/80 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <step.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-avangarda rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-avangarda">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Perfect Gift For - New Section */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict.vouchers.perfectGift.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {dict.vouchers.perfectGift.occasions.map(
                    (occasion, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-avangarda/5 to-transparent border border-avangarda/20 hover:border-avangarda/40 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="p-2 bg-avangarda/10 rounded-full mr-3 group-hover:bg-avangarda/20 transition-colors">
                          <CheckCircle className="h-4 w-4 text-avangarda" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {occasion}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Enhanced Terms and Conditions */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict.vouchers.terms.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* Voucher do restauracji Dzika Róża */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-avangarda/10 rounded-full flex items-center justify-center mr-3">
                        <Gift className="h-4 w-4 text-avangarda" />
                      </div>
                      {dict.vouchers.terms.restaurant.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.vouchers.terms.restaurant.description}
                    </p>
                  </div>

                  {/* Voucher do Klubu Coola */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-avangarda/10 rounded-full flex items-center justify-center mr-3">
                        <Gift className="h-4 w-4 text-avangarda" />
                      </div>
                      {dict.vouchers.terms.club.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.vouchers.terms.club.description}
                    </p>
                  </div>

                  {/* Voucher SPA */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-avangarda/10 rounded-full flex items-center justify-center mr-3">
                        <Gift className="h-4 w-4 text-avangarda" />
                      </div>
                      {dict.vouchers.terms.spa.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.vouchers.terms.spa.description}
                    </p>
                  </div>

                  {/* Voucher na usługi hotelowe */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-6 border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-avangarda/10 rounded-full flex items-center justify-center mr-3">
                        <Gift className="h-4 w-4 text-avangarda" />
                      </div>
                      {dict.vouchers.terms.hotel.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.vouchers.terms.hotel.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800 leading-relaxed">
                        <strong className="text-blue-900">
                          {lang === "pl" ? "Ważne:" : "Important:"}
                        </strong>{" "}
                        {dict.vouchers.terms.important}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Practical Info */}
            <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-avangarda">
              <div className="p-8 md:p-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-avangarda/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-avangarda" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {dict.vouchers.practicalInfo.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <Phone className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {dict.vouchers.practicalInfo.reservations.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.reservations.phone}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.reservations.email}
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <Clock className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {dict.vouchers.practicalInfo.hours.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.hours.time}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.hours.description}
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-avangarda/30 transition-colors">
                    <CreditCard className="h-8 w-8 text-avangarda mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {dict.vouchers.practicalInfo.payment.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.payment.cards}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {dict.vouchers.practicalInfo.payment.cash}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">{dict.vouchers.notFound}</p>
          </div>
        )}
      </Container>

      {/* Call to action */}
      <div id="voucherCTA">
        <OffersCTA dict={dict} lang={lang} />
      </div>
    </main>
  );
};

export default VoucherPageId;
