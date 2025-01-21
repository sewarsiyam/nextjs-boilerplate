import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  metadataBase: new URL('https://www.sadeim.com'),
  title: {
    default: "sadeim - Business Development Alliance",
    template: '%s | sadeim'
  },
  description: "sadeim is a leading technology company specializing in software development, AI solutions, social media management, and digital transformation. We deliver innovative tech solutions for businesses worldwide. صديم - شركة رائدة في تطوير البرمجيات والذكاء الاصطناعي",
  keywords: [
    "software development",
    "artificial intelligence",
    "AI solutions",
    "tech company",
    "digital transformation",
    "social media management",
    "web development",
    "mobile apps",
    "software company Saudi Arabia",
    "tech solutions USA",
    "تطوير برمجيات",
    "ذكاء اصطناعي",
    "شركة تقنية",
    "تطوير تطبيقات",
    "إدارة السوشيال ميديا",
    "صديم",
    "sadeim",
    "سديم",
    "شركة سديم",
    "شركة  سديم للبرمجة",
    "شركة برمجة",
    "شركة سديم",

  ],
  authors: [{ name: 'sadeim' }],
  creator: 'sadeim',
  publisher: 'sadeim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'ar-SA': '/'
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  openGraph: {
    title: 'sadeim - Innovative Technology Solutions',
    description: 'Leading technology company providing software development, AI solutions, and digital transformation services globally. شركة صديم - حلول تقنية مبتكرة',
    url: 'https://www.sadeim.com',
    siteName: 'sadeim',
    images: [
      {
        url: 'https://www.sadeim.com/logo.png', 
        width: 1200,
        height: 630,
        alt: 'sadeim Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sadeim - Technology & AI Solutions',
    description: 'Innovative technology solutions for modern businesses. Software development, AI, and digital transformation services.',
    creator: '@sadeim',
    images: ['https://www.sadeim.com/logo.png'], 
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
  // verification: {
  //   google: 'add-your-google-site-verification',
  //   yandex: 'add-your-yandex-verification',
  //   yahoo: 'add-your-yahoo-verification',
  // },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="ar" href="https://www.sadeim.com" />
        <link rel="alternate" hrefLang="en" href="https://www.sadeim.com" />
        <link rel="canonical" href="https://www.sadeim.com" />
      </head>
      <body className="font-helvetica">
        <Navbar />
        <main className="mt-16 pt-2 bg-gradient-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}