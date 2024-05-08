

import { format, startOfMonth, startOfWeek } from "date-fns"
import { contentTypeSitemap } from ".."
import { categories, } from "../../../../utils/blog"
import { domain } from "../../../../utils/mainUtils"


export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>${domain}/blog/categories</loc>
        <priority>0.6</priority>
        <lastmod>${format(startOfWeek(new Date()), 'yyyy-MM-dd')}</lastmod>
        <changefreq>weekly</changefreq>
    </url>

     ${categories.map(i => `
     <url>
         <loc>${domain}/blog/categories/${i.name.toLowerCase().replaceAll(' ', '-')}</loc>
         <lastmod>${format(startOfMonth(new Date()), 'yyyy-MM-dd')}</lastmod>
     </url>
    `)}
    
    </urlset>`)
}