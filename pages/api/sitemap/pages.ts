

import { contentTypeSitemap } from ".";
import { format, startOfMonth } from "date-fns";
import { domain } from "../../../utils/mainUtils";

//from most important to least important


const createSitemap = () =>
    `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">

        <url>
            <loc>${domain}</loc>
            <priority>1.0</priority>
            <lastmod>${format(startOfMonth(new Date()), 'yyyy-MM-dd')}</lastmod>
            <changefreq>monthly</changefreq>
        </url>

        <url>
            <loc>${domain}/services</loc>
            <priority>0.7</priority>
            <lastmod>${format(startOfMonth(new Date()), 'yyyy-MM-dd')}</lastmod>
            <changefreq>monthly</changefreq>
        </url>

        <url>
            <loc>${domain}/about-us</loc>
            <priority>0.5</priority>
            <lastmod>${format(startOfMonth(new Date()), 'yyyy-MM-dd')}</lastmod>
            <changefreq>monthly</changefreq>
        </url>

        <url>
            <loc>${domain}/contact</loc>
            <priority>0.25</priority>
            <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
            <changefreq>daily</changefreq>
        </url>

        <url>
            <loc>${domain}/shopify-seo/services</loc>
            <priority>0.8</priority>
            <lastmod>2024-09-15-</lastmod>
            <changefreq>monthly</changefreq>
        </url>

        <url>
            <loc>${domain}/shopify-seo/experts</loc>
            <priority>0.8</priority>
            <lastmod>2024-09-15-</lastmod>
            <changefreq>monthly</changefreq>
        </url>

        <url>
            <loc>${domain}/seo-case-studies</loc>
            <priority>0.8</priority>
            <lastmod>2024-09-15-</lastmod>
            <changefreq>monthly</changefreq>
        </url>
        
    </urlset>`;


// be careful when you change anything here related cu /locuri-de-munca, to update the no index files there
export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    const xml = createSitemap();
    res.end(xml)
}
