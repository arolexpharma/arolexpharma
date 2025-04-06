"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Import images
import MedicinesManufactured from "@/app/assets/images/banner/med.jpg";
import arolex from "@/app/assets/images/banner/aerolex.jpg";
import med from "@/app/assets/images/banner/med.jpg";
import medicines from "@/app/assets/images/banner/medcines.jpg";
// import raniposebanner from '@/app/assets/images/products/raniposebanner.png'
// Configure image data
const bannerImages = [
  {
    src: MedicinesManufactured,
    alt: "Arolex Pharma manufacturing facility producing high-quality medicines",
  },
  {
    src: arolex,
    alt: "Arolex Pharma company logo and headquarters",
  },
  {
    src: med,
    alt: "Pharmaceutical products manufactured by Arolex Pharma",
  },
  {
    src: medicines,
    alt: "Wide range of medicines produced by Arolex Pharma",
  },
];

export default function Banner() {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Enquiry Request - Arolex Pharma";
    const body = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email: ${formData.email}
      City: ${formData.city}
      Contact: ${formData.contact}
      Message: ${formData.message}
    `;
    window.location.href = `mailto:arolexpharma@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="relative w-full" aria-label="Arolex Pharma Banner">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
        navigation={false}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center">
        <div className="container mx-auto text-white px-6 md:px-5">
          <div className="max-w-sm md:max-w-2xl">
            <span className="bg-green-600 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full mb-4 inline-block">
              Leading Pharmaceutical Solutions
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <strong>Arolex Pharma</strong> Care Through Innovation{" "}
              <span className="text-green-500">
                in Pharmaceutical Manufacturing
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-lg leading-relaxed">
              <strong>Arolex Pharma</strong> specializes in contract
              manufacturing, marketing,{" "}
              <span className="text-green-300">export</span>, and supply of
              high-quality pharmaceuticals, including antibiotics,
              nutraceuticals, painkillers, injections, and more. We meet global
              standards with innovative, tailored solutions.
            </p>

            <div className="mt-6 flex flex-wrap sm:flex-nowrap gap-4">
              <Link
                href="/contactus"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-300 text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-300 text-center"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <motion.aside
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="hidden lg:block absolute bottom-[-40px] md:bottom-[-50px] right-5 bg-white shadow-lg rounded-lg p-6 w-full max-w-[400px] z-30"
        aria-label="Enquiry Form"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center">
          Enquiry Now
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <label htmlFor="contact" className="sr-only">
              Contact
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded resize-none h-24"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-700 text-white py-3 rounded-lg transition duration-300"
          >
            Submit Enquiry
          </button>
        </form>
      </motion.aside>
    </section>
  );
}
