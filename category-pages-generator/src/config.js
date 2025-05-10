const config = {
	// No apiEndpoint needed for Astro - it can fetch data at build time
	postsPerPage: 10,
	siteTitle: "IneedCoffee",
	siteDescription: "By coffee fans, for coffee fans.",
	contentDir: "src/content", // Directory where blog content is stored
	outDir: "dist", // Build output directory
};

export default config;
