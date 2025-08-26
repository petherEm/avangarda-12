import { CaseIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const businessType = defineType({
  name: 'businessOffer',
  title: 'Biznes-oferta',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'offerName',
      title: 'Nazwa Oferty',
      type: 'string',
      description: 'np. Oferta Biznesowa 2025, Pakiet Konferencyjny, Catering Firmowy',
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
      description: 'Krótki opis oferty biznesowej (opcjonalny)',
    }),
        defineField({
      name: 'offerKey',
      title: 'Identyfikator Oferty (NIE ZMIENIAJ)',
      type: 'string',
      description: 'Unikalny identyfikator tej oferty (np. "conference-premium", "banquet-dinner"). To nigdy nie powinno się zmieniać.',
      validation: Rule => Rule.required().custom((value) => {
        // Ensure it's lowercase and uses dashes
        if (value && !/^[a-z0-9-]+$/.test(value)) {
          return 'Identyfikator oferty musi zawierać tylko małe litery, cyfry i myślniki';
        }
        return true;
      }),
    }),
  ],
  preview: {
    select: {
      title: 'offerName',
      subtitle: 'description',
      media: 'offerFile',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle,
      };
    },
  },
});