"use client"
import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

 
    const emailBody = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    
   
    const mailtoLink = `mailto:arolexpharma@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Get in Touch
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="tel"
          placeholder="+91 Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="How can we help?"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-sky-600 transition"
        >
          Submit
        </button>
        <p className="text-xs text-gray-600 text-center">
          By contacting us, you agree to our{" "}
          <a href="/terms-and-conditions" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
