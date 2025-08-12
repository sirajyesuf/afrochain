import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/app/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['Courier New', 'monospace'],
});

export const metadata: Metadata = {
  title: {
    default: "AfroChain Summit 2025 - Africa's Boldest Web3 & Blockchain Event",
    template: "%s | AfroChain Summit 2025"
  },
  description: "Join Africa's boldest Web3 & Blockchain summit in Ethiopia. Two days of hackathons, keynotes, music, partnerships & bold ideas. Register now for AfroChain 2025!",
  keywords: [
    "blockchain conference",
    "Web3 summit",
    "Africa blockchain",
    "Ethiopia blockchain",
    "blockchain education",
    "Web3 Africa",
    "blockchain hackathon",
    "cryptocurrency conference",
    "DeFi summit",
    "blockchain networking"
  ],
  authors: [{ name: "AfroChain Team" }],
  creator: "AfroChain",
  publisher: "Kese Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://afrochainsummit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://afrochain.com',
    siteName: 'AfroChain Summit 2025',
    title: "AfroChain Summit 2025 - Africa's Boldest Web3 & Blockchain Event",
    description: "Join Africa's boldest Web3 & Blockchain summit in Ethiopia. Two days of hackathons, keynotes, music, partnerships & bold ideas. Register now for AfroChain 2025!",
    images: [
      {
        url: '/afrochainwithwhitebg.png',
        width: 1200,
        height: 630,
        alt: 'AfroChain Summit 2025 - Africa Web3 Blockchain Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AfroChain Summit 2025 - Africa's Boldest Web3 & Blockchain Event",
    description: "Join Africa's boldest Web3 & Blockchain summit in Ethiopia. Two days of hackathons, keynotes, music, partnerships & bold ideas. Register now for AfroChain 2025!",
    images: ['/afrochainwithwhitebg.png'],
    creator: '@afrochain',
    site: '@afrochain',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#245a9a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AfroChain Summit" />
        
        {/* Twitter conversion tracking base code */}
        <Script
          id="twitter-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','qb75c');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
