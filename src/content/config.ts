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

// Define the schema for authors in the "by" collection
const byCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		bio: z.string().optional(),
		website: z.string().url().optional(),
		twitter: z.string().optional(),
		postCount: z.number().optional(),
		avatar: z.string().optional(),
	}),
});

// Export the collections
export const collections = {
	authors: byCollection,
	// Include other existing collections here
};
