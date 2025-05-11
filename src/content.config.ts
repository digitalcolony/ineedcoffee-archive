import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	// Load Markdown and MDX files in the `src/content/posts` directory.
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		id: z.string(),
		title: z.string(),
		titleImage: z.string().optional(),
		author: z.string(),
		authorSlug: z.string(),
		category: z.string(),
		categorySlug: z.string(),
		description: z.string().optional(),
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const authors = defineCollection({
	// Load Markdown files from the "by" directory
	loader: glob({ base: "./src/content/by", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema that matches your files
	schema: z.object({
		// These are the fields used in your author files
		author: z.string(),
		authorSlug: z.string(),
		// Optional fields
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
