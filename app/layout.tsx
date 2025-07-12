import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Settlrr",
  description: "Your trusted partner for student relocation in France",
  openGraph: {
    title: "Settlrr",
    description: "Your trusted partner for student relocation in France",
    url: "https://settlrr-website.vercel.app",
    siteName: "Settlrr",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settlrr",
    description: "Relocating to France made easy for students.",
    images: ["/logo.png"],
  },
  metadataBase: new URL("https://settlrr-website.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
