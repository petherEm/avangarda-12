"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { cn } from "@/lib/utils";

interface GenericCTAProps {
  header: string;
  leadText: string;
  phoneNumber: string;
  downloadOffer?: string;
  variant?: "light" | "dark";
}

const GenericCTA = ({
  header,
  leadText,
  phoneNumber,
  downloadOffer,
  variant = "light",
}: GenericCTAProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative w-full mb-10",
        isDark ? "py-16 lg:py-20" : "py-0 lg:py-16"
      )}
    >
      {/* Background for dark variant */}
      {isDark && (
        <div className="absolute inset-0 -z-10">
          <BackgroundLogoBottomDark />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center px-4 sm:px-0 relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className={cn(
              "h-px flex-1",
              isDark ? "bg-avangarda" : "bg-avangarda"
            )}
          ></div>
          <h2
            className={cn(
              "text-4xl font-semibold text-center",
              isDark ? "text-white" : "text-slate-800"
            )}
          >
            {header}
          </h2>
          <div
            className={cn(
              "h-px flex-1",
              isDark ? "bg-avangarda" : "bg-avangarda"
            )}
          ></div>
        </div>

        <p
          className={cn(
            "text-lg mb-6 max-w-3xl mx-auto leading-relaxed",
            isDark ? "text-white/90" : "text-slate-600"
          )}
        >
          {leadText}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            variant="fillRight"
            className={cn(
              "flex items-center gap-2 transition-all",
              isDark
                ? "bg-white text-avangarda border-none hover:text-white"
                : "bg-white text-avangarda border-avangarda hover:text-white"
            )}
          >
            <Phone className="h-4 w-4" />
            {phoneNumber}
          </Button>

          {downloadOffer && (
            <Button className="bg-avangarda font-alata px-3 py-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm transition-colors duration-300">
              <Download className="h-4 w-4" />
              {downloadOffer}
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default GenericCTA;
