import { Partytown } from '@builder.io/partytown/react';
import { Head, Html, Main, NextScript } from 'next/document'
import { createContext } from 'react';
import { v4 } from 'uuid';


export const NonceContext = createContext<string>('')

const Document = () => {
    const nonce = `${v4()}${v4()}`
    const csp = `
    base-uri 'none';
    child-src 'none';
		connect-src 'self' *.gliesess.com *.google.com https://*.googleapis.com *.google-analytics.com *.googletagmanager.com *.posthog.com *.convertkit.com *.emailjs.com *.tawk.to wss://*.tawk.to;
		default-src 'self';
		font-src 'self' *.sendinblue.com *.tawk.to fonts.gstatic.com;
		form-action 'self' *.convertkit.com *.tawk.to;
		frame-src 'self' *.google.com *.google-analytics.com *.meetfox.com meetfox.com 'nonce-${nonce}' *.tawk.to;
		img-src 'self' data: *.tawk.to cdn.jsdelivr.net tawk.link s3.amazonaws.com;
		manifest-src 'self';
		media-src 'self';
		object-src 'none';
		script-src ${process.env.NODE_ENV !== 'production' ? "'unsafe-eval'" : ''} 'self' unpkg.com *.gliesess.com *.googletagmanager.com *.google-analytics.com *.google.com *.gstatic.com cdn.jsdelivr.net 'nonce-${nonce}' *.vercel-scripts.com *.convertkit.com *.tawk.to 'sha256-xMNk+iEs3UvYrk5oHnOqjx93iwXmn3fD+VhqxqoTocE=';
		style-src 'self' *.google.com *.meetfox.com *.tawk.to 'unsafe-inline';
		worker-src 'self' blob:;
  `



    return (
        <Html lang='en'>

            <Head nonce={nonce}>
                <link rel="publisher" href="https://www.facebook.com/people/Gliesess/61556601061619/" />
                <link rel="publisher" href="https://www.pinterest.com/gliesess/" />
                <link rel="publisher" href="https://twitter.com/gliesess_ads" />
                <link rel="publisher" href="https://www.instagram.com/gliesesss" />
                <link rel="publisher" href="https://www.youtube.com/@GliesessSEO" />
                <link rel="publisher" href="https://www.linkedin.com/company/gliesess" />
                <link rel="publisher" href="https://www.tiktok.com/@gliesesss" />


                <link href="https://app.meetfox.com/assets/styles/popup.css" rel="stylesheet" />
                <script src="https://app.meetfox.com/assets/libs/popup.min.js" type="text/javascript"></script>
                <script nonce={nonce} async type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=G-LR9E5G7ECB`}></script>
                <script nonce={nonce} id="dsdfkmsdkfda" type="text/partytown" dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-LR9E5G7ECB');`
                }} />
                <Partytown debug={true} forward={['dataLayer.push']} />
                <meta name="ahrefs-site-verification" content="135c8340144ee810291c75491e754ed828953e94926fcbb7458402002587ccde"></meta>
                <meta name="google-site-verification" content="myhQb6nY6OK5JToiVbbPRGW11WIWwgym6CdLZUEFpaI" />
                <meta httpEquiv="Content-Security-Policy" content={csp} />
            </Head>

            <body>
                <NonceContext.Provider value={nonce}>
                    <Main />
                    <NextScript nonce={nonce} />
                </NonceContext.Provider>
            </body>
        </Html>
    )
}

export default Document

