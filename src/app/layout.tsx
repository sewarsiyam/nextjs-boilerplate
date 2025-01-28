import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = 'https://www.sadeim.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "sadeim - Business Development Alliance",
    template: '%s | sadeim'
  },
  description: "sadeim is a leading technology company specializing in software development, AI solutions, social media management, and digital transformation. We deliver innovative tech solutions for businesses worldwide. صديم - شركة رائدة في تطوير البرمجيات والذكاء الاصطناعي",
  keywords: [
    // Technology Keywords
    "software development",
    "artificial intelligence",
    "AI solutions",
    "tech company",
    "digital transformation",
    "social media management",
    "web development",
    "mobile apps",
    // Regional Keywords
    "software company Saudi Arabia",
    "tech solutions USA",
    // Arabic Keywords
    "تطوير برمجيات",
    "ذكاء اصطناعي",
    "شركة تقنية",
    "تطوير تطبيقات",
    "إدارة السوشيال ميديا",
    // Brand Keywords
    "صديم",
    "sadeim",
    "سديم",
    "شركة سديم",
    "شركة سديم للبرمجة",
    "شركة برمجة"
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
    url: SITE_URL,
    siteName: 'sadeim',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
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
    images: [`${SITE_URL}/logo.png`],
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
    google: 'add-your-google-site-verification',
  },
  category: 'technology',
};

// Google Tag Manager script type
type GTMProps = {
  gtmId: string;
};

// Google Tag Manager Component
const GoogleTagManager = ({ gtmId }: GTMProps) => {
  const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;

  const gtmNoscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
      <noscript dangerouslySetInnerHTML={{ __html: gtmNoscript }} />
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = 'GTM-59GV52ZJ';

  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="ar" href={SITE_URL} />
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />
        <GoogleTagManager gtmId={GTM_ID} />
      </head>
      <body className="font-helvetica">
        <Navbar />
        <main className="mt-16 pt-2 bg-gradient-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}