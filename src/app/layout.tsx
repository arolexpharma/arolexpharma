import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aerolex Pharmaceuticals - Medicine Packaging and Manufacturing",
  description: "Aerolex Pharmaceuticals specializes in innovative medicine packaging and manufacturing solutions. We serve both B2B and B2C clients with high-quality pharmaceutical products.",
  keywords: "Aerolex Pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <AppRouterCacheProvider options={{ key: 'css' }}>

        {children}
         </AppRouterCacheProvider>
      </body>
    </html>
  );
}
