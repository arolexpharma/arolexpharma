import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FloatingSocialButton from "../components/common/FloatingSocialButton";
import EnquiryFormModal from "../components/modal/EnquiryFormModal";


export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="content" className="site-content relative">
      <Header />
      {children}
      <Footer />
      <FloatingSocialButton />

      {/* Enquiry Form Modal */}
      <EnquiryFormModal />
    </div>
  );
}
