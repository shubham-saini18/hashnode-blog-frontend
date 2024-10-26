import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Preconnect to external origins for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

				{/* Importing Google Fonts */}
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>

				{/* Favicon */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className="bg-white text-gray-900 antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
