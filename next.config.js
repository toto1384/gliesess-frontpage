import remarkFrontmatter from 'remark-frontmatter';

export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
          },
        },
      ],
    });

    return config;
  },
  images: {
		domains: [
			'localhost',
			"alex-totolici.com",
		]
	},
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // images: {
  //   loader: 'imgix',
  //   path: 'https://images.unsplash.com/',
  // },
};