import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FloatingSocialButton from "../components/common/FloatingSocialButton";
import EnquiryFormModal from "../components/modal/EnquiryFormModal";
import { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Arolex Pharmaceuticals - Medicine Packaging and Manufacturing",
  description:
    "Arolex Pharmaceuticals specializes in innovative medicine packaging and manufacturing solutions. We serve both B2B and B2C clients with high-quality pharmaceutical products.",
  keywords:
    "arolex pharma, arolex pharmaceuticals, Arolex Pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing, Paracetamol, Ibuprofen, Amoxicillin, Ciprofloxacin, Metformin, Omeprazole, Aspirin, Atorvastatin, Losartan, Cetirizine",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="content" className="site-content relative">
      <Head>
        <link
          rel="canonical"
          href="https://www.arolexpharma.com/"
          key="canonical"
        />
      </Head>
      <Header />
      {children}
      <Footer />
      <FloatingSocialButton />

      <EnquiryFormModal />
    </div>
  );
}
