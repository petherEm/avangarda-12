import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Avangarda Hotel Oferty')
    .items([
      orderableDocumentListDeskItem({
        type: 'offers',
        title: 'Offers',
        S,
        context,
      }),
      // Add all other document types except offers
      ...S.documentTypeListItems().filter(
        (listItem) => !['offers'].includes(listItem.getId() || '')
      ),
    ])
