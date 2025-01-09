"use client";
import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { BiMinus, BiPlus, BiRightArrow } from "react-icons/bi";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";
import { useParams } from "next/navigation";
const { Panel } = Collapse;
const products = [
  {
    id: 1,
    image: [
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "$60",
    description:
      "A medication used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
    Flavour: "Mint",
    Composition: "Rabeprazole Sodium 20 mg, Domperidone 10 mg",
    Packaging: "Box of 10 tablets",
    Indication_Uses:
      "For treatment of acid reflux, ulcers, and gastroesophageal reflux disease (GERD).",
    Dosage: "One tablet daily before a meal.",
    faq: [
      {
        question: "What is Rabipose-DSR3T used for?",
        answer: "It is used to treat acid reflux and ulcers.",
      },
      {
        question: "Is this medication safe?",
        answer: "Yes, when used as prescribed by a doctor.",
      },
    ],
  },
  {
    id: 2,
    image: [
      "https://img.freepik.com/free-vector/realistic-medical-care-template-with-syringe-broken-capsule-with-plant-medicine-icons-hexagons_1284-35345.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Arocef - 200",
    price: "$35",
    MRP: "$40",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
    Flavour: "Unflavored",
    Composition: "Cefuroxime Axetil 200 mg",
    Packaging: "Pack of 10 tablets",
    Indication_Uses:
      "Used to treat bacterial infections such as respiratory and skin infections.",
    Dosage: "One tablet every 12 hours.",
    faq: [
      {
        question: "What types of infections can Arocef treat?",
        answer: "Arocef is used to treat respiratory and skin infections.",
      },
      {
        question: "How long should I take this medication?",
        answer:
          "The course of treatment typically lasts for 7-10 days, as prescribed by your doctor.",
      },
    ],
  },
  {
    id: 3,
    image: [
      "https://img.freepik.com/free-vector/pharmacy-medication-pills-medicine_24877-51553.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Budalecs",
    price: "$30",
    MRP: "$35",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Lemon",
    Composition: "Amoxicillin 500 mg, Clavulanic Acid 125 mg",
    Packaging: "Pack of 12 tablets",
    Indication_Uses:
      "Treats infections such as respiratory, urinary tract, and skin infections.",
    Dosage: "One tablet every 8 hours.",
    faq: [
      {
        question: "What infections can Budalecs treat?",
        answer:
          "Budalecs can treat respiratory, urinary tract, and skin infections.",
      },
      {
        question: "Can I take this medication with food?",
        answer: "Yes, it can be taken with food to reduce stomach irritation.",
      },
    ],
  },
  {
    id: 4,
    image: [
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "$60",
    description:
      "A medication used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
    Flavour: "Mint",
    Composition: "Rabeprazole Sodium 20 mg, Domperidone 10 mg",
    Packaging: "Box of 10 tablets",
    Indication_Uses:
      "For treatment of acid reflux, ulcers, and gastroesophageal reflux disease (GERD).",
    Dosage: "One tablet daily before a meal.",
    faq: [
      {
        question: "What is Rabipose-DSR3T used for?",
        answer: "It is used to treat acid reflux and ulcers.",
      },
      {
        question: "Is this medication safe?",
        answer: "Yes, when used as prescribed by a doctor.",
      },
    ],
  },
  {
    id: 5,
    image: [
      "https://img.freepik.com/free-vector/realistic-medical-care-template-with-syringe-broken-capsule-with-plant-medicine-icons-hexagons_1284-35345.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Arocef - 200",
    price: "$35",
    MRP: "$40",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
    Flavour: "Unflavored",
    Composition: "Cefuroxime Axetil 200 mg",
    Packaging: "Pack of 10 tablets",
    Indication_Uses:
      "Used to treat bacterial infections such as respiratory and skin infections.",
    Dosage: "One tablet every 12 hours.",
    faq: [
      {
        question: "What types of infections can Arocef treat?",
        answer: "Arocef is used to treat respiratory and skin infections.",
      },
      {
        question: "How long should I take this medication?",
        answer:
          "The course of treatment typically lasts for 7-10 days, as prescribed by your doctor.",
      },
    ],
  },
  {
    id: 6,
    image: [
      "https://img.freepik.com/free-vector/pharmacy-medication-pills-medicine_24877-51553.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
      "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    ],
    name: "Budalecs",
    price: "$30",
    MRP: "$35",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Lemon",
    Composition: "Amoxicillin 500 mg, Clavulanic Acid 125 mg",
    Packaging: "Pack of 12 tablets",
    Indication_Uses:
      "Treats infections such as respiratory, urinary tract, and skin infections.",
    Dosage: "One tablet every 8 hours.",
    faq: [
      {
        question: "What infections can Budalecs treat?",
        answer:
          "Budalecs can treat respiratory, urinary tract, and skin infections.",
      },
      {
        question: "Can I take this medication with food?",
        answer: "Yes, it can be taken with food to reduce stomach irritation.",
      },
    ],
  },
];
const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { id }:any = useParams();  


  const productDetails:any = products.find((item) => item.id === Number(id));

  const images = [
    "https://img.freepik.com/free-vector/realistic-medical-care-template-with-syringe-broken-capsule-with-plant-medicine-icons-hexagons_1284-35345.jpg",
    "https://img.freepik.com/free-vector/medicine-healthcare-background_23-2147490183.jpg",
    "https://img.freepik.com/free-photo/pharmaceutical-pills-capsules-blue-background_53876-96838.jpg",
    "https://img.freepik.com/free-photo/medicine-doctor-hand-working-digital-tablet-modern-computer-interface-icons_67155-928.jpg",
  ];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? productDetails.image.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === productDetails.image.length - 1 ? 0 : prev + 1));
  };

  const faqData = [
    {
      key: "1",
      title: "What products does Arolex Pharmaceutical Manufacturing produce?",
      content:
        "We produce tablets, capsules, syrups, and injectable medicines.",
    },
    {
      key: "2",
      title:
        "Where are Arolex Pharmaceutical's manufacturing facilities located?",
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
      }`}
    >
      {isActive ? (
        <BiMinus size={18} className="text-black" />
      ) : (
        <BiPlus size={18} className="text-white" />
      )}
    </div>
  );
console.log(productDetails?.name)
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-3">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span className="hover:underline cursor-pointer">Home</span> &gt;{" "}
          <span className="hover:underline cursor-pointer">
            Medical Products
          </span>{" "}
          &gt; <span className="text-gray-900 font-semibold">{productDetails?.name}</span>
        </nav>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Image Slider */}
          <div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-4">
              <img
                src={productDetails.image[currentImage]}
                alt={`Medical Product ${currentImage + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Slider Buttons */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-sky-100 shadow-lg"
              >
                <IoArrowBack />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-sky-100 shadow-lg"
              >
                <IoArrowForwardOutline />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {productDetails.image.map((src:any, index:any) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`cursor-pointer w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImage === index
                      ? "border-green-600"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {productDetails.name}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
             {productDetails?.description}
            </p>
            <div className="mb-8">
              <div className="mb-3">
                <span className="font-medium text-gray-800">Flavour:</span>{" "}
                {productDetails?.Flavour}

              </div>
              <div className="mb-3">
                <span className="font-medium text-gray-800">Composition:</span>{" "}
                {productDetails?.Composition}

              </div>
              <div className="mb-3">
                <span className="font-medium text-gray-800">Packaging:</span>{" "}
                {productDetails?.Packaging}

              </div>
              <div className="mb-3">
                <span className="font-medium text-gray-800">
                  Indication & Uses:
                </span>{" "}
                {productDetails?.Indication_Uses}

              </div>
              <div className="mb-3">
                <span className="font-medium text-gray-800">Dosage:</span> As
                {productDetails?.Dosage}

              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="bg-green-600 text-white py-2 px-6 text-sm font-medium rounded-md hover:bg-green-700">
                Enquiry Now
              </button>
              <button className="bg-gray-200 text-gray-700 py-2 px-6 text-sm font-medium rounded-md hover:bg-gray-300">
                Add to Wishlist
              </button>
            </div>

            {/* Additional Information */}
            <div className="text-sm text-gray-600 leading-relaxed">
              <div className="mb-3">
                <span className="font-medium">Returns:</span> You can return
                items within 30 days.
              </div>
              <div>
                <span className="font-medium">Customer Support:</span> Available
                24/7 for any product-related queries.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Collapse
            accordion
            bordered={false}
            className="bg-gray-100"
            //@ts-ignore
            expandIcon={customExpandIcon}
            expandIconPosition="end"
          >
            {productDetails?.faq.map((faq:any) => (
              <Panel
                header={
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                }
                key={faq.key}
                className="p-4 bg-white rounded-lg mb-3"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
