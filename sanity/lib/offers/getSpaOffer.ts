import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSpaOffers = async () => {
  const ALL_SPA_OFFERS_QUERY = defineQuery(
    `*[_type == "spaOffer"] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    } | order(_createdAt desc)`
  );
  
  try {
    const spaOffers = await sanityFetch({
      query: ALL_SPA_OFFERS_QUERY,
    });
    return spaOffers.data || [];
  } catch (error) {
    console.error("Error fetching spa offers", error);
    return [];
  }
};

export const getSpaOfferBySlug = async (slug: string) => {
  const SPA_OFFER_BY_SLUG_QUERY = defineQuery(
    `*[_type == "spaOffer" && slug.current == $slug] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    }[0]`
  );
  
  try {
    const spaOffer = await sanityFetch({
      query: SPA_OFFER_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return spaOffer.data || null;
  } catch (error) {
    console.error("Error fetching spa offer by slug", error);
    return null;
  }
};

export const getPrimarySpaOffer = async () => {
  const PRIMARY_SPA_OFFER_QUERY = defineQuery(
    `*[_type == "spaOffer"] | order(_createdAt desc) [0] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    }`
  );
  
  try {
    const spaOffer = await sanityFetch({
      query: PRIMARY_SPA_OFFER_QUERY,
    });
    return spaOffer.data || null;
  } catch (error) {
    console.error("Error fetching primary spa offer", error);
    return null;
  }
};