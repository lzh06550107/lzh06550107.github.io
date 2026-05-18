import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { ExtendDocsSchema } from 'lucode-starlight/schema';

const blog = defineCollection({
    loader: glob({
        base: './src/content/blog',
        pattern: '**/*.{md,mdx}',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        category: z.string(),
        readingTime: z.string(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: docsSchema({ extend: ExtendDocsSchema }),
    }),
    blog,
};

