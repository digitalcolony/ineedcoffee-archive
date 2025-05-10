// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ineedcoffee.com",
	integrations: [mdx(), sitemap()],
	compressHTML: true, // Minify HTML output
	build: {
		assets: "assets", // Put all assets in a single directory
	},
	vite: {
		build: {
			// Improve CSS performance
			cssCodeSplit: true,
			// Improve build performance
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: true, // Remove console logs in production
				},
			},
		},
	},
});
