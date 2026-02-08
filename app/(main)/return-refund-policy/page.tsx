"use client";

import React from "react";
import { RefreshCcw, Box, DollarSign, CheckCircle } from "lucide-react";
import { serif } from "@/lib/fonts";

const RefundPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-5 md:px-20 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-6">
        <h1 className={`${serif.className} text-3xl md:text-4xl font-bold text-gray-800 text-center`}>
          Refund & Return Policy
        </h1>

        <p className="text-gray-700 text-lg md:text-xl">
          <CheckCircle className="inline-block mr-2 text-green-500" />
          We want you to be fully satisfied with your purchase.
        </p>

        <ul className="space-y-3 text-gray-700 text-lg md:text-xl">
          <li className="flex items-center gap-3">
            <RefreshCcw className="text-blue-500" />
            Returns are accepted within 7 days of delivery.
          </li>
          <li className="flex items-center gap-3">
            <Box className="text-yellow-500" />
            Item must be unused and in original packaging.
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            Damaged or wrong items can be exchanged.
          </li>
          <li className="flex items-center gap-3">
            <DollarSign className="text-purple-500" />
            Refunds are processed within 5–7 working days after approval.
          </li>
          <li className="flex items-center gap-3">
            <DollarSign className="text-red-500" />
            Delivery charges are non-refundable.
          </li>
        </ul>

        <p className="text-gray-700 text-lg md:text-xl">
          To request a return, contact us with your <strong>order number</strong> and <strong>pictures of the product</strong>.
        </p>
      </div>
    </main>
  );
};

export default RefundPolicyPage;
