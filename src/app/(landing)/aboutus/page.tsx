import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import React from "react";
import { Steps } from "antd";
import {
  FaAward,
  FaMicroscope,
  FaGlobe,
  FaCheckCircle,
  FaHandshake,
  FaLeaf,
  FaStethoscope,
} from "react-icons/fa";
import {
  FaSearch,
  FaCalendarAlt,
  FaPaintBrush,
  FaLaptopCode,
  FaFlask,
  FaRocket,
} from "react-icons/fa";
import OurTeam from "@/app/components/section/OurTeam";
import FAQSection from "@/app/components/section/FAQSection";
import Head from "next/head";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us - Arolex Pharmaceuticals",
  description:
    "Arolex Pharmaceuticals is your trusted partner in pharmaceutical manufacturing, delivering exceptional quality, cutting-edge innovation, and unparalleled reliability.",
  keywords:
    "Pharmaceuticals, Pharmaceutical Manufacturing, Healthcare, Contract Manufacturing, Medical Solutions, High-Quality Medicines",
  authors: [{ name: "Arolex Pharmaceuticals" }],
  openGraph: {
    title: "About Us - Arolex Pharmaceuticals",
    description:
      "Learn more about Arolex Pharmaceuticals, a leading manufacturer dedicated to delivering exceptional pharmaceutical solutions and healthcare products worldwide.",
    images: [
      {
        url: "https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309942.jpg",
      },
    ],
    url: "https://www.arolexpharma.com/aboutus",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const { Step } = Steps;

export default function AboutUs() {
  const breadcrumbItems: any = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
  ];

  return (
    <div>
      <Breadscrumb items={breadcrumbItems} />

      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 md:grid md:grid-cols-[50%_50%] items-center gap-8">
          <div>
            <img
              src="https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309942.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid"
              alt="Team working together"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About us</h1>
            <p className="text-gray-600 mb-6">
              As leading pharmaceutical manufacturers, we are dedicated to
              producing high-quality healthcare solutions for a better world.
            </p>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art facilities and stringent quality control
              processes ensure the production of safe, effective, and affordable
              medicines. With decades of experience in the pharmaceutical
              industry, we are trusted partners to healthcare providers
              worldwide.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to enhance lives by delivering innovative medical
              solutions that address the evolving healthcare needs of our
              clients and communities.
            </p>
            <button className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-sky-600 transition">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Process
          </h2>

          <Steps
            direction="vertical"
            size="default"
            current={-1}
            className="mx-auto max-w-3xl"
            items={[
              {
                title: <span className="font-bold">Discovery</span>,
                description:
                  "In this initial phase, we collaborate closely with you to understand your unique requirements, market demands, and product goals. We aim to create a customized approach tailored to your needs.",
                icon: <FaSearch className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Planning</span>,
                description:
                  "During the planning phase, we devise a comprehensive roadmap, complete with timelines, deliverables, and key milestones. This ensures smooth and efficient project execution.",
                icon: <FaCalendarAlt className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Design</span>,
                description:
                  "Our team of experts leverages their medical knowledge to design innovative solutions that align with regulatory standards and address specific healthcare challenges.",
                icon: <FaStethoscope className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Development</span>,
                description:
                  "Using state-of-the-art technologies and laboratory practices, we develop high-quality pharmaceutical products that prioritize patient safety and efficacy.",
                icon: <FaMicroscope className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Testing</span>,
                description:
                  "Our rigorous testing processes ensure that the products meet the highest standards of quality, safety, and performance before launch. This phase guarantees compliance with regulatory guidelines.",
                icon: <FaFlask className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Launch</span>,
                description:
                  "Once testing is complete, we proceed with product launch, distributing high-quality pharmaceutical solutions to healthcare providers and patients worldwide to enhance lives and outcomes.",
                icon: <FaRocket className="text-blue-500" />,
              },
            ]}
          />
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why choose us
          </h2>
          <p className="text-gray-600 mb-8">
            Arolex Pharmaceuticals is your trusted partner in pharmaceutical
            manufacturing, delivering exceptional quality, cutting-edge
            innovation, and unparalleled reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaAward size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                With decades of experience, we specialize in contract-based
                manufacturing and supply of pharmaceutical products, ensuring
                excellence at every step.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaMicroscope size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cutting-Edge R&D
              </h3>
              <p className="text-gray-600">
                Our dedicated R&D team pioneers innovative solutions to address
                evolving healthcare needs, making us leaders in pharmaceutical
                advancements.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaGlobe size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Supplying top-quality pharmaceutical products to healthcare
                providers and businesses across the globe, ensuring
                accessibility and reliability.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaCheckCircle size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                We adhere to the highest industry standards, ensuring our
                products are safe, effective, and of the finest quality.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaHandshake size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                Tailoring our manufacturing processes to meet the unique needs
                of our clients, ensuring a seamless partnership.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
                <FaLeaf size={32} />
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Committed to environmentally friendly practices, we strive for
                sustainable manufacturing and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <OurTeam /> */}
      <FAQSection />
    </div>
  );
}
