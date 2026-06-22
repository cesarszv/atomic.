import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const landing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/landing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      lede: z.string(),
      card: z.object({
        focus: z.string(),
        quiet: z.string(),
        status: z.string(),
      }),
    }),
    idea: z.object({
      eyebrow: z.string(),
      title: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
    principles: z.object({
      eyebrow: z.string(),
      title: z.string(),
      items: z.array(z.string()),
    }),
    access: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = { landing };
