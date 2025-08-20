"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { Popup } from "@/sanity.types";

interface HotelPopupProps {
  popups: Popup[];
  lang: string;
}

export default function HotelPopup({ popups, lang }: HotelPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<Popup | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run after component is mounted and we have popups
    if (isMounted && popups && popups.length > 0) {
      setCurrentPopup(popups[0]);
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [popups, isMounted]);

  // Don't render anything during SSR or if no popup data
  if (!isMounted || !currentPopup) {
    return null;
  }

  const title = lang === "pl" ? currentPopup.pltitle : currentPopup.entitle;
  const keyMessage =
    lang === "pl" ? currentPopup.plkeyMessage : currentPopup.enkeyMessage;
  const imageUrl = currentPopup.popupImage
    ? urlFor(currentPopup.popupImage).url()
    : "/placeholder.svg?height=600&width=900";

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none [&>button]:hidden">
            <VisuallyHidden.Root>
              <DialogTitle>{title}</DialogTitle>
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

              {/* Main popup content - 60% image, 40% content */}
              <div className="flex flex-col py-4 h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
                {/* Image section - 60% */}
                <div className="relative h-[60%] overflow-hidden">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={title || ""}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Content section - 40% */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white h-[40%] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
                >
                  <div className="text-center w-full max-w-2xl flex flex-col h-full justify-center">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight text-primary"
                    >
                      {title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6 text-primary/90"
                    >
                      {keyMessage}
                    </motion.p>

                    {/* Single call to action button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="flex justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="fillRight"
                          size="lg"
                          onClick={() => setIsOpen(false)}
                          className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold"
                        >
                          {lang === "pl" ? "ZOBACZ OFERTĘ" : "VIEW OFFER"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
