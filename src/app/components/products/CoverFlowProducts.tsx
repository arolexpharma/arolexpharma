"use client"; // Enables client-side rendering
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

const products = [

  {
    id: 1,
    image: "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Rabipose-DSR3T",
    price: "$50",
    description:
      "A medication used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-vector/realistic-medical-care-template-with-syringe-broken-capsule-with-plant-medicine-icons-hexagons_1284-35345.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Arocef - 200",
    price: "$35",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-vector/pharmacy-medication-pills-medicine_24877-51553.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Budalecs",
    price: "$30",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-vector/medical-care-background_23-2147490188.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Rabipose-DSR3T",
    price: "$50",
    description:
      "A medication used to treat certain stomach and esophagus problems such as acid reflux and ulcers.",
  },
  {
    id: 5,
    image: "https://img.freepik.com/free-vector/realistic-medical-care-template-with-syringe-broken-capsule-with-plant-medicine-icons-hexagons_1284-35345.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Arocef - 200",
    price: "$35",
    description:
      "An antibiotic used to treat infections caused by bacteria, including respiratory infections and skin infections.",
  },
  {
    id: 6,
    image: "https://img.freepik.com/free-vector/pharmacy-medication-pills-medicine_24877-51553.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
    name: "Budalecs",
    price: "$30",
    description:
      "A medication used for treating conditions such as bacterial infections and other health issues.",
  },
];

export default function ProductSlider() {
  return (
    <div className="w-full bg-gray-100 flex justify-center items-center">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow" // Apply the coverflow effect
        slidesPerView="auto" // Enable responsive auto width for the slides
        centeredSlides={true} // Center the active slide
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 3000, // Slide changes every 3 seconds
          disableOnInteraction: false, // Keeps autoplay after interaction
        }}
        coverflowEffect={{
          rotate: 0, // Rotation angle for the coverflow effect
          stretch: 0, // No stretching of slides
          depth: 0, // Depth of slides in 3D space
          modifier: 0,
          slideShadows: true,
        }}
        spaceBetween={0}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="swiper-slide-cover">
            <div
              className="relative w-full h-[500px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative text-white p-8">
                <p className="text-green-400 font-semibold mb-2">
                  From {product.price}
                </p>
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-sm max-w-xl mb-4">{product.description}</p>
                <button
                  className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={() => console.log(`${product.name} clicked`)}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
