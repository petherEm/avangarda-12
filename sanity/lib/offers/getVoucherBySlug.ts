import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getVoucherBySlug = async (slug: string) => {
  const VOUCHER_BY_SLUG_QUERY = defineQuery(
    `*[_type == "voucher" && slug.current == $slug][0] {
      _id,
      plname,
      enname,
      slug,
      voucherImage,
      voucherValue,
      pldescription,
      endescription
    }`
  );
  
  try {
    const voucher = await sanityFetch({
      query: VOUCHER_BY_SLUG_QUERY,
      params: { slug }
    });
    return voucher.data;
  } catch (error) {
    console.error(`Error fetching voucher with slug: ${slug}`, error);
    return null;
  }
};