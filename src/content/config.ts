import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    whatWeFix: z.array(z.string()),
    signsYouNeedRepair: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    ),
    brandsServiced: z.array(z.string()),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    )
  })
});

const areasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    zip: z.union([z.string(), z.array(z.string())]),
    responseTime: z.string(),
    whyChooseUs: z.string(),
    neighborhoods: z.array(z.string()),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    )
  })
});

export const collections = {
  services: servicesCollection,
  areas: areasCollection
};
