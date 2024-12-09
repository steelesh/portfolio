import { z } from 'zod'
import shrevesTaxServiceLogo from '@assets/shrevestax.png'
import ucollab from '@assets/ucollab.png'
import ideaStorm from '@assets/ideastorm.png'
import { Image } from 'astro:assets'

export const workSchema = z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: Image,
    githubUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
})

export type Work = z.infer<typeof workSchema>

export const works: Work[] = [
    {
        draft: false,
        title: 'Shreve\'s Tax Service',
        pubDate: new Date('2024-01-15'),
        description: 'Local business freelance project for Shreve\'s Tax Service, in Zanesville, OH. Built with Nuxt.',
        image: shrevesTaxServiceLogo,
        demoUrl: 'https://shrevestaxservice.com',
    },
    {
        draft: false,
        title: 'UCollab',
        pubDate: new Date('2024-12-10'),
        description: 'Collaboration web platform created for UC students pursuing degrees in IT, CS, IS and related fields. Built with Next.js',
        image: ucollab,
        githubUrl: 'https://github.com/steelesh/UCollab',
    },
    {
        draft: false,
        title: 'IdeaStorm',
        pubDate: new Date('2023-12-10'),
        description: 'Mobile android application that presents users with potential activities that they can engage in. Built with Kotlin.',
        image: ideaStorm,
        githubUrl: 'https://github.com/steelesh/IdeaStorm',
    },
]
