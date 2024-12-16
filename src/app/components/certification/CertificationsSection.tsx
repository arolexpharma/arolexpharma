import React from 'react';
import iso from '@/app/assets/images/iso.png'
import Image from 'next/image';
const CertificationsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto">
        {/* Top Section: Certifications */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            {/* Certification Logos */}
            <div className="w-16 h-16  rounded-full flex items-center justify-center">
              <Image src={iso} alt="ISO Certified" className="w-16" />
            </div>
            <div className="w-16 h-16  rounded-full flex items-center justify-center">
              <Image src={iso} alt="GMP Certified" className="w-16" />
            </div>
            <div className="w-16 h-16  rounded-full flex items-center justify-center">
              <Image src={iso} alt="FDA Approved" className="w-16" />
            </div>
          </div>
          <p className="text-gray-600 text-lg mt-4 md:mt-0">
            Trusted by over <span className="font-bold">10,000+</span> pharmaceutical customers worldwide.
          </p>
        </div>

        {/* Global Partners Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Certifications & Trusted Standards
            </h2>
            <p className="text-gray-600 max-w-xl">
              Our manufacturing facilities follow ISO, GMP, and FDA-approved processes to ensure the highest quality pharmaceutical products.
            </p>
          </div>
          {/* Testimonial */}
          <div className="mt-8 lg:mt-0">
            <div className="text-yellow-400 flex mb-2">
              {/* Star Icons */}
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="text-yellow-500 text-xl">&#9733;</span>
              ))}
            </div>
            <p className="text-gray-700 italic max-w-sm">
              "We ensure our pharmaceutical processes meet international standards, providing peace of mind for our patients and healthcare providers."
            </p>
            <p className="mt-2 text-gray-800 font-semibold">- Michael R. Duch, MD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
