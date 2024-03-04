import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { NextSeo } from 'next-seo'
import { SpeedInsights } from "@vercel/speed-insights/next"
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'

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
	return <>
		<PostHogProvider client={posthog}>
			<NextSeo
				title='Gliesess - SEO and Web Development Agency'
				description='With a foundation built on 7 years of experience, we bring the technological expertise to the table. From the latest web development frameworks to SEO best practices, we stay at the forefront of technology trends. Our commitment to continuous learning ensures that your digital solutions are not only current but future-proof.'
			></NextSeo>
			<SpeedInsights />
			<Head>
				<link href="https://app.meetfox.com/assets/styles/popup.css" rel="stylesheet" />
				<script src="https://app.meetfox.com/assets/libs/popup.min.js" type="text/javascript"></script>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</PostHogProvider>
	</>
}

export default MyApp
