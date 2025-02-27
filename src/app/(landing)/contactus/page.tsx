import React from "react";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import OurTeam from "@/app/components/section/OurTeam";
import FAQSection from "@/app/components/section/FAQSection";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import ContactForm from "./ContactForm";
import Head from "next/head";

export const metadata = {
  title: "Contact Us | Arolex Pharmaceuticals",
  description:
    "Get in touch with Arolex Pharmaceuticals for customer support, feedback, and suggestions. Reach us via email, call, or contact form.",
  keywords:
    "Arolex Pharmaceuticals, Contact Us, Pharmaceutical Company, Support, Feedback",
  openGraph: {
    title: "Contact Us | Arolex Pharmaceuticals",
    description:
      "Get in touch with Arolex Pharmaceuticals for customer support, feedback, and suggestions.",
    images: ["../../assets/images/Logo.png"],

    url: "https://www.arolexpharma.com/contactus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Arolex Pharmaceuticals",
    description:
      "Get in touch with Arolex Pharmaceuticals for customer support and suggestions.",
  },
};

export default function Page() {
  const breadcrumbItems: any = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contactus" },
  ];

  return (
    <div>
      <Breadscrumb items={breadcrumbItems} />

      <div className="px-6 py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[70%_25%] gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 max-w-96 text-wrap">
              Email, call, or complete the form to learn how
              arolexpharmaceuticals can solve your messaging problem.
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-800 font-medium">
                arolexpharma@gmail.com
              </p>
              <p className="text-gray-800 font-medium">8958-755-725</p>
              <a
                href="#"
                className="text-primary underline hover:text-sky-600 font-medium"
              >
                Customer Support
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Customer Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Our support team is available around the clock to address any
                  concerns or queries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Feedback and Suggestions
                </h3>
                <p className="text-gray-600 text-sm">
                  We value your feedback and are continuously working to improve
                  Product.
                </p>
              </div>
            </div>
            <div className="flex gap-16 sm:gap-20 pt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61572516152319&sk=about"
                className="text-gray-800 hover:text-blue-500"
              >
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-700">
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/arolexpharma/profilecard/?igsh=MWhyaXFkODI0MmI0ag=="
                className="text-gray-800 hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="w-full h-74 md:h-80 bg-gray-200 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.278283875691!2d77.72672157464677!3d29.27415727532048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c13d573e53c67%3A0xf170c4cc81423bbf!2sArolex%20Pharmaceuticals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735378583412!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                title="Arolex Pharmaceuticals Location"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 font-medium">Our Location</p>
            <h3 className="text-3xl font-bold text-gray-900">
              Registered Office
            </h3>
            <p className="text-gray-600 leading-8">
              Arolex Pharmaceuticals Private Limited (APPL), E-25/A, Hauz Khas
              Market,Rama Krisna Puram, <br />
              New Delhi 110016 <br />
              India
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              Corporate Office
            </h3>
            <p className="text-gray-600 leading-8">
              Arolex Pharmaceuticals Private Limited (APPL), Budhana-Road near
              axis Bank ATM
              <br />
              Khatauli (Muzaffarnagar), Uttar Pradesh 251201 <br />
              India
            </p>
          </div>
        </div>
      </div>
      {/* <OurTeam /> */}
      <FAQSection />
    </div>
  );
}
