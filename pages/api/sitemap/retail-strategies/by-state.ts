



import { format, startOfWeek } from "date-fns"
import { contentTypeSitemap } from ".."
import { blogs, } from "../../../../utils/blog"
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getCompanyModel } from "../../../../utils/db"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)


    const CompanyModel = getCompanyModel(await dbConnect())


    const categories: { _id: string, count: number }[] = await CompanyModel.aggregate([
        {
            $addFields: {
                resultObject: {
                    $regexFind: {
                        input: "$serpProps.headquarters",
                        regex: /[A-Z][A-Z]/
                    },
                },
            },
        },
        {
            $match: {
                resultObject: { $ne: null },
            },
        },
        {
            $group: {
                _id: "$resultObject.match",
                fieldN: {
                    $count: {},
                },
            },
        },
        { $sort: { fieldN: -1 } },
    ])



    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

     ${categories.map(i => `
     <url>
         <loc>${domain}/retail-strategies/${i._id.toLowerCase()}</loc>
         <lastmod>2024-04-02</lastmod>
     </url>
    `)}
    
    </urlset>`)
}