"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Monish",
      title: "CEO",
      image:
        "https://img.freepik.com/free-photo/young-entrepreneur_1098-18139.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    },
    {
      id: 2,
      name: "Danish",
      title: "CEO",
      image:
        "https://img.freepik.com/free-photo/man-work_144627-24872.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    },
    {
      id: 3,
      name: "Shakir",
      title: "CEO",
      image:
        "https://img.freepik.com/free-photo/designer-working-3d-model_23-2149371898.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_tags_boosted",
    },
  ];

  return (
    <section className="bg-primary py-16 sm:py-20 px-0 sm:px-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white text-sm bg-lime-500 rounded-full inline-block px-3 py-1 mb-6">
           About Us
          </p>
          <h2 className="text-3xl text-white font-bold mb-4">
          Directors
          </h2>
         
          <p className="text-white text-sm sm:text-lg mt-4">
          As leading pharmaceutical manufacturers, we are dedicated to producing high-quality healthcare solutions for a better world with our dedicated Team.
          </p>
        </div>
        {/* Danish Khan is the founder and managing director of arolexpharmaceuticals Private Limited */}

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
              <div className="h-[400px] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
