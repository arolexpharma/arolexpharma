import React from "react";
import Logo from "@/app/assets/images/logo.png";

import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaGithub,
  FaDribbble,
  FaPeace,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D2440] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-300">
        {/* Branding Section */}
        <div className="md:col-span-2">
         
          <Image src={Logo} height={200} width={200} alt='images' className="mb-5 "/>

          <p className="text-sm text-gray-300 mb-4 md:pr-20 lg:pr-60 leading-6">
          Aerolex Pharmaceuticals is a leading manufacturer of high-quality
            pharmaceutical products, committed to delivering innovative and
            reliable healthcare solutions worldwide.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300 leading-8">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Social</h4>
          <ul className="space-y-2 text-sm text-gray-300 leading-8">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300 leading-8">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between text-center text-sm text-gray-500">
        {/* Copyright */}
        <p className="mb-4 md:mb-0 text-gray-300">© 2024 All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 bg-white/80 py-2 px-4 rounded-lg shadow">
          <FaTwitter className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaLinkedin className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaFacebookF className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaInstagram className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaGithub className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaDribbble className="hover:text-primary cursor-pointer transition-all" size={18} />
        </div>
      </div>
    </footer>
  );
}
