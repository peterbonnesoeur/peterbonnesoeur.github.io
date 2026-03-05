import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['project', 'education', 'publication', 'certification']).default('project'),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { blog, projects };
