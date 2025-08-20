import { getDictionary } from "@/lib/dictionary";
import { Container } from "@/components/container";
import VouchersGrid from "@/components/vouchers-grid";
import { getAllVouchers } from "@/sanity/lib/offers/getVouchers";

export default async function VouchersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch all vouchers
  const vouchers = await getAllVouchers();

  return (
    <main className="bg-gray-50 min-h-screen">
      <Container className="py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {dict.vouchers.hero.badge}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === "pl"
              ? "Kup voucher prezentowy na pobyt w naszym hotelu i podaruj bliskim niezapomniane chwile relaksu."
              : "Purchase a gift voucher for a stay at our hotel and give your loved ones unforgettable moments of relaxation."}
          </p>
        </div>

        <VouchersGrid vouchers={vouchers as any} dict={dict} lang={lang} />
      </Container>
    </main>
  );
}
