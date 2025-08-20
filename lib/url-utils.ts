import { getTranslatedSlug, getBaseSlug } from './slug-mapping';

// Generate internationalized URL for a given path and language
export function getLocalizedPath(path: string, lang: 'pl' | 'en'): string {
  // Remove leading slash and split path into segments
  const segments = path.replace(/^\//, '').split('/').filter(Boolean);
  
  // Translate each segment that has a mapping
  const translatedSegments = segments.map(segment => {
    return getTranslatedSlug(segment, lang);
  });
  
  return `/${lang}/${translatedSegments.join('/')}`;
}

// Generate all localized versions of a path
export function getAllLocalizedPaths(basePath: string): Record<'pl' | 'en', string> {
  return {
    pl: getLocalizedPath(basePath, 'pl'),
    en: getLocalizedPath(basePath, 'en')
  };
}

// Extract the canonical path from a localized path (removes language and converts to base slugs)
export function getCanonicalPath(localizedPath: string): string {
  const segments = localizedPath.replace(/^\//, '').split('/').filter(Boolean);
  
  // Remove language segment (first segment)
  const pathSegments = segments.slice(1);
  
  // Convert all segments back to base (Polish) slugs
  const canonicalSegments = pathSegments.map(segment => {
    return getBaseSlug(segment);
  });
  
  return `/${canonicalSegments.join('/')}`;
}

// Helper function to check if a path is already localized
export function isLocalizedPath(path: string): boolean {
  const segments = path.replace(/^\//, '').split('/').filter(Boolean);
  return segments.length > 0 && ['pl', 'en'].includes(segments[0]);
}

// Helper function to get the language from a localized path
export function getLanguageFromPath(path: string): 'pl' | 'en' | null {
  const segments = path.replace(/^\//, '').split('/').filter(Boolean);
  if (segments.length > 0 && ['pl', 'en'].includes(segments[0])) {
    return segments[0] as 'pl' | 'en';
  }
  return null;
}
