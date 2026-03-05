import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Shuddh Masala Co. | Organic Indian Masalas',
    template: '%s | Shuddh Masala Co.'
  },
  description:
    'Premium organic Indian spices crafted in small batches with strict purity and lab testing standards.',
  openGraph: {
    title: 'Shuddh Masala Co. | Organic Indian Masalas',
    description:
      'Pure. Organic. Traditional. Discover authentic Indian masalas sourced from trusted farms in India.',
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
