"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import manufacture from "@/app/assets/images/manufacture.jpg";

const ResponsiveImageGrid = () => {
  // Card Component with Animation
  const Card = ({ image, title, subtitle, height, animation }: any) => {
    return (
      <motion.div
        initial={animation.initial} // Initial position (off-screen)
        whileInView={animation.whileInView} // Final position (onscreen)
        viewport={{ once: true, amount: 0.2 }} // Trigger only once
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
        className={`relative group overflow-hidden rounded-lg`}
        style={{
          height: height || "300px",
        }}
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={100}
          className={`transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="px-4 py-12 md:px-12 lg:px-24 bg-white relative bg-cover bg-center bg-no-repeat"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={manufacture}
          alt="Manufacturing"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Feature Heading */}
      <div className="relative z-10 text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Aerolex <span className="text-blue-600">Pharmaceutical</span> Manufacturing
        </h1>
        <p className="text-gray-600 mt-3 max-w-lg">
          At Aerolex Pharmaceutical, we specialize in producing high-quality medications across diverse market segments, including tablets, capsules, softgels, and more. 
          Our commitment to innovation and precision ensures that every product supports better health and improved quality of life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="grid grid-rows-2 gap-4">
          <Card
            image="https://img.freepik.com/free-photo/many-kind-medication-prepared-use-operation_1301-7797.jpg"
            title="Advanced Tablets"
            subtitle="High-Quality Solutions"
            height="300px"
            animation={{
              initial: { x: -100, opacity: 0 }, // Slide in from left
              whileInView: { x: 0, opacity: 1 }, // Move to default position
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <Card
              image="https://img.freepik.com/free-photo/many-kind-medication-prepared-use-operation_1301-7797.jpg"
              title="Softgel Capsules"
              subtitle="Precision Manufacturing"
              height="300px"
              animation={{
                initial: { x: -100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
              }}
            />
            <Card
              image="https://img.freepik.com/free-photo/many-kind-medication-prepared-use-operation_1301-7797.jpg"
              title="Innovative Formulations"
              subtitle="Meeting Global Standards"
              height="300px"
              animation={{
                initial: { x: 100, opacity: 0 }, // Slide in from right
                whileInView: { x: 0, opacity: 1 },
              }}
            />
          </div>
        </div>

        {/* Right Side */}
        <Card
          image="https://img.freepik.com/free-photo/many-kind-medication-prepared-use-operation_1301-7797.jpg"
          title="Comprehensive Production"
          subtitle="Diverse Product Segments"
          height="615px"
          animation={{
            initial: { x: 100, opacity: 0 }, // Slide in from right
            whileInView: { x: 0, opacity: 1 },
          }}
        />
      </div>
    </section>
  );
};

export default ResponsiveImageGrid;
