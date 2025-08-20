import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";


export const getOfferBySlug = async (slug: string) => {
    const OFFER_BY_ID_QUERY = defineQuery(`
        *[_type == "offers" && slug.current == $slug && isActive == true] {
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
            categories
        } | order(plname asc) [0]`);
    try {
        const offer = await sanityFetch({
            query: OFFER_BY_ID_QUERY,
            params: {
                slug,
            },
        });
        return offer.data || null;
    } catch (error) {
        console.error("Error fetching product by slug", error);
        return null;
    }
}