"use client";
import React from "react";
import { Collapse } from "antd";
import { BiMinus, BiPlus } from "react-icons/bi";

const FAQSection = () => {
  const faqData = [
    {
      key: "1",
      label: <span className="font-semibold text-gray-800">What products does Arolex Pharmaceutical Manufacturing produce?</span>,
      children: <div className="text-gray-700">We produce tablets, capsules, syrups, and injectable medicines.</div>,
    },
    {
      key: "2",
      label: <span className="font-semibold text-gray-800">Where are Arolex Pharmaceutical's manufacturing facilities located?</span>,
      children: <div className="text-gray-700 ">Our FDA-approved facilities meet international standards and GMP compliance.</div>,
    },
    {
      key: "3",
      label: <span className="font-semibold text-gray-800">Does Arolex Pharmaceutical offer contract manufacturing?</span>,
      children: <div className="text-gray-700">Yes, we provide contract manufacturing services for a wide range of products.</div>,
    },
    {
      key: "4",
      label: <span className="font-semibold text-gray-800">What certifications does Arolex Pharmaceutical hold?</span>,
      children: <div className="text-gray-700">We hold WHO-GMP, ISO 9001:2015, and FDA certifications ensuring quality standards.</div>,
    },
  ];

  const customExpandIcon = (panelProps: { isActive?: boolean }) => (
    <div
      className={`w-6 h-6 flex items-center justify-center rounded-full ${
        panelProps.isActive ? "bg-blue-100" : "bg-primary"
      } text-white`}
    >
      {panelProps.isActive ? <BiMinus size={18} color="black" /> : <BiPlus size={18} color="white" />}
    </div>
  );
  

  return (
    <div className="bg-white">
      <div className="container mx-auto p-6 py-16 sm:py-20">
      <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <Collapse
            accordion
            bordered={false}
            className="bg-gray-100 "
            expandIcon={customExpandIcon}
            expandIconPosition="end"
            items={faqData}
      
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
