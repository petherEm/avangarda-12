import GenericCTA from "@/components/generic-cta";
import EventsByCategory from "@/components/modules/Events/EventsByCategory";
import EventsHero from "@/components/modules/Events/EventsHero";
import EventsIntro from "@/components/modules/Events/EventsIntro";
import LoopGallery from "@/components/loop-gallery";
import { getDictionary } from "@/lib/dictionary";
import { WEDDING_GALLERY } from "@/constants";
import { getAllEvents } from "@/sanity/lib/menus/getEventBySlug";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export default async function EventsMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch events data
  const eventsData = await getAllEvents();

  // Convert WEDDING_GALLERY to LoopGallery format
  const eventsGalleryImages = WEDDING_GALLERY.map((image) => ({
    src: image.src,
    alt: getNestedValue(dict, image.altKey) || image.altKey,
  }));

  return (
    <>
      <EventsHero />
      <EventsIntro dict={dict} lang={lang} />
      <LoopGallery
        images={eventsGalleryImages}
        title={
          getNestedValue(dict, "events.gallery.title") || "Nasze przyjęcia"
        }
      />
      <EventsByCategory dict={dict} lang={lang} eventsData={eventsData} />
      <GenericCTA
        header="Skontaktuj się z nami"
        leadText="Masz pytania lub chcesz omówić szczegóły współpracy? Skontaktuj się z nami telefonicznie lub pobierz naszą szczegółową ofertę."
        phoneNumber="+48 574 383 282"
        downloadOffer="Pobierz ofertę"
        variant="light"
      />
    </>
  );
}
