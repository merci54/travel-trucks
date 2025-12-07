import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Toaster } from 'react-hot-toast';

const InterSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description: 'Campers of your dreams',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={InterSans.variable}>
        <TanStackProvider>
          <div>
            <Toaster />
          </div>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
