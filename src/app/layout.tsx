import type { Metadata } from 'next';
import { Outfit, Chewy } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';

const chewy = Chewy({
  variable: '--font-chewy',
  subsets: ['latin'],
  weight: ['400'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '[ hotbox ]',
  description: 'A curated newsfeed from Keep Cool.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chewy.variable} ${outfit.variable} antialiased bg-[rgba(245, 245, 245, 1)]`}>
        <div
          className="pointer-events-none absolute bottom-0 top-0 left-0 right-0 opacity-30 -z-100"
          style={{
            backgroundImage: 'url("/svg/noise.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '182px 182px',
          }}
          aria-hidden="true"
        />
        {children}
        {/* <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-35"
          style={{
            backgroundImage: 'url("/svg/noise.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '182px 182px',
          }}
          aria-hidden="true"
        /> */}
      </body>
    </html>
  );
}
