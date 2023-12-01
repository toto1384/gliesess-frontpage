import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa/index'
import Image from 'next/image'
import Link from 'next/link'
import StickyBox from 'react-sticky-box'
// import StickyBox from "react-sticky-box";

const Home = ({ posts }: { posts: any[] }) => {


	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
			<Head>
				<title>Gliesess • Website</title>
			</Head>


			<Navbar />
			<Hero />
			<SocialProof />
			{/* <CTA /> */}
			<FeaturesAndObjections />
			<WhatCost />
			<Footer />

		</div>
	)
}



export const Navbar = ({ alwaysWhite }: { alwaysWhite?: boolean }) => {

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Check if the page has been scrolled
			const scrolled = window.scrollY > 0;
			setIsScrolled(scrolled);
		};

		// Add event listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup - remove event listener
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	return (
		<StickyBox className={`z-50  ${(isScrolled || alwaysWhite) && 'bg-white'}`} >
			<nav className="flex justify-between w-screen items-center p-4 z-10">
				<Link href="/">
					<a>
						<Image
							src="/logo.png"
							alt="Gliesses"
							width={200}
							height={100}
						/>
					</a>
				</Link>
				<ul className="flex items-center">
					<li className="mx-3">
						<Link href="/blog" className="text-gray-600 hover:text-gray-900">
							Blog
						</Link>
					</li>
					<li className="mx-3">
						<Link className="text-gray-600 hover:text-gray-900" href="#testimonials"> Testimonials </Link>
					</li>
					<li className="mx-3">
						<CTA />
					</li>
				</ul>
			</nav>
		</StickyBox>
	);
};



const Hero = () => {
	return (
		<div className='flex flex-row space-x-16 items-center'>
			<section className="flex items-center justify-center h-[60vh]">
				<Image src="/wave.svg" layout='fill' className='blur-3xl h-[80vh] absolute object-cover' />
				<div className="z-40">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						We Generate <br />
						High paying customers<br />
						for Your Furniture Shop <br />
						<strong>Without overhead.</strong>
					</h1>
					<p className="text-lg text-gray-700 mb-8 max-w-5xl">
						Google has changed. From targeted demographic ads to store visit conversions. <br /> We use bleeding edge campaigns for better performance.
					</p>

					<p className='mb-7' id='testimonials'><strong>Book a free 30 minute call (at no risk to you) to see if you're a good fit.</strong></p>
					<CTA />
				</div>
			</section>
			<div>
				<Image src={'/main-pic.png'} className='rounded-lg h-fit min-h-fit' width={564} height={322}></Image>
			</div>
		</div>
	);
};


const SocialProof = () => {
	return (
		<section className="w-full mt-10 mb-10">
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="w-full mx-auto text-center pb-8">
					<h2 className="text-3xl font-bold mb-2">What others have to say</h2>
					<p className="text-gray-600">See how the people working with us achieve their objectives:</p>
				</div>
				<div className="max-w-xl mx-auto mt-12">
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
			</div>
		</section>
	);
};

const CTA = () => {
	return (
		<>
			<button onClick={() => {
				// @ts-ignore: Unreachable code error
				MeetFox.initStaticButton({ url: 'https://meetfox.com/en/e/gliesess/borderless' }); return false;
			}} className='bg-primary rounded-full text-white px-6 py-3'>Book a call</button>
		</>
	);
};

const FeaturesAndObjections = () => {
	return (
		<section className="my-20 alternateBg w-full">
			<div className="container max-w-6xl mx-auto text-center">
				<h2 id='features' className="text-3xl md:text-4xl font-bold mb-6">Honestly now, is tv or radio the only way to gain customers?</h2>
				<div className='mb-16'>
					{[
						<>You can't track tv or radio ads. Google ads has&nbsp;<a target='_blank' className='a' href='https://support.google.com/google-ads/answer/6100636?hl=en'> Store location tracking</a></>,
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
	return <div className='flex flex-row space-x-16 items-center my-20'>
		<div>
			<Image src={'/money.png'} className='rounded-lg h-fit min-h-fit' width={564} height={322}></Image>
		</div>
		<section className="flex items-center justify-center h-[60vh]">
			<div className="text-right z-40">
				<h2 className="text-2xl font-semibold mb-6">
					It is costing you 16k per month not running ads
				</h2>
				<p className="text-lg text-gray-700 mb-8 max-w-5xl">
					If your average customer buys furniture worth $2k, <br /> and it costs $4k to run ads that get you 10 clients per month, <br /> you are leaving $16k/month on the table
				</p>

			</div>
		</section>
	</div>
}

function Footer() {
	return (
		<footer className="bg-gray-50/80 w-full text-gray-600 py-8">
			<div className="container mx-auto flex flex-wrap justify-between">
				<div className="w-full md:w-1/3 text-center md:text-left">
					<h3 className="font-bold text-xl mb-4">Gliesses</h3>
					<p className="mb-4">A Google Ads lead generation agency for small to medium furniture retailers.</p>
					<p>&copy; 2023 Gliesses</p>
				</div>
				<div className="w-full md:w-1/3 text-center">
					<h3 className="font-bold text-xl mb-4">Contact Us</h3>
					<p className="mb-4">Phone: <a href="tel:+15642122412" className="a hover:text-secondary">+1 (864) 715 9376</a></p>
					<p className="mb-4">Email: <a href="mailto:info@gliesses.com" className="a hover:text-secondary">contact@gliesses.com</a></p>
				</div>
				<div className="w-full md:w-1/3 text-center md:text-right">
					<h3 className="font-bold text-xl mb-4">Connect</h3>
					<div className="flex justify-center md:justify-end mb-4">
						<a href="https://twitter.com/gliesess_ads" className="hover:text-secondary mx-4">
							<FaTwitter className='w-7 h-7' />
						</a>

					</div>
				</div>
			</div>
		</footer>
	);
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
