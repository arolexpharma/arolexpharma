"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import probest from "../../assets/images/clients/logo.png";
import farlex from "../../assets/images/clients/falex.png";
import bharat from "../../assets/images/clients/bharat.png";
import sira from "../../assets/images/clients/svH72kUb.webp";
import sanify from "../../assets/images/clients/Sanify-UpdLogo.jpg";
import Button from "../button/Button";
export default function OurClientSection() {
  const clients = [
    {
      id: 1,
      name: "Probest",
      logo: probest,
    },
    {
      id: 2,
      name: "The New York Times",
      logo: farlex,
    },
    {
      id: 3,
      name: "BBC",
      logo: bharat,
    },
    {
      id: 4,
      name: "The New York Times",
      logo: sira,
    },
    {
      id: 5,
      name: "BBC",
      logo: sanify,
    },
  ];

  return (
    <section className="p-6 py-16 sm:py-20 bg-primary">
      <div className="text-center mb-6">
        <p className="text-white text-xs sm:text-sm bg-lime-500 rounded-full inline-block px-3 py-1 mb-6">
          Our Clients
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Take a look at our clients
        </h2>
        <p className="text-white text-sm sm:text-base lg:text-lg">
          We did a great job with these companies. You can be next to work with!
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-5 gap-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex justify-center items-center rounded-lg bg-white"
          >
            <Image
              src={client.logo}
              alt={client.name}
              className="object-cover rounded-xl"
              height={400}
              width={300}
            />
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex justify-center items-center  rounded-lg bg-white hover:shadow-lg">
                <Image
                  src={client.logo}
                  alt={client.name}
                  className="object-cover rounded-xl"
                  height={400}
                  width={300}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-100 text-sm sm:text-base lg:text-lg mb-2 font-medium">
          Be smart. Let us do our job.
        </p>
        <Button
          href="/aboutus"
          text="Try Us Out"
          className="bg-lime-500 text-white text-xs sm:text-sm lg:text-base font-medium px-3 py-2 rounded-lg hover:scale-105 transition"
        ></Button>
      </div>
    </section>
  );
}
