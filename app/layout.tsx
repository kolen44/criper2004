import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  icons: {
    icon: '/niga.jpg',
    shortcut: '/niga.jpg',
    apple: '/niga.jpg',
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          {/* Background effects */}
          <div className="bg-effects">
            <div className="orb orb-primary" />
            <div className="orb orb-secondary" />
            <div className="orb orb-accent" />
          </div>
          
          {/* Grid background */}
          <div className="bg-grid-overlay" />
          
          {children}
        </div>
      </body>
    </html>
  );
}
