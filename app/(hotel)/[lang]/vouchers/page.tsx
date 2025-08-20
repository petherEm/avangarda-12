export default async function VouchersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {lang === "pl" ? "Vouchery" : "Vouchers"}
      </h1>
      <p className="text-lg">
        {lang === "pl"
          ? "Kup voucher prezentowy na pobyt w naszym hotelu."
          : "Purchase a gift voucher for a stay at our hotel."}
      </p>
    </div>
  );
}
