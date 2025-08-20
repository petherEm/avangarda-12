"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function LanguageSwitcher() {
  const pathname = usePathname();

  const languages = [
    { code: "pl", name: "PL" },
    { code: "en", name: "EN" },
  ];

  // Get the current locale from the pathname
  const currentLocale = pathname.split("/")[1];
  const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  return (
    <div className="flex items-center gap-2 font-alata text-[14px]">
      {languages.map((language, index) => {
        const isActive = language.code === currentLocale;

        return (
          <div key={language.code} className="flex items-center gap-2">
            {isActive ? (
              <span className="text-avangarda font-bold">{language.name}</span>
            ) : (
              <Link
                href={`/${language.code}${pathnameWithoutLocale}`}
                className="text-white hover:text-avangarda transition-colors"
              >
                {language.name}
              </Link>
            )}

            {/* Add separator between languages, but not after the last one */}
            {index < languages.length - 1 && (
              <span className="text-white/60">|</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
