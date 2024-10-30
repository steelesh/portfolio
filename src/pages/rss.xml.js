import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const notes = await getCollection('notes', ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true
    })
    return rss({
        title: "Steele's Notes",
        description:
            "A collection of Steele's random thoughts and life experiences",
        site: context.site,
        items: notes.map((note) => ({
            title: note.data.title,
            pubDate: note.data.pubDate,
            description: note.data.description,
            link: `/notes/${note.slug}`,
        })),
        trailingSlash: false,
        stylesheet: '/rss/styles.xsl',
        customData: `<language>en-us</language>`,
    })
}
