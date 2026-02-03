import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Montserrat, Trykker, Amiko } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Stars from './components/stars'
import ClientLayout from './components/client-layout'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Thox.me',
    template: '%s | Thox.me',
  },
  description: 'Welcome to Thox.me, the personal portfolio of Thox.',
  openGraph: {
    title: 'Thox.me',
    description: 'Welcome to Thox.me, the personal portfolio of Thox.',
    url: baseUrl,
    siteName: 'Thox.me',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const trykker = Trykker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-trykker',
  display: 'swap',
})

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-amiko',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html
        lang="en"
        className={cx(
          'text-white bg-gradient-to-tl from-black via-zinc-600/20 to-black min-h-screen',
          GeistSans.variable,
          GeistMono.variable,
          montserrat.variable,
          trykker.variable,
          amiko.variable
        )}
      >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto min-h-screen relative">
        <ClientLayout>
          <Stars quantity={100} />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 relative z-10">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}
