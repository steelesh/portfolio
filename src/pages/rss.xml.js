import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
	const posts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});
	return rss({
		title: "Steele's Posts",
		description:
			"A collection of Steele's random thoughts and life experiences",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}`,
		})),
		trailingSlash: false,
		stylesheet: "/rss/styles.xsl",
		customData: "<language>en-us</language>",
	});
}
