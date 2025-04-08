import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arolex Pharma- Medicine Packaging and Manufacturing",
  description:
    "Arolex Pharma specializes in innovative medicine packaging solutions. We serve both B2B and B2C clients with high-quality pharmaceutical products.",
  keywords:
    "arolex pharma, Arolex Pharma, arolex pharmaceuticals, Arolex Pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing, Paracetamol, Ibuprofen, Amoxicillin, Ciprofloxacin, Metformin, Omeprazole, Aspirin, Atorvastatin, Losartan, Cetirizine",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="N4UMNIu0BpsRqwCGVo2Xq5pVf06Zvm6LVeNxIgcfZ8g"
        />
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="apple-touch-icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={poppins.className}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <main>{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
