import GastroClub from "@/components/modules/Gastro/GastroClub";
import GastroCTA from "@/components/modules/Gastro/GastroCTA";
import GastroHero from "@/components/modules/Gastro/GastroHero";
import GastroIntro from "@/components/modules/Gastro/GastroIntro";
import GastroPort2 from "@/components/modules/Gastro/GastroPort2";
import GastroRest from "@/components/modules/Gastro/GastroRest";
import LoopGallery from "@/components/loop-gallery";
import { getDictionary } from "@/lib/dictionary";
import { getAllMenus } from "@/sanity/lib/menus/getMenusByRestaurant";

// Gallery images for Restaurant Dzika Róża
const restaurantGalleryImages = [
  {
    src: "/restaurant/rest-10.jpg",
    alt: "Eleganckie wnętrze restauracji",
  },
  {
    src: "/restaurant/rest-03.jpg",
    alt: "Bar restauracyjny",
  },
  {
    src: "/restaurant/rest-09.jpg",
    alt: "Prywatna sala restauracyjna",
  },
  {
    src: "/restaurant/rest-07.jpg",
    alt: "Tradycyjne polskie dania",
  },
  {
    src: "/restaurant/rest-01.jpg",
    alt: "Restauracja Dzika Róża",
  },
  {
    src: "/restaurant/rest-05.jpg",
    alt: "Wykwintne potrawy",
  },
  {
    src: "/restaurant/rest-02.jpg",
    alt: "Elegancka atmosfera",
  },
  {
    src: "/restaurant/rest-04.jpg",
    alt: "Profesjonalna obsługa",
  },
];

// Gallery images for Klub Coola
const klubCoolaGalleryImages = [
  {
    src: "/klub/klub-01.JPG",
    alt: "Klub Coola - wnętrze",
  },
  {
    src: "/klub/klub-02.JPG",
    alt: "Wnętrze klubu",
  },
  {
    src: "/klub/klub-03.JPG",
    alt: "Strefa gier",
  },
  {
    src: "/klub/klub-04.JPG",
    alt: "Bar i restauracja",
  },
  {
    src: "/klub/klub-05.JPG",
    alt: "Kręgielnia",
  },
  {
    src: "/klub/klub-06.JPG",
    alt: "Sala rozrywki",
  },
  {
    src: "/klub/klub-07.JPG",
    alt: "Strefa baru",
  },
  {
    src: "/klub/klub-08.JPG",
    alt: "Atmosfera wieczorna",
  },
];

// Gallery images for Bar Przystań
const barrPrzystanGalleryImages = [
  {
    src: "/outdoor/out-01.jpg",
    alt: "Bar Przystań - widok na rzekę",
  },
  {
    src: "/outdoor/out-02.jpg",
    alt: "Widok na Narew",
  },
  {
    src: "/outdoor/out-03.jpg",
    alt: "Taras nad rzeką",
  },
  {
    src: "/outdoor/out-04.jpg",
    alt: "Grill i świeże ryby",
  },
  {
    src: "/outdoor/out-05.jpg",
    alt: "Przystań wieczorem",
  },
  {
    src: "/outdoor/out-06.jpg",
    alt: "Taras restauracyjny",
  },
  {
    src: "/outdoor/out-07.jpg",
    alt: "Widok z tarasu",
  },
  {
    src: "/outdoor/out-08.jpg",
    alt: "Atmosfera nad rzeką",
  },
];

export default async function GastroMainPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch all menus
  const allMenus = await getAllMenus();

  // Group menus by restaurant
  const menusByRestaurant = {
    "dzika-roza": allMenus.filter((menu) => menu.restaurant === "dzika-roza"),
    "klub-coola": allMenus.filter((menu) => menu.restaurant === "klub-coola"),
    "bar-przystan": allMenus.filter(
      (menu) => menu.restaurant === "bar-przystan"
    ),
  };

  return (
    <>
      <GastroHero />
      <GastroIntro dict={dict} lang={lang} menus={menusByRestaurant} />
      <GastroRest
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["dzika-roza"]}
      />
      {/* Restaurant Gallery - Full Width Edge to Edge */}
      <LoopGallery images={restaurantGalleryImages} />
      <GastroClub
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["klub-coola"]}
      />
      {/* Club Gallery - Full Width Edge to Edge */}
      <LoopGallery
        images={klubCoolaGalleryImages}
        titleColor="dark"
        backgroundTheme="dark"
      />
      <GastroPort2
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["bar-przystan"]}
      />
      {/* Bar Przystań Gallery - Full Width Edge to Edge */}
      <LoopGallery images={barrPrzystanGalleryImages} />
      <GastroCTA dict={dict} lang={lang} />
    </>
  );
}
