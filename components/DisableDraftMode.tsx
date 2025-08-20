"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

interface DisableDraftModeProps {
  lang?: string;
  dict?: any;
}

const DisableDraftMode = ({ lang = "pl", dict }: DisableDraftModeProps) => {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 z-50"
    >
      {dict?.components?.disableDraftMode ||
        (lang === "pl" ? "Wyłącz tryb roboczy" : "Disable draft mode")}
    </button>
  );
};

export default DisableDraftMode;
