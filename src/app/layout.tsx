import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

const poppins = Poppins({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Elens',
  description: 'Capturing Moments, Creating Timeless Stories',
  authors: {
    name: 'Elunive',
    url: 'https://elunive.id',
  },
  icons: {
    icon: '/images/elunive-logo-white.png',
  },
  keywords: ['Photograph', 'photography', 'elens', 'elunive', 'unplash'],
  openGraph: {
    title: 'Elens - all asset images',
    description: 'Capturing Moments, Creating Timeless Stories',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
