



import { format, startOfWeek } from "date-fns"
import { contentTypeSitemap } from ".."
import { blogs, } from "../../../../utils/blog"
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getCompanyModel } from "../../../../utils/db"



export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)


    const CompanyModel = getCompanyModel(await dbConnect())

    const yearsArray = [];

    for (let year = 1800; year <= new Date().getFullYear(); year += 10) {
        yearsArray.push(year);
    }

    const categories: { _id: string, count: number }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        { $addFields: { resultObject: { $regexFind: { input: "$serpProps.founded", regex: /\b\d{4}\b/ } } } },
        {
            $addFields: {
                year: { $toInt: "$resultObject.match" },
            }
        },
        {
            $bucket: {
                groupBy: "$year",
                boundaries: yearsArray,
                default: "Other",
                output: {
                    "count": { $sum: 1 },
                }
            }
        },
        { $sort: { count: -1 } },
    ])



    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

     ${categories.filter(i => i._id != 'Other').map(i => `
     <url>
         <loc>${domain}/marketing-strategies/${i._id}</loc>
         <lastmod>2024-04-02</lastmod>
     </url>
    `)}
    
    </urlset>`)
}