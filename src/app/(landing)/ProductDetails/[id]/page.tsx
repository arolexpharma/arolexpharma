import React from "react";
import ProductItem from "../ProductItem";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import rabipose from '../../../assets/images/products/rabipose.jpg'
import budalecs from '../../../assets/images/products/budalecs.jpeg'
import arocef from '../../../assets/images/products/arocef.jpeg'

const products = [
  {
    id: 1,
    image: [
      rabipose,
      rabipose,

    ],
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "₹85/STRIP",
    description:
      "A RABIPOSE-DSR 3T (NANO TECHNOLOGY FLUX CAPSULE) used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
    Flavour: "Un Flavoured",
    Composition: "Rabeprazole Sodium 20 mg, Domperidone 10 mg",
    Packaging: "10 Strip",
    Indication_Uses: "For treatment of Gerd & Dyspepsia, Hyperacidity & HeartBurn, Nausea & Vomiting, acid reflux, ulcers, and gastroesophageal reflux disease (GERD).",
    Dosage: "One tablet daily before a meal.",
    faq: [
      {
        question: "What is Rabipose-DSR3T used for?",
        answer: "It is used to treat acid reflux and ulcers."
      },
      {
        question: "Is this medication safe?",
        answer: "Yes, when used as prescribed by a doctor."
      }
    ]
  },
  {
    id: 2,
    image: [
      arocef,
      arocef,
     
    ],
    name: "Arocef - 200 DT",
    price: "$35",
    MRP: "₹109.53/strip",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
    Flavour: "Unflavored",
    Composition: "CEFIXIME 200 mg Despersible Tablet",
    Packaging: "Pack of 10 X 10 tablets",
    Indication_Uses:
      "Used to treat bacterial infections such as respiratory and skin infections.",
    Dosage: "directed by the physician",
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
      budalecs,
      budalecs,
    ],
    name: "Budalecs",
    price: "$30",
    MRP: "₹130/packet ",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Unflavored",
    Composition: "Amoxicillin 500 mg, Clavulanic Acid 125 mg",
    Packaging: "5 packet in box",
    Indication_Uses: "Treats infections such as respiratory, urinary tract, and skin infections.",
    Dosage: "One tablet every 8 hours.",
    faq: [
      {
        question: "What infections can Budalecs treat?",
        answer: "Budalecs can treat respiratory, urinary tract, and skin infections."
      },
      {
        question: "Can I take this medication with food?",
        answer: "Yes, it can be taken with food to reduce stomach irritation."
      }
    ]
  
  },
 
];
const ProductDetails = async ({ params }: any) => {


  const productDetails = products.find((item) => item.id === Number(params.id));

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductItem productDetails={productDetails} />
    </>
  );
};

export default ProductDetails;
