import { Metadata } from 'next'
import './globals.css'
import { Providers } from './provider'

export const metadata: Metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="light">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
