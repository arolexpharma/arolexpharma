import React from "react";
import Button from "../button/Button";


export default function AboutUsSection() {
  return (
    <section className="py-12 bg-primary">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-white text-sm bg-lime-500 rounded-full inline-block px-3 py-1 mb-3">
        Who We Are
        </p>
        
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-photo/nurse-doctor-team-ready-work-day_23-2149309942.jpg?uid=R48018562&ga=GA1.1.1547196487.1728058155&semt=ais_hybrid"
            alt="Team working together"
            className="rounded-lg shadow-lg w-full max-w-[550px]"
          />
        </div>

        {/* Text Section */}
        <div>
          <p className="text-white mb-6 text-lg leading-relaxed">
            As leading pharmaceutical manufacturers, we are dedicated to
            producing high-quality healthcare solutions for a better world.
          </p>
          <p className="text-white mb-6 text-lg leading-relaxed">
            Our state-of-the-art facilities and stringent quality control
            processes ensure the production of safe, effective, and affordable
            medicines. With decades of experience in the pharmaceutical
            industry, we are trusted partners to healthcare providers worldwide.
          </p>
          <p className="text-white mb-8 text-lg leading-relaxed">
            Our mission is to enhance lives by delivering innovative medical
            solutions that address the evolving healthcare needs of our clients
            and communities.
          </p>
          <Button href="/contactus" text="Know More" className='bg-lime-500'/>
        
        </div>
      </div>
    </section>
  );
}
