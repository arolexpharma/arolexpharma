"use client";
import React from "react";
import { Collapse } from "antd";
import { BiMinus, BiPlus } from "react-icons/bi";

const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
    {
      key: "1",
      title: "What products does Arolex Pharmaceutical Manufacturing produce?",
      content: "We produce tablets, capsules, syrups, and injectable medicines.",
    },
    {
      key: "2",
      title: "Where are Arolex Pharmaceutical's manufacturing facilities located?",
      content:
        "Our FDA-approved facilities meet international standards and GMP compliance.",
    },
    {
      key: "3",
      title: "Does Arolex Pharmaceutical offer contract manufacturing?",
      content:
        "Yes, we provide contract manufacturing services for a wide range of products.",
    },
    {
      key: "4",
      title: "What certifications does Arolex Pharmaceutical hold?",
      content:
        "We hold WHO-GMP, ISO 9001:2015, and FDA certifications ensuring quality standards.",
    },
  ];

  const customExpandIcon = ({ isActive }: { isActive: boolean }) => (
    <div
      className={`w-6 h-6 flex items-center justify-center rounded-full ${
        isActive ? "bg-blue-100" : "bg-primary"
      } text-white`}
    >
      {isActive ? <BiMinus size={18} color="black"/> : <BiPlus size={18} color="white"/>}
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
            className="bg-gray-100"
            //@ts-ignore
            expandIcon={customExpandIcon}
            expandIconPosition="end"
          >
            {faqData.map((faq) => (
              <Panel
                header={<span className="font-semibold text-gray-800">{faq.title}</span>}
                key={faq.key}
                className="p-4"
              >
                <div className="text-gray-700">{faq.content}</div>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
