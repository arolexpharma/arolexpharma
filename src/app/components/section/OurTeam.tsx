"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Elina Wellies",
      title: "Senior Orthopedic Specialists",
      image: "https://img.freepik.com/free-photo/young-entrepreneur_1098-18139.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Dr. Megan Wilson",
      title: "Senior Orthopedic Specialists",
      image: "https://img.freepik.com/free-photo/man-work_144627-24872.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Dr. Marvin McKinney",
      title: "Senior Orthopedic Specialists",
      image: "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371898.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted", // Replace with actual image URL
    }
  ];

  return (
    <div className="bg-primary py-20 px-0 sm:px-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white text-sm bg-white/10 rounded-full inline-block px-3 py-1 mb-3">
            Our Team
          </p>
          <h2 className="text-4xl text-white font-bold mb-4">
            Our Orthopedic Specialists
          </h2>
          <p className="text-white text-lg">
            Our physicians are backed by a comprehensive team of specialists,
            including specially trained nurses, orthopedic technicians, physical
            and occupational therapists, and case managers.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="h-[400px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/40">
            ←
          </button>
          <button className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/40">
            →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default OurTeam;
