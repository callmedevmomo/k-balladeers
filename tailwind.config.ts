import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,css}",
		"./constant/**/*.{js,ts,jsx,tsx,css}",
		"./types/**/*.{js,ts,jsx,tsx,css}",
		"./components/**/*.{js,ts,jsx,tsx,css}",
		"./hooks/**/*.{js,ts,jsx,tsx,css}",
		"./mocks/**/*.{js,ts,jsx,tsx,css}",
		"./stories/**/*.{js,ts,jsx,tsx,css}",
		"./styles/**/*.{js,ts,jsx,tsx,css}",
		"./utils/**/*.{js,ts,jsx,tsx,css}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
