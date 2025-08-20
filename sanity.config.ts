'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {plPLLocale} from '@sanity/locale-pl-pl'
import {SanityLogo} from "@/components/sanity-logo" // Import your custom icon
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list' // Import the orderable document list desk item
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Avangarda',
  icon: () => SanityLogo, // Replace with your custom icon
  
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
     presentationTool({
      previewUrl: {
        preview: "/",
        previewMode: {
          enable: "/draft-mode/enable",
        }
      }
    }),
    plPLLocale(),
    orderableDocumentListDeskItem, // Add the orderable document list desk item to the plugins
  ],
})
