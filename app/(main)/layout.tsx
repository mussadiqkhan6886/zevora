import Footer from "@/components/customer/Footer";
import Header from "@/components/customer/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://zevora-kappa.vercel.app'),

  title: {
    default: 'Zevora | Premium Watches, Jewelry & Perfumes',
    template: '%s | Zevora',
  },

  description:
    'Shop premium watches, jewelry sets, and luxury perfumes at Zevora. Elegant designs, trusted quality, and fast delivery.',

  applicationName: 'Zevora',

  keywords: [
    'Zevora',
    'watches',
    'luxury watches',
    'jewelry',
    'jewelry sets',
    'perfumes',
    'online shopping',
    'fashion store',
    'premium accessories',
  ],

  authors: [{ name: 'Zevora' }],
  creator: 'Zevora',
  publisher: 'Zevora',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zevora-kappa.vercel.app',
    siteName: 'Zevora',
    title: 'Zevora | Premium Watches, Jewelry & Perfumes',
    description:
      'Discover premium watches, jewelry sets, and luxury perfumes. Timeless style, crafted for you.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zevora – Premium Accessories',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@zevora',
    creator: '@zevora',
    title: 'Zevora | Premium Watches, Jewelry & Perfumes',
    description:
      'Shop premium watches, jewelry sets, and luxury perfumes with fast delivery.',
    images: ['/logo.png'],
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  // manifest: '/site.webmanifest',

  category: 'ecommerce',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
}
