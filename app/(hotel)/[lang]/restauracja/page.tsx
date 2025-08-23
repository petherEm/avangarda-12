import GastroClub from "@/components/modules/Gastro/GastroClub";
import GastroCTA from "@/components/modules/Gastro/GastroCTA";
import GastroHero from "@/components/modules/Gastro/GastroHero";
import GastroIntro from "@/components/modules/Gastro/GastroIntro";
import GastroPort2 from "@/components/modules/Gastro/GastroPort2";
import GastroRest from "@/components/modules/Gastro/GastroRest";
import LoopGallery from "@/components/loop-gallery";
import { getDictionary } from "@/lib/dictionary";
import { getAllMenus } from "@/sanity/lib/menus/getMenusByRestaurant";
import GenericCTA from "@/components/generic-cta";

// Gallery images for Restaurant Dzika Róża
const restaurantGalleryImages = [
  {
    src: "/restaurant/bar-przystan-main.jpeg",
    alt: "Przystan Avangarda Main",
  },
  {
    src: "/restaurant/rest-08.jpg",
    alt: "Prywatna sala restauracyjna",
  },
  {
    src: "/restaurant/rest-11.jpg",
    alt: "Tradycyjne polskie dania",
  },
  {
    src: "/restaurant/rest-01.jpg",
    alt: "Restauracja Dzika Róża",
  },
  {
    src: "/restaurant/rest-12.jpg",
    alt: "Wykwintne potrawy",
  },
  {
    src: "/restaurant/rest-01.jpg",
    alt: "Restauracja Dzika Róża",
  },

  {
    src: "/restaurant/rest-bar-main-01.jpeg",
    alt: "Elegancka atmosfera",
  },
  {
    src: "/restaurant/rest-07.jpg",
    alt: "Dzika Roza dish",
  },
  {
    src: "/restaurant/rest-coola-main-02.jpeg",
    alt: "Profesjonalna obsługa",
  },
];

// Gallery images for Klub Coola
const klubCoolaGalleryImages = [
  {
    src: "/klub/coola-new-02.jpeg",
    alt: "Klub Coola - wnętrze",
  },
  {
    src: "/klub/coola-new-03.jpeg",
    alt: "Wnętrze klubu",
  },
  {
    src: "/klub/coola-new-04.jpeg",
    alt: "Strefa gier",
  },
  {
    src: "/klub/coola-new-05.jpeg",
    alt: "Bar i restauracja",
  },
  {
    src: "/klub/klub-05.jpg",
    alt: "Kręgielnia",
  },
  {
    src: "/klub/klub-06.jpg",
    alt: "Sala rozrywki",
  },
  {
    src: "/klub/klub-07.jpg",
    alt: "Strefa baru",
  },
  {
    src: "/klub/coola-new-01.jpeg",
    alt: "Atmosfera wieczorna",
  },
];

// Gallery images for Bar Przystań
const barrPrzystanGalleryImages = [
  {
    src: "/outdoor/active-rest-02.jpeg",
    alt: "Bar Przystań - widok na rzekę",
  },
  {
    src: "/outdoor/active-rest-03.jpeg",
    alt: "Widok na Narew",
  },
  {
    src: "/outdoor/active-rest-04.jpeg",
    alt: "Taras nad rzeką",
  },
  {
    src: "/outdoor/outdoor-event-01.jpg",
    alt: "Grill i świeże ryby",
  },
  {
    src: "/outdoor/outdoor-event-02.jpeg",
    alt: "Przystań wieczorem",
  },
  {
    src: "/outdoor/outdoor-event-03.jpeg",
    alt: "Taras restauracyjny",
  },
  {
    src: "/outdoor/room-barbec-01.jpeg",
    alt: "Widok z tarasu",
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
      <LoopGallery
        title={lang === "pl" ? "Nasza restauracja" : "Our restaurant"}
        images={restaurantGalleryImages}
      />
      <GastroClub
        dict={dict}
        lang={lang}
        menus={menusByRestaurant["klub-coola"]}
      />
      {/* Club Gallery - Full Width Edge to Edge */}
      <LoopGallery
        title={lang === "pl" ? "Nasz klub Coola" : "Our club Coola"}
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
      <LoopGallery
        title={
          lang === "pl" ? "Nasza Przystań Avangarda" : "Our Przystań Avangarda"
        }
        images={barrPrzystanGalleryImages}
      />
      <GenericCTA
        header={
          lang === "pl" ? "Zarezerwuj stolik" : "Don't Wait! Book a table"
        }
        leadText={
          lang === "pl"
            ? "Zarezerwuj stolik w naszej restauracji i ciesz się wyjątkowym doświadczeniem kulinarnym."
            : "Book a table in our restaurant and enjoy a delightful dining experience."
        }
        phoneNumber="+48 29 752 50 34"
        variant="dark"
      />
    </>
  );
}
