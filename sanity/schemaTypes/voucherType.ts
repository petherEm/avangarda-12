import { defineField, defineType } from 'sanity';
import {ConfettiIcon} from '@sanity/icons'

export default defineType({
  name: 'voucher',
  title: 'Vouchery',
  type: 'document',
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: 'plname',
      title: 'Nazwa PL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enname',
      title: 'Nazwa EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'plname',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'voucherImage',
      title: 'Zdjęcie Vouchera',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pldescription',
      title: 'Opis PL',
      type: 'text',
    }),
    defineField({
      name: 'endescription',
      title: 'Opis EN',
      type: 'text',
    }),
    defineField({
      name: 'plconditions',
      title: 'Warunki użycia PL',
      type: 'text',
      description: 'Warunki i zasady korzystania z vouchera w języku polskim',
    }),
    defineField({
      name: 'enconditions',
      title: 'Warunki użycia EN',
      type: 'text',
      description: 'Terms and conditions for using the voucher in English',
    }),
  ],
  preview: {
    select: {
      title: 'plname',
      media: 'voucherImage',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        ...selection,
        subtitle: 'Gift Voucher',
      };
    },
  },
});