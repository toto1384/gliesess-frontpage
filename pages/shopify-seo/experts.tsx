

import Image from 'next/image';
import Link from 'next/link';
import { createElement } from 'react';
import StickyBox from 'react-sticky-box';
import { HeroComponent } from '../../components/heroComponent';
import { BasicNextSeo, TawkWidget, OrganizationStructuredData, Navbar, CTA, AlternativeCTA } from '../../components/navbar';
import { domain, homePageTitle, itemListStyle } from '../../utils/mainUtils';
import { useSize } from '../../utils/useSize';
import { SocialProof } from '../../components/socialProof';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdAdd, MdCategory, MdChair, MdCheckroom, MdFace, MdFitnessCenter, MdLaptop, MdLocalGroceryStore, MdPets } from 'react-icons/md';
import { TimelineView } from '../../components/timeline';

const Home = ({ posts }: { posts: any[] }) => {

    const size = useSize(true)
    const imageSize = size.gmd ? 450 : 250


    const description = "Meet Gliesess - A team of Shopify SEO experts ready to help you increase your store traffic and rely less on Meta and Google ads | Gliesess"
    const url = `${domain}/shopify-seo/experts`

    const data = [
        {
            title: 'Onboarding',
            description: 'Get access to all the necessary accounts  - GA, GSC, Ahrefs/SEMRush, GMB, CMS',
        },
        {
            title: 'Technical seo',
            description: 'Fix all the necessary technical problems that makes Google hate your store. From sitemap, robots.txt, schema (product, organization, itemlist), duplicates, bad site speed.',
        },
        {
            title: 'KW research & silos',
            description: 'Research you and your competitors for all the keywords already indexed, find the hidden gems and form the basic structure of the website. Build a content calendar and a plan',
        },
        {
            title: 'Internal linking & structure',
            description: 'Breadcrumbs (blog, category, shop, tags, products) - if not done, Interlink between products, brands, tags, categories, related products with both cross sells upsells and related taxonomies, Tags - our opportunity to go super narrow with our kw targeting, Sub categories a little broader, Categories semi-broad, the homepage targeting our main keyword.',
        },
        {
            title: 'Category Pages & Product Pages optimization',
            description: 'We add around 400-700 words to each category and product, targeting the main and the secondary keyword of that page. This ensures that we give Google more context than our competitors.',
        },
        {
            title: 'Backlinks',
            description: 'We focus on building trustworthy links with traffic going those certain pages. Those pages also need to have good internal linking themselves.  Quality > quantity. Here you will need a fixed monthly budget. It\'s not that expensive and it will bring you traffic indefinitely. The ROI is much bigger than ads.',
        }


    ];

    const vsl = <div className='relative h-fit'>
        <script src="https://fast.wistia.com/embed/medias/4njkg3hx7i.jsonp" async></script>
        <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
        <div className="wistia_embed wistia_async_4njkg3hx7i seo=true videoFoam=true" style={{ position: "relative", width: "100%" }}>
            <div className="wistia_swatch" style={{ height: "100%", left: 0, opacity: 0, overflow: "hidden", position: "absolute", top: 0, transition: "opacity 200ms", width: "100%" }}>
                <img src="https://fast.wistia.com/embed/medias/4njkg3hx7i/swatch" style={{ filter: "blur(5px)", height: "100%", objectFit: "contain", width: "100%" }} alt="" aria-hidden="true" onLoad={() => { if (this) (this as any).parentNode.style.opacity = 1 }} />
            </div>
        </div>
    </div>

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
            <BasicNextSeo title={"Shopify SEO experts: Everything you need to get off the ads Kool Aid"} description={description} url={url} />
            <TawkWidget />
            <OrganizationStructuredData />

            <Navbar />

            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
            <HeroComponent
                belowH1={<>
                    <p className="text-lg text-gray-700 mb-8 max-w-5xl">
                        We are Shopify SEO experts increasing traffic using a 6-step SEO process tailored specifically for E-commerce brands and dropshippers.
                    </p>
                    <p className='mb-2 md:mb-7' id='testimonials'><strong>Book a 30-minute call (no risk/cost) and we'll show you our strategy.</strong></p>
                </>}
                h1={<>
                    <strong>Shopify SEO Experts</strong> {size.gmd && <br />}
                    Double your store traffic or {size.gmd && <br />}
                    <strong>you don't pay</strong>. {size.gmd && <br />}
                </>}
                cta={<> <CTA /> <AlternativeCTA /> </>} customRitghtElement={<div className='flex flex-col justify-center h-full my-5 mx-2 md:mx-0'>{vsl}</div>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
            />
            <SocialProof />
            {/* <CTA /> */}

            <section className='flex flex-col items-center max-w-[100vw]'>
                <div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-center'>Is this the only way <br />to get customers for your Shopify store?</h2>
                    <p className='md:mt-10 text-center'>Even though TikTok and other social media platforms are great for generating traffic to your online store, you're relying on seasonal trends. Not only is this not ideal for consistency, but it's not guaranteed that every campaign or product will work. With Shopify search engine optimization you're not convincing anyone to buy your products, but position your e-commerce store in front of their eyes when they are ready for purchase.</p>

                    <p className='mt-7 md:mt-16 text-center md:text-start'>Feel free to schedule a call with our Shopify experts in SEO to see how you can generate sales consistently.</p>
                    <CTA className='mt-2 md:mt-5' />
                    <AlternativeCTA />
                </div>


                <div className='flex flex-col w-screen my-10 items-center'>
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Facebook engagement' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/facebook-engagement.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">Meta/Google Ads are driving inconsistent traffic to your Shopify store</h2>
                            <p className="text-gray-600">You are not alone if you are tired of ads working great for small audiences yet poorly for bigger ones.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ Paid ads convert worse the more people you try to reach out because you are less targeted</p>
                                <p>❌ Every month you start from 0</p>
                                <p>❌ Have to film creatives or write a ton of copy</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
                        <Image alt='Gliesess Seo alternative tiktok' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/organic-marketing-tiktok.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">Organic social is inconsistent and sometimes luck-based</h2>
                            <p className="text-gray-600">You have to test lots of creatives until one blows up, and even that is temporary success. A healthy business requires consistent cashflow</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ Only some creatives will have success and bring sales</p>
                                <p>❌ Doesn't work that well with boring products, even though those sell the most</p>
                                <p>❌ Low intent: People on social media don't want to buy products, they just want to be entertained</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess SEO Alternative' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/seo-illustration.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">SEO remains the most efficient way to diversify your traffic while making your revenue more consistent</h2>
                            <p className="text-gray-600">SEO remains the big daunting task that your Shopify store needs to truly become valuable.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>✅ Diversify Your Traffic Generation and build a long-term business</p>
                                <p>✅ Never start from 0 each month again - Build a compound machine</p>
                                <p>✅ Stop looking for trends and build a healthy business</p>
                                <p>✅ 2X Your Sales Revenue with little marketing efforts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <WhatCost /> */}


            <section className='text-center alternateBg py-20 w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>Shopify SEO consultants exclusivelly specialized in e-commerce</h2>
                <p className='max-w-5xl my-3'>The default golden standard for SEO agencies is being a jack of all trades, master of none. We believe that strategy is flawed and  working only with e-commerce clients will not only bring substantial results for them, but efficientisize our processes to the point where we deliver results faster, and internally we can do this easier, passing the cost down to you</p>

                <h3 className='text-xl'>We help every Shopify or e-commerce store, regardless of the niche</h3>

                <div className='flex flex-wrap justify-around mt-10 w-full'>
                    {[
                        { icon: MdCheckroom, title: 'Fashion' }, { icon: MdChair, title: 'Furniture' }, { icon: MdFace, title: 'Skincare' }, { icon: MdPets, title: 'Pet Supplies' },
                        { icon: MdLocalGroceryStore, title: 'Retail' }, { icon: MdLaptop, title: 'Electronics' }, { icon: MdFitnessCenter, title: 'Supplements & Fitness' },
                        { icon: MdCategory, title: 'Others' }
                    ].map(i => <div className='flex flex-col items-center'>
                        {createElement(i.icon, { className: "w-10 h-10 " })}
                        <h4>{i.title}</h4>
                    </div>)}

                </div>
            </section>


            {/* how much is this costing you */}

            <div className="flex flex-row items-center w-full my-20 mx-2">
                <div className="w-full md:w-[50vw] relative h-[30vh] md:max-w-[50%]">
                    <Image alt="Shopify SEO Performance" className="object-cover w-full object-top scale-x-[-1] rounded-l-md" src={'/shopify-seo-performance.webp'} layout="fill" />
                </div>
                <div className='w-full md:max-w-[50%] md:mx-10'>
                    <h2 className='text-2xl'>How much is this costing you?</h2>
                    <p>+ If you would've get paid hourly for all the time wasted: 1. managing ad accounts, 2. designing creatives, 3. writing copy, 4. finding keywords to target, how much would that cost you?</p>
                    <p>+ If your CPC is $3 hypothetically, and we would bring you 1000 visitors a month, that's already $3000 saved in adspend. Multiply that by the ROI of your ads and you've got another chunk of saved cash by working with us</p>
                    <p></p>
                </div>
            </div>


            <h2 className='text-2xl text-start mt-20'>Get in Touch with Our Shopify SEO Consultant for a Quote</h2>
            <p>If you truly want to make a predictable traffic machine and escape the ads hamster wheel feel free to book a call below. Only if we see that we can help you scale, we'll offer help</p>
            <CTA className='mt-2 md:mt-5' />
            <AlternativeCTA />

            <div className='w-full px-2 md:px-16 my-16'>
                <h2 className='text-3xl mb-2 font-semibold mx-2'>Our Shopify SEO expert</h2>
                <TimelineView data={data} />
                <p className='mx-2 mt-5 text-lg'>Our unique advantage lies in optimizing this process for doing it at scale. Nobody does all of products and collection pages. By using these strategies on all pages on the site, we outrank our competitors where they're too lazy to put in the effort.</p>
            </div>

            <FeaturesAndObjections />

            {/* faq's */}
            <AccordionComponent className='w-full max-w-5xl' items={[
                { title: 'Is it worth it to hire a Shopify SEO expert?', desc: "Yes, it is worth it to hire a Shopify SEO expert. Hiring a generalist SEO expert, or even worse, doing it yourself will delay your SEO results by weeks or even months. It is important to note that the time wasted on not hiring a Shopify SEO expert will cost you more than the additional cost working with him/her." },
                { title: 'How much does it cost to hire a Shopify SEO expert in 2024?', desc: "It depends a lot on the quality of the service. A general SEO expert with no e-commerce experience will be significantly cheaper(25$/h) than a an expert with experience in e-commerce(75$+/h). These experts usually form strategies around which keywords you will rank in the first page as soon as possible and which keywords represent your Shopify brand the most" }
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

                    <h3 className="text-2xl font-medium mt-8 mb-4">Strategy made just for you</h3>

                    <p className='my-2 text-lg'>Either if you sell high ticket products or cheap ones, a unique strategy is necessary for every Shopify store. Also depending on your existing authority we target more or less difficult keywords so you start ranking on page 1 right away.</p>

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


