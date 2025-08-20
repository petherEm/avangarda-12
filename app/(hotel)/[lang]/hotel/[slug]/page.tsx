import { notFound } from "next/navigation";
import { ROOMS_DATA } from "@/constants";

import { getDictionary } from "@/lib/dictionary";
import RoomDetails from "@/components/modules/Rooms/RoomDetails";

interface RoomPageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export default async function RoomPage({ params }: RoomPageProps) {
  const { lang, slug } = await params;

  // Find the room by slug
  const room = ROOMS_DATA.find((room) => room.id === slug);

  if (!room) {
    notFound();
  }

  // Get dictionary for translations
  const dict = await getDictionary(lang as "pl" | "en");

  return <RoomDetails room={room} dict={dict} lang={lang} />;
}

// Generate static params for all rooms
export async function generateStaticParams() {
  const rooms = ROOMS_DATA;
  const langs = ["pl", "en"];

  const params = [];

  for (const lang of langs) {
    for (const room of rooms) {
      params.push({
        lang,
        slug: room.id,
      });
    }
  }

  return params;
}
