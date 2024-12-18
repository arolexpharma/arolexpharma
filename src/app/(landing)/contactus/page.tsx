import React from "react";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import OurTeam from "@/app/components/section/OurTeam";
import FAQSection from "@/app/components/section/FAQSection";

export default function Page() {
  const breadcrumbItems: any = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contactus" },
  ];

  return (
    <div>
      {/* Breadcrumb Section */}
      <Breadscrumb items={breadcrumbItems} />

      {/* Main Contact Us Section */}
      <div className="px-6 py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-8">
          {/* Left Content */}
          <div className="space-y-4 ">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 w-96">
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </p>
            <div className="flex flex-col gap-6">

            <p className="text-gray-800 font-medium">info@snappy.io</p>
            <p className="text-gray-800 font-medium">321-221-231</p>
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 font-medium"
              >
              Customer Support
            </a>
              </div>

            {/* Support Categories */}
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
                  Snappy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Media Inquiries</h3>
                <p className="text-gray-600 text-sm">
                  For media-related questions, contact us at{" "}
                  <a
                    href="mailto:media@snappyapp.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    media@snappyapp.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="+62 Phone number"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
              <p className="text-xs text-gray-600 text-center">
                By contacting us, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative">
            <div className="w-full h-74 md:h-80 bg-gray-200 rounded-xl">
              {/* Embed Google Maps Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094013!2d144.95373531531654!3d-37.81627917975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777e35c75d6b4e!2sSnappy%20Inc.!5e0!3m2!1sen!2sus!4v1599536750345!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Snappy Location"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Location Content */}
          <div className="space-y-4">
            <p className="text-gray-800 font-medium">Our Location</p>

            <h3 className="text-3xl font-bold text-gray-900">
              Connecting Near and Far
            </h3>
            <p className="text-gray-600 leading-8">
              Snappy Inc. <br />
              123 Tech Boulevard, Suite 456 <br />
              San Francisco, CA 12345 <br />
              United States
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
      <FAQSection/>
    </div>
  );
}
