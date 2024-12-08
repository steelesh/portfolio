import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		draft: z.boolean().optional(),
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
	}),
});

const workCollection = defineCollection({
	type: "content",
	schema: z.object({
		draft: z.boolean().optional(),
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
	}),
});

export const collections = {
	posts: postCollection,
	works: workCollection,
};
