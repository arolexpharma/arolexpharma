"use client";
import React from "react";

const ContactSection = () => {
  return (
    <div className="container mx-auto  px-5 py-20">
      <div className="flex bg-gray-100 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Image */}
        <div className="flex-1">
          <img
            src="https://img.freepik.com/free-photo/doctor-working-medical-research_23-2149345462.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted" // Replace with actual image path
            alt="Contact Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 bg-blue-500 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Get in touch with us for any inquiries or assistance with our
            services. Our team is here to help you with any questions you may
            have.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-400 transition duration-300">
            View Contact Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
