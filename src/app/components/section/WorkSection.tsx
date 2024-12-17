import React from "react";
import WorkSkills from "../workSkills/WorkSkills";

export default function WorkSection() {
  return (
    <div className=" py-20 px-0 sm:px-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-sm bg-blue-400 rounded-full inline-block px-3 py-1 mb-3">
            Our Team
          </p>
          <h2 className="text-4xl text-black font-bold mb-4">
            Our Orthopedic Specialists
          </h2>
        
        </div>
        <div className="flex flex-col" style={{ flexWrap: "wrap" }}>
          <div className="container mx-auto text-center flex items-center justify-center">
            <p className="text-black px-5 md:40 lg:px-80 ">
              Our team of experts has years of experience in SEO, website
              design, and digital marketing. We are pass-ionate about helping
              our clients succeed and we take pride in delivering high-quality
              work.
            </p>
          </div>
          <div
            className="flex justify-evenly lg:space-x-8"
            style={{ flexWrap: "wrap" }}
          >
            <WorkSkills
              percentage={96}
              label="Product Effiency"
              color="blue"
            />
            <WorkSkills
              percentage={90}
              label="Product Quality"
              color="blue"
            />
            <WorkSkills
              percentage={95}
              label="Customer Satisfaction"
              color="blue"
            />
            <WorkSkills
              percentage={92}
              label="Product Packing"
              color="blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
