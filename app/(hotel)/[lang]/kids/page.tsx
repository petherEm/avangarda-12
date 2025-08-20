import ForKidsHero from "@/components/modules/ForKids/ForKidsHero";
import ForKidsIntro from "@/components/modules/ForKids/ForKidsIntro";
import { getDictionary } from "@/lib/dictionary";
import {
  getSpaOfferBySlug,
  getPrimarySpaOffer,
} from "@/sanity/lib/offers/getSpaOffer";

export default async function KidsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch specific kids spa offers by slug with fallbacks
  const familijnaNiedzielaOffer =
    (await getSpaOfferBySlug("familijna-niedziela")) ||
    (await getPrimarySpaOffer());

  const kidsSpaOffer =
    (await getSpaOfferBySlug("kids-spa")) || (await getPrimarySpaOffer());

  const kidsAtraksjeSozonoweOffer =
    (await getSpaOfferBySlug("kids-atrakcje-sezonowe")) ||
    (await getPrimarySpaOffer());

  const kidsDziecieceUrodzinkiOffer =
    (await getSpaOfferBySlug("kids-dzieciece-urodzinki")) ||
    (await getPrimarySpaOffer());

  const kidsOffers = {
    familijnaNiedziela: familijnaNiedzielaOffer,
    kidsSpa: kidsSpaOffer,
    kidsAtrakcjeSezonowe: kidsAtraksjeSozonoweOffer,
    kidsDziecieceUrodzinki: kidsDziecieceUrodzinkiOffer,
  };

  const title = lang === "pl" ? "Rozrywka i atrakcje" : "Entertainment";

  return (
    <>
      <ForKidsHero />
      <ForKidsIntro dict={dict} lang={lang} kidsOffers={kidsOffers} />
    </>
  );
}
