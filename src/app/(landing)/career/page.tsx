"use client";
import Button from "@/app/components/button/Button";
import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import Image from "next/image";
import React, { useState } from "react";
import { FaSitemap, FaChartLine, FaAward } from "react-icons/fa";
import CareerForm from "./CareerForm";
import FemaleDoctor from "@/app/assets/images/career/femaleDoctor.png";
const breadcrumbItems: any = [
  { label: "Home", href: "/" },
  { label: "Career", href: `/career` },
];

export default function Page() {
  return (
    <>
      <Breadscrumb items={breadcrumbItems} />
      <div className="bg-blue-50">
        <div className="bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 py-10 border-b-2">
              Build Your Career with Us
            </h2>
            <div className="px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Join and Achieve Your Dream Job With Us
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Explore opportunities to grow professionally and make a
                  difference in the pharmaceutical industry.
                </p>
              </div>
              <div>
                <CareerForm />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Value Culture
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <div className="text-primary text-4xl mb-4">
                <FaSitemap />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Organization Structure
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                A streamlined structure to ensure smooth operations and better
                collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
              <div className="text-primary text-4xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Fastest Growing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                Be part of a rapidly growing pharmaceutical company making an
                impact worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
              <div className="text-primary text-4xl mb-4 ">
                <FaAward />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                Dedication and Reward
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center">
                We value hard work and dedication and provide rewards that
                matter.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={FemaleDoctor}
                alt="doctor"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 ">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Throw Fun Events that Allow People to Interact and Bond
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 ">
                Join a workplace where we not only focus on growth but also on
                building connections through fun events and flexible hours.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Open Positions
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="divide-y divide-gray-300">
              <div className="py-4 flex justify-between">
                <div>
                  <h3 className="text-[12px] sm:text-lg font-semibold text-gray-800">
                    Clinical Pharmacist
                  </h3>
                  <p className="text-[12px] sm:text-base text-gray-600">
                    Khatauli, India
                  </p>
                </div>
                <Button
                  href="/"
                  text="Call Now"
                  className="text-blue-600 font-semibold p-2 text-[12px]"
                />
              </div>
              <div className="py-4 flex justify-between">
                <div>
                  <h3 className="text-[12px] sm:text-lg font-semibold text-gray-800">
                    Pharmaceutical Sales Representative
                  </h3>
                  <p className="text-[12px] sm:text-base text-gray-600">
                    Khatauli, India
                  </p>
                </div>
                <Button
                  href="/"
                  text="Call Now"
                  className="text-blue-600 font-semibold p-2 text-[12px]"
                />
              </div>
              <div className="py-4 flex justify-between">
                <div>
                  <h3 className="text-[12px] sm:text-lg font-semibold text-gray-800">
                    Quality Assurance Specialist
                  </h3>
                  <p className="text-[12px] sm:text-base text-gray-600">
                    Khatauli, India
                  </p>
                </div>
                <Button
                  href="/"
                  text="Call Now"
                  className="text-blue-600 font-semibold p-2 text-[12px]"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
