"use client";
import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
  
    {
      key: "2",
      title: "What products does Aerolex Pharmaceutical Manufacturing produce?",
      content: "We produce tablets, capsules, syrups, and injectable medicines.",
    },
    {
      key: "3",
      title: "Where are Aerolex Pharmaceutical's manufacturing facilities located?",
      content:
        "Our FDA-approved facilities meet international standards and GMP compliance.",
    },
    {
      key: "4",
      title: "Does Aerolex Pharmaceutical offer contract manufacturing?",
      content:
        "Yes, we provide contract manufacturing services for a wide range of products.",
    },
    {
      key: "5",
      title: "What certifications does Aerolex Pharmaceutical hold?",
      content:
        "We hold WHO-GMP, ISO 9001:2015, and FDA certifications ensuring quality standards.",
    },
    {
      key: "6",
      title: "Community Medical Center, Toms River",
      content: "Location information coming soon.",
    },
    {
      key: "7",
      title: "Jersey City Medical Center, Jersey City",
      content: "Location information coming soon.",
    },
    {
      key: "8",
      title: "Monmouth Medical Center, Long Branch",
      content: "Location information coming soon.",
    },
    {
      key: "9",
      title: "Newark Beth Israel Medical Center, Newark",
      content: "Location information coming soon.",
    },
  ];

  return (
    <div className="bg-blue-100">

    <div className="container mx-auto p-6  py-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq) => (
          <div key={faq.key} className="shadow-md rounded-md overflow-hidden">
            <Collapse
              bordered={false}
              className="bg-gray-100"
              expandIconPosition="right"
            >
              <Panel
                header={
                  <span className="font-semibold text-gray-800">
                    {faq.title}
                  </span>
                }
                key={faq.key}
                className="p-4"
              >
                <div className="text-gray-700">{faq.content}</div>
              </Panel>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
