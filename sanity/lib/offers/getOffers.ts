import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllOffers = async () => {
  const ALL_OFFERS_QUERY = defineQuery(
    `*[_type == "offers" && isActive == true] {
      _id,
      plname,
      subtitle,
      enname,
      ensubtitle,
      slug,
      image,
      price,
      validFrom,
      validUntil,
      daysNights,
      endaysNights,
      meals,
      pldescription,
      endescription,
      offerListing,
      offerListingEn,
      mainAttractions,
      mainAttractionsEn,
      paidAttractions,
      paidAttractionsEn,
      bookingConditions,
      bookingConditionsEn,
      practicalInfo,
      practicalInfoEn,
      isActive,
      orderRank,
      "categories": categories[] {
        _ref,
        _key,
        "title": @->title,
        "entitle": @->entitle, 
        "pltitle": @->pltitle
      }
    } | order(orderRank)`
  );
  
  try {
    const offers = await sanityFetch({
      query: ALL_OFFERS_QUERY,
    });
    return offers.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
};
