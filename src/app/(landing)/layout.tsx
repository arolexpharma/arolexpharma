import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FloatingSocialButton from "../components/common/FloatingSocialButton";
import EnquiryFormModal from "../components/modal/EnquiryFormModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arolex Pharma- Medicine Packaging and Manufacturing",
  description:
    "Arolex Pharma specializes in innovative medicine packaging solutions. We serve both B2B and B2C clients with high-quality pharmaceutical products.",
  keywords:
    "arolex pharma, Arolex Pharma, arolex pharmaceuticals, Arolex Pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing, Paracetamol, Ibuprofen, Amoxicillin, Ciprofloxacin, Metformin, Omeprazole, Aspirin, Atorvastatin, Losartan, Cetirizine",
};

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="content" className="site-content relative">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingSocialButton />

      <EnquiryFormModal />
    </div>
  );
}
