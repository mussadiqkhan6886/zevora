"use client";

import React from "react";
import { ShieldCheck, Phone } from "lucide-react";
import { serif } from "@/lib/fonts";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-26 px-5 md:px-20 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-6">
        <h1 className={`${serif.className} text-3xl md:text-4xl font-bold text-gray-800 text-center`}>
          Privacy Policy
        </h1>

        <p className="text-gray-700 text-lg md:text-xl">
          At Zevora Official, we respect your privacy and are committed to protecting your personal information.
        </p>

        <p className="text-gray-700 text-lg md:text-xl">
          We collect information such as your <strong>name</strong>, <strong>phone number</strong>, <strong>email address</strong>, and <strong>shipping address</strong> only to process your orders and improve your shopping experience. We use secure systems to protect your data.
        </p>

        <p className="text-gray-700 text-lg md:text-xl">
          By using our website, you agree to our privacy policy.
        </p>

        <p className="text-gray-700 text-lg md:text-xl flex items-center gap-2">
          <Phone className="text-blue-500" />
          For any questions, contact us at: <strong>0324-5697570</strong>
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
