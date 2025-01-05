import React from "react";
import Banner from "../components/Banner/Banner";
import CertificationsSection from "../components/certification/CertificationsSection";
import ProductSection from "../components/section/ProductSection";
import PharmaManufacture from "../components/section/PharmaManufacture";
import OurTeam from "../components/section/OurTeam";
import WorkSection from "../components/section/WorkSection";
import FAQSection from "../components/section/FAQSection";
import ContactSection from "../components/section/ContactSection ";
import OurClientSection from "../components/section/OurClientSection";
import CoverFlowProducts from "../components/products/CoverFlowProducts";
import AboutUsSection from "../components/section/AboutUsSection";

export default function page() {
  return (
    <div>
      <Banner />
      <CoverFlowProducts/>
      <CertificationsSection />
      <AboutUsSection/>
      <ProductSection />
      <PharmaManufacture />
      <OurTeam />
      <WorkSection />
      <FAQSection />
      <OurClientSection/>
      <ContactSection />
    </div>
  );
}
