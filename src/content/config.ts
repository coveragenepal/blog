import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string().optional(),

      image: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }).optional(),
    })
 });

export const collections = {
  posts: postsCollection,
};