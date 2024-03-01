module.exports = {
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