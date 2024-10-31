import { toString as mdastToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
	return (tree, { data }) => {
		const textOnPage = mdastToString(tree);
		const readingTime = getReadingTime(textOnPage);
		const minutes = Math.ceil(readingTime.minutes);
		data.astro.frontmatter.minutesRead = `${minutes} min`;
	};
}
