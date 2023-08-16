/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.wav$/,
			use: 'file-loader',
		});

		return config;
	},
};

module.exports = nextConfig;
