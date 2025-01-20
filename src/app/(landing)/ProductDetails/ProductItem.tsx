"use client"
import React, { useState, useRef, useEffect } from "react";
import { Collapse } from "antd";
import { BiMinus, BiPlus } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const { Panel } = Collapse;

const ProductItem = ({ productDetails }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const swiperRef = useRef<any>(null);

  const customExpandIcon = ({ isActive }: { isActive: boolean }) => (
    <div
      className={`w-6 h-6 flex items-center justify-center rounded-full ${
        isActive ? "bg-blue-100" : "bg-primary"
      } text-white`}
    >
      {isActive ? (
        <BiMinus size={18} color="black" />
      ) : (
        <BiPlus size={18} color="white" />
      )}
    </div>
  );

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.realIndex;
      setCurrentImage(activeIndex);
    }
  }, [currentImage]);

  const breadcrumbItems: any = [
    { label: "Home", href: "/" },
    {
      label: productDetails?.name,
      href: `/ProductDetails/${productDetails?.id}`,
    },
  ];

  return (
    <>
      <Breadscrumb items={breadcrumbItems} />

      <div className="bg-gray-50 min-h-screen py-10 px-3">
        <div className="container mx-auto">
          {/* Product Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <Swiper
                ref={swiperRef}
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
                onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
              >
                {productDetails.image.map((src: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-96">
                      <img
                        src={src}
                        alt={`Medical Product ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex gap-2 mt-4">
                {productDetails.image.map((src: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`cursor-pointer w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      currentImage === index
                        ? "border-green-600"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {productDetails.name}
              </h1>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {productDetails?.description}
              </p>
              <div className="mb-8">
                <div className="mb-3">
                  <span className="font-medium text-gray-800">Flavour:</span>{" "}
                  {productDetails?.Flavour}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-800">
                    Composition:
                  </span>{" "}
                  {productDetails?.Composition}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-800">Packaging:</span>{" "}
                  {productDetails?.Packaging}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-800">
                    Indication & Uses:
                  </span>{" "}
                  {productDetails?.Indication_Uses}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-800">Dosage:</span> As{" "}
                  {productDetails?.Dosage}
                </div>
                <div className="mb-3">
                  <span className="font-medium text-lg text-orange-700">
                    MRP:
                  </span>{" "}
                  {productDetails?.MRP}
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <button className="bg-green-600 text-white py-2 px-6 text-sm font-medium rounded-md hover:bg-green-700">
                  Enquiry Now
                </button>
                {/* <button className="bg-gray-200 text-gray-700 py-2 px-6 text-sm font-medium rounded-md hover:bg-gray-300">
                  Add to Wishlist
                </button> */}
              </div>

              {/* Customer Support and Social Media Icons */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {/* <div className="mb-3">
                  <span className="font-medium">Returns:</span> You can return
                  items within 30 days.
                </div> */}
                <div>
                  <span className="font-medium">Customer Support:</span>{" "}
                  Available 24/7 for any product-related queries.
                </div>
              </div>
              <div className="mt-6 flex gap-20 text-xl text-gray-600">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Collapse
              accordion
              bordered={false}
              className="bg-blue-50"
              //@ts-ignore
              expandIcon={customExpandIcon}
              expandIconPosition="end"
            >
              {productDetails?.faq.map((faq: any) => (
                <Panel
                  header={
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                  }
                  key={faq.key}
                  className="p-4 "
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
