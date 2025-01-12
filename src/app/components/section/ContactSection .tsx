"use client";
import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto px-5 py-16 sm:py-20 ">
        <div className="flex flex-wrap   shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/doctor-working-medical-research_23-2149345462.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted"
              alt="Contact Image"
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 bg-primary text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-base md:text-lg mb-6">
              Get in touch with us for any inquiries or assistance with our
              services. Our team is here to help you with any questions you may
              have.
            </p>
            <Link
              href={"/contactus"}
              className="bg-gradient-to-r from-lime-500 to-lime-600 text-white text-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition duration-300"
            >
              View Contact Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
