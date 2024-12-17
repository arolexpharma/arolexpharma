"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import manufacture from "@/app/assets/images/manufacture.jpg";


const ResponsiveImageGrid = () => {
  
  const Card = ({ image, title, subtitle, height, animation }: any) => {
    const [cardHeight, setCardHeight] = useState(height || "300px");

   
    useEffect(() => {
      const updateHeight = () => {
        if (window.innerWidth <= 768) {
          setCardHeight(height === "615px" ? "300px" : height);
        } else {
          setCardHeight(height);
        }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);

      return () => window.removeEventListener("resize", updateHeight);
    }, [height]);

    return (
      <motion.div
        initial={animation.initial} 
        whileInView={animation.whileInView} 
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative group overflow-hidden rounded-lg`}
        style={{
          height: cardHeight,
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
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 overflow-hidden">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className=" px-4 py-20 md:px-12 lg:px-24 bg-white relative bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      
      <div className="absolute inset-0 z-0">
        <Image
          src={manufacture}
          alt="Manufacturing"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      
      <div className="container mx-auto relative z-10 text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Aerolex <span className="text-blue-600">Pharmaceutical</span> Manufacturing
        </h1>
        <p className="text-gray-600 mt-3 max-w-lg">
          At Aerolex Pharmaceutical, we specialize in producing high-quality medications across diverse market segments, including tablets, capsules, softgels, and more. 
          Our commitment to innovation and precision ensures that every product supports better health and improved quality of life.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="grid grid-rows-2 gap-4">
          <Card
            image="https://img.freepik.com/free-photo/portrait-professional-technologist-protective-uniform-looking-aside_342744-1166.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted"
            title="Advanced Tablets"
            subtitle="High-Quality Solutions"
            height="300px"
            animation={{
              initial: { x: -100, opacity: 0 }, 
              whileInView: { x: 0, opacity: 1 }, 
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <Card
              image="https://img.freepik.com/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13375.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted"
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
                initial: { x: 100, opacity: 0 }, 
                whileInView: { x: 0, opacity: 1 },
              }}
            />
          </div>
        </div>

        {/* Right Side */}
        <Card
          image="https://img.freepik.com/free-photo/man-working-as-pharmacist_23-2151734589.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted"
          title="Comprehensive Production"
          subtitle="Diverse Product Segments"
          height="615px"
          animation={{
            initial: { x: 100, opacity: 0 }, 
            whileInView: { x: 0, opacity: 1 },
          }}
        />
      </div>
    </section>
  );
};

export default ResponsiveImageGrid;
