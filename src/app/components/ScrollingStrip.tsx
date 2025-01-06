import React from "react";

const ScrollingStrip = () => {
  const medicines = [
    "Paracetamol",
    "Ibuprofen",
    "Amoxicillin",
    "Ciprofloxacin",
    "Metformin",
    "Omeprazole",
    "Aspirin",
    "Atorvastatin",
    "Losartan",
    "Cetirizine",
  ];

  // Duplicate medicines for smooth looping
  const repeatedMedicines = [...medicines, ...medicines];

  return (
    <div className="bg-sky-500 overflow-hidden w-full py-2">
      <div className="flex animate-chase whitespace-nowrap space-x-12">
        {repeatedMedicines.map((medicine, index) => (
          <span
            key={index}
            className="flex items-center text-sm font-semibold text-white"
          >
            {/* Bullet point using Tailwind's "before" */}
            <span className="mr-2 inline-block w-2 h-2 bg-white rounded-full"></span>
            {medicine}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;
