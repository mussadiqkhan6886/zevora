"use client";

import React from "react";
import { FileText, AlertTriangle, CheckCircle, Shield } from "lucide-react";
import { serif } from "@/lib/fonts";

const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-5 md:px-20 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-6">
        <h1 className={`${serif.className} text-3xl md:text-4xl font-bold text-gray-800 text-center`}>
          Terms of Service
        </h1>

        <p className="text-gray-700 text-lg md:text-xl">
          <CheckCircle className="inline-block mr-2 text-green-500" />
          By using our website, you agree to the following terms:
        </p>

        <ul className="space-y-3 text-gray-700 text-lg md:text-xl">
          <li className="flex items-center gap-3">
            <FileText className="text-blue-500" />
            All prices are listed in PKR.
          </li>
          <li className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-500" />
            Orders are confirmed after a confirmation call.
          </li>
          <li className="flex items-center gap-3">
            <Shield className="text-purple-500" />
            We reserve the right to cancel any order due to stock issues.
          </li>
          <li className="flex items-center gap-3">
            <AlertTriangle className="text-red-500" />
            Misuse of our website or content is prohibited.
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            Zevora Official may update policies at any time.
          </li>
        </ul>

        <p className="text-gray-700 text-lg md:text-xl">
          Continued use of the website means you accept these terms.
        </p>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
