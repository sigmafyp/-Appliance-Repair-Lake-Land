import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
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
    comprehensiveCoverage: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        bullets: z.array(z.string()).optional()
      })
    ).optional(),
    diagnosticGuide: z.array(
      z.object({
        symptom: z.string(),
        title: z.string(),
        description: z.string(),
        solution: z.string()
      })
    ).optional(),
    technicalStandards: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    ).optional(),
    advantages: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    ).optional(),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    )
  })
});

const areasCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/areas" }),
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
