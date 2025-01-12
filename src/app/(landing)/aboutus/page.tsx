import Breadscrumb from "@/app/components/common/breadscrumb/Breadscrumb";
import React from "react";
import { Steps } from "antd";
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
                  "During the discovery phase, we understand your requirements, market needs, and target goals to create a tailored approach.",
                icon: <FaSearch className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Planning</span>,
                description:
                  "We create a detailed plan covering timelines, deliverables, and milestones to streamline the project effectively.",
                icon: <FaCalendarAlt className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Design</span>,
                description:
                  "Our expert team designs solutions that are practical, user-friendly, and align with your vision and industry standards.",
                icon: <FaPaintBrush className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Development</span>,
                description:
                  "We utilize advanced technologies to develop top-notch pharmaceutical solutions, ensuring safety and compliance.",
                icon: <FaLaptopCode className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Testing</span>,
                description:
                  "We conduct thorough testing to ensure that our processes and products meet the highest quality standards.",
                icon: <FaFlask className="text-blue-500" />,
              },
              {
                title: <span className="font-bold">Launch</span>,
                description:
                  "After final approval, our products are launched, helping healthcare providers and patients improve lives globally.",
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
            As pharmaceutical manufacturers, we pride ourselves on excellence,
            quality, and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                🏆
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Decades of experience in pharmaceutical manufacturing and
                healthcare innovation.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                🔬
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Cutting-Edge R&D
              </h3>
              <p className="text-gray-600">
                Advanced research and development to meet evolving medical
                challenges.
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <span className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                🌍
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Supplying high-quality pharmaceutical solutions to clients
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
      <FAQSection />
    </div>
  );
}
