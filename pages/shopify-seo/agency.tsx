

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


    const description = "Discover a Shopify SEO agency which is specialized on e-commerce SEO only. Our attention is focused on mastering only one craft.| Gliesess"
    const url = `${domain}/shopify-seo/experts`

    const data = [
        {
            title: 'Onboarding',
            description: 'Get access to all the necessary accounts  - GA, GSC, Ahrefs/SEMRush, GMB, CMS',
        },
        {
            title: 'Technical SEO',
            description: 'Fix all the necessary technical problems that makes Google hate your store. From sitemap, robots.txt, schema (product, organization, itemlist), duplicates, and bad site speed.',
        },
        {
            title: 'KW research & silos',
            description: 'Research you and your competitors for all the keywords already indexed, find the hidden gems and form the basic structure of the website. Build a content calendar and a plan',
        },
        {
            title: 'Internal linking & structure',
            description: 'Breadcrumbs (blog, category, shop, tags, products) - if not done, Interlink between products, brands, tags, categories, related products with both cross-sells, up-sells and related taxonomies, Tags - our opportunity to go super narrow with our kw targeting, Subcategories a little broader, Categories semi-broad, the homepage targeting our main keyword.',
        },
        {
            title: 'Category Pages & Product Pages optimization',
            description: 'We add around 400-700 words to each category and product, targeting the main and the secondary keywords of that page. This ensures that we give Google more context than our competitors.',
        },
        {
            title: 'Backlinks',
            description: 'We focus on building trustworthy links with traffic going to those certain pages. Those pages also need to have good internal linking themselves.  Quality > quantity. Here you will need a fixed monthly budget. It\'s not that expensive and it will bring you traffic indefinitely. The ROI is much bigger than ads.',
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
            <BasicNextSeo title={"Shopify SEO agency: Jack of few trades, master of one."} description={description} url={url} />
            <TawkWidget />
            <OrganizationStructuredData />

            <Navbar />

            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
            <HeroComponent
                belowH1={<>
                    <p className="text-lg text-gray-700 mb-8 max-w-5xl">
                        We are a Shopify SEO Agency increasing traffic using a 6-step SEO process tailored specifically for E-commerce brands and dropshippers.
                    </p>
                    <p className='mb-2 md:mb-7' id='testimonials'><strong>Book a 30-minute call and we'll show you our strategy.</strong></p>
                </>}
                h1={<>
                    <strong>Shopify SEO agency</strong> {size.gmd && <br />}
                    Jack of few trades{size.gmd && <br />}
                    <strong>Master of One</strong>. {size.gmd && <br />}
                </>}
                cta={<> <CTA /> <AlternativeCTA /> </>} customRitghtElement={<div className='flex flex-col justify-center h-full my-5 mx-2 md:mx-0'>{vsl}</div>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
            />
            <SocialProof />
            {/* <CTA /> */}

            <section className='flex flex-col items-center max-w-[100vw]'>
                <div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-center'>Is this the only way <br />to work with "Shopify SEO Agencies"?</h2>
                    <p className='md:mt-10 text-center'>Having cookie-cutter plans as your E-commerce SEO strategy is a sure way of not getting any results. The way you do SEO for e-commerce is different for the way you do SEO for SaaS, Services, Local or anything else. From the keyword research, to the backlinks, to which tasks should be done first. Normal agencies have the same strategy for all the different clients they are working with. Those strategies fail to optimize the processes and recognize the specific nuances for each type of client they work with. This will yield the desired results later, or not at all.</p>

                    <p className='mt-7 md:mt-16 text-center md:text-start'>Feel free to schedule a call to see how you can generate sales consistently.</p>
                    <CTA className='mt-2 md:mt-5' />
                    <AlternativeCTA />
                </div>


                <div className='flex flex-col w-screen my-10 items-center'>
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Facebook engagement' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/facebook-engagement.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">Stop getting told that "SEO takes time"</h2>
                            <p className="text-gray-600">If your shop is older than 6-12 months, it shouldn't take another 6-12 to grow it.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ SEO takes as much time as it takes for the necessary changes to be implemented</p>
                                <p>❌ Generic SEO agencies make one-size-fits-all strategies and timelines for all clients (Saas, Local businesses, E-commerce, Services)</p>
                                <p>❌ If your brand is at least 6-12 months old, it should have no reason to grow fast(er) once every change is applied</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
                        <Image alt='Gliesess Seo alternative tiktok' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/organic-marketing-tiktok.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">Skip the cookie-cutter SEO strategies</h2>
                            <p className="text-gray-600">Big agencies usually work with tens of clients ranging from different industries. Our Shopify SEO Agency is build from the ground up to work well with E-commerce. </p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>• We are aware of the specific nuances of each CMS</p>
                                <p>• We boiled down the exact things we need to do and which order to guarantee optimal results.</p>
                                <p>• This allows us to move faster in our strategy and bring results sooner than our competitors.</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Different store Shopify SEO Agency' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/different-stores.webp'} />
                        <div className="px-2 md:w-[50%] md:text-center">
                            <h2 className="text-3xl text-center font-bold mb-2">Different shop different strategy</h2>
                            <p className="text-gray-600">Every shop has longer or shorter sales life-cycle. Some need a blog sooner than others. Some even need different types of keywords.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>✅ Higher ticket items require a blog sooner. With the help of those blogs we build highly effective funnels that start from the TOFU and converts customers to BOFU.</p>
                                <p>✅ Some shops benefit more from low traffic high intent keywords, some high traffic low intent.</p>
                                <p>✅ Every store needs to build backlinks to related websites. We do a deep research of your industry to find the best non-competing websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <WhatCost /> */}


            <section className='text-center alternateBg py-20 w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>Shopify SEO Agency specialized in E-commerce.</h2>
                <p className='max-w-5xl my-3'>From the backlinks build, to the whole SEO strategy, we have engineered our 6-step process to work flawlessly with Shopify and any e-commerce store. After working with clients from lots of industries, we realized high-ticket e-commerce stores function completely different from low-ticket ones. High ticket ones sometimes require a calling process, funnels being build, low traffic but high intent keywords. Low ticket stores require lots of traffic built especially to the "money pages" and lots of links.</p>

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
                    <h2 className='text-2xl'>How much more would you pay for?</h2>
                    <p>1. Results twice as likely to happen.</p>
                    <p>2. Results in half the time.</p>
                    <p>3. On a long enough time horizon, results twice as big.</p>
                    <p></p>
                </div>
            </div>


            <h2 className='text-2xl text-start mt-20'>Our Shopify SEO agency is ready to work with you</h2>
            <p>If you truly want to make a predictable traffic machine and escape the generalist SEO agencies feel free to book a call below. Only if we see that we can help you scale, we'll offer help</p>
            <CTA className='mt-2 md:mt-5' />
            <AlternativeCTA />

            <div className='w-full px-2 md:px-16 my-16'>
                <h2 className='text-3xl mb-2 font-semibold mx-2'>Our Shopify SEO Agency</h2>
                <TimelineView data={data} />
                <p className='mx-2 mt-5 text-lg'>Our unique advantage lies in optimizing this process for doing it at scale. Nobody does all of the products and collection pages. By using these strategies on all pages on the site, we outrank our competitors where they're too lazy to put in the effort.</p>
            </div>

            <FeaturesAndObjections />

            {/* faq's */}
            <AccordionComponent className='w-full max-w-5xl' items={[
                { title: 'How\'s a Shopify SEO Agency different from other Marketing Agencies?', desc: "Mainly the difference comes from the efficiency, likelyhood and the time-frame for the results. While generalist marketing agencies do worse for all of those, a specialized agency formulated its steps to bring bigger results, faster, and it's more likely to happen." },
                { title: 'How much does it cost to hire a Shopify SEO agency in 2024?', desc: "It depends a lot on the quality of the service. A general marketing agency with no e-commerce experience will be significantly cheaper(25$/h) than an expert with experience in e-commerce(75$+/h). These experts usually form strategies around which keywords you will rank on the first page as soon as possible and which keywords represent your Shopify brand the most" },
                { title: 'Is SEO important for Shopify?', desc: "With stores launching each day and an ever increasing cost in CPC (cost per click), having an organic SEO strategy has never been more important. Nowadays every channel is getting more and more saturated, and no strategy is as untapped as SEO. It's been told that \"SEO is dead\" for years and years, yet people are still making money with it. " }
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


