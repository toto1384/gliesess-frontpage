import Head from 'next/head';
import Image from 'next/image';
import { AlternativeCTA, BasicNextSeo, CTA, Navbar, OrganizationStructuredData, TawkWidget } from '../components/navbar';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import { useSize } from '../utils/useSize';
import React from 'react';
import { NextSeo } from 'next-seo';
import { domain, homePageTitle, twitterHandle } from '../utils/mainUtils';
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
						... or we’ll send you your money back. We build exceptionally efficient customer acquisition systems using SEO. Even if everybody thinks it’s dead, we use it as a secret to fill our client's stores.
					</p>
					<p className='mb-2 md:mb-7' id='testimonials'><strong>Book a 30-minute call (no risk/cost to you) and we'll show you our strategy.</strong></p>
				</>}
				h1={<>
					<strong>Effortlessly</strong> drive {size.gmd && <br />}
					<strong>Consistent</strong> customer {size.gmd && <br />}
					traffic to your furniture shop. {size.gmd && <br />}
				</>}
				cta={<> <CTA /> <AlternativeCTA /> </>} imageAlt="Gliesess paid web design agency" imagePath='/paid-web-design-agency.webp'
			/>
			<SocialProof />
			{/* <CTA /> */}

			<section className='flex flex-col items-center max-w-[100vw]'>
				<div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
					<h2 className='text-2xl md:text-4xl font-semibold text-center'>Honestly now, is this the only way <br />to get customers for your business?</h2>
					<p className='md:mt-10 text-center'>It feels like you shoot a gun while blindfolded every time you launch that radio/TV ad, <br /> and your social media profiles aren't getting that much engagement. What if there was a better way, <br /> and how long are you willing to wait before actually getting lots of clients?</p>

					<p className='mt-7 md:mt-16 text-center md:text-start'>You can schedule a call with us and we'll show you the better way. Trackable, scalable, efficient.</p>
					<CTA className='mt-2 md:mt-5' />
					<AlternativeCTA />
				</div>


				<div className='flex flex-col w-screen my-10 items-center'>
					<div className='flex flex-col md:flex-row items-center justify-around w-full'>
						<Image alt='Gliesess Outdated Offline Marketing Channels' width={imageSize} height={imageSize} className='rounded-full' src={'/outdated-offline-marketing-channels.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">TV/Radio Ads are uncertain and untrackable</h2>
							<p className="text-gray-600">With TV and Radio Ads you can't easily see which ads perform the best, and how much engagement they have. You just spend a lot of money on that ad and hope that it brings the customers you expect. And now, you have to do it again next month</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Every month you start from 0</p>
								<p>❌ Hard to see which ads perform well and which don't</p>
								<p>❌ Hard to know if the ROI (Return on investment) is positive or negative</p>
							</div>
						</div>
					</div>
					{size.lmd && <hr className='w-full my-5' />}
					<div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
						<Image alt='Gliesess Social Media Marketing' width={imageSize} height={imageSize} className='rounded-full' src={'/gliesess-social-media-marketing.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">Social media isn't getting that much engagement</h2>
							<p className="text-gray-600">Have you ever visited a popular brand's social media profile just to find out they have 15 likes on their post? Social media is hard to grow and it usually requires investment in paid promotion</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Organic doesn't work that well for most platforms, Paid promotion being necessary</p>
								<p>❌ Very low ROI(You have to post for months before getting a couple of clients)</p>
								<p>❌ Low intent: People on social media don't want to buy your product, they just want to be entertained</p>
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

		</div>
	)
}


const SocialProof = () => {
	const size = useSize(true)


	return (
		<section className="w-full container md:my-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">

			{size.lmd && <hr className='w-full mb-7' />}
			<div className="text-center md:pb-8">
				<h2 className="text-3xl font-bold md:mb-2">Success Stories from our clients</h2>
				<p className="text-gray-600">See how the people working with us achieve their objectives:</p>
			</div>
			<div className="grid justify-items-stretch grid-cols-1 md:grid-cols-2 gap-4 mx-2">
				<div className="bg-white shadow-lg rounded-lg overflow-hidden px-4 py-5 sm:p-6">
					<Link className="a text-lg font-medium text-gray-900 mb-4" href={'/seo-case-studies/10x-internal-linking'}>
						How we 10x the number of Google organic pages in 2 months for one of our clients
					</Link>
					<p>
						Read exactly how we 10x the organic pages indexed on Google for one of our clients. Towards the end you are going to see the strategies we used to do it!
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
							<Image alt="Web Design and SEO Process" className="object-cover object-top md:rounded-tr-xl" src={'/web-design-and-seo-process.webp'} layout="fill" />
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


