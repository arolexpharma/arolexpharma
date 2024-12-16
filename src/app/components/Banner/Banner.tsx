"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import MedecinesManufactured from "@/app/assets/images/banner/medecinesManufactured.jpg";
import aerolex from "@/app/assets/images/banner/aerolex.jpg";
import med from "@/app/assets/images/banner/med.jpg";
import medcines from "@/app/assets/images/banner/medcines.jpg";
import medecines from "@/app/assets/images/banner/medecines.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Banner() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="relative w-full">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
        navigation={{ nextEl: null, prevEl: null }}
      >
        <SwiperSlide className="relative">
          <Image
            src={MedecinesManufactured}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={aerolex}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={med}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={medcines}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <Image
            src={medecines}
            alt="Slide 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        </SwiperSlide>
      </Swiper>

      {/* Left Content */}
      <div className="absolute top-1/4 left-6 md:left-12 text-white max-w-sm md:max-w-2xl z-50 p-4">

        <span className="bg-green-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full mb-4 inline-block">
          Get The Best Doctor
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Orthopedic care done right.{" "}
          <span className="text-green-500">Here.</span>
        </h1>
        <p className="mt-4 text-sm md:text-lg leading-relaxed">
          Backed by leading-edge technology and continual improvement of surgical
          techniques, our highly-skilled team offers early diagnosis and
          sophisticated treatment options.
        </p>
        <button className="mt-4 md:mt-6 bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition">
          Get Started
        </button>
      </div>

      {/* Appointment Form */}
      
      <motion.div   initial="hidden"
        animate="visible"
        variants={formVariants} className="absolute top-[700px] md:top-1/4  md:right-12 transform -translate-y-1/2 md:translate-y-0 bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-[400px] z-50">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
          Request an Appointment
        </h3>
        <form className="space-y-2 md:space-y-4">
          <select className="w-full p-2 md:p-3 border rounded">
            <option>New Patient & Current Patient</option>
          </select>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full md:w-1/2 p-2 md:p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full md:w-1/2 p-2 md:p-3 border rounded mt-2 md:mt-0"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 md:p-3 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 md:p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Insurance"
            className="w-full p-2 md:p-3 border rounded"
          />
          <select className="w-full p-2 md:p-3 border rounded">
            <option>Preferred Location</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 md:py-3 rounded-lg transition"
          >
            Request & Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
