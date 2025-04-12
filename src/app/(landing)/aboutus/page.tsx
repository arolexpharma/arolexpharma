import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import React from "react";
import { Steps } from "antd";
import {
  FaMicroscope,
  FaGlobe,
  FaCheckCircle,
  FaLeaf,
  FaStethoscope,
} from "react-icons/fa";
import {
  FaSearch,
  FaCalendarAlt,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";
import {
  FaLightbulb,
  FaAward,
  FaFlask,
  FaHandsHelping,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import Team from "@/app/assets/images/aboutus/doctorTeam.png";
import OurTeam from "@/app/components/section/OurTeam";
import FAQSection from "@/app/components/section/FAQSection";
import Head from "next/head";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Us - Arolex Pharmaceuticals",
  description:
    "Arolex Pharmaceuticals is your trusted partner in pharmaceutical manufacturing, delivering exceptional quality, cutting-edge innovation, and unparalleled reliability.",
  keywords:
    "arolex pharma, Pharmaceuticals, Pharmaceutical Manufacturing, Healthcare, Contract Manufacturing, Medical Solutions, High-Quality Medicines",
  alternates: {
    canonical: "https://www.arolexpharma.com/aboutus",
  },
};

const features = [
  {
    icon: <FaLightbulb className="text-4xl mb-4 text-blue-600" />,
    title: "Vision-Driven Leadership",
    description:
      "Founded by Danish Khan and co-led with Shakir Ahmad and Dr. Monish Khan, our leadership brings a rare blend of business acumen, deep-rooted passion, and scientific expertise.",
  },
  {
    icon: <FaAward className="text-4xl mb-4 text-blue-600" />,
    title: "Commitment to Quality",
    description:
      "Every product we offer is crafted with precision and care. We adhere to strict quality standards and regulatory guidelines.",
  },
  {
    icon: <FaFlask className="text-4xl mb-4 text-blue-600" />,
    title: "Scientific Expertise",
    description:
      "With Dr. Monish Khan's medical and pharmaceutical knowledge at the core, our R&D and product development are backed by science.",
  },
  {
    icon: <FaHandsHelping className="text-4xl mb-4 text-blue-600" />,
    title: "Empowering Through Employment",
    description:
      "Our goal isn't just to grow a business — it's to build a movement that creates jobs and uplifts communities.",
  },
  {
    icon: <FaHandshake className="text-4xl mb-4 text-blue-600" />,
    title: "Trusted Partnerships",
    description:
      "Our transparent practices, ethical operations, and responsive support make Arolex a reliable name in pharmaceuticals.",
  },
  {
    icon: <FaRocket className="text-4xl mb-4 text-blue-600" />,
    title: "Innovation with Purpose",
    description:
      "We continuously invest in research and modern techniques to bring meaningful change to people's lives.",
  },
];

export default function AboutUs() {
  const breadcrumbItems: any = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
  ];

  return (
    <div>
      <Breadscrumb items={breadcrumbItems} />

      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 items-center gap-8 ">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              About us
            </h1>
            <p className="text-gray-600 mb-6">
              Arolex Pharmaceuticals Pvt. Ltd. was founded with a strong vision
              and deeper purpose. What began as a small pharmaceutical franchise
              in 2018 by Danish Khan has now grown into a trusted name in the
              industry — driven by dedication, vision, and teamwork.
            </p>
            <p className="text-gray-600 mb-6">
              In 2025, Danish Khan transformed the firm into a Private Limited
              Company named Arolex pharmaceuticals pvt ltd along with his
              childhood friend and co-founder, Shakir Ahmad. Shakir is not just
              a business partner — he’s like a brother, a true visionary with a
              strong will to make a big impact. From their early school days to
              completing their BBA together, both Danish and Shakir shared a
              dream to build a company that creates jobs, empowers youth, and
              contributes to India’s economic strength. Shakir’s courage, clear
              thinking, and leadership have been instrumental in shaping
              Arolex’s growth.
            </p>
            <p className="text-gray-600 mb-8">
              The leadership team also includes Dr. Monish Khan, Danish’s real
              brother, a medical professional with in-depth knowledge of
              pharmaceutical molecules, bringing strong scientific expertise to
              the business.
            </p>
            <p className="text-gray-600 mb-8">
              Together, Danish, Shakir, and Monish lead Arolex Pharmaceuticals
              Pvt. Ltd. with a shared commitment to innovation, quality, and
              social impact
            </p>
            <div className="flex justify-center items-center">
              <Link
                href={"/contactus"}
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-sky-600 transition"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 md:grid md:grid-cols-[50%_50%] items-center gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Directors
            </h1>
            <p className="text-gray-600 mb-6">
              Danish Khan, the founder and visionary behind our company, began
              his journey with a dream and an unshakable determination. While
              pursuing his BBA in Meerut, his family faced financial
              difficulties that changed the course of his life. With courage and
              a sense of responsibility, Danish decided to support his father’s
              struggling medical business by starting a pharmaceutical franchise
              — all while continuing his studies.
            </p>
            <p className="text-gray-600 mb-6">
              Starting from scratch without any vehicle, office, or team, he
              took on every role himself — medical representative, accountant,
              and even packaging staff. With relentless hard work and a passion
              to build something meaningful, he turned challenges into
              milestones.
            </p>
            <p className="text-gray-600 mb-8">
              In 2018, he registered his own firm. Over the past 7 years, that
              single-person effort has grown into a thriving Private Limited
              company, with a strong team of 40 dedicated professionals, a fully
              functional office in his hometown, and a corporate presence in
              Delhi.
            </p>
            <p className="text-gray-600 mb-8">
              Today, in 2025 we’re proud to be a trusted name in the
              pharmaceutical sector — a company born out of resilience, built on
              trust, and growing with purpose.
            </p>
          </div>
          <div>
            <Image
              src={Team}
              alt="Team working together"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="flex text-center items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <OurTeam /> */}
      <FAQSection />
    </div>
  );
}
