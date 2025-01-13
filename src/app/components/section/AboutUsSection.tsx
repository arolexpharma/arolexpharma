import React from "react";
import Button from "../button/Button";

export default function AboutUsSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="text-center mb-12">
        <p className="text-white text-sm bg-lime-500 rounded-full inline-block px-3 py-1 mb-6">
          Who We Are
        </p>
        <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
          Innovating Healthcare
        </h2>
      </div>

      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309942.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid"
            alt="Team working together"
            className="rounded-lg shadow-lg w-full max-w-[550px] sm:max-w-[400px] md:max-w-[550px]"
          />
        </div>

        <div>
          <p className="text-white mb-6 text-base sm:text-lg leading-relaxed">
            As leading pharmaceutical manufacturers, we are dedicated to
            producing high-quality healthcare solutions for a better world.
          </p>
          <p className="text-white mb-6 text-base sm:text-lg leading-relaxed">
            Our state-of-the-art facilities and stringent quality control
            processes ensure the production of safe, effective, and affordable
            medicines. With decades of experience in the pharmaceutical
            industry, we are trusted partners to healthcare providers worldwide.
          </p>
          <p className="text-white mb-8 text-base sm:text-lg leading-relaxed">
            Our mission is to enhance lives by delivering innovative medical
            solutions that address the evolving healthcare needs of our clients
            and communities.
          </p>
          <Button href="/aboutus" text="Know More" className="bg-lime-500" />
        </div>
      </div>
    </section>
  );
}
