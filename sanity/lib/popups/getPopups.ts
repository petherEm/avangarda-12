import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getActivePopups = async () => {
    const ACTIVE_POPUPS_QUERY = defineQuery(`
        *[_type == "popup" && isActive == true && (
            (!defined(displayFrom) && !defined(displayTo)) ||
            (!defined(displayFrom) && displayTo > now()) ||
            (!defined(displayTo) && displayFrom <= now()) ||
            (displayFrom <= now() && displayTo > now())
        )] {
            _id,
            pltitle,
            entitle,
            slug,
            plkeyMessage,
            enkeyMessage,
            popupImage,
            isActive,
            displayFrom,
            displayTo
        } | order(_createdAt desc)`);
    
    try {
        const popups = await sanityFetch({
            query: ACTIVE_POPUPS_QUERY,
        });
        return popups.data || [];
    } catch (error) {
        console.error("Error fetching active popups", error);
        return [];
    }
}

export const getAllPopups = async () => {
    const ALL_POPUPS_QUERY = defineQuery(`
        *[_type == "popup"] {
            _id,
            pltitle,
            entitle,
            slug,
            plkeyMessage,
            enkeyMessage,
            popupImage,
            isActive,
            displayFrom,
            displayTo
        } | order(_createdAt desc)`);
    
    try {
        const popups = await sanityFetch({
            query: ALL_POPUPS_QUERY,
        });
        return popups.data || [];
    } catch (error) {
        console.error("Error fetching all popups", error);
        return [];
    }
}