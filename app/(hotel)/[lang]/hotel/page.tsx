import AnimateOnScroll from "@/components/animate-on-scroll";
import HotelHero from "@/components/modules/Rooms/HotelHero";
import HotelIntro from "@/components/modules/Rooms/HotelIntro";
import KeyAmenities from "@/components/modules/Rooms/KeyAmenities";
import RoomsIntro from "@/components/modules/Rooms/RoomsIntro";
import StayBenefits from "@/components/modules/Rooms/StayBenefits";
import Testimonials from "@/components/modules/Rooms/Testimonials";
import { getDictionary } from "@/lib/dictionary";

export default async function HotelMain({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Nasz Hotel" : "Our hotel";

  return (
    <>
      {/* <HeroImage image="/hotel-hero-2.jpg" title={title} /> */}
      <HotelHero />
      <HotelIntro dict={dict} lang={lang} />
      <Testimonials lang={lang} dict={dict} />
      <RoomsIntro dict={dict} lang={lang} />
      <StayBenefits dict={dict} lang={lang} />
      <KeyAmenities dict={dict} lang={lang} />
    </>
  );
}
