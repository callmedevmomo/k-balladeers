import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<meta
				name="viewport"
				content="width=device-width, user-scalable=no"
				key="next-layout-meta"
			/>
			{/* google, naver SEO */}
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
