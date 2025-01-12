"use client"; // This ensures this component only runs in the client

import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation Variants
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const EnquiryFormModal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div>
  
      <button
        onClick={toggleForm}
        className="fixed md:hidden  top-24 -right-5 bg-green-600 text-white p-2 text-sm rounded-lg shadow-lg hover:bg-green-700 transition duration-300 z-50 transform -rotate-90"
      >
        Enquiry
      </button>

    
      {isFormOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="fixed bottom-16 bg-white shadow-lg rounded-lg p-4 md:p-6 w-full md:w-[200px] z-50 max-w-full"
        >
          <button
            onClick={toggleForm}
            className="absolute top-2 right-2 text-gray-700 text-2xl"
          >
            &times; 
          </button>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
            Request an Appointment
          </h3>
          <form className="space-y-2 md:space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 p-2 md:p-3 border rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-2 md:p-3 border rounded mt-2 md:mt-0"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 md:p-3 border rounded"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 md:p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Contact"
              className="w-full p-2 md:p-3 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 md:p-3 border rounded resize-none h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-sky-400 text-white py-2 md:py-3 rounded-lg transition"
            >
              Request & Submit
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default EnquiryFormModal;
