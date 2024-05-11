import RSS from "rss";
import { domain } from "../../utils/mainUtils";
import { contentTypeSitemap } from "./sitemap";
import { BlogObject } from "../../utils/types";
import { dbConnect, getBlogModel } from "../../utils/db";

async function generateRssFeed(allPosts: BlogObject[]) {

  const feedOptions = {
    title: "Blog posts | RSS Feed",
    description: "Welcome to this blog posts!",
    site_url: domain,
    feed_url: `${domain}/rss.xml`,
    image_url: `${domain}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    feed.item({
      title: post.h1,
      description: post.description ?? post.seo.desc,
      url: `${domain}/${post.slugs.join('/')}`,
      date: post.date,
    });
  });

  // Write the RSS feed to a file as XML.
  return feed.xml({ indent: true });
}

export default async function handler(req: any, res: any) {
  res.statusCode = 200
  res.setHeader('Content-Type', contentTypeSitemap)

  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  const BlogModel = getBlogModel(await dbConnect())


  const rss = await generateRssFeed(await BlogModel.find({ private: { $ne: true } }))
  // Instructing the Vercel edge to cache the file
  res.end(rss)
}