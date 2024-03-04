


export type BlogItem = {
    slug: string;
    date: string;
    h1: string;
    description?: string;
    image: string;
    author: 'Alexandru Totolici';
    tags: string[];
    seo: {
        title: string;
        desc: string;
    };
    category: ('Boost Conversions' | 'Case Study')[];
    mdText: string;
}

export const dev = (process.env.NODE_ENV || '').indexOf('production') === -1;

export const domain: string = dev ? "http://localhost:3000" : `https://www.gliesess.com`


export const blogs: BlogItem[] = [
    // {
    //     author: 'Alexandru Totolici',
    //     category: ['Boost Conversions'],
    //     date: '2023-12-1',
    //     h1: 'How to Boost Your Store Conversions Using Google Ads: A Comprehensive Guide',
    //     image: 'store-conversion.png',
    //     seo: {
    //         title: "Maximize Store Conversions with Google Ads - Expert Strategies | Gliesess",
    //         desc: "Join Gliesess in exploring expert strategies to boost store conversions through Google Ads. Our latest blog post dives deep into keyword research, compelling ad copy, and effective remarketing techniques to enhance your digital marketing ROI. Perfect for businesses of all sizes!"
    //     },
    //     slug: 'how-to-boost-store-conversions',
    //     tags: ["store conversions", 'google ads', "gliesess",],
    //     mdText: `Welcome to the world of Google Ads, where the potential for skyrocketing your store conversions is immense. Today, I'm excited to share my insights on how to optimize your Google Ads for maximum store conversions. Whether you're running a small startup or a large corporation, these tips are designed to help you achieve the best return on investment (ROI).

    //     ## Understanding Store Conversions

    //     Before diving into strategies, it's crucial to understand what store conversions are in the context of Google Ads. Essentially, a store conversion occurs when a customer, driven by your ad, takes a desired action such as making a purchase, signing up for a newsletter, or downloading your app. Tracking these conversions is vital to understanding the effectiveness of your campaigns.

    //     ## 1. Keyword Research: The Foundation of Your Campaign

    //     The cornerstone of any successful Google Ad is robust keyword research. Your goal is to identify the terms and phrases your potential customers are using to search for products or services like yours.

    //     - **Use Google's Keyword Planner:** This tool helps you find the right keywords based on search volume and competition.
    //     - **Long-Tail Keywords:** These are more specific and less competitive, making them gold mines for attracting highly targeted traffic.

    //     ## 2. Crafting Compelling Ad Copy

    //     Your ad copy is the voice of your brand. It needs to be compelling enough to stand out and resonate with your target audience.

    //     - **Highlight Unique Selling Points (USPs):** What makes your product or service unique? Make it the focal point of your ad.
    //     - **Clear Call-to-Action (CTA):** Guide users on what to do next - whether it's to shop now, learn more, or get a discount.

    //     ## 3. Utilizing Ad Extensions

    //     Ad extensions are a powerful way to provide additional information and make your ad more prominent.

    //     - **Sitelink Extensions:** Direct users to specific pages of your website.
    //     - **Callout Extensions:** Highlight special offers or unique features of your products/services.

    //     ## 4. Optimizing Landing Pages

    //     The journey doesn’t end at clicking your ad; your landing page must convert that interest into action.

    //     - **Relevance:** Ensure your landing page aligns with your ad copy and offer.
    //     - **Load Time:** Faster pages equal better user experiences and higher conversion rates.

    //     ## 5. Data Analysis: Fine-Tuning for Success

    //     Regular analysis of your ad performance is crucial. Use Google Ads' analytics to:

    //     - **Track Conversion Rates:** Understand which ads are driving the most conversions.
    //     - **A/B Testing:** Experiment with different ad copies and landing pages to see what works best.

    //     ## 6. Remarketing: Capturing Lost Opportunities

    //     Remarketing allows you to target users who have previously interacted with your site but didn’t convert.

    //     - **Tailored Ad Messages:** Customize your ads based on the user’s previous behavior on your site.
    //     - **Frequency Caps:** Avoid ad fatigue by controlling how often users see your ads.

    //     ## Conclusion

    //     Achieving high store conversions through Google Ads is a blend of art and science. By focusing on detailed keyword research, compelling ad copy, effective use of ad extensions, optimized landing pages, diligent data analysis, and strategic remarketing, you can significantly enhance your campaign’s performance. Remember, the digital marketing landscape is ever-evolving, and staying adaptable and informed is key to ongoing success.

    //     Stay tuned for more insights and tips in future posts. Happy advertising, and here's to boosting your store conversions!`
    // },
    {
        author: 'Alexandru Totolici',
        category: ['Case Study'],
        date: '2024-03-01',
        h1: 'How we 10x the number of Google organic pages in 2 months for one of our clients',
        image: 'store-conversion.webp',
        seo: {
            title: "How we 10x the number of Google organic pages in 2 months for one of our clients | Gliesess",
            desc: "In this post you’re going to read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it!"
        },
        description: 'In this post you’re going to read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it!',
        slug: 'seo-agency-10x-google',
        tags: ["seo-agency", '10x-growth', "best-practices",],
        mdText: `
In this post you’re going to read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it.

PS: this was done without any shady tactics or ANY BACKINKS. Only applying best practices that best suit the type of site we were building.

The website is still growing, but here is the results we’ve seen at the time of writing this (end of Feb 2024). Here are the results:

![Organic Pages And Traffic Growth](${domain}/blog/organic-pages-and-traffic-growth.png)

Also the organic keywords:

![Ahrefs Keywords Growth](${domain}/blog/ahrefs-keywords-growth.png)

# About the customer

I started working with this client a while ago to develop his website, while he was focusing on hiring other contractors to work on SEO. Since the content is dynamic, he wanted to have a bunch of these pages on Google, which would boost sales. 

But the deck was not stacked in our favor. The content posted was not great, and it was in all other languages but the one we were targeting. The contractors were not doing their jobs, and you can see in the charts that in a full year we did not grow that much, if at all.

![SEO Agency Results](${domain}/blog/seo-agency-results.png)

# The painful 1 year road to nothing

He tried different contractors and different strategies. Nothing helped.

He started with the seo basics. Ie: everything that everyone recommends: sitemaps, keywords, header and footer optimization, social media tags.

The results were nothing spectacular, but there was a little bit of growth. Brick by brick the organic pages were started to index.

### Then the unexpected hit.

After consistently growing for 1.5 months, he stopped growing. Our speculation is that changing the keywords made Google stopped liking the site. And then fell harder than ever.

![SEO Growth then fall](${domain}/blog/seo-growth-then-fall.png)

This was a big hit in his morale, but he did not give up. We then focused on making the product better, adding features, and preparing for our next try. From March until summer we did not hire any other contractors.

### Failing again

In the summer he hired another contractor to bring this project to life, and the work began

Some of the biggest changes to the site have been made since then.

New keywords, titles, links, url structures. We even implemented Artificial intelligence to structure the User-generated content.

And those things helped. He started growing, but very slowly. It was dreading, because he knew he was doing well, but he didn’t know how to do even better

After continuing with the work, creating blog posts, revamping old pages, focusing on more internal linking, he only saw incremental improvements.

The contractor “finished” the work, and he were yet again on his own.

# We stepped in.

After all the pains and frustrations gained over almost a year of not seeing any significant results, the client chose us to do SEO.

We already had some theories of why the site is not growing and what we might do to help it

# What exactly did we do

We started doing SEO for the client with 2 of our core principles in mind: 1. Don’t pretend you’re smart when you’re not. And 2. replicate before you iterate.

Instead of pretending we were the experts knowing everything and doing what the other contractors did but better, we went to the drawing board.

We asked: Are those tactics suiting this type of site? What are our competitors doing? What piece of the puzzle we are missing? What are we missing that others don’t?

### We found the answer

After:

1. In-depth analysis of our competitors, searching through sitemaps, analyzing their code with developer tools, seeing how headers, breadcrumbs, links, and images are merged together on their website
2. Looking at our website audits and making a list of the most prominent issues
3. Combining our past knowledge of SEO and learning whatever was needed to form a conclusion


We found 3 main problems with the site and 25+ fixes we must implement to make the site rank well on Google

Here are some things that we found from only one of our competitors:

![SEO Checklist](${domain}/blog/seo-checklist.png)

The main problem was site architecture and internal linking. Without going much into detail, site architecture is the hierarchical structure of the site, and how pages interact with each other. Internal linking is how we link from one page to another.

# Finally, results

After implementing most of the things that we found, the website started growing like crazy, and users started signing up for it. We worked smarter, not harder and the results speak for themselves.

It took a couple of weeks for Google to pick up the changes and then the charts started being vertical instead of horizontal. 

No doubt we could’ve done things better and drove even more traffic to the website. But we did the bare minimum to stop the stagnation. From now on, we aim to implement even more tactics, and hopefully, keep the upward trajectory.

In the future, we want to combine the short-term with the long-term. Make all the initial changes so that are easy, to see the growth skyrocket, while simultaneously focusing on more long-term strategies like backlinks and brand building.

# We can do the same for you

If this story inspires you, keep in mind that it can be easily replicated. By reducing SEO down to a science, we can do it again and again.

 

### If you want a free analysis of your website from us, and the option to work together, schedule a call below

###### CTA
        `
    }
] 