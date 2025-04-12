import React from "react";
import WorkSkills from "../workSkills/WorkSkills";
import { 
  FaLightbulb, 
  FaAward, 
  FaFlask, 
  FaHandsHelping, 
  FaHandshake, 
  FaRocket 
} from "react-icons/fa";

export default function WorkSection() {
  const features = [
    {
      icon: <FaLightbulb className="text-4xl mb-4 text-blue-600" />,
      title: "Vision-Driven Leadership",
      description: "Founded by Danish Khan and co-led with Shakir Ahmad and Dr. Monish Khan, our leadership brings a rare blend of business acumen, deep-rooted passion, and scientific expertise."
    },
    {
      icon: <FaAward className="text-4xl mb-4 text-blue-600" />,
      title: "Commitment to Quality",
      description: "Every product we offer is crafted with precision and care. We adhere to strict quality standards and regulatory guidelines."
    },
    {
      icon: <FaFlask className="text-4xl mb-4 text-blue-600" />,
      title: "Scientific Expertise",
      description: "With Dr. Monish Khan's medical and pharmaceutical knowledge at the core, our R&D and product development are backed by science."
    },
    {
      icon: <FaHandsHelping className="text-4xl mb-4 text-blue-600" />,
      title: "Empowering Through Employment",
      description: "Our goal isn't just to grow a business — it's to build a movement that creates jobs and uplifts communities."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-blue-600" />,
      title: "Trusted Partnerships",
      description: "Our transparent practices, ethical operations, and responsive support make Arolex a reliable name in pharmaceuticals."
    },
    {
      icon: <FaRocket className="text-4xl mb-4 text-blue-600" />,
      title: "Innovation with Purpose",
      description: "We continuously invest in research and modern techniques to bring meaningful change to people's lives."
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-white text-sm bg-primary rounded-full inline-block px-3 py-1 mb-6">
            Why Choose Us
          </p>
          <h2 className="text-3xl text-black font-bold mb-4">
            Excellence in Expertise and Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="flex text-center items-center justify-center">

                {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-evenly lg:space-x-8 flex-wrap mt-8">
          <WorkSkills percentage={96} label="Product Efficiency" color="blue" />
          <WorkSkills percentage={90} label="Product Quality" color="blue" />
          <WorkSkills percentage={95} label="Customer Satisfaction" color="blue" />
          <WorkSkills percentage={92} label="Product Packing" color="blue" />
          <WorkSkills percentage={90} label="Returns" color="blue" />
        </div>
      </div>
    </section>
  );
}