import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { DefaultSeo } from 'next-seo'
// import { SpeedInsights } from "@vercel/speed-insights/next"
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { domain } from '../utils/mainUtils'
import "../styles/nprogress.css"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const Nprogress = require('nprogress')


function useProgress() {
	const router = useRouter()
	useEffect(() => {
		Nprogress.configure({ showSpinner: false, });
		router.events.on("routeChangeStart", (url) => {
			Nprogress.start()
		});

		router.events.on("routeChangeComplete", (url) => {
			Nprogress.done(false)
		});

		router.events.on("routeChangeError", (url) => {
			Nprogress.done()
		});

	}, [router])
}

if (typeof window !== 'undefined') { // checks that we are client-side
	posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
		api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
		loaded: (posthog) => {
			if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
		},
	})
}

if (process.env.NODE_ENV === "development") {
	import("@locator/runtime").then(i => i.default({}))
}

function MyApp({ Component, pageProps }: AppProps) {
	const defaultTitle = 'Gliesess - SEO and Web Development Agency'
	const defaultDescription: string = 'With a foundation built on 7 years of experience, we bring the technological expertise to the table. From the latest web development frameworks to SEO best practices, we stay at the forefront of technology trends. Our commitment to continuous learning ensures that your digital solutions are not only current but future-proof.'
	useProgress()

	return <>
		<PostHogProvider client={posthog}>
			<Head>
				<title>{defaultTitle}</title>
				<meta name="description" content={defaultDescription}></meta>
			</Head>
			<DefaultSeo
				openGraph={{
					title: defaultTitle,
					description: defaultDescription,
					type: 'website',//can be article or video
					locale: 'en',
					siteName: 'Gliesess',
					images: [
						{
							url: `${domain}/logo-square.png `,
							width: 512,
							height: 512,
							alt: 'Gliesess logo',
							type: 'image/png',
						},
					]
				}}
				twitter={{
					site: '@gliesess_ads',
					cardType: 'summary_large_image',
				}}

			/>
			{/* <SpeedInsights /> */}
			<Component {...pageProps} />
			<Footer />
		</PostHogProvider>
	</>
}

export default MyApp
