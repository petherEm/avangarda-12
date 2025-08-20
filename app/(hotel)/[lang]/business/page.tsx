import GenericCTA from "@/components/generic-cta";
import BusinessBanquets from "@/components/modules/Business/BusinessBanquets";
import BusinessHero from "@/components/modules/Business/BusinessHero";
import BusinessIntro from "@/components/modules/Business/BusinessIntro";
import BusinessEntertainment from "@/components/modules/Business/BusinessRest";
import BusinessRommsSelect from "@/components/modules/Business/BusinessRoomsSelect";
import BusinessSpa from "@/components/modules/Business/BusinessSpa";
import TrustedCompanies from "@/components/modules/Business/TrustedCompanies";

import { getDictionary } from "@/lib/dictionary";
import {
  getAllBusinessOffers,
  getBusinessOfferBySlug,
  getPrimaryBusinessOffer,
} from "@/sanity/lib/offers/getBusinessOffer";

export default async function BusinessMainPageAlt({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch business offers
  const businessOffers = await getAllBusinessOffers();

  // Fetch specific business offers by slug with fallbacks
  const conferenceOffer =
    (await getBusinessOfferBySlug("konferencje-w-butikowym-stylu")) ||
    (await getPrimaryBusinessOffer());

  const banquetOffer =
    (await getBusinessOfferBySlug("wieczory-pelne-smaku")) ||
    (await getPrimaryBusinessOffer());

  // Fetch entertainment offers for each tab
  const clubOffer =
    (await getBusinessOfferBySlug("oferta-klubowe-wieczory")) ||
    (await getPrimaryBusinessOffer());

  const outdoorOffer =
    (await getBusinessOfferBySlug("oferta-aktywnosci-plenerowe")) ||
    (await getPrimaryBusinessOffer());

  const fortOffer =
    (await getBusinessOfferBySlug("oferta-fort-no-4-wieczory-tematyczne")) ||
    (await getPrimaryBusinessOffer());

  const dymnaOffer =
    (await getBusinessOfferBySlug("oferta-dymna-polana")) ||
    (await getPrimaryBusinessOffer());

  const przystanOffer =
    (await getBusinessOfferBySlug("oferta-aktywny-dzien-na-przystani")) ||
    (await getPrimaryBusinessOffer());

  // Fetch Mediterranean dinner offer separately
  const mediterraneanOffer =
    (await getBusinessOfferBySlug("oferta-kolacja-srodziemnomorska")) ||
    (await getPrimaryBusinessOffer());

  // Fetch spa offer
  const spaOffer =
    (await getBusinessOfferBySlug("biznes-spa")) ||
    (await getPrimaryBusinessOffer());

  const entertainmentOffers = {
    club: clubOffer,
    outdoor: outdoorOffer,
    fort: fortOffer,
    dymna: dymnaOffer,
    przystan: przystanOffer,
    mediterranean: mediterraneanOffer, // Add Mediterranean offer
  };

  const title = lang === "pl" ? "Oferta dla biznesu" : "Business events";

  return (
    <>
      <BusinessHero />
      <BusinessIntro
        dict={dict}
        lang={lang}
        businessOffers={businessOffers}
        conferenceOffer={conferenceOffer}
      />
      <BusinessBanquets dict={dict} lang={lang} banquetOffer={banquetOffer} />
      <BusinessRommsSelect dict={dict} lang={lang} />
      <BusinessEntertainment
        dict={dict}
        lang={lang}
        entertainmentOffers={entertainmentOffers}
      />
      <BusinessSpa dict={dict} lang={lang} spaOffer={spaOffer} />
      <TrustedCompanies dict={dict} lang={lang} />
      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie dla biznesu. Jesteśmy tu, aby pomóc Ci zorganizować idealne wydarzenie."
        phoneNumber="+48 574 383 282"
        downloadOffer={lang === "pl" ? "Pobierz ofertę" : "Download offer"}
        variant="dark"
      />
    </>
  );
}
