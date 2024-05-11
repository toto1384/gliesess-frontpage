

import { format, startOfMonth, startOfWeek } from "date-fns"
import { contentTypeSitemap } from ".."
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getBlogModel } from "../../../../utils/db"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    const BlogModel = getBlogModel(await dbConnect())

    const tags: { _id: string, count: number }[] = await BlogModel.aggregate([
        { $project: { tags: 1 } },
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $count: {} } } }
    ])


    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>${domain}/blog/tags</loc>
        <priority>0.5</priority>
        <lastmod>${format(startOfWeek(new Date()), 'yyyy-MM-dd')}</lastmod>
        <changefreq>weekly</changefreq>
    </url>

     ${tags.map(i => `
     <url>
         <loc>${domain}/blog/tags/${i._id.toLowerCase().replaceAll(' ', '-')}</loc>
         <lastmod>${format(startOfMonth(new Date()), 'yyyy-MM-dd')}</lastmod>
     </url>
    `)}
    
    </urlset>`)
}