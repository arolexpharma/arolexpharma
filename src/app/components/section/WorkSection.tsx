import React from "react";
import WorkSkills from "../workSkills/WorkSkills";

export default function WorkSection() {
  return (
    <section className=" py-16 sm:py-20 px-0 sm:px-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white text-sm bg-primary rounded-full inline-block px-3 py-1 mb-6">
            Why Choose Us
          </p>
          <h2 className="text-3xl text-black font-bold mb-4">
            Excellence in Expertise and Results
          </h2>
        </div>
        <div className="flex flex-col" style={{ flexWrap: "wrap" }}>
          <div className="container mx-auto text-center flex items-center justify-center">
            <p className="text-black px-5 md:px-40 lg:px-80 text-sm sm:text-lg leading-relaxed">
              <strong>Arolex Pharma</strong> is a leader in contract
              manufacturing, packaging,{" "}
              <span className="text-green-300">export</span>, and supply of
              high-quality pharmaceuticals. Our expertise spans antibiotics,
              nutraceuticals, painkillers, injections, and more. We are
              committed to delivering innovative and tailored solutions that
              meet global standards in the pharmaceutical industry. Our focus
              remains on product efficiency, superior quality, customer
              satisfaction, and high-end product packaging, ensuring
              excellence in every aspect of our operations.
            </p>
          </div>

          <div
            className="flex justify-evenly lg:space-x-8"
            style={{ flexWrap: "wrap" }}
          >
            <WorkSkills percentage={96} label="Product Effiency" color="blue" />
            <WorkSkills percentage={90} label="Product Quality" color="blue" />
            <WorkSkills
              percentage={95}
              label="Customer Satisfaction"
              color="blue"
            />
            <WorkSkills percentage={92} label="Product Packing" color="blue" />
            <WorkSkills percentage={90} label="Returns" color="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
