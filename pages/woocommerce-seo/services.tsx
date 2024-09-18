

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
import { MdAdd, MdCategory, MdChair, MdCheckroom, MdFace, MdFitnessCenter, MdLaptop, MdLocalGroceryStore, MdPets, MdTimer } from 'react-icons/md';
import { TimelineView } from '../../components/timeline';
import { FaChartPie, FaClock, FaMoneyBill, FaPuzzlePiece, FaRegTimesCircle, FaTimes } from 'react-icons/fa';

const Home = ({ posts }: { posts: any[] }) => {

    const size = useSize(true)
    const imageSize = size.gmd ? 450 : 250


    const description = "Increase your store traffic and rely less on Meta and Google ads with Shopify SEO services | Gliesess"
    const url = `${domain}/shopify-seo/services`

    const data = [
        {
            title: 'Onboarding',
            description: 'Get access to all the necessary accounts  - GA, GSC, Ahrefs/SEMRush, GMB, CMS',
        },
        {
            title: 'Technical SEO',
            description: 'Fix all the necessary technical problems that make Google hate your store. From sitemap, robots.txt, schema (product, organization, itemlist), duplicates, and bad site speed.',
        },
        {
            title: 'KW research & silos',
            description: 'Research you and your competitors for all the keywords already indexed, find the hidden gems and form the basic structure of the website. Build a content calendar and a plan',
        },
        {
            title: 'Internal linking & structure',
            description: 'Breadcrumbs (blog, category, shop, tags, products) - if not done, Interlink between products, brands, tags, categories, related products with both cross-sells, up-sells and related taxonomies, Tags - our opportunity to go super narrow with our keyword targeting, Subcategories a little broader, Categories semi-broad, the homepage targeting our main keyword.',
        },
        {
            title: 'Category Pages & Product Pages optimization',
            description: 'We add around 400-700 words to each category and product, targeting the main and secondary keywords of that page. This ensures that we give Google more context than our competitors.',
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

    const iconStyle = "bg-gradient-to-r from-blue-100/60 to-purple-100/60 text-black p-2 rounded w-8 h-8 mr-2"

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
            <BasicNextSeo title={"Shopify SEO services: Stop relying on paid ads and scale your Shopify Shop."} description={description} url={url} />
            <TawkWidget />
            <OrganizationStructuredData />

            <Navbar />

            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
            <HeroComponent
                belowH1={<>
                    <p className="text-lg text-gray-700 mb-8 max-w-5xl">
                        We deliver Shopify SEO services in a 6-step plan tailored specifically for E-commerce.
                    </p>
                    <p className='mb-2 md:mb-7' id='testimonials'><strong>Book a 30-minute call and we'll show you our strategy.</strong></p>
                </>}
                h1={<>
                    <strong>Shopify SEO Services</strong> {size.gmd && <br />}
                    That Doubles your store traffic {size.gmd && <br />}
                    <strong>with a money back guarantee</strong>. {size.gmd && <br />}
                </>}
                cta={<> <CTA /> <AlternativeCTA /> </>} customRitghtElement={<div className='flex flex-col justify-center h-full my-5 mx-2 md:mx-0'>{vsl}</div>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
            />
            <SocialProof />
            {/* <CTA /> */}

            <section className='flex flex-col items-center max-w-[100vw]'>
                <div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-center'>Is this the only way <br />to get customers for your Shopify store?</h2>
                    <p className='md:mt-10 text-center'>If you have ever been <strong>burned</strong> by other agencies, either doing Social Media or Ads, it's because those channels are <strong>crowded</strong> by other Shopify stores like you trying to steal viewers attention. When in fact, there's a place where your <strong>customers are already searching for your products</strong> and are ready to buy. Google and SEO right now are the most <strong>underrated way to get Shopify Sales</strong>, because everyone thinks it's harder than it actually is. Moreover, this traffic is more <strong>consistent and reliable</strong> than other marketing channels</p>

                    <p className='mt-7 md:mt-16 text-center md:text-start'>Feel free to schedule a call with us to see what Shopify SEO services we offer.</p>
                    <CTA className='mt-2 md:mt-5' />
                    <AlternativeCTA />
                </div>


                <div className='flex flex-col w-screen my-10 items-center'>
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Low engagement SMMA' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/low-engagement-smma.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Stop getting burned by other agencies</h2>
                            <p className="text-gray-600">Our team of <Link className='a' href={'/shopify-seo/experts'}>Shopify SEO experts</Link> are dedicated in providing specialized e-commerce SEO services with strategies tailored for your shop.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ The majority of SEO agencies are a jack of all trades, master of none, delivering mediocre results.</p>
                                <p>❌ Even with a money-back guarantee, other Ad Agencies will still waste your time and ad cost.</p>
                                <p>❌ You are left to ever-changing algorithm and CPC changes without a real chance to build a reliable business</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
                        <Image alt='Gliesess SEO takes time' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/time-to-buy.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Does "SEO take time"?</h2>
                            <p className="text-gray-600">If your brand is at least 6-12 months old, it shouldn't take another 6-12 for it to rank on search engines. Those who tell you this do generic SEO for all types of industries.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ SEO takes as much time as it takes for the necessary changes to be implemented</p>
                                <p>❌ Generic SEO agencies make one-size-fits-all strategies and timelines for all clients (Saas, Local businesses, E-commerce, Services)</p>
                                <p>❌ If your brand is at least 6-12 months old, it should have no reason to grow fast(er) once every change is applied</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row items-center justify-around w-full'>
                        <Image alt='Gliesess Backlink illustration' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/backlink-illustration.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Tired of irrelevant backlinks?</h2>
                            <p className="text-gray-600">Guest posting doesn't work if the page created is an orphan with 0 traffic going to it</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>❌ Most SEO agencies guest post with 0 intention to optimize the given page. From its internal linking to other links going to it.</p>
                                <p>❌ This means backlinks become just a vanity metric, not helping as much as they should.</p>
                                <p>❌ Instead it is better to aim for link insertions for already well-performing pages</p>
                            </div>
                        </div>
                    </div>
                    {size.lmd && <hr className='w-full my-5' />}
                    <div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
                        <Image alt='Gliesess SEO Alternative' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/conversion-rate-optimization.webp'} />
                        <div className="px-2 md:w-[50%]">
                            <h2 className="text-3xl font-bold mb-2">Get high-intent customers with Shopify SEO services</h2>
                            <p className="text-gray-600">SEO remains the big daunting task that your Shopify store needs to truly become valuable.</p>
                            <div className='flex flex-col items-start w-fit mt-5'>
                                <p>✅ E-commerce websites on the first page of Google search results have an average conversion rate of 10.18% <a className='a' href='https://zipdo.co/ecommerce-seo-statistics/'>(source)</a></p>
                                <p>✅ 8.5 billion searches per day</p>
                                <p>✅ Stop looking for trends and build a healthy business</p>
                                <p>✅ 2X Your Sales Revenue with little marketing efforts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <WhatCost /> */}


            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 md:mx-10 my-20'>

                <div>
                    <h3 className='text-xl flex flex-row items-center my-2'><FaClock className={iconStyle} />Save time on marketing</h3>
                    <p>By outsourcing your online marketing efforts you ensure you get time to focus on more important parts of the business, such as product and growth.</p>
                    <br />
                    <p>Ignoring opportunity costs in business will cost you a fortune. As the landscape becomes more and more competitive, the business owner needs to stay sharp in upcoming opportunities.</p>

                </div>

                <div>
                    <h3 className='text-xl flex flex-row items-center my-2'><FaChartPie className={iconStyle} />Greater ROI</h3>
                    <p>SEO can yield as much as 22x ROIs if done correctly. In fact, SEO sits as the second most profitable marketing channel, only beaten by Email Marketing</p>
                    <br />
                    <p>That's because of its high intent. People searching on Google usually don't need to be converted as high as social media buyers, and they convert better.</p>
                </div>

                <div>
                    <h3 className='text-xl flex flex-row items-center my-2'><FaMoneyBill className={iconStyle} />Maximize profits</h3>
                    <p>Fewer Employees managing complicated marketing strategies, lower CAC, no Ad spent, and no overpriced agencies.</p>
                    <br />
                    <p>Unlike SEO, scaling ads becomes harder and harder. Because you start to reach to colder and colder audiences, your profit starts to drop. With SEO, your marketing strategies get more and more efficient with scale.</p>
                </div>

                <div>
                    <h3 className='text-xl flex flex-row items-center my-2'><FaPuzzlePiece className={iconStyle} />Fewer moving pieces</h3>
                    <p>No need to manage multiple ad accounts and multiple social media profiles. Why couldn't your website do your marketing and conversion as well?</p>
                    <br />
                    <p>Build a robust business with fewer moving pieces. When your website can be both the hub of your products and do your marketing for you as well, the business as a whole becomes much more easy to manage.</p>
                </div>
            </div>


            <section className='text-center alternateBg py-20 w-full flex flex-col items-center'>
                <h2 className='text-3xl font-semibold'>Shopify SEO services made for e-commerce</h2>
                <p className='max-w-5xl my-3'>The default golden standard for SEO agencies is being a jack of all trades, master of none. We believe that strategy is flawed and  working only with e-commerce clients will not only bring substantial results for them, but optimize our processes to the point where we deliver results faster, and internally we can do this easier, passing the cost down to you</p>

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

            <div className="flex md:flex-row flex-col space-y-2 items-center w-full my-20 mx-2">
                <div className="w-[95%] md:w-[50vw] relative h-[30vh] md:max-w-[50%]">
                    <Image alt="Shopify SEO Performance" className="object-cover w-full object-top scale-x-[-1] rounded-md md:rounded-l-md" src={'/shopify-seo-performance.webp'} layout="fill" />
                </div>
                <div className='w-[95%] md:max-w-[50%] md:mx-10'>
                    <h2 className='text-2xl'>How much is this costing you?</h2>
                    <p>+ While we guarantee results 3 months in, other agencies can take 6-12 months because of generic strategies. That's a minimum of 3 months where your business can make money.</p>
                    <p>+ Speaking of those generic strategies, they are made to show results whether applied in Saas, Services, or Local businesses. This makes them inefficient. But our 6-step process is specifically made as a service for Shopify SEO.</p>
                    <p>The bottom line is, working with a generic agency will yield slower results that are less significant.</p>
                    <p></p>
                </div>
            </div>


            <h2 className='text-2xl mx-2 text-start mt-20'>Start your Shopify SEO journey in weeks not months</h2>
            <p className='mx-2'>If you truly want to make a predictable traffic machine and escape the ads hamster wheel feel free to book a call below. Only if we see that we can help you scale, we'll offer help</p>
            <CTA className='mt-2 md:mt-5' />
            <AlternativeCTA />

            <div className='w-full px-2 md:px-16 my-16'>
                <h2 className='text-3xl mb-2 font-semibold mx-2'>Our Shopify SEO service strategy</h2>
                <TimelineView data={data} />
                <p className='mx-2 mt-5 text-lg'>Our unique advantage lies in optimizing this process for doing it at scale. Nobody does all of the products and collection pages. By using these strategies on all pages on the site, we outrank our competitors where they're too lazy to put in the effort.</p>
            </div>


            <div className="flex flex-col md:flex-row items-center w-full my-20 mx-2 space-y-2">
                <div className="w-[95%] md:w-[50vw] relative h-[40vh] md:h-[70vh] md:max-w-[50%]">
                    <Image alt="Shopify online market strategy" className="object-cover w-full object-center rounded-lg md:mx-5" src={'/online-market-strategy.webp'} layout="fill" />
                </div>
                <div className='w-[95%] md:max-w-[50%] md:mx-10 '>
                    <h2 className='text-2xl font-semibold'>What's included in Shopify SEO services?</h2>
                    <ol className=''>
                        {[
                            "Seemless onboarding - no time wasted on logins and knowing each other",
                            "Custom e-commerce strategy based on your audience and your goals",
                            "Tailored keyword research, Silo building, and Smart Prioritization",
                            "Shopify Core Web Vitals and Speed optimization",
                            "Internal and external link building that actually works",
                            "Blog and content creation with the objective of driving sales",
                            "Product, Category and Tag optimization",
                            "Fixing Essential Technical Problems, URL optimization",
                            "Monthly or biweekly reports focused on actual traffic, not vanity metrics",
                            "& much more",
                        ].map((i, index) => <li>{index + 1}. {i}</li>)}
                    </ol>
                </div>
            </div>






            <FeaturesAndObjections />

            {/* faq's */}
            <AccordionComponent className='w-full max-w-5xl' items={[
                { title: 'Does Shopify offer SEO services?', desc: 'While Shopify offers SEO functionality in its store builder, it is left to the administrator to implement the right changes in order to grow. Often admins resort to hiring SEO agencies, but the right ones are hard to find.' },
                { title: 'Is it worth it to invest in Shopify SEO services?', desc: "Yes, it is worth it to invest in Shopify SEO services. Trying to do it yourself will delay your SEO results by weeks or even months. It is important to note that the time wasted on not investing in Shopify SEO services will cost you more than the additional cost of working with him/her." },
                { title: 'How much does Shopify SEO services cost in 2024?', desc: "It depends a lot on the quality of the service. General SEO services will be significantly cheaper(25$/h) than services specifically tailored for Shopify(75$+/h), but the ROI is tenfold." },
                { title: 'What makes us stand out?', desc: 'Our internal processes are designed for speed first. This ensures faster than industry-average results. Also we have the time to implement the necessary changes to grow across all given pages, both category, tags and products.' },
                { title: 'When would our process yield results?', desc: 'With our 6-step process significant increases in traffic happen around 3-4 months, with growth starting from month one.' },
                { title: 'How would our Shopify SEO Services drive online store performance?', desc: 'By targeting every combination of keywords possible - from short, mid and long-tail variants, and optimizing every page that targets those keywords to a T, we cover every query your potential users are searching for.' },
                { title: 'What\'s your process?', desc: 'Our 6-step process goes to the elementary changes across all pages of your website. We strongly believe it is better to 80% optimize all pages than to 100% optimize only some of them. SEO can hit diminishing returns quickly and that\'s what we\'re trying to avoid.' },
                { title: 'How do you do SEO on Shopify websites?', desc: 'While you can take all the strategies outlined above plus our 6-step process, the time between when you will get results vs when we will get results will cost you more money than actually working with us. And if you take in consideration the time you will wasted that could be invested in more profitable activities, you are shooting yourself in the foot by not working with us. Keep in mind that we even offer a money-back guarantee so there\'s really no reason to not work with us' }

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


            <div className='flex md:flex-row flex-col justify-between w-full md:px-20 alternateBg mt-20 py-10'>
                <div>
                    <h2 className='text-2xl font-semibold'>Cut ties with expensive advertising costs, Welcome Shopify SEO</h2>
                    <p>Cut ties with expensive agencies applying generalist strategies that worked for other industries but not for yours.</p>
                    <br />
                    <p>Cut ties with agencies showing you vanity metrics and case studies from years ago when Google was a different platform.</p>
                    <br />
                    <p>Cut ties with expensive CPCs and ever changing Algorithms. Build a sustainable business that brings clients month after month without luck or huge operational costs</p>
                </div>
                <div className='flex flex-col items-center mt-5 min-w-[50%]'>
                    <h3 className='text-xl'>Book a call with us and get a free audit</h3>
                    <CTA />
                    <AlternativeCTA />
                </div>
            </div>
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

                    <p className='my-2 text-lg'>Where outsourcing other marketing efforts might be a bad idea, you are not diluting the brand with SEO. Our Shopify SEO services are made to follow your brand voice and guidelines. </p>
                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">Expert strategies no one talks about</h3>

                    <p className='my-2 text-lg'>From turning filters into landing pages to using tags to target long-tail keywords. While everyone is talking about basic strategies, the strategies we use help us squeeze much more juice out of our SEO campaigns. </p>
                    <p><strong>1. Turn filters into landing pages</strong> - While most of your competitors build fancy filters for their products, we turn those filters into landing pages that target mid and long-tail keywords. "White shoes", "Leather shoes", and "Adidas Shoes" are all real queries that are searched daily, and building pages with great content that targets them is invaluable</p>
                    <p><strong>2. Use tags to target the most narrow keywords</strong> - After targeting most of the mid and long-tail keywords with categories and subcategories built like landing pages, we go one step further. We start targeting even more specific queries with tags and turn those as well into landing pages to get viewers from every corner of the internet. None of your competitors will ever do this.</p>
                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">6-step plan tailored for e-commerce</h3>

                    <p className='my-2 text-lg'>While the market is full of cookie-cutter SEO services, our team of <Link className='a' href={'/shopify-seo/experts'}>experts in Shopify SEO</Link> made a custom plan specifically for e-commerce, and especially for Shopify. Knowing exactly which pages have the highest priority, common pitfalls for Shopify SEO and other nuances are essential for forming a personalized strategy. </p>
                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">Bonus strategy: Local SEO + E.E.A.T.</h3>

                    <p className='my-2 text-lg'>Sometimes a little nudge is needed for even more sales to your Shopify Store. By building and optimizing your Google Business Profile, Citations, Social Profiles and other E.E.A.T. factors we tell Google that we in fact are a real business. And if you own a physical store, this will drive even more sales. By optimizing all of the profiles above with engaging yet descriptive images, N.A.P.'s ( important ranking Local SEO factor which requires consistent Name, address, and Phone number across all of your profiles) and your business schedule we tell Google and Customers that we're legit.</p>
                    <hr className="mt-8" />


                    <h3 className="text-2xl font-medium mt-8 mb-4">Build Topical Authority and Trust with the help of Shopify Content creation.</h3>

                    <p className='my-2 text-lg'>Getting traffic from your blog is only the 3'rd biggest benefit of owning one. The second largest benefit is getting quality backlinks. If you publish consistent content it will be more likely to get links from it than to get them from collection or product pages.</p>
                    <p className='my-2 text-lg'>The first and biggest benefit is reaching topical authority. Topical authority is the cheat code for getting your site indexed easily for every search result in your industry. Once you cover all of the queries in a certain vertical, google will treat you as an authority in that space, and you will rank more easy.</p>
                    <p className='my-2 text-lg'>But getting topical authority is not as easy as it sounds. You need a good topical map of your website in order to make sure you are covering any subject in that certain field. Our keyword research process and grouping do exactly that. By manually grouping every keyword we found on your competitors, you, and the SERPs we make sure to cover any subject needed to reach topical authority</p>
                    <hr className="mt-8" />


                    <h3 className="text-2xl font-medium mt-8 mb-4">Turn blog posts into Shopify Funnels.</h3>

                    <p className='my-2 text-lg'>Your Shopify blog posts should not be created only for vanity metrics such as monthly visitors. Each blog post should be funneled into category and product pages with care, and every category/product should not link back to a blog page. This ensures the only way for your customers is down the funnel. </p>

                    <p className='my-2 text-lg'>We start to build these funnels with the intention of converting. Indeed, passing the link juice helps, but those funnels are incredibly effective if used well. One blog posts should target only 1 collection or 1 product page. Focus is key in building these posts. We build them using the buyers journey: Awareness - Consideration - Decision.</p>
                    <hr className="mt-8" />


                    <h3 className="text-2xl font-medium mt-8 mb-4">Outstanding results with Shopify SEO services</h3>

                    <p className='my-2 text-lg'>We cannot guarantee that we will 10x your website in 2 months, but we've done it before. Our timeline can range anywhere from 2 to 6 months. But why is everyone telling you that SEO takes time? Because focusing on the wrong changes starting out can delay the results you see for your Shopify store. </p>

                    <hr className="mt-8" />

                    <h3 className="text-2xl font-medium mt-8 mb-4">The strategy made just for you</h3>

                    <p className='my-2 text-lg'>Either if you sell high-ticket products or cheap ones, a unique strategy is necessary for every Shopify store. Also depending on your existing authority we target more or less difficult keywords so you start ranking on page 1 right away.</p>


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


