import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getBaseSlug, isValidSlug, getTranslatedSlug } from "./lib/slug-mapping"

// List of supported locales
export const locales = ["pl", "en"]
export const defaultLocale = "pl"

// Paths that don't require locale prefix
const PUBLIC_PATHS = ["/studio", "/draft-mode"]

// Get the preferred locale from the request headers
function getLocale(request: NextRequest): 'pl' | 'en' {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return match(languages, locales, defaultLocale) as 'pl' | 'en'
}

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname

  // Skip internal Next.js paths and public paths
  if (
    pathname.startsWith("/_next/") ||
    pathname.includes("/api/") ||
    pathname.startsWith("/static/") ||
    pathname.includes(".") || // Skip files with extensions
    PUBLIC_PATHS.some((path) => pathname.startsWith(path)) // Skip public paths
  ) {
    return
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    // Extract the language and path segments
    const segments = pathname.split('/').filter(Boolean)
    const lang = segments[0] as 'pl' | 'en'
    const slugs = segments.slice(1)

    // Check if any slug needs translation (for consistency)
    // This handles cases where someone manually types a Polish slug in an English URL
    let needsRedirect = false
    const translatedSlugs = slugs.map(slug => {
      const translatedSlug = getTranslatedSlug(slug, lang)
      if (translatedSlug !== slug) {
        needsRedirect = true
      }
      return translatedSlug
    })

    if (needsRedirect) {
      const newPath = `/${lang}/${translatedSlugs.join('/')}`
      const url = request.nextUrl.clone()
      url.pathname = newPath
      return NextResponse.redirect(url)
    }

    return
  }

  // Handle root path or paths without locale
  const segments = pathname.split('/').filter(Boolean)
  
  if (segments.length === 0) {
    // Root path - redirect to default locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}`
    return NextResponse.redirect(request.nextUrl)
  }

  // Check if the first segment is actually a slug that should be translated
  const firstSegment = segments[0]
  const baseSlug = getBaseSlug(firstSegment)
  
  if (baseSlug !== firstSegment) {
    // This means the user typed an English slug without locale prefix
    // We should redirect to the proper localized URL
    const locale = getLocale(request)
    const translatedSlug = getTranslatedSlug(baseSlug, locale)
    const restOfPath = segments.slice(1).join('/')
    const newPath = `/${locale}/${translatedSlug}${restOfPath ? '/' + restOfPath : ''}`
    
    request.nextUrl.pathname = newPath
    return NextResponse.redirect(request.nextUrl)
  }

  // Standard redirect for paths without locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

// Use experimental-edge runtime as required
export const runtime = "experimental-edge"

// Update matcher to be more specific and exclude studio
export const matcher = [
  // Match all paths except:
  // /_next/, /api/, /static/, /studio/, and files with extensions
  "/((?!_next|api|static|studio|.*\\.[^/]*$).*)",
]

