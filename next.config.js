const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const nextSafe = require('next-safe')

const nextSafeHeaders = nextSafe({ 
	isDev:process.env.NODE_ENV !== 'production',
	frameOptions: "SAMEORIGIN",
	permissionsPolicy: {
		camera: '*',
		microphone: '*',
		geolocation: '*'
	},
	referrerPolicy: "no-referrer-when-downgrade",
	contentSecurityPolicy: {
		"base-uri": "'none'",
		"child-src": "'none'",
		"connect-src": ["*", "'unsafe-inline'", "'unsafe-eval'","*.gliesess.com",],
		"default-src": "'self'",
		"font-src": ["'self'", "*.sendinblue.com", "*.tawk.to", "fonts.gstatic.com"],
		"form-action": ["*", "'unsafe-inline'", "'unsafe-eval'"],
		"frame-ancestors": "self",
		"frame-src": ["*", "'unsafe-inline'", "'unsafe-eval'"],
		"img-src": ["'self'", "data:", "*.tawk.to", "cdn.jsdelivr.net", "tawk.link", "s3.amazonaws.com","*.clearbit.com"],
		"manifest-src": "'self'",
		"media-src": "'self'",
		"object-src": "'none'",
		"prefetch-src": false,
		"script-src": ["*", "'unsafe-inline'", "'unsafe-eval'"],
		"style-src": ["'self'", "'unsafe-inline'", "*.google.com","*.meetfox.com","*.tawk.to"],
		"worker-src": ["'self'","blob:"],
	},
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
async rewrites() {
	return [
		{
			source: '/sitemap.xml',
			destination: '/api/sitemap',
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
	  }
		]
	},
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // images: {
  //   loader: 'imgix',
  //   path: 'https://images.unsplash.com/',
  // },
};

