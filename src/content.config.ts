import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts` directory.
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		id: z.string(),
		title: z.string(),
		author: z.string(),
		authorSlug: z.string(),
		category: z.string(),
		categorySlug: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const authors = defineCollection({
	// Load Markdown files in the `src/content/by` directory
	loader: glob({ base: "./src/content/by", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		author: z.string(),
		authorSlug: z.string(),
		x: z.string().optional(),
		facebook: z.string().optional(),
		instagram: z.string().optional(),
		linkedin: z.string().optional(),
		youtube: z.string().optional(),
		url: z.string().optional(),
	}),
});

export const collections = {
	posts,
	authors,
};

// id: "aeropress-coffee-maker-tutorial";
// title: "AeroPress Coffee Maker Tutorial";
// status: "published";
// author: "Ryan Jacobs";
// description: "desc";
// authorSlug: "ryan-jacobs";
// titleImage: "aeropress-coffee-maker-tutorial.jpg";
// categorySlug: "brewing-coffee";
// category: "Brewing Coffee";
// publishedDate: "2017-07-10T07:00:00";
// pubDate: "2017-07-10T07:00:00";
// updatedAt: "2025-03-23T17:02:10";
// wordpressId: 363;
