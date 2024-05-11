import { contentTypeSitemap } from ".."
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getCompanyModel } from "../../../../utils/db"
import { CompanyObject } from "../../../../utils/types"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    console.log('got here')


    const CompanyModel = getCompanyModel(await dbConnect())


    const companies: CompanyObject[] = await CompanyModel.aggregate([
        { $match: { "serpProps.type": { $ne: null } } },
    ])

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

     ${companies.map(i => `
     <url>
         <loc>${domain}/marketing-strategy/${i.slug}</loc>
         <lastmod>2024-04-02</lastmod>
     </url>
    `)}
    
    </urlset>`)
}