"use client";

import React, { useState } from "react";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    qualifications: "",
    experience: "",
    address: "",
    mobile: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = "Employee Form Submission";
    const emailBody = `Name: ${formData.name}%0AAge: ${formData.age}%0AQualifications: ${formData.qualifications}%0AExperience: ${formData.experience}%0AAddress: ${formData.address}%0AMobile Number: ${formData.mobile}`;
    window.location.href = `mailto:arolexpharma@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="qualifications"
          className="block text-gray-700 font-medium mb-2"
        >
          Qualifications
        </label>
        <input
          type="text"
          id="qualifications"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="experience"
          className="block text-gray-700 font-medium mb-2"
        >
          Working Experience
        </label>
        <select
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>
            Select Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="0-1 year">0-1 Year</option>
          <option value="2-5 years">2-5 Years</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 font-medium mb-2"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="mobile"
          className="block text-gray-700 font-medium mb-2"
        >
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CareerForm;
