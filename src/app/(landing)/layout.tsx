import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Link from "next/link"; 
import { FaWhatsapp } from "react-icons/fa"; 

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

      <Link
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 z-50 fixed bottom-4 right-4  rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-white w-8 h-8" />
      </Link>
    </div>
  );
}
