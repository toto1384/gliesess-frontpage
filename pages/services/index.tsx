import { CgWebsite } from "react-icons/cg";
import { LuAreaChart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { BasicNextSeo, TawkWidget, Navbar, CTA } from "../../components/navbar";
import { domain, itemListStyle } from "../../utils/mainUtils";
import { useSize } from "../../utils/useSize";
import { TimelineView } from "../../components/timeline";
import Link from "next/link";


export default function ServicesPage() {


    const data = [
        {
            title: 'Plug and play',
            description: 'No matter the technology and hosting platform of the website, with our deep technical knowledge we will implement the necessary steps to grow it (either WordPress, Shopify, Javascript hosted on either WPEngine, AWS, or anything else)',
        },
        {
            title: 'Make it new or make it better',
            description: 'If the website is old/slow/ugly, we’ll bring it back to life by either remaking it completely or finding and fixing all the problems with it. (We’ll coach you on the best solution and let you choose)',
        },
        {
            title: 'Up-to-date technologies',
            description: 'We will build a website with the most performant technologies that are up-to-date, and with optional e-commerce functionality such as Secure payments, product catalog, and Virtual carts. You don’t need to learn any complicated software',
        },
        {
            title: 'No effort transfer',
            description: 'If you have an old website, we will transfer everything from it with little effort from your side(all pages, products, and information). Your convenience comes first',
        },
        {
            title: 'Location independent results',
            description: 'We optimize for Google Maps so no matter your store’s location, you’ll still get customers'
        },
        {
            title: 'Fast(er) results',
            description: 'Agile-focused strategy - we implement the highest impact changes first, so you see results in a couple of months, not half a year'
        },
        {
            title: 'Batteries included',
            description: 'We make the SEO strategy, social media profiles, design the front page, write all product descriptions and titles, and all extra pages with your logo and some product photos (which we edit ourselves to look better). Again, your convenience comes first. '
        },
        {
            title: 'Full transparency',
            description: 'You get weekly/monthly reports of exactly how much traffic your site gets and how many customers it generates, so you can see if the ROI is positive(or get a refund if you don’t like it)'
        },
        {
            title: 'No other expenses',
            description: 'No other expenses: Apart from our service fee you don’t have to spend money on advertising or other contractors. We’re an autonomous one-stop shop.'
        }
    ];

    const size = useSize(true)

    const title = "Gliesses Services for your Local business"
    const description = "Ensure a launch within weeks, not months or years! All packages have a 100-day-money-back-guarantee. | Gliesess"
    const url = `${domain}/services`

    return <div className="flex flex-col items-center">
        <BasicNextSeo title={title} description={description} url={url} />
        <TawkWidget />
        <Navbar />
        <div className="container">
            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 right-0 left-0 absolute object-cover -z-10 opacity-50' />
            <h1 className="text-3xl md:text-5xl font-bold mx-2">Services</h1>
            <p className="mx-2">Ensure a launch within weeks, not months or years!</p>
            <p className="mb-7 mx-2">All packages have an 100 day money back guarantee.</p>

            {/* all packages table */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="bg-gray-100/70 rounded-lg flex flex-col justify-between p-5 w-full md:mr-5 max-w-[90vw] my-2">
                    <div>
                        <div className="flex flex-row items-center mb-5">
                            <CgWebsite className="mr-2 w-7 h-7" />
                            <h2 className="text-2xl"> Website </h2>
                        </div>
                        <CheckText text="Custom-designed website" />
                        <CheckText text="Mobile responsiveness" />
                        <CheckText text="User-friendly navigation" />
                        <CheckText text="Contact form integration" />
                        <CheckText text="High-quality imagery" />
                        <CheckText text="Basic SEO optimization" />

                    </div>
                    <div>
                        <button className="btn-primary" onClick={() => {
                            // @ts-ignore: Unreachable code error
                            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
                        }}>Chose 'Website'</button>
                        <p className="">* 4 spots available</p>
                    </div>
                </div>
                <div className="bg-gray-100/70 rounded-lg flex flex-col justify-between p-5 w-full md:mx-5 max-w-[90vw] my-2">
                    <div>
                        <div className="flex flex-row items-center mb-5">
                            <LuAreaChart className="mr-2 w-7 h-7" />
                            <h2 className="text-2xl"> Website + SEO </h2>
                        </div>
                        <CheckText text="Everything in 'Website'" />
                        <CheckText text="100% Core Web Vitals" />
                        <CheckText text="Advanced SEO optimization" />
                        <CheckText text="Keyword research" />
                        <CheckText text="On-page SEO (meta tags, headers, etc.)" />
                        <CheckText text="Google Analytics setup" />
                        <CheckText text="Monthly performance reports" />
                    </div>
                    <div>
                        <button className="btn-primary" onClick={() => {
                            // @ts-ignore: Unreachable code error
                            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
                        }}>Chose 'Website + SEO'</button>
                        <p className="">* 2 spots available</p>
                    </div>
                </div>
                <div className="bg-gray-100/70 rounded-lg flex flex-col justify-between p-5 w-full md:ml-5 max-w-[90vw] my-2">
                    <div>
                        <div className="flex flex-row items-center mb-5">
                            <HiOutlineShoppingCart className="mr-2 w-7 h-7" />
                            <h2 className="text-2xl"> E-commerce website + SEO </h2>

                        </div>
                        <CheckText text="Everything in 'Website + SEO'" />
                        <CheckText text="E-commerce functionality" />
                        <CheckText text="Product catalog setup" />
                        <CheckText text="Secure payment gateway integration" />
                        <CheckText text="Backend Inventory management" />
                        <CheckText text="Shopping cart and checkout system" />
                        <CheckText text="Product SEO optimization" />
                    </div>
                    <div>
                        <button className="btn-primary" onClick={() => {
                            // @ts-ignore: Unreachable code error
                            MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
                        }}><p className="line-clamp-1">Chose 'E-commerce website + SEO'</p></button>
                        <p className="">* 2 spots available</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="container mt-32 mx-3">
            <h2 className="text-3xl font-bold mb-5">Our methodology</h2>
        </div>
        <TimelineView data={data} />

        <p className="text-xl text-start mt-10 w-full mx-2">For more services check out <Link className="a" href={'/shopify-seo/experts'}>Our Shopify SEO experts</Link></p>



        <div className="flex flex-col md:flex-row justify-around space-y-5 w-full alternateBg mt-20 items-center">
            <div className="md:w-[30vw] w-full flex flex-col items-center text-center">
                <Image alt="Gliesess woocommerce seo services" className="object-center object-cover rounded-full w-[300px] h-[300px]" width={300} height={300} src={'/woocommerce-seo-services.webp'} />
                <h2 className="text-3xl font-bold py-2">Woocommerce SEO services</h2>
                <p>Grow your Woocommerce store in months not years with our 6-step efficient process aimed to optimize how fast you can scale and rank in the page 1 on Google.</p>
            </div>
            <div className="md:w-[30vw] w-full flex flex-col items-center text-center">
                <Image alt="Gliesess shopify seo services" className="object-center object-cover rounded-full w-[300px] h-[300px]" width={300} height={300} src={'/shopify-seo-services.webp'} />
                <h2 className="text-3xl font-bold py-2"><Link className="a" href={'/shopify-seo/services'}>Shopify SEO services</Link></h2>
                <p>Specialized Shopify SEO services tailored specifically for your shop. We follow our efficient 6-step e-commerce process, aimed at delivering results faster.</p>
            </div>
            <div className="md:w-[30vw] w-full flex flex-col items-center text-center">
                <Image alt="Gliesess ecommerce services box" className="object-center object-cover rounded-full w-[300px] h-[300px]" width={300} height={300} src={'/ecommerce-box.webp'} />
                <h2 className="text-3xl font-bold py-2">Ecommerce SEO services</h2>
                <p>General e-commerce strategy for everything that isn't Woocommerce or Shopify. Get your shop the love it deserves with Search engine optimization.</p>
            </div>
        </div>


        {/* images explanation */}
        <div className="flex flex-col-reverse md:flex-row w-full alternateBg mt-20 items-center">
            <div className="flex md:w-[50vw] w-full flex-col items-start px-2 md:px-16 my-5">
                <h2 className="text-3xl md:text-4xl font-bold">The 3 exceptional things that will happen when you build your online presence</h2>

                <h3 className="text-2xl font-medium mt-4">1. Enhancing Organic Traffic from Google</h3>

                <p>
                    Leveraging strategies refined with website optimization in mind, we heighten your website's visibility on keywords that drive sales. As your Google ranking improves, organic traffic naturally increases.
                </p>

                <h3 className="text-2xl font-medium mt-4">2. Unrestricted Visibility in Front of Your Customer Base</h3>

                <p>
                    Addressing technical issues, cultivating relevant links, and enriching content contribute to the steady growth of your website. This manifests in heightened visibility on Google searches, ensuring your brand consistently appears before potential customers.
                </p>

                <h3 className="text-2xl font-medium mt-4">3. Amplifying Sales Through Organic Traffic</h3>

                <p>
                    By optimizing the SEO of your website's pages, we drive an uptick in organic traffic, stemming from improved keyword rankings. SEO-generated traffic is both pertinent and targeted, resulting in increased sales conversions.
                </p>
                {/* <ol className="list-decimal">
                    <li>Dedicated team with expertise in web design and SEO for furniture shops.Dedicated team with expertise in web design and SEO for furniture shops.</li>
                    <li>Proven track record of enhancing online presence and driving sales.</li>
                    <li>Tailored solutions to meet the unique needs of your business.</li>
                </ol> */}

            </div>
            <div className="md:w-[50vw] md:h-[1000px] w-full h-[70vw] relative">
                <Image alt="Gliesess desk setup" className="object-cover object-top md:rounded-bl-xl" src={'/gliesess-desk-setup.webp'} layout="fill" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full alternateBg items-center">
            <div className="md:w-[50vw] md:h-[1000px] w-full h-[70vw] relative">
                <Image alt="Gliesess desk setup" className="object-cover object-top md:rounded-tr-xl" src={'/seo-growth.webp'} layout="fill" />
            </div>
            <div className="flex md:w-[50vw] w-full flex-col items-start px-2 md:px-16 my-5">
                <h2 className="text-3xl md:text-4xl font-bold">Why Consider Investing in SEO Optimization?</h2>

                <h3 className="text-2xl font-medium mt-4">01. Elevate Your Google Search Ranking</h3>

                <p>Investing in SEO ensures that your website pages respond more effectively to searches made by potential customers, leading to increased visibility on Search Engine Result Pages (SERPs).</p>

                <h3 className="text-2xl font-medium mt-4">02. Strengthened Brand Awareness and SEO Authority</h3>

                <p>SEO optimization functions as a long-term investment, much like building your brand. This results in consistent brand presence before customers, elevating visibility in search results and fostering trust in your brand.</p>

                <h3 className="text-2xl font-medium mt-4">03. Generation of Leads and Sales</h3>

                <p>As your website appears more frequently in front of a wider audience, it becomes a silent salesperson, accumulating leads and driving sales from Google searches.</p>

                <h3 className="text-2xl font-medium mt-4">04. Optimizing SEO ROI to the Fullest</h3>

                <p>SEO stands out as one of the most lucrative channels in terms of ROI and long-term cost-effectiveness. We are aware of this due to witnessing the tangible benefits that SEO delivers to our clients.</p>

                {/* <ol className="list-decimal">
                    <li>Consultation: We discuss your goals and preferences.</li>
                    <li>Customization: Our team tailors the solution to fit your brand.</li>
                    <li>Development: We bring your vision to life with a responsive and SEO-friendly website.</li>
                    <li>Optimization: Implementing SEO strategies to improve your online visibility.</li>
                    <li>Launch: Your new website is ready to attract and convert customers.</li>
                </ol> */}

            </div>
        </div>

        <hr />




        <hr />

        {/* contact us */}
        <div className="container my-20 px-2 text-center md:text-start flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-semibold">Get Started</h2>
            <p>Book a call to get a <span className="underline decoration-purple-500">free website analysis</span> (if you have one) or a <span className="underline decoration-purple-500">free SEO blueprint</span> (if you don't).</p>
            <CTA className="mt-2" />
        </div>

        <div className='mx-5'>
            <h2 className='text-2xl mb-5'>Explore our 90 marketing strategies from the most influential retailers in the US.</h2>
            <div className="flex flex-col space-y-2 lg:flex-row justify-around">
                <a href="/marketing-strategies" className={itemListStyle}><div>All Marketing strategies →</div></a>
                <a href="/marketing-strategies/supermarkets-grocery-stores" className={itemListStyle}><div>Supermarkets/grocery stores marketing strategies →</div></a>
                <a href="/marketing-strategies/fashion-apparel" className={itemListStyle}><div>Fashion/apparel marketing strategies →</div></a>
                <a href="/marketing-strategies/retailers" className={itemListStyle}><div>Retailers marketing strategies →</div></a>
                <a href="/marketing-strategies/beauty-cosmetics" className={itemListStyle}><div>Beauty/cosmetics marketing strategies →</div></a>


            </div>
        </div>

        {/*  */}
    </div>
}


export function CheckText({ text }: { text: string }) {
    return <div className="flex flex-row items-center space-x-2 my-3">
        <FaCheck className="rounded-full bg-purple-200 text-purple-700 p-1.5 w-6 h-6" />
        <p>{text}</p>
    </div>
}