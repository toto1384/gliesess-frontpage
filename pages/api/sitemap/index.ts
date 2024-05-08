import { domain } from "../../../utils/mainUtils"


async function createMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

            <sitemap>
                <loc>${domain}/api/sitemap/pages</loc>
            </sitemap>

            <sitemap>
                <loc>${domain}/api/sitemap/blog/posts</loc>
            </sitemap>

            <sitemap>
                <loc>${domain}/api/sitemap/blog/authors</loc>
            </sitemap>

            <sitemap>
                <loc>${domain}/api/sitemap/blog/categories</loc>
            </sitemap>

            <sitemap>
                <loc>${domain}/api/sitemap/blog/tags</loc>
            </sitemap>

            <sitemap>
                <loc>${domain}/api/sitemap/marketing-strategies/by-category</loc>
            </sitemap>
            <sitemap>
                <loc>${domain}/api/sitemap/marketing-strategies/by-state</loc>
            </sitemap>
            <sitemap>
                <loc>${domain}/api/sitemap/marketing-strategies/by-years</loc>
            </sitemap>
            <sitemap>
                <loc>${domain}/api/sitemap/marketing-strategies/strategies</loc>
            </sitemap>
            
            
        </sitemapindex>`
}



export const contentTypeSitemap = 'application/xml'

export default async function handler(req: any, res: any) {
    res.statusCode = 200
    res.setHeader('Content-Type', contentTypeSitemap)

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    const xml = await createMap();
    res.end(xml)
}