import Image from 'next/image';
import { AlternativeCTA, BasicNextSeo, CTA, Navbar, OrganizationStructuredData, TawkWidget } from '../components/navbar';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import { useSize } from '../utils/useSize';
import React from 'react';
import { domain, homePageTitle, itemListStyle, twitterHandle } from '../utils/mainUtils';
import { HeroComponent } from '../components/heroComponent';
import { SocialProof } from '../components/socialProof';

const Home = ({ posts }: { posts: any[] }) => {

	const size = useSize(true)
	const imageSize = size.gmd ? 450 : 250


	const description = "We Generate customers for Your Furniture Shop Without your effort. Consistently. | Gliesess"
	const url = `${domain}/`

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
			<BasicNextSeo title={homePageTitle} description={description} url={url} />
			<TawkWidget />
			<OrganizationStructuredData />

			<Navbar />

			<img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
			<HeroComponent
				belowH1={<>
					<p className="text-lg text-gray-700 mb-8 max-w-5xl">
						... or you don't pay. We build exceptionally efficient customer acquisition systems using SEO so that you don't have to keep running the ads hamster wheel.
					</p>
					<p className='mb-2 md:mb-7' id='testimonials'><strong>Book a 30-minute call (no risk/cost) and we'll show you our strategy.</strong></p>
				</>}
				h1={<>
					<strong>Effortlessly</strong> double your {size.gmd && <br />}
					<strong>E-commerce</strong> Store {size.gmd && <br />}
					traffic. {size.gmd && <br />}
				</>}
				cta={<> <CTA /> <AlternativeCTA /> </>} customRitghtElement={<div className='flex flex-col justify-center h-full my-5 mx-2 md:mx-0'>{vsl}</div>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
			/>
			<SocialProof />

			{/* <CTA /> */}

			<section className='flex flex-col items-center max-w-[100vw]'>
				<div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
					<h2 className='text-2xl md:text-4xl font-semibold text-center'>Honestly now, is this the only way <br />to get customers for your business?</h2>
					<p className='md:mt-10 text-center'>Stop running ineficient ads that convert less and less with time, while trying to reinvent the wheel each month. <br /> Organic social media is a bit better but still not that much engagement. What if there was a better way, <br /> and how long are you willing to wait before actually getting lots of clients?</p>

					<p className='mt-7 md:mt-16 text-center md:text-start'>You can schedule a call with our <Link className="a" href={'/shopify-seo/experts'}>Shopify SEO experts</Link>  or WooCommerce SEO experts and we'll show you the better way. Trackable, scalable, efficient.</p>
					<CTA className='mt-2 md:mt-5' />
					<AlternativeCTA />
				</div>


				<div className='flex flex-col w-screen my-10 items-center'>
					<div className='flex flex-col md:flex-row items-center justify-around w-full'>
						<Image alt='Gliesess Paid Ads Marketing Channels' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/paid-ads-marketing-channel.webp'} />
						<div className="px-2 md:w-[50%]">
							<h2 className="text-3xl font-bold mb-2">Meta/Google Ads are getting worse day by day</h2>
							<p className="text-gray-600">With Meta/Google ads you are trying to reinvent the wheel each month trying to get a creative to convert, but only temporarly. What if there's a way to make your marketing efforts yield results month after month.</p>
							<div className='flex flex-col items-start text-start w-fit mt-5'>
								<p>❌ Every month you start from 0</p>
								<p>❌ Paid ads convert worse the more people you try to reach out</p>
								<p>❌ Have to film creatives or write a ton of copy</p>
							</div>
						</div>
					</div>
					{size.lmd && <hr className='w-full my-5' />}
					<div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
						<Image alt='Gliesess Social Media Marketing' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/social-media-marketing.webp'} />
						<div className="px-2 md:w-[50%]">
							<h2 className="text-3xl font-bold mb-2">Social media isn't getting that much engagement</h2>
							<p className="text-gray-600">With even big brands having only 10-30 likes on their post, social media is hard to grow and it usually requires investment in paid promotion</p>
							<div className='flex flex-col items-start text-start w-fit mt-5'>
								<p>❌ Organic doesn't work that well for most platforms, Paid promotion being necessary</p>
								<p>❌ Very low ROI(You have to post for months before getting a couple of clients)</p>
								<p>❌ Low intent: People on social media don't want to buy products, they just want to be entertained</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <WhatCost /> */}

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


			<FeaturesAndObjections />
			{/* <CTA className='mb-16' /> */}
			<div className='flex flex-row'>
				<a id="href2" target="_blank" href="https://www.2findlocal.com/b/15159573"><img className="anchorImage" alt="gliesess" src="https://www.2findlocal.com/Set/Icons/2.png" /></a>
				<a target="_blank" href="https://taxihowmuch.com"><img alt="taxi fare calculator" src="https://www.2findlocal.com/Set/Icons/u.png" /></a>
				<a id="href3" target="_blank" href="https://updownradar.com"><img alt="downdetector" src="https://www.2findlocal.com/Set/Icons/f.png" /></a>
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
		</div>
	)
}


const FeaturesAndObjections = () => {

	const size = useSize(true)

	return <section className='w-screen'>

		<div className="mb-20 flex flex-row-reverse">

			<div className='relative'>
				{React.createElement(size.gmd ? StickyBox : 'div', {
					className: 'pt-24', children: [
						// <div className=" flex flex-row justify-end">
						<div className="w-full h-[70vw] md:w-[50vw] md:h-screen relative">
							<Image alt="Web Design and SEO Process" className="object-cover object-top md:rounded-tr-xl" src={'/google-analytics-seo.webp'} layout="fill" />
						</div>

						// </div>
					]
				})}

			</div>
			<div className='flex flex-row justify-end'>
				<div className="md:w-[50vw] pt-24 px-2 md:px-20">

					<h2 className="text-4xl font-bold mt-5">How do we solve this?</h2>

					<p className='my-2 text-lg'>We take one of the most efficient marketing channel, SEO, and we put it on steroids. By applying a proven process and doing all the good practices to generate customers in a shorter time frame, we leave no room for errors. Then, those results only need to be maintained, starting each month on a good foot.</p>

					<hr className="mt-8" />

					<h3 className="text-2xl font-medium mt-8 mb-4">1. Website Design</h3>

					<p className='my-2 text-lg'>We create a visually stunning website if you don't have one, tailored to reflect your brand identity with intuitive navigation and user interfaces. We make it mobile-friendly and fast, which is required for good SEO.</p>
					<hr className="mt-8" />

					<h3 className="text-2xl font-medium mt-8 mb-4">2. User Experience (UX) Enhancement</h3>

					<p className='my-2 text-lg'>This involves meticulously crafting each webpage to not only captivate users but also to optimize visibility on search engines. <br /><br /> By strategically designing and refining the layout, content, and interactive elements of every page, we aim to create an immersive and user-friendly journey for visitors.</p>
					<hr className="mt-8" />

					<h3 className="text-2xl font-medium mt-8 mb-4">3. SEO Audit, Research, and Monitoring</h3>

					<p className='my-2 text-lg'>✅ We take care of conducting an SEO audit for your website.</p>
					<p className='my-2 text-lg'>✅ Then we conduct thorough research on the market in which you operate. <br />This helps us understand your competitors and get a grasp of your buyers.</p>
					<p className='my-2 text-lg'>✅ Also we closely monitor the correct implementation of delivered assets.</p>
					<p className='my-2 text-lg'>✅ Finally we track results and provide regular reports, <br />staying updated with market changes and adapting swiftly through the optimization of the SEO strategy.</p>

					<hr className="mt-8" />

					<h3 className="text-2xl font-medium mt-8 mb-4">4. SEO Optimization - Staying on top of Google Updates</h3>

					<p className='my-2 text-lg'>We stay updated with market changes and adapt swiftly through the optimization of the SEO strategy.</p>

					<div className='flex flex-col items-center mt-5'>
						<CTA />
						<AlternativeCTA />
					</div>


				</div>

			</div>
		</div>
	</section>


};


function WhatCost() {
	return <div className='flex flex-col md:flex-row md:space-x-16 items-center md:my-20 mx-2 alternateBg w-screen md:px-36'>
		<Image alt='Gliesess inefficient marketing channels' src={'/gliesess-inefficient-marketing-channels.webp'} className='rounded-lg' width={450} height={450}></Image>
		<section className="flex flex-row w-full items-center justify-center md:h-[60vh]">
			<div className="text-center md:text-right z-40">
				<h2 className="text-2xl font-semibold mb-6">
					Most furniture stores lose 18k per month with inefficient marketing channels
				</h2>
				<p className="text-lg text-gray-700 mb-8 max-w-5xl">
					If your average customer buys furniture worth $2k, <br /> and it costs $2k to work with us and get 10 clients per month, <br /> you are leaving $18k/month on the table
				</p>

			</div>
		</section>
	</div>
}



export default Home


