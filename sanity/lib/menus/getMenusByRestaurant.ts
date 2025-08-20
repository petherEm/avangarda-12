import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getMenusByRestaurant = async (restaurant: string) => {
    const MENUS_BY_RESTAURANT_QUERY = defineQuery(`
        *[_type == "menu" && restaurant == $restaurant && isActive == true] {
            _id,
            restaurant,
            menuName,
            slug,
            menuFile,
            description,
            isActive,
            validFrom,
            validUntil,
            displayOrder
        } | order(displayOrder asc, menuName asc)`);
    
    try {
        const menus = await sanityFetch({
            query: MENUS_BY_RESTAURANT_QUERY,
            params: {
                restaurant,
            },
        });
        return menus.data || [];
    } catch (error) {
        console.error("Error fetching menus by restaurant", error);
        return [];
    }
}

export const getAllMenus = async () => {
    const ALL_MENUS_QUERY = defineQuery(`
        *[_type == "menu" && isActive == true] {
            _id,
            restaurant,
            menuName,
            slug,
            menuFile,
            description,
            isActive,
            validFrom,
            validUntil,
            displayOrder
        } | order(restaurant asc, displayOrder asc, menuName asc)`);
    
    try {
        const menus = await sanityFetch({
            query: ALL_MENUS_QUERY,
        });
        return menus.data || [];
    } catch (error) {
        console.error("Error fetching all menus", error);
        return [];
    }
}