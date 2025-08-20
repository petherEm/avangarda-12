import Link from "next/link";
import { getTranslatedSlug } from "@/lib/slug-mapping";
import { ComponentProps } from "react";

interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
  lang: "pl" | "en";
  children: React.ReactNode;
}

export function LocalizedLink({
  href,
  lang,
  children,
  ...props
}: LocalizedLinkProps) {
  // Generate the localized href
  const generateLocalizedHref = (
    originalHref: string,
    language: "pl" | "en"
  ): string => {
    // Remove leading slash and split path
    const segments = originalHref.replace(/^\//, "").split("/");

    // Translate each segment
    const translatedSegments = segments.map((segment) => {
      if (!segment) return segment; // Handle empty segments
      return getTranslatedSlug(segment, language);
    });

    // Construct the new path with language prefix
    return `/${language}/${translatedSegments.join("/")}`;
  };

  const localizedHref = generateLocalizedHref(href, lang);

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
