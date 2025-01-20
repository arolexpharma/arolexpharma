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

export default function page() {
  return (
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
  );
}
