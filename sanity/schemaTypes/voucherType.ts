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
      name: 'voucherValue',
      title: 'Wartość Vouchera',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
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
  ],
  preview: {
    select: {
      title: 'plname',
      subtitle: 'voucherValue',
      media: 'voucherImage',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        ...selection,
        subtitle: subtitle ? `Wartość: ${subtitle} PLN` : '',
      };
    },
  },
});