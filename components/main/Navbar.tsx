"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Gift, GiftIcon, Instagram, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-swticher";
import { getTranslatedSlug } from "@/lib/slug-mapping";

// Enhanced Hamburger Menu Component with modern animations
const HamburgerMenu = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <div className="flex flex-col justify-center items-end w-8 h-8 space-y-1.5">
      <div
        className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "w-8 bg-avangarda shadow-lg shadow-avangarda/50" : "w-7"
        }`}
      />
      <div
        className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "w-8 bg-avangarda shadow-lg shadow-avangarda/50" : "w-5"
        }`}
      />
      <div
        className={`h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "w-8 bg-avangarda shadow-lg shadow-avangarda/50" : "w-4"
        }`}
      />
    </div>
  );
};

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
  { nameKey: "entertainment", href: "/atrakcje" },
  { nameKey: "kids", href: "/dzieci" },
];

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
  };
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = React.useState(false);
  const [hamburgerHovered, setHamburgerHovered] = React.useState(false);
  const [navVisible, setNavVisible] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const topBarRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Add phone number constant
  const phoneNumber = "+48 29 752 50 34"; // Replace with actual phone number

  // Detect touch device
  React.useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouchDevice();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger nav animations when scrolled or hovered (but not on touch devices)
  React.useEffect(() => {
    if (isScrolled) {
      setNavVisible(true);
    } else if (!isTouchDevice && isHovered && isScrolled) {
      // Only allow hover effects when already scrolled
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  }, [isScrolled, isHovered, isTouchDevice]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = "hidden";
      // Trigger menu items animation after sheet opens
      const timer = setTimeout(() => setMenuItemsVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "unset";
      setMenuItemsVisible(false);
    }
  }, [isSheetOpen]);

  const handleMouseEnter = (event: React.MouseEvent) => {
    // Only trigger hover effect on non-touch devices and ONLY when already scrolled
    // Remove the topBarRef condition that was causing premature background activation
    if (!isTouchDevice && isScrolled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
    }
  };

  const isActive = (href: string) => {
    // Convert the base href to the localized version for comparison
    const segments = href.replace(/^\//, "").split("/");
    const translatedSegments = segments.map((segment) =>
      getTranslatedSlug(segment, lang as "pl" | "en")
    );
    const localizedHref = `/${lang}/${translatedSegments.join("/")}`;
    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  };

  const getLocalizedHref = (path: string) => {
    // Convert path segments using slug translation
    const segments = path.replace(/^\//, "").split("/");
    const translatedSegments = segments.map((segment) => {
      if (!segment) return segment;
      return getTranslatedSlug(segment, lang as "pl" | "en");
    });
    return `/${lang}/${translatedSegments.join("/")}`;
  };

  const MobileMenuContent = () => (
    <div className="flex flex-col h-full relative overflow-hidden bg-gradient-to-br from-[#404042] via-[#404042] to-[#353537] touch-pan-y">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-avangarda/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-avangarda/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Custom close button - fixed */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsSheetOpen(false);
          }}
          className="text-white rounded-full h-10 w-10 transition-all duration-200 active:scale-95 active:bg-white/20 flex items-center justify-center focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollable content container */}
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Header with logo - compact */}
        <SheetHeader className="flex-shrink-0 pt-6 pb-4 px-4 relative z-10">
          <SheetTitle className="flex justify-center">
            <div
              className={`transition-all duration-700 ${
                menuItemsVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-4"
              }`}
            >
              <Image
                src="/avangarda-logo-sm-3.png"
                alt="Hotel Avangarda"
                width={120}
                height={96}
                className="h-auto w-[120px] drop-shadow-2xl"
                quality={100}
                priority
              />
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Navigation menu - scrollable */}
        <div className="flex-1 px-4 relative z-10 pb-4">
          {/* Navigation links - large text, compact buttons */}
          <nav className="flex flex-col space-y-1 mb-6">
            {MenuListing.map((item, index) => (
              <div
                key={item.nameKey}
                className={`transition-all duration-500 ${
                  menuItemsVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: menuItemsVisible
                    ? `${index * 80 + 300}ms`
                    : "0ms",
                }}
              >
                <a
                  href={getLocalizedHref(item.href)}
                  className={`group relative font-alata font-medium transition-all duration-200 py-3 px-3 rounded-lg block touch-manipulation ${
                    isActive(item.href)
                      ? "text-avangarda bg-gradient-to-r from-avangarda/20 to-avangarda/10 border-l-4 border-avangarda shadow-lg shadow-avangarda/20"
                      : "text-white active:text-avangarda active:bg-white/20 active:scale-95"
                  }`}
                  onClick={() => setIsSheetOpen(false)}
                >
                  <span className="relative z-10 text-lg tracking-wide">
                    {dict.nav[item.nameKey]}
                  </span>
                </a>
              </div>
            ))}
          </nav>

          {/* Action buttons - large text, compact size */}
          <div
            className={`flex flex-col gap-3 py-4 border-t border-white/20 transition-all duration-700 ${
              menuItemsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: menuItemsVisible ? "800ms" : "0ms" }}
          >
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="w-full font-alata flex items-center justify-start gap-3 text-white bg-transparent border-none py-3 px-3 rounded-lg transition-all duration-200 touch-manipulation h-auto active:scale-95 active:bg-white/20"
              onClick={() => setIsSheetOpen(false)}
            >
              <Phone className="h-4 w-4 text-avangarda flex-shrink-0" />
              <span className="text-lg truncate">{dict.nav.phone}</span>
            </a>

            <a
              href={getLocalizedHref("/pakiety/#voucher")}
              className="w-full font-alata flex items-center justify-start gap-3 text-white py-3 px-3 rounded-lg transition-all duration-200 touch-manipulation h-auto active:scale-95 active:bg-white/20"
              onClick={() => setIsSheetOpen(false)}
            >
              <Gift className="h-4 w-4 text-avangarda flex-shrink-0" />
              <span className="text-lg truncate">
                {dict.nav.voucher || "Kup Voucher"}
              </span>
            </a>

            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="w-full bg-gradient-to-r from-avangarda to-avangarda/80 text-white py-3 px-4 font-alata rounded-lg transition-all duration-200 shadow-xl border border-avangarda/20 h-auto touch-manipulation active:scale-95 active:from-avangarda/90 active:to-avangarda/70 flex items-center justify-center"
              onClick={() => setIsSheetOpen(false)}
            >
              <span className="text-lg">{dict.nav.book}</span>
            </a>
          </div>

          {/* Footer section - compact */}
          <div
            className={`flex flex-col items-center gap-4 pt-4 pb-6 transition-all duration-700 ${
              menuItemsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: menuItemsVisible ? "1000ms" : "0ms" }}
          >
            <div
              className={`transition-all duration-500 ${
                menuItemsVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: menuItemsVisible ? "1100ms" : "0ms" }}
            >
              <LanguageSwitcher />
            </div>

            <div className="flex justify-center gap-4">
              {[
                {
                  href: "https://www.facebook.com/hotelavangarda",
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/hotel_avangarda",
                  icon: Instagram,
                  label: "Instagram",
                },
              ].map(({ href, icon: Icon, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`text-white transition-all duration-200 p-2 rounded-full border border-white/10 backdrop-blur-sm touch-manipulation active:scale-95 active:bg-white/20 active:text-avangarda ${
                    menuItemsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: menuItemsVisible
                      ? `${1200 + index * 100}ms`
                      : "0ms",
                  }}
                  aria-label={`Visit our ${label} page`}
                  onClick={() => setIsSheetOpen(false)}
                  target="_blank"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Container
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-primary" : "bg-transparent pt-2 sm:pt-4"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={topBarRef}
        className={`transition-all duration-500 ${isScrolled ? "pb-2" : "flex items-center justify-end gap-4 py-2"}`}
      >
        {isScrolled ? (
          <>
            {/* Desktop layout when scrolled */}
            <div className="hidden xl:block relative">
              {/* First row: Kup Voucher, Phone, Language Switcher, Social Icons */}
              <div className="flex items-center justify-end gap-2 sm:gap-4 py-2">
                <div
                  className={`transition-all duration-500 transform ${
                    navVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: navVisible ? "0ms" : "0ms" }}
                >
                  <Link href={getLocalizedHref("/pakiety/#voucher")}>
                    <Button
                      size="sm"
                      className="bg-avangarda font-alata px-3 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-avangarda/90"
                    >
                      <GiftIcon className="h-4 w-4 mr-2" />
                      {dict.nav.voucher || "Kup Voucher"}
                    </Button>
                  </Link>
                </div>

                <div
                  className={`transition-all duration-500 transform ${
                    navVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: navVisible ? "100ms" : "0ms" }}
                >
                  <Link href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                    <Button
                      size="sm"
                      className="shadow-none bg-transparent font-alata px-2 text-xs text-white sm:px-4 sm:text-sm transition-colors duration-300 hover:text-avangarda"
                    >
                      <Phone className="h-2 w-2 sm:h-3 sm:w-3" />
                      <span className="ml-1 text-[14px]">{dict.nav.phone}</span>
                    </Button>
                  </Link>
                </div>

                <div
                  className={`transition-all duration-500 transform ${
                    navVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: navVisible ? "200ms" : "0ms" }}
                >
                  <LanguageSwitcher />
                </div>

                <div
                  className={`flex items-center gap-2 transition-all duration-500 transform ${
                    navVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: navVisible ? "300ms" : "0ms" }}
                >
                  <Link
                    href="https://www.facebook.com/hotelavangarda"
                    className="text-white transition-colors duration-300 hover:text-avangarda"
                    aria-label="Visit our Facebook page"
                    target="_blank"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/hotel_avangarda"
                    className="text-white transition-colors duration-300 hover:text-avangarda"
                    aria-label="Visit our Instagram page"
                    target="_blank"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Logo positioned on the left, centered between rows */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-500 transform ${
                  navVisible
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 -translate-x-4 scale-95"
                }`}
                style={{ transitionDelay: navVisible ? "50ms" : "0ms" }}
              >
                <Link href={getLocalizedHref("/")} className="flex-shrink-0">
                  <Image
                    src="/avangarda-logo-sm-3.png"
                    alt="Hotel Avangarda"
                    width={130}
                    height={104}
                    className="h-auto w-[110px] transition-opacity duration-500 sm:w-[130px]"
                    quality={100}
                    priority
                  />
                </Link>
              </div>

              {/* Second row: Navigation + ZAREZERWUJ */}
              <div className="flex items-center justify-between py-2">
                <nav className="flex items-center justify-center gap-3 xl:gap-6 flex-1">
                  {MenuListing.map((item, index) => (
                    <div
                      key={item.nameKey}
                      className={`transition-all duration-500 transform ${
                        navVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                      style={{
                        transitionDelay: navVisible
                          ? `${400 + index * 50}ms`
                          : "0ms",
                      }}
                    >
                      <Link
                        href={getLocalizedHref(item.href)}
                        className={`whitespace-nowrap text-md font-alata font-medium transition-colors duration-300 tracking-wider hover:text-avangarda ${
                          isActive(item.href) ? "text-avangarda" : "text-white"
                        }`}
                      >
                        {dict.nav[item.nameKey]}
                      </Link>
                    </div>
                  ))}
                </nav>

                <div
                  className={`transition-all duration-500 transform ${
                    navVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95"
                  }`}
                  style={{
                    transitionDelay: navVisible
                      ? `${400 + MenuListing.length * 50 + 100}ms`
                      : "0ms",
                  }}
                >
                  <Link
                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2"
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-avangarda to-avangarda/80 font-alata px-4 py-2 text-sm text-white transition-all duration-300 hover:from-avangarda/90 hover:to-avangarda/70 shadow-lg"
                    >
                      {dict.nav.book}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet layout when scrolled */}
            <div
              className={`xl:hidden flex items-center justify-between ${isScrolled && "py-1"}`}
            >
              <Link href={getLocalizedHref("/")} className="flex-shrink-0">
                <Image
                  src="/avangarda-logo-sm-3.png"
                  alt="Hotel Avangarda"
                  width={110}
                  height={88}
                  className="h-auto w-[110px] transition-opacity duration-500 sm:w-[120px]"
                  quality={100}
                  priority
                />
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  href={getLocalizedHref("/pakiety")}
                  className="hidden sm:flex"
                >
                  <Button
                    size="sm"
                    className="bg-avangarda font-alata px-3 py-2 text-xs text-white transition-colors duration-300 hover:bg-avangarda/90"
                  >
                    <GiftIcon className="h-3 w-3" />
                    <span className="ml-1 text-xs">
                      {dict.nav.voucher || "Voucher"}
                    </span>
                  </Button>
                </Link>

                <Link
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2"
                >
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-avangarda to-avangarda/80 font-alata px-3 py-2 text-xs text-white transition-all duration-300 hover:from-avangarda/90 hover:to-avangarda/70"
                  >
                    {dict.nav.book}
                  </Button>
                </Link>

                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="text-white p-3 rounded-full transition-all duration-300 h-14 w-8 active:scale-95 flex items-center justify-center focus:outline-none"
                      onMouseEnter={() =>
                        !isTouchDevice && setHamburgerHovered(true)
                      }
                      onMouseLeave={() =>
                        !isTouchDevice && setHamburgerHovered(false)
                      }
                    >
                      <HamburgerMenu isHovered={hamburgerHovered} />
                    </button>
                  </SheetTrigger>
                  <SheetContent
                    side="right-mobile"
                    className="p-0 overflow-hidden border-none"
                  >
                    <MobileMenuContent />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </>
        ) : (
          // Original layout when not scrolled
          <>
            <Link
              href="https://www.facebook.com/hotelavangarda"
              className="hidden xl:flex text-white transition-colors duration-300 hover:text-avangarda"
              aria-label="Visit our Facebook page"
              target="_blank"
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/hotel_avangarda"
              className="hidden xl:flex text-white transition-colors duration-300 hover:text-avangarda"
              aria-label="Visit our Instagram page"
              target="_blank"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <div className="hidden xl:block">
              <LanguageSwitcher />
            </div>
            <Link href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
              <Button
                size="sm"
                className="bg-avangarda font-alata px-2 text-xs text-white sm:px-4 sm:text-sm transition-colors duration-300 hover:bg-avangarda/90"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="ml-1 sm:ml-2">{dict.nav.phone}</span>
              </Button>
            </Link>
            <Link href={getLocalizedHref("/pakiety/#voucher")}>
              <Button
                size="sm"
                className="bg-avangarda font-alata px-2 text-xs text-white sm:px-4 sm:text-sm flex transition-colors duration-300 hover:bg-avangarda/90"
              >
                <GiftIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {dict.nav.voucher || "Kup Voucher"}
              </Button>
            </Link>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className="xl:hidden text-white p-4 rounded-full transition-all duration-300 h-14 w-8 active:scale-95 flex items-center justify-center focus:outline-none"
                  onMouseEnter={() =>
                    !isTouchDevice && setHamburgerHovered(true)
                  }
                  onMouseLeave={() =>
                    !isTouchDevice && setHamburgerHovered(false)
                  }
                >
                  <HamburgerMenu isHovered={hamburgerHovered} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right-mobile"
                className="p-0 overflow-hidden border-none"
              >
                <MobileMenuContent />
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>

      {/* Main navbar - only shown when not scrolled */}
      {!isScrolled && (
        <div className="relative">
          <div className="h-[120px] flex-col items-center justify-center sm:h-40">
            <Link
              href={getLocalizedHref("/")}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/avangarda-logo-lg-2.png"
                alt="Hotel Avangarda"
                width={200}
                height={160}
                className="h-auto w-[150px] transition-opacity duration-500 sm:w-[200px] md:w-[250px]"
                priority
              />
            </Link>
            <nav className="hidden w-full xl:flex absolute -bottom-10 left-0 flex-row justify-center gap-2 xl:gap-6 overflow-x-auto">
              {MenuListing.map((item) => (
                <Link
                  key={item.nameKey}
                  href={getLocalizedHref(item.href)}
                  className={`whitespace-nowrap text-md font-alata font-medium transition-colors duration-300 tracking-wider hover:text-avangarda ${
                    isActive(item.href) ? "text-avangarda" : "text-white"
                  }`}
                >
                  {dict.nav[item.nameKey]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </Container>
  );
}
