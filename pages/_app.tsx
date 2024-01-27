import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { NextSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<NextSeo
			title='Gliesess - SEO and Web Development Agency'
			description='With a foundation built on 7 years of experience, we bring the technological expertise to the table. From the latest web development frameworks to SEO best practices, we stay at the forefront of technology trends. Our commitment to continuous learning ensures that your digital solutions are not only current but future-proof.'
		></NextSeo>
		<Head>
			<link href="https://app.meetfox.com/assets/styles/popup.css" rel="stylesheet" />
			<script src="https://app.meetfox.com/assets/libs/popup.min.js" type="text/javascript"></script>
		</Head>
		<Component {...pageProps} />
		<Footer />
	</>
}

export default MyApp
