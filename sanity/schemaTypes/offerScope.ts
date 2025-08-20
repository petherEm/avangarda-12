import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const offerScope = defineType({
  name: 'offerScope',
  title: 'Zakres Pakietów',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'plname',
      title: 'Nazwa PL',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'enname',
      title: 'Nazwa EN',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'plname',
    },
  },
});