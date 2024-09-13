import { defineCollection, z } from 'astro:content'

const noteCollection = defineCollection({
    type: 'content',
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
    }),
})

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        draft: z.boolean().optional(),
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
    }),
})

export const collections = {
    notes: noteCollection,
    works: workCollection,
}
