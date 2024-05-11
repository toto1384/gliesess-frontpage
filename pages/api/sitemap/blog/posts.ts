
import { format, startOfWeek } from "date-fns"
import { contentTypeSitemap } from ".."
import { domain } from "../../../../utils/mainUtils"
import { dbConnect, getBlogModel } from "../../../../utils/db"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    const BlogModel = getBlogModel(await dbConnect())

    const blogs = await BlogModel.find({ private: { $ne: true } })

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>${domain}/blog</loc>
        <priority>0.7</priority>
        <lastmod>${format(startOfWeek(new Date()), 'yyyy-MM-dd')}</lastmod>
        <changefreq>weekly</changefreq>
    </url>

     ${blogs.map(i => `
     <url>
         <loc>${domain}/${i.slugs.join('/')}</loc>
         <lastmod>${format(new Date(i.date), 'yyyy-MM-dd')}</lastmod>
     </url>
    `)}
    
    </urlset>`)
}