import Head from 'next/head';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { CTA, Navbar } from '../components/navbar';
import Link from 'next/link';
import StickyBox from 'react-sticky-box';
import { useSize } from '../utils/useSize';
import React from 'react';

const Home = ({ posts }: { posts: any[] }) => {

	const size = useSize(true)
	const imageSize = size.gmd ? 450 : 250

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
			<Head>
				<title>Gliesess • Website</title>
			</Head>
			<Navbar />

			<img alt='Background image' src="/wave.svg" className='blur-3xl h-[80vh] w-[100vw] top-0 absolute object-cover -z-10' />
			<Hero />
			<SocialProof />
			{/* <CTA /> */}

			<section className='flex flex-col items-center max-w-[100vw]'>
				<div className='container flex flex-col items-center alternateBg w-screen py-20 px-2'>
					<h2 className='text-2xl md:text-4xl font-semibold text-center'>Honestly now, is this the only way <br />to get customers for your buisness?</h2>
					<p className='md:mt-10 text-center'>It feels like you shoot a gun while blindfolded everytime you launch that radio/tv ad, <br /> and your social media profiles aren't getting that much engagement. What if there was a better way, <br /> and how long are you willing to wait before actually getting lots of clients?</p>

					<p className='mt-7 md:mt-16 text-center md:text-start'>You can schedule a call with us and we'll show you the better way. Trackable, scalable, efficient.</p>
					<CTA className='mt-2 md:mt-5' />
					<AlternativeCTA />
				</div>


				<div className='flex flex-col w-screen my-10 items-center'>
					<div className='flex flex-col md:flex-row items-center justify-around w-full'>
						<Image alt='Gliesess Outdated Offline Marketing Channels' width={imageSize} height={imageSize} className='rounded-full' src={'/outdated-offline-marketing-channels.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">Tv/Radio Ads are uncertain and untrackable</h2>
							<p className="text-gray-600">With Tv and Radio Ads you can't easily see which ads perform the best, and how much engegement they have. You just spend a lot of money on that ad, and hope that it brings the customers you expect. And now, you have to do it again next month</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Every month you start from 0</p>
								<p>❌ Hard to see which ads perform good and which don't</p>
								<p>❌ Hard to know if the ROI (Return on investment) is positive or negative</p>
							</div>
						</div>
					</div>
					{size.lmd && <hr className='w-full my-5' />}
					<div className='flex flex-col md:flex-row-reverse items-center justify-around w-full'>
						<Image alt='Gliesess Social Media Marketing' width={imageSize} height={imageSize} className='rounded-full' src={'/gliesess-social-media-marketing.webp'} />
						<div className="px-2 md:w-[50%] md:text-center">
							<h2 className="text-3xl text-center font-bold mb-2">Social media isn't getting that much engagement</h2>
							<p className="text-gray-600">Have you ever visited a popular brand social media profile just to find out they have 15 likes on their post? Social media is hard to grow and it usually requires investment in paid promotion</p>
							<div className='flex flex-col items-start w-fit mt-5'>
								<p>❌ Organic doesn't work that good for most platforms, Paid promotion being necessary</p>
								<p>❌ Very low ROI(You have to post for months before getting a couple of clients)</p>
								<p>❌ Low intent: People on social media don't want to buy your product, they just want to be entertained</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<WhatCost />

			<FeaturesAndObjections />
			{/* <CTA className='mb-16' /> */}

		</div>
	)
}






const Hero = () => {
	const size = useSize(true)

	return (
		<div className='flex mx-2 flex-col-reverse md:pt-10 relative md:mt-0 md:flex-row md:space-x-16 items-center container'>
			<section className="flex items-center justify-center md:h-[60vh]">
				<div className="text-center flex flex-col items-center md:items-start md:text-left z-40 mx-3 md:mx-10">
					<h1 className="text-3xl md:text-5xl font-bold md:mb-6 mt-10 md:mt-0">
						We Generate {size.gmd && <br />}
						High paying customers {size.gmd && <br />}
						for Your Furniture Shop {size.gmd && <br />}
						<strong>Without overhead.</strong>
					</h1>
					<p className="text-lg text-gray-700 mb-8 max-w-5xl">
						SEO finally exposed. Why it has become one of the highest ROI marketing channels, <span className='underline decoration-purple-600 decoration-2 underline-offset-2'>even</span> higher than ads.
						{/* S.E.O. has become one of the highest ROI activities, and an exceptional one. */}
						{/* Google has changed. From targeted demographic ads to store visit conversions. <br /> We use bleeding edge campaigns for better performance. */}
					</p>

					<p className='mb-2 md:mb-7' id='testimonials'><strong>Book a free 30 minute call (at no risk to you) to see if you're a good fit.</strong></p>
					<CTA />
					<AlternativeCTA />
				</div>
			</section>
			<div className='relative w-full max-w-[564px] md:h-[564px] h-[250px]'>
				<Image
					alt="Gliesess paid web desi"
					layout='fill'
					src={'/paid-web-design-agency.webp'}
					className='object-cover object-top rounded-lg'
				/>
			</div>
		</div>
	);
};


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
					<Link className="a text-lg font-medium text-gray-900 mb-4" href={'/blog/seo-agency-10x-google'}>
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
								“His expertise exceeded my expectations. He consulted and educated me on tech for my app to find the best, cheapest and most efficient way.„
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

	return <section>
		<div className="">
			{React.createElement(size.gmd ? StickyBox : 'div', {
				className: 'pt-24', children: [
					<div className="w-screen flex flex-row justify-end">
						<div className="w-full h-[70vw] md:w-[50vw] md:h-screen relative">
							<Image alt="Web Design and SEO Proceess" className="object-cover object-top md:rounded-tr-xl" src={'/web-design-and-seo-process.webp'} layout="fill" />
						</div>

					</div>
				]
			})}
			<div className="md:w-[50vw] md:-mt-[100vh] px-2 md:px-20">

				<h2 className="text-4xl font-bold mt-5">How do we solve this?</h2>

				<p className='my-2 text-lg'>We take one of the most efficient marketing channel, SEO, and we put it on steroids. By applying a proven process and doing all the good practices in order to generate customers in a shorter time frame, we leave no room for errors. Then, those results only need to be maintained, starting each month on a good foot.</p>

				<hr className="mt-8" />

				<h3 className="text-2xl font-medium mt-8 mb-4">1. Website Design</h3>

				<p className='my-2 text-lg'>We create the visually stunning website if you don't have one, tailored to reflect your brand identity with intuitive navigation and user interfaces. We make it mobile friendly and fast, which is required for good SEO.</p>
				<hr className="mt-8" />

				<h3 className="text-2xl font-medium mt-8 mb-4">2. User Experience (UX) Enhancement</h3>

				<p className='my-2 text-lg'>This involves meticulously crafting each webpage to not only captivate users but also to optimize visibility on search engines. <br /><br /> By strategically designing and refining the layout, content, and interactive elements of every page, we aim to create an immersive and user-friendly journey for visitors.</p>
				<hr className="mt-8" />

				<h3 className="text-2xl font-medium mt-8 mb-4">3. SEO Audit, Research and Monitoring</h3>

				<p className='my-2 text-lg'>✅ We take care of conducting an SEO audit for your website.</p>
				<p className='my-2 text-lg'>✅ Then we conduct thorough research on the market in which you operate. <br />This helps us understand your competitors and get a grasp of your buyers.</p>
				<p className='my-2 text-lg'>✅ Also we closely monitor the correct implementation of delivered assets.</p>
				<p className='my-2 text-lg'>✅ Finally we track results and provide regular reports, <br />staying updated with market changes and adapting swiftly through the reoptimization of the SEO strategy.</p>

				<hr className="mt-8" />

				<h3 className="text-2xl font-medium mt-8 mb-4">4. SEO Optimization - Staying on top of Google Updates</h3>

				<p className='my-2 text-lg'>We stay updated with market changes and adapt swiftly through the reoptimization of the SEO strategy.</p>

				<div className='flex flex-col items-center mt-5'>
					<CTA />
					<AlternativeCTA />
				</div>


			</div>
		</div>
	</section>

	return (
		<section className="my-20 alternateBg w-full">
			<div className="container max-w-6xl mx-auto text-center">
				<h2 id='features' className="text-3xl mx-2 md:text-4xl font-bold mb-6">Honestly now, is tv or radio the only way to gain customers?</h2>
				<div className='mb-16 mx-2'>
					{[
						<p>You can't track tv or radio ads. Google ads has&nbsp;<a target='_blank' className='a' href='https://support.google.com/google-ads/answer/6100636?hl=en'> Store location tracking</a></p>,
						'They are unreliable (different traffic based on time of the year)',
						'You have to do all the work yourself or agencies are very expensive',
						'Tv/radio ads have a much smaller return on investment than Google ads'
					].map((i, index) => <li key={index} className="flex items-center mb-2">
						<svg
							className="w-4 h-4 mr-2 text-purple-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18.707,4.293c0.391,0.391,0.391,1.023,0,1.414L8.707,16H6c-1.103,0-2-0.897-2-2V8l9.293-9.293C15.488-1.098,16.512-1.098,17.707,0.098S19.098,3.488,18.707,4.293z"
								clipRule="evenodd"
							/>
						</svg>
						{i}
					</li>)}

				</div>
				{/* <div className="flex flex-wrap justify-center items-start">
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="mb-4">
							<img src="/feature1.svg" alt="Feature 1" className="h-16" />
						</div>
						<h3 className="text-xl font-bold mb-2">High-Quality Leads</h3>
						<p className="text-lg text-gray-700 mb-4">
							We specialize in generating high-quality leads for small to medium furniture dealers, helping you grow your business quickly and easily.
						</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="mb-4">
							<img src="/feature2.svg" alt="Feature 2" className="h-16" />
						</div>
						<h3 className="text-xl font-bold mb-2">Cost-Effective Solution</h3>
						<p className="text-lg text-gray-700 mb-4">
							Our lead generation services are a cost-effective solution for small to medium furniture dealers, providing you with the results you need without breaking the bank.
						</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
						<div className="mb-4">
							<img src="/feature3.svg" alt="Feature 3" className="h-16" />
						</div>
						<h3 className="text-xl font-bold mb-2">Transparent Reporting</h3>
						<p className="text-lg text-gray-700 mb-4">
							We provide transparent reporting and analytics, so you can see exactly how our services are benefitting your business and make data-driven decisions.
						</p>
					</div>
				</div> */}
				{/* <p className="text-lg text-gray-700 mb-8">
					We understand that you might have some concerns about working with a lead generation agency, but we assure you that our services are reliable, effective, and tailored to your specific needs. Don't hesitate to contact us to discuss how we can help your business grow.
				</p> */}
				<CTA />
			</div>
		</section>
	);
};


function WhatCost() {
	return <div className='flex flex-col md:flex-row md:space-x-16 items-center md:my-20 mx-2 alternateBg w-screen md:px-36'>
		<Image alt='Gliesess inneficient marketing channels' src={'/gliesess-inneficient-marketing-channels.webp'} className='rounded-lg' width={450} height={450}></Image>
		<section className="flex flex-row w-full items-center justify-center md:h-[60vh]">
			<div className="text-center md:text-right z-40">
				<h2 className="text-2xl font-semibold mb-6">
					Most furniture stores lose 18k per month with inneficient marketing channels
				</h2>
				<p className="text-lg text-gray-700 mb-8 max-w-5xl">
					If your average customer buys furniture worth $2k, <br /> and it costs $2k to work with us and get 10 clients per month, <br /> you are leaving $18k/month on the table
				</p>

			</div>
		</section>
	</div>
}


function AlternativeCTA() {
	return <p className='text-gray-400 mt-2'> Or take a look at our <Link href={'/services'} className='a'>services</Link> and <Link href={'/blog/seo-agency-10x-google'} className='a'>case studies</Link></p>
}


export default Home


// export const getStaticProps: GetStaticProps = async (context) => {

// 	const posts = fs.readdirSync(path.join('pages', 'blog')).map(file => {
// 		const slug = file.replace('.mdx', '')

// 		const mdWithMeta = fs.readFileSync(path.join('pages', 'blog', file), 'utf8')

// 		const { data } = matter(mdWithMeta)

// 		return {
// 			slug,
// 			data
// 		}
// 	})

// 	return {
// 		props: { posts }
// 	}
// }
