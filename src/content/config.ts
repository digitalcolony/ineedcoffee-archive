import { defineCollection } from "astro:content";
import { z } from "zod";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedDate: z.date(),
		updatedDate: z.date().optional(),
		author: z.string().optional(),
		authorSlug: z.string().optional(),
		categorySlug: z.string(), // Add this line for category support
	}),
});
