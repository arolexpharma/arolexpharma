"use client";
import React, { useState, useRef, useEffect } from "react";

import { BiMinus, BiPlus } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Collapse, Modal, Form, Input } from "antd";
import { Autoplay, Navigation } from "swiper/modules";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const { Panel } = Collapse;

const ProductItem = ({ productDetails }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const swiperRef = useRef<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    contact: "",
    message: "",
  });

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const mailtoLink = `mailto:arolexpharma@gmail.com?subject=Enquiry%20Request&body=${encodeURIComponent(
      `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
City: ${formData.city}
Contact: ${formData.contact}
Message: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

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
                    <div className="w-full h-96 relative">
                      <Image
                        src={src}
                        alt={`Medical Product ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
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
                    <div className="w-full h-96 relative">
                      <Image
                        src={src}
                        alt={`Medical Product ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                <button
                  onClick={showModal}
                  className="bg-green-600 text-white py-2 px-6 text-sm font-medium rounded-md hover:bg-green-700"
                >
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
                  href="https://www.facebook.com/profile.php?id=61572516152319&sk=about"
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
                  href="https://www.instagram.com/arolexpharma/profilecard/?igsh=MWhyaXFkODI0MmI0ag=="
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

        <Modal
          title="Enquiry Now"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          centered
        >
          <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 md:p-3 border rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 md:p-3 border rounded mt-2 md:mt-0"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border rounded resize-none h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-sky-400 text-white py-2 md:py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ProductItem;
