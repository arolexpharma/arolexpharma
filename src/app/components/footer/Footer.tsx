import React from "react";
import Logo from "@/app/assets/images/Logo.png";

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
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D2440] py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-300">
    
        <div className="md:col-span-2">
         
          <Image src={Logo} height={200} width={200} alt='images' className="mb-5 "/>

          <p className="text-sm text-gray-300 mb-4 md:pr-20 lg:pr-60 leading-6">
          Arolex Pharmaceuticals is a leading manufacturer of high-quality
            pharmaceutical products, committed to delivering innovative and
            reliable healthcare solutions worldwide.
          </p>
        </div>

     
      <div>
        <h4 className="font-semibold text-white mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-gray-300 leading-8">
          <li>
            <Link href="/aboutus" className="hover:underline">
              About us
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:underline">
              News
            </Link>
          </li>
          <li>
            <Link href="/media-kit" className="hover:underline">
              Media kit
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3">Social</h4>
        <ul className="space-y-2 text-sm text-gray-300 leading-8">
          <li>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </Link>
          </li>
        </ul>
      </div>

    
      <div>
        <h4 className="font-semibold text-white mb-3">Legal</h4>
        <ul className="space-y-2 text-sm text-gray-300 leading-8">
          <li>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/licenses" className="hover:underline">
              Licenses
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>

    
      <div className="container mx-auto mt-10 border-t border-gray-500 pt-6 flex flex-col md:flex-row items-center justify-between text-center text-sm text-gray-500">
   
        <p className="mb-4 md:mb-0 text-gray-300">© 2024 All rights reserved.</p>

      
        <div className="flex justify-center space-x-6 bg-white/80 py-2 px-4 rounded-lg shadow">
          <FaTwitter className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaLinkedin className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaFacebookF className="hover:text-primary cursor-pointer transition-all" size={18} />
          <FaInstagram className="hover:text-primary cursor-pointer transition-all" size={18} />
          {/* <FaGithub className="hover:text-primary cursor-pointer transition-all" size={18} /> */}
          {/* <FaDribbble className="hover:text-primary cursor-pointer transition-all" size={18} /> */}
        </div>
      </div>
    </footer>
  );
}
