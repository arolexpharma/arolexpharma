"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import manufacture from "@/app/assets/images/manufacture.jpeg";
import PharmaImage from "@/app/assets/images/pharma/pharma_manufacture.png";
import PharmaCompanyImage from "@/app/assets/images/pharma/pharma_manufacture_company.png";
import PharmaManufactureImage from "@/app/assets/images/pharma/pharma_manufacture_medicines.png";
import PharmaMedicineImage from "@/app/assets/images/pharma/pharma_manufacture_medicine.png";

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
        className={`relative group overflow-hidden rounded-lg `}
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
          priority={false}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 overflow-hidden">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className=" px-4 py-16 sm:py-20 md:px-12 lg:px-24 bg-white relative bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={manufacture}
          alt="Manufacturing"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={100}
          priority={false}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto relative z-10 text-center md:text-left mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Arolex <span className="text-blue-600">Pharmaceutical</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-5xl">
          At Arolex Pharmaceuticals Pvt. Ltd., we are dedicated to creating
          high-quality medicines that improve human health and well-being.
          Through trusted LL partnerships, we ensure top-notch manufacturing
          standards while expanding our reach across India and beyond. With a
          growing global presence, Arolex is actively engaging with
          international clients and aiming to deliver innovative healthcare
          solutions worldwide
        </p>
        <p className="text-gray-600 mt-3 max-w-5xl">
          With a growing global presence, Arolex is actively engaging with
          international clients and aiming to deliver innovative healthcare
          solutions worldwide
        </p>
      </div>

      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-rows-2 gap-4">
          <Card
            image={PharmaImage}
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
              image={PharmaCompanyImage}
              title="Softgel Capsules"
              subtitle="Precision Manufacturing"
              height="300px"
              animation={{
                initial: { x: -100, opacity: 0 },
                whileInView: { x: 0, opacity: 1 },
              }}
            />
            <Card
              image={PharmaManufactureImage}
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

        <Card
          image={PharmaMedicineImage}
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
