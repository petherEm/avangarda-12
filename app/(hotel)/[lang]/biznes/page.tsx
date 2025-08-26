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
  getBusinessOfferByKey,
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

  // Fetch specific business offers by stable key with fallbacks
  const conferenceOffer =
    (await getBusinessOfferByKey("conference-boutique")) ||
    (await getPrimaryBusinessOffer());

  const banquetOffer =
    (await getBusinessOfferByKey("banquet-evenings")) ||
    (await getPrimaryBusinessOffer());

  // Fetch the 4 new banquet offers
  const banquetDinnerOffer =
    (await getBusinessOfferByKey("banquet-dinner")) ||
    (await getPrimaryBusinessOffer());

  const buffetDinnerOffer =
    (await getBusinessOfferByKey("buffet-dinner")) ||
    (await getPrimaryBusinessOffer());

  const businessDinnerOffer =
    (await getBusinessOfferByKey("business-dinner")) ||
    (await getPrimaryBusinessOffer());

  const servedDinnerOffer =
    (await getBusinessOfferByKey("served-dinner")) ||
    (await getPrimaryBusinessOffer());

  // Fetch entertainment offers for each tab
  const clubOffer =
    (await getBusinessOfferByKey("club-evenings")) ||
    (await getPrimaryBusinessOffer());

  const outdoorOffer =
    (await getBusinessOfferByKey("outdoor-activities")) ||
    (await getPrimaryBusinessOffer());

  const fortOffer =
    (await getBusinessOfferByKey("fort-themed-evenings")) ||
    (await getPrimaryBusinessOffer());

  // Fetch the 4 new Fort offers
  const fortAmericanBbqOffer =
    (await getBusinessOfferByKey("fort-american-bbq")) ||
    (await getPrimaryBusinessOffer());

  const fortBiesiadaOffer =
    (await getBusinessOfferByKey("fort-biesiada")) ||
    (await getPrimaryBusinessOffer());

  const fortWloskaOffer =
    (await getBusinessOfferByKey("fort-italian-feast")) ||
    (await getPrimaryBusinessOffer());

  const fortGrillowaOffer =
    (await getBusinessOfferByKey("fort-grilled-dinner")) ||
    (await getPrimaryBusinessOffer());

  const dymnaOffer =
    (await getBusinessOfferByKey("dymna-polana")) ||
    (await getPrimaryBusinessOffer());

  const przystanOffer =
    (await getBusinessOfferByKey("active-day-harbor")) ||
    (await getPrimaryBusinessOffer());

  // Fetch Mediterranean dinner offer separately
  const mediterraneanOffer =
    (await getBusinessOfferByKey("mediterranean-dinner")) ||
    (await getPrimaryBusinessOffer());

  // Fetch spa offers
  const spaOffer =
    (await getBusinessOfferByKey("business-spa")) ||
    (await getPrimaryBusinessOffer());

  const spaServicesOffer =
    (await getBusinessOfferByKey("business-spa-services")) ||
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
