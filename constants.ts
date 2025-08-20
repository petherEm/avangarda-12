export interface RoomFeature {
  nameKey: string;
  icon: string;
}

export interface RoomType {
  id: string;
  nameKey: string;
  descriptionKey: string;
  priceKey: string;
  capacityKey: string;
  bedsKey: string;
  sizeKey: string; // Add this new field
  building: string;
  image: string;
  images: string[];
  features: RoomFeature[];
}

export const ROOMS_DATA: RoomType[] = [
  {
    id: "single",
    nameKey: "rooms.single.name",
    descriptionKey: "rooms.single.description",
    priceKey: "rooms.single.price",
    capacityKey: "rooms.single.capacity",
    bedsKey: "rooms.single.beds",
    sizeKey: "rooms.single.size",
    building: "main",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "standard",
    nameKey: "rooms.standard.name",
    descriptionKey: "rooms.standard.description",
    priceKey: "rooms.standard.price",
    capacityKey: "rooms.standard.capacity",
    bedsKey: "rooms.standard.beds",
    sizeKey: "rooms.standard.size",
    building: "main",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "standard-premium",
    nameKey: "rooms.standardPremium.name",
    descriptionKey: "rooms.standardPremium.description",
    priceKey: "rooms.standardPremium.price",
    capacityKey: "rooms.standardPremium.capacity",
    bedsKey: "rooms.standardPremium.beds",
    sizeKey: "rooms.standardPremium.size",
    building: "main",
    image: "/rooms/room-standard-03.jpg",
    images: [
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "family",
    nameKey: "rooms.family.name",
    descriptionKey: "rooms.family.description",
    priceKey: "rooms.family.price",
    capacityKey: "rooms.family.capacity",
    bedsKey: "rooms.family.beds",
    sizeKey: "rooms.family.size",
    building: "main",
    image: "/rooms/room-family-01.jpg",
    images: [
      "/rooms/room-family-01.jpg",
      "/rooms/room-family-02.jpg",
      "/rooms/room-family-03.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "apartment",
    nameKey: "rooms.apartment.name",
    descriptionKey: "rooms.apartment.description",
    priceKey: "rooms.apartment.price",
    capacityKey: "rooms.apartment.capacity",
    bedsKey: "rooms.apartment.beds",
    sizeKey: "rooms.apartment.size",
    building: "main",
    image: "/rooms/appart-01.jpg",
    images: [
      "/rooms/appart-01.jpg",
      "/rooms/appart-02.jpg",
      "/rooms/appart-03.jpg",
      "/rooms/appart-04.jpg",
      "/rooms/appart-05.jpg",
      "/rooms/appart-06.jpg",
      "/rooms/appart-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroomWithTub", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.twoTVs", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  // External building rooms
  {
    id: "external-single",
    nameKey: "rooms.externalSingle.name",
    descriptionKey: "rooms.externalSingle.description",
    priceKey: "rooms.externalSingle.price",
    capacityKey: "rooms.externalSingle.capacity",
    bedsKey: "rooms.externalSingle.beds",
    sizeKey: "rooms.externalSingle.size",
    building: "external",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "external-double",
    nameKey: "rooms.externalDouble.name",
    descriptionKey: "rooms.externalDouble.description",
    priceKey: "rooms.externalDouble.price",
    capacityKey: "rooms.externalDouble.capacity",
    bedsKey: "rooms.externalDouble.beds",
    sizeKey: "rooms.externalDouble.size",
    building: "external",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "external-triple",
    nameKey: "rooms.externalTriple.name",
    descriptionKey: "rooms.externalTriple.description",
    priceKey: "rooms.externalTriple.price",
    capacityKey: "rooms.externalTriple.capacity",
    bedsKey: "rooms.externalTriple.beds",
    sizeKey: "rooms.externalTriple.size",
    building: "external",
    image: "/rooms/room-standard-01.jpg",
    images: [
      "/rooms/room-standard-01.jpg",
      "/rooms/room-standard-02.jpg",
      "/rooms/room-standard-03.jpg",
      "/rooms/room-standard-04.jpg",
      "/rooms/room-standard-05.jpg",
      "/rooms/room-standard-06.jpg",
      "/rooms/room-standard-07.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
  {
    id: "external-family",
    nameKey: "rooms.externalFamily.name",
    descriptionKey: "rooms.externalFamily.description",
    priceKey: "rooms.externalFamily.price",
    capacityKey: "rooms.externalFamily.capacity",
    bedsKey: "rooms.externalFamily.beds",
    sizeKey: "rooms.externalFamily.size",
    building: "external",
    image: "/rooms/room-family-01.jpg",
    images: [
      "/rooms/room-family-01.jpg",
      "/rooms/room-family-02.jpg",
      "/rooms/room-family-03.jpg",
    ],
    features: [
      { nameKey: "rooms.features.bathroom", icon: "bath" },
      { nameKey: "rooms.features.towels", icon: "towel" },
      { nameKey: "rooms.features.toiletries", icon: "toiletries" },
      { nameKey: "rooms.features.hairdryer", icon: "hairdryer" },
      { nameKey: "rooms.features.bathrobe", icon: "bathrobe" },
      { nameKey: "rooms.features.teaCoffee", icon: "coffee" },
      { nameKey: "rooms.features.fridge", icon: "fridge" },
      { nameKey: "rooms.features.tvChannels", icon: "tv" },
      { nameKey: "rooms.features.airConditioning", icon: "ac" },
      { nameKey: "rooms.features.freeWifi", icon: "wifi" },
    ],
  },
];

// SPA interfaces & data
export interface SpaService {
  id: string;
  nameKey: string;
  descriptionKey: string;
  imageKey: string;
  priceKey: string;
  durationKey: string;
}

export const SPA_FEATURED_SERVICES: SpaService[] = [
  
  {
    id: "rejuvenation",
    nameKey: "spa.services.rejuvenation.name",
    descriptionKey: "spa.services.rejuvenation.description",
    imageKey: "/spa/spa-featured-3.png",
    priceKey: "spa.services.rejuvenation.price",
    durationKey: "spa.services.rejuvenation.duration"
  },
  {
    id: "hotStones",
    nameKey: "spa.services.hotStones.name",
    descriptionKey: "spa.services.hotStones.description",
    imageKey: "/spa/spa-featured-2.png",
    priceKey: "spa.services.hotStones.price",
    durationKey: "spa.services.hotStones.duration"
  },
  {
    id: "chocolate",
    nameKey: "spa.services.chocolate.name",
    descriptionKey: "spa.services.chocolate.description",
    imageKey: "/spa/spa-featured-1.png",
    priceKey: "spa.services.chocolate.price",
    durationKey: "spa.services.chocolate.duration"
  }
];

// Events interfaces & data
export interface VenueCapacity {
  nameKey: string;
  capacity: number;
  tables: number;
  sizeKey: string;
  featuresKeys: string[];
  image: string;
}

export interface GalleryImage {
  src: string;
  altKey: string;
  titleKey: string;
}

export const VENUES_DATA: Record<string, VenueCapacity> = {
  salaBankietowa: {
    nameKey: "events.venues.salaBankietowa.name",
    capacity: 300,
    tables: 20,
    sizeKey: "events.venues.salaBankietowa.size",
    featuresKeys: [
      "events.venues.salaBankietowa.features.danceFloor",
      "events.venues.salaBankietowa.features.stage",
      "events.venues.salaBankietowa.features.soundSystem",
      "events.venues.salaBankietowa.features.airConditioning",
      "events.venues.salaBankietowa.features.lighting",
      "events.venues.salaBankietowa.features.lockerRooms"
    ],
    image: "/wedding/wed-room-01.jpg"
  },
  salaKominkowa: {
    nameKey: "events.venues.salaKominkowa.name",
    capacity: 20,
    tables: 10,
    sizeKey: "events.venues.salaKominkowa.size",
    featuresKeys: [
      "events.venues.salaKominkowa.features.intimateSpace",
      "events.venues.salaKominkowa.features.fireplace",
      "events.venues.salaKominkowa.features.cozyAtmosphere",
      "events.venues.salaKominkowa.features.airConditioning",
      "events.venues.salaKominkowa.features.terrace",
      "events.venues.salaKominkowa.features.dedicatedBathroom"
    ],
    image: "/conference/kominkowa-room-01.jpeg"
  },
  salaSosnowa: {
    nameKey: "events.venues.salaSosnowa.name",
    capacity: 60,
    tables: 12,
    sizeKey: "events.venues.salaSosnowa.size",
    featuresKeys: [
      "events.venues.salaSosnowa.features.familyEvents",
      "events.venues.salaSosnowa.features.flexibleLayout",
      "events.venues.salaSosnowa.features.lighting",
      "events.venues.salaSosnowa.features.airConditioning",
      "events.venues.salaSosnowa.features.openBuffet",
      "events.venues.salaSosnowa.features.terrace"
    ],
    image: "/conference/sosna-room-03.jpeg"
  },
  fortNo4: {
    nameKey: "events.venues.fortNo4.name",
    capacity: 130,
    tables: 15,
    sizeKey: "events.venues.fortNo4.size",
    featuresKeys: [
      "events.venues.fortNo4.features.outdoorSpace",
      "events.venues.fortNo4.features.slowWeddings",
      "events.venues.fortNo4.features.dayAfter",
      "events.venues.fortNo4.features.roofedArea",
      "events.venues.fortNo4.features.naturalSurroundings",
      "events.venues.fortNo4.features.relaxedAtmosphere"
    ],
    image: "/fort/fort-main-01.jpeg"
  },
  port: {
    nameKey: "events.venues.port.name",
    capacity: 100,
    tables: 15,
    sizeKey: "events.venues.port.size",
    featuresKeys: [
      "events.venues.port.features.mediterraneanStyle",
      "events.venues.port.features.terrace",
      "events.venues.port.features.wedding",
      "events.venues.port.features.beachbar",
      "events.venues.port.features.beachBeds",
      "events.venues.port.features.childrenPlayground"
    ],

    image: "/restaurant/bar-przystan-main.jpeg"
  },
  openGrill: {
    nameKey: "events.venues.openGrill.name",
    capacity: 24,
    tables: 15,
    sizeKey: "events.venues.openGrill.size",
    featuresKeys: [
      "events.venues.openGrill.features.familyMeetings",
      "events.venues.openGrill.features.bachelorParty",
      "events.venues.openGrill.features.roofedArea",
      "events.venues.openGrill.features.rentArea",
      "events.venues.openGrill.features.sunbeds",
      "events.venues.openGrill.features.childrenPlayground"
    ],

    image: "/fort/fort-02.jpg"
  }
};

export const WEDDING_GALLERY: GalleryImage[] = [
  {
    src: "/wedding/wed-room-01.jpg",
    altKey: "events.gallery.salaBankietowa.alt",
    titleKey: "events.gallery.salaBankietowa.title"
  },
  {
    src: "/wedding/wed-room-03.jpg",
    altKey: "events.gallery.salaKominkowa.alt",
    titleKey: "events.gallery.salaKominkowa.title"
  },
  {
    src: "/wedding/wed-room-05.jpg",
    altKey: "events.gallery.salaSosnowa.alt",
    titleKey: "events.gallery.salaSosnowa.title"
  },
  {
    src: "/fort/fort-02.jpg",
    altKey: "events.gallery.fortNo4.alt",
    titleKey: "events.gallery.fortNo4.title"
  },
  {
    src: "/wedding/wed-room-10.jpg",
    altKey: "events.gallery.buffet.alt",
    titleKey: "events.gallery.buffet.title"
  },
  {
    src: "/wedding/food-06.jpg",
    altKey: "events.gallery.dessertTable.alt",
    titleKey: "events.gallery.dessertTable.title"
  }
];

// Business interfaces & data
export interface ConferenceRoom {
  id: string;
  nameKey: string;
  sizeKey: string;
  capacity: {
    theater: number;
    classroom: number;
    boardroom: number;
    banquet: number;
    ushape: number;
  };
  featuresKeys: string[];
  descriptionKey: string;
  image: string;
}
