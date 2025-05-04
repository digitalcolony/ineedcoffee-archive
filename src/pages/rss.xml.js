import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const posts = await getCollection("posts");

	// Debug log to ensure posts are being processed
	console.log(`Generating RSS feed with ${posts.length} posts`);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			// Ensure links point to your preferred path structure
			link: `/${post.id}/`,
		})),
	});
}
