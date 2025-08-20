import { HeartIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const spaType = defineType({
  name: 'spaOffer',
  title: 'Spa | Dla dzieci-oferta',
  type: 'document',
  icon: HeartIcon,
  fields: [
    defineField({
      name: 'offerName',
      title: 'Nazwa Oferty',
      type: 'string',
      description: 'np. Pakiet Relaksacyjny, Masaże Lecznicze, Oferta Spa Weekend',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'offerName',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'offerFile',
      title: 'Plik Oferty (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis Oferty',
      type: 'text',
      description: 'Krótki opis oferty spa (opcjonalny)',
    }),
  ],
  preview: {
    select: {
      title: 'offerName',
      subtitle: 'description',
      media: 'offerFile',
    },
  },
});