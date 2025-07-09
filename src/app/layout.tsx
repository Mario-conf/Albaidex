import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'Albaidex | Desarrollo de Software a Medida',
  description: 'Convertimos tus ideas en soluciones de software a medida, potentes y eficientes para tu negocio.',
  manifest: '/manifest.json',
  themeColor: '#ffae00',
  icons: {
    icon: '/img/img/icons/isotipoalbaidex.png',
    apple: '/img/img/icons/isotipoalbaidex.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} !scroll-smooth`}>
      <head />
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
