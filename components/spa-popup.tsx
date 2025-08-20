"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { PopupSpa } from "@/sanity.types";

interface SpaPopupProps {
  popups: PopupSpa[];
  lang: string;
}

export default function SpaPopup({ popups, lang }: SpaPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<PopupSpa | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Function to get random popup from active popups
  const getRandomPopup = (popups: PopupSpa[]) => {
    if (popups.length === 0) return null;
    if (popups.length === 1) return popups[0];

    const randomIndex = Math.floor(Math.random() * popups.length);
    return popups[randomIndex];
  };

  useEffect(() => {
    // Only run after component is mounted, we have popups, and haven't shown popup yet
    if (isMounted && popups && popups.length > 0 && !hasShownPopup) {
      const randomPopup = getRandomPopup(popups);
      if (randomPopup) {
        setCurrentPopup(randomPopup);
        const timer = setTimeout(() => {
          setIsOpen(true);
          setHasShownPopup(true); // Mark that we've shown the popup
        }, 2000); // Slightly different timing than main popup
        return () => clearTimeout(timer);
      }
    }
  }, [popups, isMounted, hasShownPopup]);

  // Don't render anything during SSR or if no popup data
  if (!isMounted || !currentPopup) {
    return null;
  }

  const title = lang === "pl" ? currentPopup.pltitle : currentPopup.entitle;
  const imageUrl = currentPopup.popupImage
    ? urlFor(currentPopup.popupImage).url()
    : "/placeholder.svg?height=600&width=900";

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none [&>button]:hidden">
            <VisuallyHidden.Root>
              <DialogTitle>{title || "Spa Popup"}</DialogTitle>
            </VisuallyHidden.Root>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative bg-white p-1.5 shadow-2xl"
              style={{ padding: "6px" }}
            >
              {/* Close button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -top-3 -right-3 sm:-top-3 sm:-right-4 z-30"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/70 hover:bg-black/80 text-white rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300 hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </motion.div>

              {/* Image only content */}
              <div className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={title || "Spa Popup"}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
