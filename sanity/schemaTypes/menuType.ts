import { MenuIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const menuType = defineType({
  name: 'menu',
  title: 'Menu Restauracji',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'restaurant',
      title: 'Restauracja',
      type: 'string',
      options: {
        list: [
          { title: 'Dzika Róża', value: 'dzika-roza' },
          { title: 'Klub Coola', value: 'klub-coola' },
          { title: 'Bar Przystań', value: 'bar-przystan' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuName',
      title: 'Nazwa Menu',
      type: 'string',
      description: 'np. Menu Główne, Menu Sezonowe, Karta Win',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.restaurant}-${doc.menuName}`,
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuFile',
      title: 'Plik Menu (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis Menu',
      type: 'text',
      description: 'Krótki opis menu (opcjonalny)',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktywne',
      type: 'boolean',
      description: 'Czy menu jest aktualnie dostępne',
      initialValue: true,
    }),
    defineField({
      name: 'validFrom',
      title: 'Ważne Od',
      type: 'date',
      description: 'Data od kiedy menu jest dostępne',
    }),
    defineField({
      name: 'validUntil',
      title: 'Ważne Do',
      type: 'date',
      description: 'Data do kiedy menu jest dostępne (opcjonalnie)',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Kolejność Wyświetlania',
      type: 'number',
      description: 'Kolejność w jakiej menu będzie wyświetlane (niższe numery = wyżej)',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'menuName',
      restaurant: 'restaurant',
      isActive: 'isActive',
      media: 'menuFile',
    },
    prepare(select) {
      const restaurantNames = {
        'dzika-roza': 'Dzika Róża',
        'klub-coola': 'Klub Coola',
        'bar-przystan': 'Bar Przystań',
      };
      
      return {
        title: select.title,
        subtitle: `${restaurantNames[select.restaurant]} ${select.isActive ? '✓' : '✗'}`,
        media: select.media,
      };
    },
  },
  orderings: [
    {
      title: 'Restauracja, Kolejność',
      name: 'restaurantAndOrder',
      by: [
        { field: 'restaurant', direction: 'asc' },
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