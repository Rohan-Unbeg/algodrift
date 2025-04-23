import { defineCollection, z } from 'astro:content';

// Define schema for blog posts
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('AlgoDrift Team'),
    categories: z.array(z.string()).default(['Technology']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Export collections
export const collections = {
  'blog': blogCollection,
};