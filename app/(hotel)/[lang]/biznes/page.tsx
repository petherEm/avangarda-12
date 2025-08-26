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

  // Fetch the 4 new banquet offers
  const banquetDinnerOffer =
    (await getBusinessOfferBySlug("kolacja-bankiet")) ||
    (await getPrimaryBusinessOffer());

  const buffetDinnerOffer =
    (await getBusinessOfferBySlug("kolacja-bufetowa")) ||
    (await getPrimaryBusinessOffer());

  const businessDinnerOffer =
    (await getBusinessOfferBySlug("kolacja-biznesowa")) ||
    (await getPrimaryBusinessOffer());

  const servedDinnerOffer =
    (await getBusinessOfferBySlug("kolacja-serwowana")) ||
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

  // Fetch the 4 new Fort offers
  const fortAmericanBbqOffer =
    (await getBusinessOfferBySlug("fort-american-bbq")) ||
    (await getPrimaryBusinessOffer());

  const fortBiesiadaOffer =
    (await getBusinessOfferBySlug("fort-biesiada")) ||
    (await getPrimaryBusinessOffer());

  const fortWloskaOffer =
    (await getBusinessOfferBySlug("fort-wloska-uczta")) ||
    (await getPrimaryBusinessOffer());

  const fortGrillowaOffer =
    (await getBusinessOfferBySlug("fort-kolacja-grillowa")) ||
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

  // Fetch spa offers
  const spaOffer =
    (await getBusinessOfferBySlug("biznes-spa")) ||
    (await getPrimaryBusinessOffer());

  const spaServicesOffer =
    (await getBusinessOfferBySlug("biznes-spa-uslugi-dla-firm")) ||
    (await getPrimaryBusinessOffer());

  const entertainmentOffers = {
    club: clubOffer,
    outdoor: outdoorOffer,
    fort: fortOffer,
    fortAmericanBbq: fortAmericanBbqOffer,
    fortBiesiada: fortBiesiadaOffer,
    fortWloska: fortWloskaOffer,
    fortGrillowa: fortGrillowaOffer,
    dymna: dymnaOffer,
    przystan: przystanOffer,
    mediterranean: mediterraneanOffer,
  };

  // Group banquet offers
  const banquetOffers = {
    main: banquetOffer,
    banquet: banquetDinnerOffer,
    buffet: buffetDinnerOffer,
    business: businessDinnerOffer,
    served: servedDinnerOffer,
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
      <BusinessBanquets dict={dict} lang={lang} banquetOffers={banquetOffers} />
      <BusinessRommsSelect dict={dict} lang={lang} />
      <BusinessEntertainment
        dict={dict}
        lang={lang}
        entertainmentOffers={entertainmentOffers}
      />
      <BusinessSpa
        dict={dict}
        lang={lang}
        spaOffer={spaOffer}
        spaServicesOffer={spaServicesOffer}
      />
      <TrustedCompanies dict={dict} lang={lang} />
      <GenericCTA
        header={lang === "pl" ? "Skontaktuj się z nami" : "Contact us"}
        leadText={
          lang === "pl"
            ? "Zadzwoń lub napisz do nas, aby dowiedzieć się więcej o naszej ofercie dla biznesu. Jesteśmy tu, aby pomóc Ci zorganizować idealne wydarzenie."
            : "Call or write to us to learn more about our business offer. We are here to help you organize the perfect event."
        }
        phoneNumber="+48 505 158 210"
        variant="dark"
      />
    </>
  );
}
