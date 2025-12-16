import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'home/**.md'
    }),

    event: defineCollection({
      type: 'data',
      source: 'event.yml',
      schema: z.object({
        description: z.string(),
        registration_form: z.string()
      })
    }),

    speakers: defineCollection({
      type: 'data',
      source: 'speakers/**.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        img: z.string()
      })
    }),

    schedule: defineCollection({
      type: 'data',
      source: 'schedule.yml',
      schema: z.object({
        subtitle: z.string(),
        schedule: z.array(z.object({}).passthrough())
      })
    }),

    awards: defineCollection({
      type: 'data',
      source: 'awards.yml',
      schema: z.object({
        year: z.number(),
        description: z.string(),
        awards: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
            winners: z.array(z.string())
          })
        )
      })
    })
  }
})
