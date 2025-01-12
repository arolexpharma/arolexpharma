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
      <Breadscrumb items={breadcrumbItems} />
      <div className="px-6 py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-[70%_25%] gap-8">
          <div className="space-y-4 ">
            <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 max-w-96 text-wrap">
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-800 font-medium">
                arolexpharmaceuticals@gmail.com
              </p>
              <p className="text-gray-800 font-medium">790-652-7876</p>
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
                  Snappy.
                </p>
              </div>
            </div>
          </div>
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
                placeholder="+91 Phone number"
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-sky-600 transition"
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

      <div className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="w-full h-74 md:h-80 bg-gray-200 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.278283875691!2d77.72672157464677!3d29.27415727532048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c13d573e53c67%3A0xf170c4cc81423bbf!2sArolex%20Pharmaceuticals%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735378583412!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                title="Arolex Pharmaceuticals Location"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 font-medium">Our Location</p>
            <h3 className="text-3xl font-bold text-gray-900">
              Connecting Near and Far
            </h3>
            <p className="text-gray-600 leading-8">
              Arolex Pharmaceuticals Pvt Ltd <br />
              Arolex Pharmaceuticals, Budhana-Khatauli Rd, Islam Nagar <br />
              Khatauli Rural, Uttar Pradesh 251201 <br />
              India
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
      <FAQSection />
    </div>
  );
}
