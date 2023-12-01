import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa/index'
import Image from 'next/image'
import profilePic from '../public/me.jpeg'

const Home = ({ posts }: { posts: any[] }) => {


	const [showNav, setShowNav] = useState(false)



	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-svg py-2">
			<Head>
				<title>Alexandru Totolici • Website</title>
				<link rel="icon" href="/favicon.ico" />
				{/* {posts.map(i => (<div>
					{i.slug}
					<Link href={'/blog/' + i.slug}>Read</Link>
				</div>))} */}
			</Head>


			<header className='h-[60vh] mt-7 flex items-center justify-center'>
				<img src="/wave.svg" layout='fill' className='blur-3xl h-[40vh] absolute object-cover' />
				<div className='flex flex-col items-center z-10 m-auto'>
					{/* <img src={'/me.jpeg'} className="aspect-square rounded-full object-cover" width={200} height={200} /> */}
					<p className='text-4xl pt-5 text-center font-semibold text-gradient'>Building season</p>
					<p className='text-center pt-1.5 mb-8 text-xl max-w-xl '>
						Incepand din 25 februarie si cu o data ne-determinata de final o sa prioritizez progresul profesional peste orice chestie sociala.
					</p>
					<p className='mx-3'>
						Pagina facuta ca sa ii fac pe cei apropiati sa inteleaga comportamentul diferit.
					</p>
					<p className='mx-3'>
						Scopul este de a condensa timpul cat mai mult si a face cat mai multe chesti intr-o perioada scurta
					</p>
				</div>
			</header>

			<div className='flex flex-col lg:flex-row items-center justify-between'>

				<div className='max-w-md m-5 mb-20'>
					{/* <p className='rounded-full px-3 py-1 bg-gradient w-fit'></p> */}
					<p className='font-semibold text-xl my-3'>La ce sa te astepti</p>
					<ul className='list-disc'>
						<li>
							O sa raspund mai greu la mesaje (nu ca nu o faceam deja)
						</li>
						<li>
							Timpul pe social media o sa fie basically inexistent (nu ca nu era deja asa, probabil o sa devina mai rar de o data la 2 saptamani)
						</li>
						<li>
							Nu o sa particip la evenimente, iesiri, etc. (decat pentru ocazii speciale si urgente)
						</li>
						<li>
							Multe alte protocoale personale care nu isi au relevanta aici
						</li>
					</ul>
				</div>

				<h3 className='text-2xl m-5 font-bold mb-20'>
					Regret causes much greater suffering than discomfort
				</h3>
			</div>



			{/* nav */}
			<nav id="header" className="absolute w-full z-30 top-0 text-white">
				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0">
					<div className="pl-4 flex items-center">
						<a className="toggleColour text-white hover:text-gray-100 transition-all no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
							Alexandru Totolici
						</a>
					</div>
					<div className="block lg:hidden pr-4">
						<button id="nav-toggle" onClick={() => setShowNav(!showNav)} className="flex items-center p-6 text-white hover:text-gray-200 transform transition hover:scale-110 duration-300 ease-in-out">
							<svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div className={`w-full bg-white rounded mx-5 flex-row lg:flex lg:shadow-none lg:bg-transparent lg:rounded-none lg:items-center lg:w-auto ${showNav ? '' : `hidden`} lg:bg-transparent text-black z-20 pb-10 lg:pb-0 px-3`} id="nav-content">
						<ul className="list-reset lg:space-y-0 lg:flex justify-end flex-1 items-center">
							<li className="mr-3">
								<a className="my-4 w-fit py-4 cursor-pointer frostedH transition-all rounded-full space-x-2 px-8 text-gray-900 lg:text-white font-bold flex flex-row items-center" target={'_blank'} href="https://github.com/toto1384"><FaGithub className='mx-1' /> Github</a>
							</li>

						</ul>
						<a
							className="mx-auto lg:mx-0 frosted text-gray-900 lg:text-white font-bold rounded-full lg:mt-0 py-4 px-8 transition hover:scale-105 duration-300 ease-in-out"
							href='mailto:totoalex62@gmail.com' target={'_blank'}
						>
							Email me
						</a>
					</div>
				</div>
				<hr className="border-b border-gray-200 opacity-25 my-0 py-0" />
			</nav>

		</div>
	)
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
