"use client"; // Enables client-side rendering
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { useRouter } from "next/navigation";
import rabipose from "../../assets/images/products/rabipose.jpg";
import Image from "next/image";
import { products } from "@/app/utils/rawdata";

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
                src={product.image[0]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority={false}
                loading="lazy"
                className="absolute inset-0 z-0"
              />
              <div className="absolute bottom-0 z-10 p-4 sm:p-6 text-white bg-black bg-opacity-50 backdrop-blur-md w-full">
                <p className="text-green-400 font-semibold mb-2">
                  From MRP: {product.MRP}
                </p>
                <h2 className="sm:text-2xl text-sm max-w-xl mb-4">
                  {product.name}
                </h2>
                {/* <p className="text-[12px] sm:text-sm max-w-xl mb-4">
                  {product.description}
                </p> */}
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
