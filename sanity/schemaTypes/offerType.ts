import {StarFilledIcon} from '@sanity/icons'
import { defineField, defineType} from "sanity";


export const offerType = defineType({
    name: 'offers',
    title: 'Oferty pakietów',
    type: 'document',
    icon: StarFilledIcon,
    fields: [
        defineField({
            name: 'orderRank',
            title: 'Kolejność',
            type: 'string',
            hidden: true, // hide from editors
        }),
        defineField({
            name: 'plname',
            title: 'Nazwa PL',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
         defineField({
            name: 'subtitle',
            title: 'Podtytuł PL',
            type: 'string',
        }),
          defineField({
            name: 'enname',
            title: 'Nazwa EN',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
       
        defineField({
            name: 'ensubtitle',
            title: 'Podtytuł EN',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'plname',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Zdjęcie Oferty',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'price',
            title: 'Cena od',
            type: 'number',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'validFrom',
            type: 'datetime',
            title: 'Ważne Od',
        }),
        defineField({
            name: 'validUntil',
            type: 'datetime',
            title: 'Ważne Do',
        }),
        defineField({
            name: 'daysNights',
            title: 'Ilość Dni/Nocy PL',
            type: 'string',
            description: 'np. 5 dni/4 noce',
        }),
        defineField({
            name: 'endaysNights',
            title: 'Ilość Dni/Nocy EN',
            type: 'string',
            description: 'np. 5 days/4 nights',
        }),
        defineField({
            name: 'meals',
            title: 'Posiłki',
            type: 'string',
            description: 'np. BB, HB, FB',
        }),
        defineField({
            name: 'pldescription',
            title: 'Opis PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }),
        defineField({
            name: 'endescription',
            title: 'Opis EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }),
        defineField({
            name: 'offerListing',
            title: 'Co jest wliczone PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Lista punktów - co jest wliczone w tę ofertę',
        }),
        defineField({
            name: 'offerListingEn',
            title: 'Co jest wliczone EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Bullet points - what is included in this offer',
        }),
        defineField({
            name: 'mainAttractions',
            title: 'Najważniejsze Atrakcje PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Lista najważniejszych atrakcji',
        }),
        defineField({
            name: 'mainAttractionsEn',
            title: 'Najważniejsze Atrakcje EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'List of main attractions',
        }),
        defineField({
            name: 'paidAttractions',
            title: 'Atrakcje dodatkowo płatne PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Lista atrakcji dostępnych za dodatkową opłatą',
        }),
        defineField({
            name: 'paidAttractionsEn',
            title: 'Atrakcje dodatkowo płatne EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'List of attractions available for additional fee',
        }),
        defineField({
            name: 'bookingConditions',
            title: 'Warunki Rezerwacji PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Warunki rezerwacji i anulacji',
        }),
        defineField({
            name: 'bookingConditionsEn',
            title: 'Warunki Rezerwacji EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Booking and cancellation conditions',
        }),
        defineField({
            name: 'practicalInfo',
            title: 'Informacje Praktyczne PL',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Praktyczne informacje dla gości',
        }),
        defineField({
            name: 'practicalInfoEn',
            title: 'Informacje Praktyczne EN',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' }
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' }
                        ],
                        annotations: [
                            {
                                title: 'URL',
                                name: 'link',
                                type: 'object',
                                fields: [
                                    {
                                        title: 'URL',
                                        name: 'href',
                                        type: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            description: 'Practical information for guests',
        }),

        defineField({
            name: 'isActive',
            type: 'boolean',
            title: 'Aktywne',
            description: 'Zaznacz aby aktywować sprzedaż',
            initialValue: true,
        }),
        defineField({
            name: "categories",
            title: "Kategorie",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
    ],
    preview: {
        select: {
            title: 'plname',
            media: 'image',
            price: 'price',
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `${select.price} PLN`,
                media: select.media,
            };
        },
    }
});