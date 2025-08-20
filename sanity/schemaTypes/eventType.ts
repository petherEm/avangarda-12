import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: 'event',
  title: 'Uroczystości-oferta',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'eventType',
      title: 'Typ Wydarzenia',
      type: 'string',
      options: {
        list: [
          { title: 'Wesela', value: 'wesela' },
          { title: 'Komunie', value: 'komunie' },
          { title: 'Uroczystości Rodzinne', value: 'uroczystosci-rodzinne' },
          { title: 'Przyjęcia Plenerowe', value: 'przyjecia-plenerowe' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuName',
      title: 'Nazwa Menu/Oferty',
      type: 'string',
      description: 'np. Pakiet Weselny Standard, Oferta Komunijna Premium',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.eventType}-${doc.menuName}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuFile',
      title: 'Plik Menu/Oferty (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis Menu/Oferty',
      type: 'text',
      description: 'Szczegółowy opis oferty eventowej',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktywne',
      type: 'boolean',
      description: 'Czy oferta jest aktualnie dostępna',
      initialValue: true,
    }),
    defineField({
      name: 'validFrom',
      title: 'Ważne Od',
      type: 'date',
      description: 'Data od kiedy oferta jest dostępna',
    }),
    defineField({
      name: 'validUntil',
      title: 'Ważne Do',
      type: 'date',
      description: 'Data do kiedy oferta jest dostępna (opcjonalnie)',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Kolejność Wyświetlania',
      type: 'number',
      description: 'Kolejność w jakiej oferta będzie wyświetlana (niższe numery = wyżej)',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'menuName',
      eventType: 'eventType',
      isActive: 'isActive',
      media: 'menuFile',
    },
    prepare(select) {
      const eventTypeNames = {
        'wesela': 'Wesela',
        'komunie': 'Komunie',
        'uroczystosci-rodzinne': 'Uroczystości Rodzinne',
        'przyjecia-plenerowe': 'Przyjęcia Plenerowe',
      };
      
      return {
        title: select.title,
        subtitle: `${eventTypeNames[select.eventType]} ${select.isActive ? '✓' : '✗'}`,
        media: select.media,
      };
    },
  },
  orderings: [
    {
      title: 'Typ Wydarzenia, Kolejność',
      name: 'eventTypeAndOrder',
      by: [
        { field: 'eventType', direction: 'asc' },
        { field: 'displayOrder', direction: 'asc' },
      ],
    },
    {
      title: 'Data utworzenia',
      name: 'createdAt',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
});