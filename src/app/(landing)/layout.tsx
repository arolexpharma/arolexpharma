import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Link from "next/link"; 
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; 

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

      {/* WhatsApp Icon */}
      <Link
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 z-50 fixed bottom-4 right-4 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-white "  size={24}/>
      </Link>

      {/* Facebook Icon */}
      <Link
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 z-50 fixed bottom-20 right-4 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <FaFacebookF className="text-white " size={24}/>
      </Link>

      {/* Instagram Icon */}
      <Link
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-500 to-yellow-500 z-50 fixed bottom-36 right-4 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <FaInstagram className="text-white " size={24}/>
      </Link>

      {/* Twitter Icon */}
      <Link
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 z-50 fixed bottom-52 right-4 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <FaTwitter className="text-white " size={24}/>
      </Link>
    </div>
  );
}
