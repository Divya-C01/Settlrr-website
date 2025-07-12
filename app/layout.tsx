import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Settlrr",
  description: "Your trusted partner for student relocation in France",
  openGraph: {
    title: "Settlrr",
    description: "Your trusted partner for student relocation in France",
    url: "https://settlrr-website.vercel.app",
    siteName: "Settlrr",
    type: "website",
    images: [
      {
        url: "/logo.png", // add a logo or banner image in /public
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
