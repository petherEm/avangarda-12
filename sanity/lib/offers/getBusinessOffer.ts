import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllBusinessOffers = async () => {
  const ALL_BUSINESS_OFFERS_QUERY = defineQuery(
    `*[_type == "businessOffer"] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    } | order(_createdAt desc)`
  );
  
  try {
    const businessOffers = await sanityFetch({
      query: ALL_BUSINESS_OFFERS_QUERY,
    });
    return businessOffers.data || [];
  } catch (error) {
    console.error("Error fetching business offers", error);
    return [];
  }
};

export const getBusinessOfferBySlug = async (slug: string) => {
  const BUSINESS_OFFER_BY_SLUG_QUERY = defineQuery(
    `*[_type == "businessOffer" && slug.current == $slug] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    }[0]`
  );
  
  try {
    const businessOffer = await sanityFetch({
      query: BUSINESS_OFFER_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return businessOffer.data || null;
  } catch (error) {
    console.error("Error fetching business offer by slug", error);
    return null;
  }
};

// Keep the existing function as fallback
export const getBusinessOfferByName = async (offerName: string) => {
  const BUSINESS_OFFER_BY_NAME_QUERY = defineQuery(
    `*[_type == "businessOffer" && offerName match $offerName] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    }[0]`
  );
  
  try {
    const businessOffer = await sanityFetch({
      query: BUSINESS_OFFER_BY_NAME_QUERY,
      params: {
        offerName: `*${offerName}*`
      },
    });
    return businessOffer.data || null;
  } catch (error) {
    console.error("Error fetching business offer by name", error);
    return null;
  }
};

// New function to get the primary/featured business offer
export const getPrimaryBusinessOffer = async () => {
  const PRIMARY_BUSINESS_OFFER_QUERY = defineQuery(
    `*[_type == "businessOffer"] | order(_createdAt desc) [0] {
      _id,
      offerName,
      slug,
      offerFile,
      description
    }`
  );
  
  try {
    const businessOffer = await sanityFetch({
      query: PRIMARY_BUSINESS_OFFER_QUERY,
    });
    return businessOffer.data || null;
  } catch (error) {
    console.error("Error fetching primary business offer", error);
    return null;
  }
};