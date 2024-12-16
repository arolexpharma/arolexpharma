import React from "react";
import Banner from "../components/Banner/Banner";
import CertificationsSection from "../components/certification/CertificationsSection";
import ProductSection from "../components/section/ProductSection";
import PharmaManufacture from "../components/section/PharmaManufacture";

export default function page() {
  return <div>
    <Banner/>
    <CertificationsSection/>
    <ProductSection/>
    <PharmaManufacture/>
  </div>;
}
