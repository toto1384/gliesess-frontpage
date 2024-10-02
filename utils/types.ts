import { z } from "zod";
import { CompanySchema, BlogSchema, KWSSchema } from "./db";

export type CompanyObject = z.infer<typeof CompanySchema>;

export type KWSObject = z.infer<typeof KWSSchema>;


export type BlogObject = z.infer<typeof BlogSchema>;

export const blogItemProjection = {
    slugs: 1,
    image: 1,
    h1: 1,
    description: 1,
} as const