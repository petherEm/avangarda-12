import GenericCTA from "@/components/generic-cta";
import OffersHero from "@/components/modules/Offers/OffersHero";
import OffersIntro from "@/components/modules/Offers/OffersIntro";
import VouchersIntro from "@/components/modules/Offers/VouchersIntro";
import { getDictionary } from "@/lib/dictionary";
import { getAllOffers } from "@/sanity/lib/offers/getOffers";
import { getAllVouchers } from "@/sanity/lib/offers/getVouchers";

const Pakiety = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const offers = await getAllOffers();
  const vouchers = await getAllVouchers();

  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  const title = lang === "pl" ? "Oferty i pakiety" : "Current Offers";

  return (
    <>
      <OffersHero />
      <OffersIntro dict={dict} lang={lang} offers={offers} />
      <VouchersIntro dict={dict} lang={lang} vouchers={vouchers} />
      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Chętnie pomożemy dobrać ofertę dopasowaną do Twoich potrzeb. Zarezerwuj wyjątkowy pakiet pobytowy lub voucher i ciesz się niezapomnianym czasem w Hotelu Avangarda."
        phoneNumber="+48 574 383 282"
        variant="light"
      />
    </>
  );
};

export default Pakiety;
