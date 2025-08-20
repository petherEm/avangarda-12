import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getEventsByType = async (eventType: string) => {
    const EVENTS_BY_TYPE_QUERY = defineQuery(`
        *[_type == "event" && eventType == $eventType && isActive == true] {
            _id,
            eventType,
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
        const events = await sanityFetch({
            query: EVENTS_BY_TYPE_QUERY,
            params: {
                eventType,
            },
        });
        return events.data || [];
    } catch (error) {
        console.error("Error fetching events by type", error);
        return [];
    }
}

export const getEventBySlug = async (slug: string) => {
    const EVENT_BY_SLUG_QUERY = defineQuery(`
        *[_type == "event" && slug.current == $slug && isActive == true][0] {
            _id,
            eventType,
            menuName,
            slug,
            menuFile,
            description,
            isActive,
            validFrom,
            validUntil,
            displayOrder
        }`);
    
    try {
        const event = await sanityFetch({
            query: EVENT_BY_SLUG_QUERY,
            params: {
                slug,
            },
        });
        return event.data || null;
    } catch (error) {
        console.error("Error fetching event by slug", error);
        return null;
    }
}

export const getAllEvents = async () => {
    const ALL_EVENTS_QUERY = defineQuery(`
        *[_type == "event" && isActive == true] {
            _id,
            eventType,
            menuName,
            slug,
            menuFile,
            description,
            isActive,
            validFrom,
            validUntil,
            displayOrder
        } | order(eventType asc, displayOrder asc, menuName asc)`);
    
    try {
        const events = await sanityFetch({
            query: ALL_EVENTS_QUERY,
        });
        return events.data || [];
    } catch (error) {
        console.error("Error fetching all events", error);
        return [];
    }
}