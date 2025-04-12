import React from "react";
import Image from "next/image";
import Button from "../button/Button";
import TeamImage from "../../assets/images/aboutus/doctorTeam.png";
export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="text-center mb-12">
        <p className="text-white text-sm bg-lime-500 rounded-full inline-block px-3 py-1 mb-6">
          Who We Are
        </p>
        <h2 className="text-2xl sm:text-4xl text-white font-bold mb-4">
          Innovating Healthcare
        </h2>
      </div>

      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <Image
            src={TeamImage}
            alt="Team working together"
            width={550}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-[550px] sm:max-w-[400px] md:max-w-[550px]"
          />
        </div>

        <div>
          <p className="text-white mb-6 text-base sm:text-lg leading-relaxed">
            Arolex Pharmaceuticals Pvt. Ltd. was founded with a strong vision
            and deeper purpose. What began as a small pharmaceutical franchise
            in 2018 by Danish Khan has now grown into a trusted name in the
            industry — driven by dedication, vision, and teamwork.
          </p>
          <p className="text-white mb-6 text-base sm:text-lg leading-relaxed">
            In 2025, Danish Khan transformed the firm into a Private Limited
            Company named Arolex pharmaceuticals pvt ltd along with his
            childhood friend and co-founder, Shakir Ahmad. Shakir is not just a
            business partner — he’s like a brother, a true visionary with a
            strong will to make a big impact. From their early school days to
            completing their BBA together, both Danish and Shakir shared a dream
            to build a company that creates jobs, empowers youth, and
            contributes to India’s economic strength. Shakir’s courage, clear
            thinking, and leadership have been instrumental in shaping Arolex’s
            growth.
          </p>

          <Button
            href="/aboutus"
            text="Know More"
            className="bg-lime-500 p-3 text-sm"
          />
        </div>
      </div>
    </section>
  );
}
