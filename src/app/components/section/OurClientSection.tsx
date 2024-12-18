"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function OurClientSection() {
  const clients = [
    { id: 1, name: "BBC", logo: "https://img.freepik.com/free-vector/organic-green-bio-lab-logo-vector-icon_126523-728.jpg" },
    { id: 2, name: "The New York Times", logo: "https://img.freepik.com/free-vector/green-eco-star-abstract-logo-icon_126523-958.jpg" },
    { id: 3, name: "Times", logo: "https://img.freepik.com/free-vector/blood-donation-logo-branding-identity-corporate-vector-design_460848-13918.jpg" },
    { id: 4, name: "Aston Martin", logo: "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-13909.jpg" },
    { id: 5, name: "TESCO", logo: "https://img.freepik.com/free-vector/happiness-logo-template-vector-design_460848-9760.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid" },
    { id: 6, name: "BBC", logo: "https://img.freepik.com/free-vector/organic-green-bio-lab-logo-vector-icon_126523-728.jpg" },
    { id: 7, name: "The New York Times", logo: "https://img.freepik.com/free-vector/green-eco-star-abstract-logo-icon_126523-958.jpg" },
    { id: 8, name: "Times", logo: "https://img.freepik.com/free-vector/blood-donation-logo-branding-identity-corporate-vector-design_460848-13918.jpg" },
    { id: 9, name: "Aston Martin", logo: "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-13909.jpg" },
    { id: 10, name: "TESCO", logo: "https://img.freepik.com/free-vector/happiness-logo-template-vector-design_460848-9760.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid" },
 
  ];

  return (
    <section className="p-6 py-28 bg-primary">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-white">Take a look at our clients</h2>
        <p className="text-white">
          We did a great job with these companies. You can be next to work with!
        </p>
      </div>

      {/* Large Screen - 2 Rows */}
      <div className="hidden lg:grid grid-cols-5 gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center  rounded-lg shadow hover:shadow-lg"
          >
            <Image
              src={client.logo}
              alt={client.name}
              className="object-cover"
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>

      {/* Small Screen - Swiper */}
      <div className="lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex justify-center items-center border p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-8">
        <p className="text-gray-100 mb-2">Be smart. Let us do our job.</p>
        <button className="bg-gradient-to-r from-lime-500 to-lime-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
          Try us out
        </button>
      </div>
    </section>
  );
}
