import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<link href="https://app.meetfox.com/assets/styles/popup.css" rel="stylesheet" />
			<script src="https://app.meetfox.com/assets/libs/popup.min.js" type="text/javascript"></script>
		</Head>
		<MDXProvider components={{

		}}>
			<div>
				<Component {...pageProps} />
			</div>
		</MDXProvider>
	</>
}

export default MyApp
