import React from "react";
import Banner from "../components/Banner/Banner";
import ScrollingStrip from "../components/ScrollingStrip";
import CertificationsSection from "../components/certification/CertificationsSection";
import ProductSection from "../components/section/ProductSection";
import PharmaManufacture from "../components/section/PharmaManufacture";
import OurTeam from "../components/section/OurTeam";
import WorkSection from "../components/section/WorkSection";
import FAQSection from "../components/section/FAQSection";

import OurClientSection from "../components/section/OurClientSection";
import CoverFlowProducts from "../components/products/CoverFlowProducts";
import AboutUsSection from "../components/section/AboutUsSection";
import ContactSection from "../components/section/ContactSection ";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arolex Pharma - Leading Medicine Packaging and Manufacturing",
  description:
    "Arolex Pharma is a leading pharmaceutical company specializing in innovative medicine packaging and manufacturing solutions, serving both B2B and B2C clients with high-quality pharmaceutical products.",
  keywords:
    "Arolex Pharma, arolex pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing, Paracetamol, Ibuprofen, Amoxicillin, Ciprofloxacin, Metformin, Omeprazole, Aspirin, Atorvastatin, Losartan, Cetirizine",
};

export default function page() {
  return (
    <>
      <div>
        <Banner />
        <ScrollingStrip />
        <CoverFlowProducts />
        <CertificationsSection />
        <AboutUsSection />
        <WorkSection />

        <PharmaManufacture />
        <OurClientSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}
