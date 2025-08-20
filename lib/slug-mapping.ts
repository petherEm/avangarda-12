// Slug mapping for internationalization
// Maps Polish slugs to their English equivalents and vice versa

export const slugMappings = {
  pl: {
    biznes: "biznes",
    restauracja: "restauracja", 
    pakiety: "pakiety",
    spa: "spa",
    hotel: "hotel",
    rozrywka: "rozrywka",
    dzieci: "dzieci",
    przyjecia: "przyjecia",
    vouchery: "vouchery"
  },
  en: {
    biznes: "business",
    restauracja: "restaurants",
    pakiety: "offers", 
    spa: "spa",
    hotel: "hotel",
    rozrywka: "entertainment",
    dzieci: "kids",
    przyjecia: "events",
    vouchery: "vouchers"
  }
} as const;

// Reverse mapping for finding original slug from translated slug
export const reverseSlugMappings = {
  pl: Object.fromEntries(
    Object.entries(slugMappings.pl).map(([key, value]) => [value, key])
  ),
  en: Object.fromEntries(
    Object.entries(slugMappings.en).map(([key, value]) => [value, key])
  )
} as const;

// Get translated slug for a given language
export function getTranslatedSlug(originalSlug: string, targetLang: 'pl' | 'en'): string {
  // First, find the base slug (Polish version)
  let baseSlug = originalSlug;
  
  // If the original slug is already in English, convert it back to Polish first
  if (reverseSlugMappings.en[originalSlug as keyof typeof reverseSlugMappings.en]) {
    baseSlug = reverseSlugMappings.en[originalSlug as keyof typeof reverseSlugMappings.en];
  }
  
  // Now get the translated version
  return slugMappings[targetLang][baseSlug as keyof typeof slugMappings[typeof targetLang]] || originalSlug;
}

// Get the base (Polish) slug from any translated version
export function getBaseSlug(slug: string): string {
  // Check if it's already a Polish slug
  if (slugMappings.pl[slug as keyof typeof slugMappings.pl]) {
    return slug;
  }
  
  // Check if it's an English slug and convert back to Polish
  if (reverseSlugMappings.en[slug as keyof typeof reverseSlugMappings.en]) {
    return reverseSlugMappings.en[slug as keyof typeof reverseSlugMappings.en];
  }
  
  return slug; // Return as-is if no mapping found
}

// Check if a slug is valid for a given language
export function isValidSlug(slug: string, lang: 'pl' | 'en'): boolean {
  const validSlugs = Object.values(slugMappings[lang]) as string[];
  return validSlugs.includes(slug);
}

// Get all possible slugs for a base slug (for generateStaticParams)
export function getAllSlugVariants(baseSlug: string): string[] {
  const variants: string[] = [];
  
  if (slugMappings.pl[baseSlug as keyof typeof slugMappings.pl]) {
    variants.push(slugMappings.pl[baseSlug as keyof typeof slugMappings.pl]);
    variants.push(slugMappings.en[baseSlug as keyof typeof slugMappings.en]);
  }
  
  return [...new Set(variants)]; // Remove duplicates
}
