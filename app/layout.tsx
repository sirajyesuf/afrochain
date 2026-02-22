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
    default: "AfroChain Summit 2026 - Blockchain, AI & Finance in Africa",
    template: "%s | AfroChain Summit 2026"
  },
  description:
    "Join AfroChain Summit 2026 in Ethiopia for actionable conversations and partnerships across Blockchain, AI, and Finance. Connect with builders, institutions, policymakers, and investors shaping Africa's digital economy.",
  keywords: [
    "afrochain summit 2026",
    "blockchain summit africa",
    "ai summit africa",
    "fintech summit africa",
    "ethiopia blockchain conference",
    "web3 africa",
    "digital finance africa",
    "cross-border payments africa",
    "stablecoins africa",
    "africa innovation summit"
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
    url: 'https://afrochainsummit.com',
    siteName: 'AfroChain Summit 2026',
    title: "AfroChain Summit 2026 - Blockchain, AI & Finance in Africa",
    description:
      "Join AfroChain Summit 2026 in Ethiopia for actionable conversations and partnerships across Blockchain, AI, and Finance.",
    images: [
      {
        url: '/afrochainwithwhitebg.png',
        width: 1200,
        height: 630,
        alt: 'AfroChain Summit 2026 - Blockchain, AI and Finance in Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AfroChain Summit 2026 - Blockchain, AI & Finance in Africa",
    description:
      "Join AfroChain Summit 2026 in Ethiopia for actionable conversations and partnerships across Blockchain, AI, and Finance.",
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

        {/* Twitter Event Tracking Script */}
        <Script
          id="twitter-event-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Insert Twitter Event ID
              twq('event', 'tw-qb75c-qb75e', {
                value: null, // use this to pass the value of the conversion (e.g. 5.00)
                contents: [ // use this to pass an array of products or content
                    // add all items to the array
                    // use this for the first item
                    {
                      content_type: null,
                      content_id: null,
                      content_name: null,
                      content_price: null,
                      num_items: null,
                      content_group_id: null
                    },
                    // use this for the second item
                    {
                      content_type: null,
                      content_id: null,
                      content_name: null,
                      content_price: null,
                      num_items: null,
                      content_group_id: null
                    }], 
                status: null, // use this to pass the status of a sign up or subscription, (e.g. 'started' or 'completed')
                conversion_id: null, // use this to pass a unique ID for the conversion event for deduplication (e.g. order id '1a2b3c')
                email_address: null // use this to pass a user's email address
              });
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
