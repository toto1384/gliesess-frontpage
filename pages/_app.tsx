import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<link href="https://app.meetfox.com/assets/styles/popup.css" rel="stylesheet" />
			<script src="https://app.meetfox.com/assets/libs/popup.min.js" type="text/javascript"></script>
		</Head>
		<Component {...pageProps} />
	</>
}

export default MyApp
