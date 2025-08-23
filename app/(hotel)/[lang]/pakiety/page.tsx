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
        header={lang === "pl" ? "Skontaktuj się z nami" : "Contact us"}
        leadText={
          lang === "pl"
            ? "Chętnie pomożemy dobrać ofertę dopasowaną do Twoich potrzeb. Zarezerwuj wyjątkowy pakiet pobytowy lub voucher i ciesz się niezapomnianym czasem w Hotelu Avangarda."
            : "We are happy to help you choose an offer tailored to your needs. Book a unique stay package or voucher and enjoy an unforgettable time at Hotel Avangarda."
        }
        phoneNumber="+48 29 752 50 34"
        variant="light"
      />
    </>
  );
};

export default Pakiety;
