"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";

import type { Voucher } from "../../../sanity.types";
import VouchersGrid from "@/components/vouchers-grid";

interface VouchersIntroProps {
  dict: Record<string, string>;
  lang: string;
  vouchers: Voucher[];
}

const VouchersIntro: React.FC<VouchersIntroProps> = ({
  dict,
  lang,
  vouchers,
}) => {
  return (
    <Container className="py-10 mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-primary text-white w-full lg:py-20">
      <div id="voucher" className="max-w-7xl mx-auto sm:px-4">
        {/* Vouchers Grid Section */}
        {vouchers && vouchers.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="subtitle-dark">Podaruj Voucher</h2>

            <VouchersGrid vouchers={vouchers} lang={lang} />
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default VouchersIntro;
