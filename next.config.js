const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const nextSafe = require('next-safe');

const nextSafeHeaders = nextSafe({ 
	isDev:process.env.NODE_ENV !== 'production',
	frameOptions: "SAMEORIGIN",
	permissionsPolicy: {
		camera: '*',
		microphone: '*',
		geolocation: '*'
	},
	referrerPolicy: "no-referrer-when-downgrade",
  contentSecurityPolicy:false,
 }).filter(i=>i.key!=='Feature-Policy' && i.key !=='Permissions-Policy')

 const fullHeaders = [
	...nextSafeHeaders,
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()'
	  },
	  {
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload'
	},
 ]

module.exports = {
  headers(){
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: fullHeaders
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/retail-strategies/:path',
        destination: '/marketing-strategies/:path',
        permanent: true,
      },
	  {
        source: '/retail-strategy/:path',
        destination: '/marketing-strategy/:path',
        permanent: true,
      },
    ]
  },
async rewrites() {
	return [
		{
			source: '/sitemap.xml',
			destination: '/api/sitemap',
		},
		{
			source: '/rss.xml',
			destination: '/api/rss',
		},
	]
},
  images: {
		remotePatterns: [
      {
        protocol:'http',
        hostname:'localhost'
      },
      {
        protocol:'https',
        hostname:'gliesess.com'
      },
      {
        protocol:'https',
        hostname:'www.gliesess.com'
      },
      {
        protocol:'https',
        hostname:'netlify.app'
      },
	  {
		protocol:'https',
		hostname:'logo.clearbit.com'
	  },
	  {
		protocol:'http',
		hostname:'www.2findlocal.com'
	  },
	  {
		protocol:'https',
		hostname:'www.2findlocal.com'
	  }
		]
	},
  reactStrictMode: true,
  swc:false,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // images: {
  //   loader: 'imgix',
  //   path: 'https://images.unsplash.com/',
  // },
};

