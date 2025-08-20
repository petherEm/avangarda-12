import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllVouchers = async () => {
  const ALL_VOUCHERS_QUERY = defineQuery(
    `*[_type == "voucher"] {
      _id,
      plname,
      enname,
      slug,
      voucherImage,
      voucherValue,
      pldescription,
      endescription
    } | order(_createdAt desc)`
  );
  
  try {
    const vouchers = await sanityFetch({
      query: ALL_VOUCHERS_QUERY,
    });
    return vouchers.data || [];
  } catch (error) {
    console.error("Error fetching vouchers", error);
    return [];
  }
};

