import { contentTypeSitemap } from ".."
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getCompanyModel } from "../../../../utils/db"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)


    const CompanyModel = getCompanyModel(await dbConnect())


    const categories: { _id: string, count: number }[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
        { $group: { _id: "$category", count: { $count: {} } } },
    ])



    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

     ${categories.map(i => `
     <url>
         <loc>${domain}/marketing-strategies/${i._id.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')}</loc>
         <lastmod>2024-04-02</lastmod>
     </url>
    `)}
    
    </urlset>`)
}