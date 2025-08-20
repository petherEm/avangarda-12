import SpaCTA from "@/components/modules/Spa/SpaCTA";
import SpaHero from "@/components/modules/Spa/SpaHero";
import SpaIntro from "@/components/modules/Spa/SpaIntro";
import SpaPopup from "@/components/spa-popup";

import { getDictionary } from "@/lib/dictionary";
import {
  getAllSpaOffers,
  getSpaOfferBySlug,
  getPrimarySpaOffer,
} from "@/sanity/lib/offers/getSpaOffer";
import { getActiveSpaPopups } from "@/sanity/lib/popups/getSpaPopup";

export default async function SpaMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch spa offers
  const spaOffers = await getAllSpaOffers();
  const activeSpaPopups = await getActiveSpaPopups();

  // Fetch specific spa offers by slug with fallbacks
  const familijnaNiedzielaOffer =
    (await getSpaOfferBySlug("familijna-niedziela")) ||
    (await getPrimarySpaOffer());

  const basenDaySpaOffer =
    (await getSpaOfferBySlug("basen-day-spa")) || (await getPrimarySpaOffer());

  const kidsSpaOffer =
    (await getSpaOfferBySlug("kids-spa")) || (await getPrimarySpaOffer());

  const zabieginiCialoOffer =
    (await getSpaOfferBySlug("zabiegi-na-cialo")) ||
    (await getPrimarySpaOffer());

  const zabiegiNaTwarzOffer =
    (await getSpaOfferBySlug("zabiegi-na-twarz")) ||
    (await getPrimarySpaOffer());

  const masazeIRytualy =
    (await getSpaOfferBySlug("masaze-i-rytualy")) ||
    (await getPrimarySpaOffer());

  const specificSpaOffers = {
    familijnaNiedziela: familijnaNiedzielaOffer,
    basenDaySpa: basenDaySpaOffer,
    kidsSpa: kidsSpaOffer,
    zabiegiNaCialo: zabieginiCialoOffer,
    zabiegiNaTwarz: zabiegiNaTwarzOffer,
    masazeIRytualy: masazeIRytualy,
  };

  return (
    <>
      <SpaHero />
      <SpaIntro
        dict={dict}
        lang={lang}
        spaOffers={spaOffers}
        specificSpaOffers={specificSpaOffers}
      />
      <SpaCTA dict={dict} lang={lang} />
      <SpaPopup lang={lang} popups={activeSpaPopups} />
      {/* Additional components can be added here */}
    </>
  );
}
