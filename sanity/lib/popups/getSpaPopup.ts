import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSpaPopups = async () => {
  const ALL_SPA_POPUPS_QUERY = defineQuery(
    `*[_type == "popupSpa"] {
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
    } | order(_createdAt desc)`
  );
  
  try {
    const spaPopups = await sanityFetch({
      query: ALL_SPA_POPUPS_QUERY,
    });
    return spaPopups.data || [];
  } catch (error) {
    console.error("Error fetching spa popups", error);
    return [];
  }
};

export const getActiveSpaPopups = async () => {
  const ACTIVE_SPA_POPUPS_QUERY = defineQuery(
    `*[_type == "popupSpa" && isActive == true && (displayFrom <= now() || !defined(displayFrom)) && (displayTo >= now() || !defined(displayTo))] {
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
    } | order(_createdAt desc)`
  );
  
  try {
    const activeSpaPopups = await sanityFetch({
      query: ACTIVE_SPA_POPUPS_QUERY,
    });
    return activeSpaPopups.data || [];
  } catch (error) {
    console.error("Error fetching active spa popups", error);
    return [];
  }
};