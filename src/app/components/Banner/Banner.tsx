"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import MedecinesManufactured from "@/app/assets/images/banner/medecinesManufactured.jpg";
import arolex from "@/app/assets/images/banner/aerolex.jpg";
import med from "@/app/assets/images/banner/med.jpg";
import medcines from "@/app/assets/images/banner/medcines.jpg";
import medecines from "@/app/assets/images/banner/medecines.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
        navigation={{ nextEl: null, prevEl: null }}
      >
        {[MedecinesManufactured, arolex, med, medcines, medecines].map(
          (image, index) => (
            <SwiperSlide key={index} className="relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center">
        <div className="container mx-auto text-white px-6 md:px-5">
          <div className="max-w-sm md:max-w-2xl ">
            <span className="bg-green-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full mb-4 inline-block">
              Leading Pharmaceutical Solutions
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-2">
              Care Through Innovation{" "}
              <span className="text-green-500">
                in Pharmaceutical Manufacturing.
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-lg leading-relaxed">
              Arolex Pharmaceuticals specializes in contract-based
              manufacturing, marketing,{" "}
              <span className="text-green-300">export</span>, and supplying
              high-quality pharmaceutical products, including antibiotics,
              nutraceuticals, painkillers, injections, syrups, tablets, drops,
              gastrointestinal drugs, and many more. Our commitment to
              innovation ensures that we meet global standards while providing
              tailored solutions to our clients.
            </p>

            <Link href={"/contactus"}>
              <button className="mt-4 md:mt-6 bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="hidden lg:block absolute bottom-[-40px] md:bottom-[-50px] right-5 bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-[400px] z-30"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center">
          Enquiry Now
        </h3>
        <form
          action="mailto:arolexpharma@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-2 md:space-y-4"
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              className="w-full md:w-1/2 p-2 md:p-3 border rounded"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-2 md:p-3 border rounded mt-2 md:mt-0"
              required
            />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full p-2 md:p-3 border rounded"
            required
          />
          <input
            type="text"
            name="City"
            placeholder="City"
            className="w-full p-2 md:p-3 border rounded"
            required
          />
          <input
            type="text"
            name="Contact"
            placeholder="Contact"
            className="w-full p-2 md:p-3 border rounded"
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            className="w-full p-2 md:p-3 border rounded resize-none h-24"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-sky-400 text-white py-2 md:py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
