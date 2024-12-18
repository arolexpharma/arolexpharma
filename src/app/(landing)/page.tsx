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

export default function page() {
  return (
    <div>
      <Banner />

      <CertificationsSection />

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
