




import Image from 'next/image';
import { createElement } from 'react';
import StickyBox from 'react-sticky-box';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdAdd, MdArrowRightAlt, MdCategory, MdChair, MdCheckroom, MdDirectionsCar, MdFace, MdFitnessCenter, MdHome, MdLaptop, MdLocalGroceryStore, MdPets } from 'react-icons/md';
import { HeroComponent } from '../components/heroComponent';
import { BasicNextSeo, TawkWidget, OrganizationStructuredData, Navbar, CTA, AlternativeCTA } from '../components/navbar';
import { SocialProof } from '../components/socialProof';
import { TimelineView } from '../components/timeline';
import { domain } from '../utils/mainUtils';
import { useSize } from '../utils/useSize';
import Link from 'next/link';

const Home = ({ posts }: { posts: any[] }) => {

    const size = useSize(true)
    const imageSize = size.gmd ? 450 : 250


    const description = "Browse the most comprehensive list of online marketing strategies on the internet. Find the Social Media and Search Engine strategies of each company."
    const url = `${domain}/online-marketing-strategies`

    const data = [
        {
            title: 'Product',
            description: 'Successful products typically either address an unmet need in the market or offer a novel experience that generates demand. For instance, the original iPhone met the need for a simplified device that combined a phone with an iPod. As you develop your product, it\'s crucial to focus on your target audience and their specific needs',
        },
        {
            title: 'Price',
            description: 'When setting a price for your product or service, it\'s crucial to strike a balance between accessibility for your target market and achieving your business objectives. The pricing model you choose can greatly influence the success of your product. Pricing too high may deter potential customers, while pricing too low could raise doubts about quality and harm profit margins.  To determine the right price, it\'s essential to understand your target audience and their willingness to pay',
        },
        {
            title: 'Place',
            description: 'The place where you sell your product and the distribution channels you choose are crucial for reaching your target customers. Like pricing, selecting the right locations—whether online or offline—is key to connecting with your audience. If your product isn’t available where your target customers shop, meeting your sales goals becomes challenging. For instance, if you’ve designed an athletic shoe for athletes in their twenties to thirties, marketing in sports publications and selling through specialty athletic stores would be more effective than general shoe stores. This approach ensures your product reaches the right audience in the right setting.',
        },
        {
            title: 'Promotion',
            description: 'Promotion involves spreading the word about your product or service through a strategic marketing campaign that connects with your target audience. Traditional methods, such as word of mouth, print ads, and TV commercials, remain effective, while digital strategies like content marketing, email marketing, display ads, and social media have become essential in today\'s landscape. As you develop your promotional plan, consider key questions: When is the best time to reach your audience? Which marketing channels are most effective? What messages will resonate most? And which advertising approaches will be most persuasive?',
        },



    ];

    const browseStrategiesCta = <Link href="/marketing-strategies" className="btn-primary">Browse Strategies</Link>

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
            <BasicNextSeo title={"90 online marketing strategies. The biggest companies in US"} description={description} url={url} />
            <TawkWidget />
            <OrganizationStructuredData />

            <Navbar />

            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
            <HeroComponent
                belowH1={<>
                    <p className="text-lg text-gray-700 mb-8 max-w-5xl">
                        Discover the largest database of online marketing strategies on the internet
                    </p>
                </>}
                h1={<>
                    <strong>Beyond Marketing:</strong> {size.gmd && <br />}
                    90 Online Marketing Strategies {size.gmd && <br />}
                    <strong>To study and analyze</strong>. {size.gmd && <br />}
                </>}
                cta={browseStrategiesCta} imageAlt="Gliesess online marketing strategies" imagePath='/marketing-strategies.webp' imgClassName='border-2'
            />

            <section className='flex flex-col items-center max-w-[100vw]'>
                <div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-center'>Find the way <br />companies market themselves</h2>
                    <p className='md:mt-10 text-center mb-5'>Dig deep into all the main strategies of promotion of the biggest companies in the US. From SEO, to Youtube and other social platforms. Each breakdown also includes the 4 P's of marketing: Product, Price, Place and Promotion, and how each company strategizes around these concepts.</p>

                    {browseStrategiesCta}
                </div>


                <div className='flex flex-col w-screen my-10 items-center'>
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Youtube Marketing Strategy' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/youtube-illustration.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Detailed Social Media Statistics</h2>
                            <p className="text-gray-600">From how many Youtube videos that company has, to Facebook likes and Instagram followers</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>• Detailed Youtube analytics - views, subscribers, videos</p>
                                <p>• Followers and likes for all social platforms: Facebook, Instagram, Twitter</p>
                                <p>• Detailed comparison between each of them - to see what's working best for them</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
                        <Image alt='Gliesess Search Engine traffic' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/search-engine-google.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Breakdown of Search Engine traffic and SEO</h2>
                            <p className="text-gray-600">See detailed SEO and Search Engine traffic statistics for each company. From domain authority, to organic and paid traffic</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>• See exactly the authority for that company website. This can either come from the popularity of the brand or its investment in high-quality backlinks.</p>
                                <p>• See the paid traffic that each company generates. A high number might indicate that a certain company has a high lifetime Value for customers.</p>
                                <p>• See the organic traffic for each company. This can help you see how each company chooses to invest in a marketing strategy that has been deemed dead for the last couple of years.</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Marketing 4Ps' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/marketing-4ps.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Discover the 4 Ps describing the specifics of each online marketing strategy</h2>
                            <p className="text-gray-600">The 4Ps consist of a marketing mix containing Price, Promotion, Place and Product. This mix can help describe almost any online marketing strategy in the worlds</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>• See how certain companies use unique <strong>Promotion</strong> strategies to get their products in front of customers eyes</p>
                                <p>• The <strong>Place</strong> part of the marketing mix is becoming more and more ambiguous with the internet. From Social Media, to Search Engines, and certain marketplaces.</p>
                                <p>• <strong>Pricing</strong> still remains crucial in a world with consumers that are becoming more and more sophisticated</p>
                                <p>• All of the above will not work without a great <strong>Product</strong>. Unless it is exceptional, all marketing efforts are a race to the bottom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <WhatCost /> */}

            <div className='w-full px-2 md:px-16 my-16'>
                <h2 className='text-3xl mb-2 font-semibold mx-2'>What are the 4 Ps in a marketing strategy?</h2>
                <TimelineView widthLimit={"max-w-2xl"} data={data} />
                <p className='mx-2 mt-5 text-lg'>By combining a sound strategy for every P you ensure optimal promotion for every business, regardless of its industry.</p>
            </div>


            <section className='text-center alternateBg py-20 w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>Browse online marketing strategies for every industry</h2>
                {/* <p className='max-w-5xl my-3'>The default golden standard for SEO agencies is being a jack of all trades, master of none. We believe that strategy is flawed and  working only with e-commerce clients will not only bring substantial results for them, but optimize our processes to the point where we deliver results faster, and internally we can do this easier, passing the cost down to you</p>

                <h3 className='text-xl'>We help every Shopify or e-commerce store, regardless of the niche</h3> */}

                <div className='flex flex-wrap justify-around mt-10 w-full'>
                    {[
                        { icon: MdCheckroom, title: 'Fashion/Apparel', link: '/marketing-strategies/fashion-apparel' },
                        { icon: MdDirectionsCar, title: 'Automotive', link: '/marketing-strategies/automotive' },
                        { icon: MdFace, title: 'Beauty/Cosmetics', link: '/marketing-strategies/beauty-cosmetics' },
                        { icon: MdPets, title: 'Pet Supplies', link: '/marketing-strategies/pet-supplies' },
                        { icon: MdLocalGroceryStore, title: 'Retailers', link: "/marketing-strategies/retailers" },
                        { icon: MdLaptop, title: 'Technology/Electronics', link: "/marketing-strategies/technology-electronics" },
                        { icon: MdHome, title: 'Home Improvement', link: "/marketing-strategies/home-improvement" },
                        { icon: MdCategory, title: 'Others', link: "/marketing-strategies" }
                    ].map(i => <Link href={i.link} className='flex flex-col items-center hover:text-blue-400 hover:underline transition-all hover:bg-blue-50 p-2 rounded group'>
                        {createElement(i.icon, { className: "w-10 h-10 group-hover:scale-[1.05] " })}
                        <h4 className='flex flex-row items-center'>{i.title} <MdArrowRightAlt className='w-6 h-6' /></h4>
                    </Link>)}

                </div>
            </section>


            {/* how much is this costing you */}

            {/* <div className="flex flex-row items-center w-full my-20 mx-2">
                <div className="w-full md:w-[50vw] relative h-[30vh] md:max-w-[50%]">
                    <Image alt="Shopify SEO Performance" className="object-cover w-full object-center rounded-l-md" src={'/marketing-illustration.webp'} layout="fill" />
                </div>
                <div className='w-full md:max-w-[50%] md:mx-10'>
                    <h2 className='text-2xl'>How much is this costing you?</h2>
                    <p>+ If you would've gotten paid hourly for all the time wasted: 1. managing ad accounts, 2. designing creatives, 3. writing copy, 4. finding keywords to target, how much would that cost you?</p>
                    <p>+ If your CPC is $3 hypothetically, and we would bring you 1000 visitors a month, that's already $3000 saved in ad spend. Multiply that by the ROI of your ads and you've got another chunk of saved cash by working with us</p>
                    <p></p>
                </div>
            </div> */}


            <h2 className='text-2xl text-start mt-20'>Browse the most comprehensive list of online marketing strategies</h2>
            <p>Read Amazon, Walmart, Costco and other 90 marketing strategies for online and see what the most influential companies are doing to bring consistent customers through the door.</p>
            {browseStrategiesCta}



            {/* <FeaturesAndObjections /> */}

            {/* faq's */}
            <AccordionComponent className='w-full max-w-5xl mt-10' items={[
                { title: 'Are the 90 online marketing strategies free to read and reference?', desc: "Yes, they are completely free to read and reference. They are made in an effort to increase transparency for newly made marketers." },
                { title: 'I can\'t find certain companies', desc: "While this list is mainly focused on retail and wholesale companies, a broad range of them can be found. If you wish a certain company was covered in this list, feel free to reach out to us in the ChatBot widget." }
            ]} />


            {/* <div className='mx-5'>
                <h2 className='text-2xl mb-5'>Explore our 90 marketing strategies from the most influential retailers in the US.</h2>
                <div className="flex flex-col space-y-2 lg:flex-row justify-around">
                    <a href="/marketing-strategies" className={itemListStyle}><div>All Marketing strategies →</div></a>
                    <a href="/marketing-strategies/supermarkets-grocery-stores" className={itemListStyle}><div>Supermarkets/grocery stores marketing strategies →</div></a>
                    <a href="/marketing-strategies/fashion-apparel" className={itemListStyle}><div>Fashion/apparel marketing strategies →</div></a>
                    <a href="/marketing-strategies/retailers" className={itemListStyle}><div>Retailers marketing strategies →</div></a>
                    <a href="/marketing-strategies/beauty-cosmetics" className={itemListStyle}><div>Beauty/cosmetics marketing strategies →</div></a>


                </div>
            </div> */}
        </div>
    )
}




const FeaturesAndObjections = () => {

    const size = useSize(true)

    return <section className='w-screen'>

        <div className="mb-20 flex flex-row-reverse">

            <div className='relative'>
                {createElement(size.gmd ? StickyBox : 'div', {
                    className: 'pt-24', children: [
                        // <div className=" flex flex-row justify-end">
                        <div className="w-full h-[70vw] md:w-[50vw] md:h-screen relative">
                            <Image alt="Shopify SEO Optimization" className="object-cover object-top md:rounded-tr-xl" src={'/shopify-seo-optimization.webp'} layout="fill" />
                        </div>

                        // </div>
                    ]
                })}

            </div>
            <div className='flex flex-row justify-end'>
                <div className="md:w-[50vw] pt-24 px-2 md:px-20">

                    <h2 className="text-4xl font-bold mt-5">Does your Shopify store crave sales?</h2>

                    <p className='my-2 text-lg'>Marketing your business is 60% + of the work of actually running it. If you want to stop focusing on that and actually make your products better, or improve the customer experience, outsourcing your e-commerce SEO for Shopify might be a great idea.</p>

                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">Grow your Shopify store without diluting the brand</h3>

                    <p className='my-2 text-lg'>Where outsourcing other marketing efforts might be a bad idea, you are not diluting the brand with SEO. Our SEO experts in Shopify will make sure to follow your brand voice and guidelines. </p>
                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">6-step plan tailored for e-commerce</h3>

                    <p className='my-2 text-lg'>While the market is full of cookie-cutter SEO services, we made a custom plan specifically for e-commerce, and especially for Shopify. Knowing exactly which pages have the highest priority, common pitfalls for Shopify SEO and other nuances are essential for forming a personalized strategy. </p>
                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">Outstanding results from Shopify SEO experts</h3>

                    <p className='my-2 text-lg'>We cannot guarantee that we will 10x your website in 2 months, but we've done it before. Our timeline can range anywhere from 2 to 6 months. But why is everyone telling you that SEO takes time? Because focusing on the wrong changes starting out can delay the results you see for your Shopify store. </p>

                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">The strategy made just for you</h3>

                    <p className='my-2 text-lg'>Either if you sell high-ticket products or cheap ones, a unique strategy is necessary for every Shopify store. Also depending on your existing authority we target more or less difficult keywords so you start ranking on page 1 right away.</p>

                    <div className='flex flex-col items-center mt-5'>
                        <CTA />
                        <AlternativeCTA />
                    </div>


                </div>

            </div>
        </div>
    </section>


};


export function AccordionComponent({ items, className }: { items: { title: string, desc: string }[], className?: string },) {


    return <Accordion onChange={(uuid) => { }} allowZeroExpanded className={className}>
        {items.map((i, index) => <AccordionItem uuid={index} className='border px-8 py-4'>
            <AccordionItemHeading>
                <AccordionItemButton className='flex flex-row text-xl items-center'>
                    <MdAdd />{i.title}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    {i.desc}
                </p>
            </AccordionItemPanel>
        </AccordionItem>)}

    </Accordion>

}

export default Home


