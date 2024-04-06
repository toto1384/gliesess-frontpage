import fs from "fs";
import RSS from "rss";
import { BlogItemType, blogs } from "../../utils/blog";
import { domain } from "../../utils/mainUtils";
import { contentTypeSitemap } from "./sitemap";

async function generateRssFeed(allPosts: BlogItemType[]) {

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
      url: `${domain}/blog/${post.slug}`,
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

  const rss = await generateRssFeed(blogs)
  // Instructing the Vercel edge to cache the file
  res.end(rss)
}