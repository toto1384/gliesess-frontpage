const mongooseSlugPlugin = require('mongoose-slug-plugin')
const slugify = require('slugify')
import zodToJsonSchema from "zod-to-json-schema";
import { createMongooseSchema } from 'convert-json-schema-to-mongoose';
import { z, ZodTypeAny } from 'zod'
import mongoose, { Document, Model, Schema, } from 'mongoose'

export type CompanyObject = z.infer<typeof CompanySchema>;

export const CompanySchema = z.object({

    slug: z.string().optional(),
    _id: z.string().optional(),
    name: z.string(),
    domain: z.string().optional(),
    icon: z.string().optional(),
    serp: z.string().optional(),
    category: z.enum([
        "Retailers",
        "Supermarkets/Grocery Stores",
        "Pharmacies/Healthcare",
        "Telecommunications",
        "Home Improvement",
        "Automotive",
        "Technology/Electronics",
        "Fashion/Apparel",
        "Beauty/Cosmetics",
        "Pet Supplies",
        "Home Furnishings",
        "Miscellaneous"
    ]),

    facebook: z.object({
        likes: z.number().optional(),
        followers: z.number().optional()
    }).optional(),

    twitterFollowers: z.number().optional(),
    linkedinFollowers: z.number().optional(),
    instagramFollowers: z.number().optional(),

    youtube: z.object({
        subscribers: z.number().optional(),
        channelViews: z.number().optional(),
        videoCount: z.number().optional(),
        averageViewPerVideo: z.number().optional()
    }).optional(),

    serpProps: z.object({
        type: z.string().optional(),
        headquarters: z.string().optional(),
        headquartersLink: z.string().optional(),
        wikipedia: z.string().optional(),
        founders: z.string().optional(),
        founded: z.string().optional(),
        socialProfiles: z.array(z.object({
            link: z.string(),
            name: z.string()
        })).optional()
    }).optional(),

    description: z.string().optional(),

    organicTraffic: z.number().optional(),
    paidTraffic: z.number().optional(),

    domainAuthority: z.number().optional(),

});

export const defaultSlugifyConfiguration = {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true,      // convert to lower case, defaults to `false`
    strict: true,     // strip special characters except replacement, defaults to `false`
    // locale: 'vi',       // language code of the locale to use
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
}

export const defaultSlugPluginConfiguration = {
    tmpl: '<%=name%>',
    alwaysUpdateSlug: false,
    slug: slugify,
    slugOptions: defaultSlugifyConfiguration
}

export const getCompanyModel = (mong?: typeof mongoose) => {
    const mgse = mong ?? mongoose;

    if (mgse.models.Company) return mgse.models.Company as Model<CompanyObject & Document>

    const companySchema = convertToModel(CompanySchema).plugin(mongooseSlugPlugin, defaultSlugPluginConfiguration)

    return mgse.model<CompanyObject & Document>('Company', companySchema, 'companies')
}


export function convertToModel<T extends ZodTypeAny>(zodSchema: T, collection?: string,) {
    const jsonSchema = zodToJsonSchema(zodSchema, { name: "Schema", $refStrategy: 'none', },);

    const mongooseSchema = createMongooseSchema({}, {
        ...(jsonSchema.definitions as any).Schema,
        '$schema': 'http://json-schema.org/draft-04/schema#',

    },);

    return new mongoose.Schema(mongooseSchema, { collection });
}


let cached = (global as any).mongoose ?? {}

export async function dbConnect(): Promise<typeof mongoose> {
    if (cached?.conn) {
        return cached.conn
    }

    if (!cached?.promise) {
        console.log('generating mongo instance')

        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION!);
        cached.promise = connection

    }

    cached.conn = await cached.promise

    return cached.conn
}