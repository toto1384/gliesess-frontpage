import Head from 'next/head';
import Image from 'next/image';
import { AlternativeCTA, BasicNextSeo, CTA, Navbar, OrganizationStructuredData, TawkWidget } from '../components/navbar';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import { useSize } from '../utils/useSize';
import React from 'react';
import { NextSeo } from 'next-seo';
import { domain, homePageTitle, itemListStyle, twitterHandle } from '../utils/mainUtils';
import { HeroComponent } from '../components/heroComponent';

const Home = ({ posts }: { posts: any[] }) => {

	const size = useSize(true)
	const imageSize = size.gmd ? 450 : 250


	const description = "We Generate customers for Your Furniture Shop Without your effort. Consistently. | Gliesess"
	const url = `${domain}/`



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
				cta={<> <CTA /> <AlternativeCTA /> </>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
			/>
			<SocialProof />
			{/* <CTA /> */}

			<section className='flex flex-col items-center max-w-[100vw]'>
				<div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
					<h2 className='text-2xl md:text-4xl font-semibold text-center'>Honestly now, is this the only way <br />to get customers for your business?</h2>
					<p className='md:mt-10 text-center'>Stop running ineficient ads that convert less and less with time, while trying to reinvent the wheel each month. <br /> Organic social media is a bit better but still not that much engagement. What if there was a better way, <br /> and how long are you willing to wait before actually getting lots of clients?</p>

					<p className='mt-7 md:mt-16 text-center md:text-start'>You can schedule a call with us and we'll show you the better way. Trackable, scalable, efficient.</p>
					<CTA className='mt-2 md:mt-5' />
					<AlternativeCTA />
				</div>


				<div className='flex flex-col w-screen my-10 items-center'>
					<div className='flex flex-col md:flex-row items-center justify-around w-full'>
						<Image alt='Gliesess Paid Ads Marketing Channels' width={imageSize} height={imageSize} className='rounded-full object-cover aspect-square' src={'/paid-ads-marketing-channel.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">Meta/Google Ads are getting worse day by day</h2>
							<p className="text-gray-600">With Meta/Google ads you are trying to reinvent the wheel each month trying to get a creative to convert, but only temporarly. What if there's a way to make your marketing efforts yield results month after month.</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Every month you start from 0</p>
								<p>❌ Paid ads convert worse the more people you try to reach out</p>
								<p>❌ Have to film creatives or write a ton of copy</p>
							</div>
						</div>
					</div>
					{size.lmd && <hr className='w-full my-5' />}
					<div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
						<Image alt='Gliesess Social Media Marketing' width={imageSize} height={imageSize} className='rounded-full aspect-square object-cover' src={'/social-media-marketing.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">Social media isn't getting that much engagement</h2>
							<p className="text-gray-600">With even big brands having only 10-30 likes on their post, social media is hard to grow and it usually requires investment in paid promotion</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Organic doesn't work that well for most platforms, Paid promotion being necessary</p>
								<p>❌ Very low ROI(You have to post for months before getting a couple of clients)</p>
								<p>❌ Low intent: People on social media don't want to buy products, they just want to be entertained</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <WhatCost /> */}

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


const SocialProof = () => {
	const size = useSize(true)


	return (
		<section className="w-full container md:my-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

			{size.lmd && <hr className='w-full mb-7' />}
			<div className="text-center md:pb-8">
				<h2 className="text-3xl font-bold md:mb-2">Success Stories and Case Studies</h2>
				<p className="text-gray-600">See how the people working with us achieve their objectives:</p>
			</div>
			<div className="grid justify-items-stretch grid-cols-1 md:grid-cols-3 gap-4 mx-2">
				<div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-5 sm:p-6">
					<Link className="a text-lg font-medium text-gray-900 mb-4" href={'/seo-case-studies/10x-internal-linking'}>
						How we 10x the number of Google organic pages in 2 months for one of our clients
					</Link>
					<p>
						Read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it!
					</p>
				</div>
				<div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-5 sm:p-6">
					<Link className="a text-lg font-medium text-gray-900 mb-4" href={'/seo-case-studies/10x-internal-linking'}>
						How we got 4 hight-ticket deals(5-20k) in a month for one of our clients
					</Link>
					<p>
						Read exactly how we 4 high-ticket deals for one of our clients. Towards the end you are going to see the strategies we used to do it!
					</p>
				</div>
				<div className="bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="px-4 py-5 sm:p-6">
						<blockquote>
							<div className="text-lg font-medium text-gray-900 mb-4">
								“His expertise exceeded my expectations. He consulted and educated me on tech for my app to find the best, cheapest, and most efficient way.„
							</div>
							<div className="flex items-center">
								<div className="">
									<div className="text-sm font-medium text-gray-900">David Lehnhardt</div>
								</div>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
};

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


