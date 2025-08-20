// Configuration mapping for video assets across modules
export const VIDEO_CONFIG = {
  hero: {
    videoSrc: "intro_reduced_2",
    fallbackImage: "/loading-fallbacks/intro-fallback.png",
    fallbackAlt: "Hero background",
    showProgress: true,
  },
  spa: {
    videoSrc: "spa_reduced",
    fallbackImage: "/loading-fallbacks/spa-fallback.png",
    fallbackAlt: "Spa background",
  },
  business: {
    videoSrc: "business2_reduced",
    fallbackImage: "/loading-fallbacks/business-fallback.png",
    fallbackAlt: "Business background",
  },
  gastro: {
    videoSrc: "gastro_reduced",
    fallbackImage:"/loading-fallbacks/gastro-fallback.png",
    fallbackAlt: "Restaurant background",
  },
  events: {
    videoSrc: "wedding_reduced",
    fallbackImage: "/loading-fallbacks/wedding-fallback.png",
    fallbackAlt: "Events background",
  },
  entertainment: {
    videoSrc: "entertain-2_reduced",
    fallbackImage: "/loading-fallbacks/entertain2-fallback.png",
    fallbackAlt: "Entertainment background",
  },
  forKids: {
    videoSrc: "kids_reduced",
    fallbackImage: "/loading-fallbacks/kids-fallback.png",
    fallbackAlt: "K background",
  },
  offers: {
    videoSrc: "entertain_reduced", // Same as entertainment
    fallbackImage: "/loading-fallbacks/entertain-fallback.png",
    fallbackAlt: "Offers background",
  },
  rooms: {
    videoSrc: "hotel_reduced-2",
    fallbackImage: "/loading-fallbacks/hotel-fallback.png",
    fallbackAlt: "Hotel rooms background",
  },
} as const;

export type VideoConfigKey = keyof typeof VIDEO_CONFIG;
