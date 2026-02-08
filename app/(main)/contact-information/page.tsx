"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { serif } from "@/lib/fonts";

const ContactInfoPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-5 md:px-20 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-8">
        <h1 className={`${serif.className} text-3xl md:text-4xl font-bold text-gray-800 text-center`}>
          Contact Us
        </h1>

        <p className="text-gray-700 text-lg md:text-xl text-center">
          We are here to help you! Reach out to us via email or phone for any inquiries.
        </p>

        <div className="flex flex-col md:flex-row justify-around gap-8 text-gray-700 text-lg md:text-xl">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" size={24} />
            <a href="mailto:tahamudassar811@gmail.com" className="hover:underline">
              tahamudassar811@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-green-500" size={24} />
            <a href="tel:+923245697570" className="hover:underline">
              0324 5697570
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-center">
          Our team is available to assist you during business hours. We aim to respond within 24 hours.
        </p>
      </div>
    </main>
  );
};

export default ContactInfoPage;
