"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";

export default function FloatingSocialButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  useEffect(()=>{
    setIsMenuOpen(true);
    setTimeout(() => {
      setIsMenuOpen(false); 
    }, 2000);
  },[])
  return (
    <>
  
      <button
        onClick={toggleMenu}
        className={`bg-green-500 border-sky-400 z-50 fixed bottom-4 right-4 rounded-full shadow-xl p-3 flex items-center justify-center transition-transform duration-300 ${
          isMenuOpen ? "rotate-180" : ""
        }`}
      >
        <TbSocial className="text-white" size={24} />
      </button>

    
      <div
        className={`fixed bottom-20 right-4 flex flex-col items-center space-y-4 z-50 transition-all duration-500 ${
          isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="https://wa.me/7906527876"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <FaWhatsapp className="text-white" size={24} />
        </Link>

        <Link
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <FaFacebookF className="text-white" size={24} />
        </Link>

        <Link
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <FaInstagram className="text-white" size={24} />
        </Link>

        <Link
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 rounded-full shadow-lg p-3 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <FaTwitter className="text-white" size={24} />
        </Link>
      </div>
    </>
  );
}
