"use client"; // Enables client-side rendering
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import rabipose from '../../assets/images/products/rabipose.jpg'
import Image from "next/image";
const products = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827813.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "MRP :- ₹85/STRIP",
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
    image: "https://img.freepik.com/free-photo/pleased-young-male-doctor-wearing-medical-robe-stethoscope-around-neck-looking-camera-holding-glass-water-showing-packs-pills-isolated-purple-background_141793-135516.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
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
    image: "https://img.freepik.com/free-photo/smiling-doctor-young-blonde-girl-wearing-stethoscope-medical-gown-dental-brace-holding-pills-with-both-hands-isolated-white-background_141793-38731.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    name: "Budalecs",
    price: "$30",
    MRP: "₹130/packet ",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Lemon",
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
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/woman-working-as-doctor_23-2148827813.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    name: "Rabipose-DSR3T",
    price: "$50",
    MRP: "MRP :- ₹85/STRIP",
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
    image: "https://img.freepik.com/free-photo/pleased-young-male-doctor-wearing-medical-robe-stethoscope-around-neck-looking-camera-holding-glass-water-showing-packs-pills-isolated-purple-background_141793-135516.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
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
    image: "https://img.freepik.com/free-photo/smiling-doctor-young-blonde-girl-wearing-stethoscope-medical-gown-dental-brace-holding-pills-with-both-hands-isolated-white-background_141793-38731.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    name: "Budalecs",
    price: "$30",
    MRP: "₹130/packet ",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
    Flavour: "Lemon",
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
  // {
  //   id: 4,
  //   image: ["https://img.freepik.com/free-photo/happy-young-girl-doctor-white-coat-with-stethoscope-around-neck-holding-blister-with-pills-pointing-with-index-finger-it-smiling-confident-standing-purple_141793-128176.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted"],
  //   name: "Sexual",
  //   price: "$50",
  //   MRP: "$60",
  //   description:
  //     "A medication used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
  //   Flavour: "Mint",
  //   Composition: "Rabeprazole Sodium 20 mg, Domperidone 10 mg",
  //   Packaging: "Box of 10 tablets",
  //   Indication_Uses: "For treatment of acid reflux, ulcers, and gastroesophageal reflux disease (GERD).",
  //   Dosage: "One tablet daily before a meal.",
  //   faq: [
  //     {
  //       question: "What is Rabipose-DSR3T used for?",
  //       answer: "It is used to treat acid reflux and ulcers."
  //     },
  //     {
  //       question: "Is this medication safe?",
  //       answer: "Yes, when used as prescribed by a doctor."
  //     }
  //   ]
  // },

];

export default function ProductSlider() {
  const router = useRouter();
  return (
    <div className="w-full bg-gray-100 flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow" 
        slidesPerView="auto" 
        centeredSlides={true} 
        loop={true} 
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0, 
          stretch: 0, 
          depth: 0, 
          modifier: 0,
          slideShadows: true,
        }}
        spaceBetween={0}
        className="w-full"
      >
                {products.map((product) => (
          <SwiperSlide key={product.id} className="swiper-slide-cover">
            <div className="relative w-full h-[320px] sm:h-[500px] flex items-center">
              <Image
                src={typeof product.image === "string" ? product.image : product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="absolute bottom-0 z-10 p-4 sm:p-6 text-white bg-black bg-opacity-50 backdrop-blur-md">
                <p className="text-green-400 font-semibold mb-2">
                  From MRP: {product.MRP}
                </p>
                <h2 className="text-xl sm:text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-[12px] sm:text-sm max-w-xl mb-4">{product.description}</p>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition duration-200"
                  onClick={() => router.push(`/ProductDetails/${product.id}`)}
                >
                  Know More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
