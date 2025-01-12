"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Product Range Data
const productRange = [
  {
    title: "Tablets",
    description:
      "We are offering a wide range of tablets in various therapeutic forms.",
    image:
      "https://img.freepik.com/free-photo/colorful-pills-with-white-container_23-2148506763.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Cardiac Diabetic",
    description:
      "We provide the best quality Cardiac Diabetic for distribution across India.",
    image:
      "https://img.freepik.com/free-photo/person-holding-anatomic-heart-model-educational-purpose_23-2149894453.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Capsules",
    description:
      "Farlex Pharmaceuticals is one of the best to offer the capsules range.",
    image:
      "https://img.freepik.com/free-photo/white-pill-container-blue-background_23-2148506747.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Syrups",
    description:
      "Our syrup range is the most effective and best in quality. Best Quality.",
    image:
      "https://img.freepik.com/free-photo/medicine-vaccine-bottles_181624-41050.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Injectables",
    description:
      "We never compromise with the quality of our Injectables range.",
    image:
      "https://img.freepik.com/free-photo/covid-still-life-with-vaccine_23-2149079636.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Eye & Ear Drops",
    description:
      "Grab the best opportunity in the Eye & Ear Drops and get affordable products.",
    image:
      "https://img.freepik.com/free-photo/close-up-female-pours-drops-red-eye-has-conjuctivitis-glaucoma-bad-eyesight-pain-eyes-pain-treatment-concept-woman-cures-red-blood-eye_176532-8745.jpg?t=st=1734285254~exp=1734288854~hmac=3bb560ce842f80d31cd8a8e4200ce2afb62ba9b085b4033e30097754fa5719bc&w=1060",
  },
  {
    title: "Nasal Sprays & Drops",
    description:
      "Our top quality Nasal Drops & Sprays range is highly recommended by doctors and pharma professionals.",
    image:
      "https://img.freepik.com/free-photo/composition-medical-objects-with-copyspace_23-2147822665.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
  {
    title: "Derma Products",
    description:
      "We offer the most effective derma range which is best for the skin.",
    image:
      "https://img.freepik.com/free-photo/skin-care-banner-concept-with-lotion_23-2149449104.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid",
  },
];

const ProductRangeSlider: React.FC = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-blue-50 py-16 sm:py-20 px-6">
      <div className="container mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Product Range
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our company is offering the wide range of pharma products with the
            best quality.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        {/* <div
          ref={navigationPrevRef}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-full p-3 shadow-md text-white"
        >
          <FaChevronLeft size={20} />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-blue-500 hover:bg-blue-600 rounded-full p-3 shadow-md text-white"
        >
          <FaChevronRight size={20} />
        </div> */}

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {productRange.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mb-10">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="w-full bg-gradient-to-r from-lime-500 to-lime-600  text-white py-2 rounded-full hover:bg-lime-600">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductRangeSlider;
