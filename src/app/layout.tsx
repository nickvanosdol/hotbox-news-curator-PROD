import type { Metadata } from 'next';
import { Inter, Special_Elite } from 'next/font/google';
import '@/styles/globals.css';

const specialElite = Special_Elite({
  variable: '--font-special-elite',
  subsets: ['latin'],
  weight: ['400'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'hotbox',
  description: 'A reader-curated newsfeed from Keep Cool.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${specialElite.variable} ${inter.variable} antialiased bg-neutral-50`}>
        {children}
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-35"
          style={{
            backgroundImage: 'url("/svg/noise.svg")',
            backgroundRepeat: 'repeat',
            backgroundSize: '182px 182px',
          }}
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
