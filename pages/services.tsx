import { CTA, Navbar } from "../components/navbar";
import { CgWebsite } from "react-icons/cg";
import { LuAreaChart } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";





export default function ServicesPage() {
    return <div className="flex flex-col items-center">
        <Navbar />
        <div className="container">
            <img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10 opacity-50' />
            <h1 className="text-3xl md:text-5xl font-bold mx-2">Services</h1>
            <p className="mx-2">Select one of our crafted packages as a foundation to kickstart your online</p>
            <p className="mb-7 mx-2">presence swiftly, ensuring a launch within weeks, not months or years!</p>

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
                        <CheckText text="Ecommerce functionality" />
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
                <Image alt="Gliesess desk setup" className="object-cover object-top md:rounded-bl-xl" src={'/gliesess-desk-setup.png'} layout="fill" />
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full alternateBg items-center">
            <div className="md:w-[50vw] md:h-[1000px] w-full h-[70vw] relative">
                <Image alt="Gliesess desk setup" className="object-cover object-top md:rounded-tr-xl" src={'/gliesess-development-and-seo-methodology.png'} layout="fill" />
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
            <p>Contact us today to schedule a consultation and take the first step towards transforming your online presence.</p>
            <CTA className="mt-2" />
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