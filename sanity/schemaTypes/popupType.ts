import { defineField, defineType } from 'sanity';
import {PinFilledIcon} from '@sanity/icons'

export default defineType({
  name: 'popup',
  title: 'Popup Główna',
  type: 'document',
  icon: PinFilledIcon,
  fields: [
    defineField({
      name: 'pltitle',
      title: 'Tytuł PL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'entitle',
      title: 'Tytuł EN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pltitle',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'plkeyMessage',
      title: 'Kluczowa Wiadomość PL',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enkeyMessage',
      title: 'Kluczowa Wiadomość EN',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'popupImage',
      title: 'Zdjęcie Popup',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Aktywny',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayFrom',
      title: 'Wyświetl od',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
      },
    }),
    defineField({
      name: 'displayTo',
      title: 'Wyświetl do',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
      },
    }),
  ],
  preview: {
    select: {
      title: 'pltitle',
      subtitle: 'plkeyMessage',
      media: 'popupImage',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection;
      return {
        ...selection,
        subtitle: `${isActive ? '🟢' : '🔴'} ${subtitle ? subtitle.substring(0, 50) + '...' : ''}`,
      };
    },
  },
});
