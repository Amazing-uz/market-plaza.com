import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
	title: 'Market Plaza - Your Shopping Destination',
	description: 'Discover quality products across all categories',
	generator: 'v0.app',
	referrer: 'unsafe-url',
	icons: {
		icon: [
			{
				url: '/plaza.png',
			}
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
