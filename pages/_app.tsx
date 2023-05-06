import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <MDXProvider components={{

  }}>
      <div>
          <Component {...pageProps} />
      </div>
  </MDXProvider>
}

export default MyApp
