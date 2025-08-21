import { type SchemaTypeDefinition } from 'sanity'
import {offerType} from './offerType'
import {blockContentType} from './blockContentType'
import { categoryType } from './categoryType'
import voucherType from './voucherType'
import { menuType } from './menuType'
import popupType from './popupType'
import { businessType } from './businessType'
import { spaType } from './spaType'
import popupSpaType from './popupSpaType'
import { eventType } from './eventType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, offerType, categoryType, voucherType, menuType,eventType, businessType, spaType, popupType, popupSpaType],
}
