// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Variation Team'),
    category: z.string(),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    category: z.string(),
    devices: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    social: z.object({
      github: z.string(),
    }),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const devicesCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    publishDate: z.string().transform(str => new Date(str)),
    brand: z.string(),
    name: z.string().default('Variation Official'),
    image: z.string(),
    codename: z.string(),
    maintainer: z.string(),
    androidVersion: z.string(),
    varVersion: z.string(),
    maintenanceStatus: z.string(),
    buildTime: z.string().transform(str => new Date(str)),
    buildFrequency: z.string(),
    md5: z.string(),
    downloadLink: z.string(),
    changelogLink: z.string(),
    installationGuideLink: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'devices': devicesCollection,
};