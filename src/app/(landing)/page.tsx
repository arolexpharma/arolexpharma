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

export default function page() {
  return (
    <>
      <Head>
        <title>
          Arolex Pharmaceuticals - Medicine Packaging and Manufacturing
        </title>
        <meta
          name="description"
          content="Arolex Pharmaceuticals specializes in innovative medicine packaging and manufacturing solutions. We serve both B2B and B2C clients with high-quality pharmaceutical products."
        />
        <meta
          name="keywords"
          content="arolex pharma, arolex pharmaceuticals, medicine packaging, medicine manufacturing, B2B pharmaceuticals, B2C pharmaceuticals, pharmaceutical solutions, drug packaging, pharmaceutical manufacturing, Paracetamol, Ibuprofen, Amoxicillin, Ciprofloxacin, Metformin, Omeprazole, Aspirin, Atorvastatin, Losartan, Cetirizine"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <ScrollingStrip />
        <CoverFlowProducts />
        <CertificationsSection />
        <AboutUsSection />
        <WorkSection />
        {/* <OurTeam /> */}
        {/* <ProductSection /> */}
        <PharmaManufacture />
        <OurClientSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}
