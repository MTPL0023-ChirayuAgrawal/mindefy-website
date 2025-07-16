// src/app/layout.js
import { Poppins } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Navbar";
import ContactUs from "./components/HomePage/ContactUs";
import Footer from "./components/HomePage/Footer";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // you can adjust as needed
  variable: "--font-noto",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  metadataBase: new URL('https://mindefy.tech'),
  title: {
    template: '%s | Mindefy Technologies',
    default: 'Mindefy Technologies - Innovative Software Solutions & Development',
  },
  description: "Leading software development company providing innovative solutions for enterprises and startups. Expert in mobile app development, web applications, AI, and digital transformation.",
  keywords: ["software development", "mobile app development", "web development", "AI solutions", "digital transformation", "enterprise solutions", "startup consulting"],
  authors: [{ name: "Mindefy Technologies" }],
  creator: "Mindefy Technologies",
  publisher: "Mindefy Technologies",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mindefy.tech',
    siteName: 'Mindefy Technologies',
    title: 'Mindefy Technologies - Innovative Software Solutions & Development',
    description: 'Leading software development company providing innovative solutions for enterprises and startups. Expert in mobile app development, web applications, AI, and digital transformation.',
    images: [
      {
        url: '/images/logo/mindefy-logo.png',
        width: 1200,
        height: 630,
        alt: 'Mindefy Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindefy Technologies - Innovative Software Solutions & Development',
    description: 'Leading software development company providing innovative solutions for enterprises and startups.',
    images: ['/images/logo/mindefy-logo.png'],
  },
  verification: {
    google: 'your-google-site-verification-code',
    // Add other verification codes as needed
  },
  alternates: {
    canonical: 'https://mindefy.tech',
  },
  icons: {
    icon: [
      {
        url: '/images/logo/mindefy-logo.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        url: '/images/logo/mindefy-logo.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      }
    ],
    apple: [
      {
        url: '/images/logo/mindefy-logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        url: '/images/logo/mindefy-logo.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo/mindefy-logo.svg',
        color: '#D84426',
      }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSans.variable} ${fredoka.variable}`}>
      <head>
        <link rel="canonical" href="https://mindefy.tech" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KPJPG9LV');
            `,
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQVLJS1QWF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQVLJS1QWF');
            `,
          }}
        />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Mindefy Technologies" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mindefy" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#D84426" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/images/logo/mindefy-logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/logo/mindefy-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/mindefy-logo.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/images/logo/mindefy-logo.png" />
        
        {/* Additional Meta Tags for PWA */}
        <meta name="theme-color" content="#D84426" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="font-poppins overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPJPG9LV"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
        {/* <PWAInstallPrompt /> */}
        <Analytics />
      </body>
    </html>
  );
}
