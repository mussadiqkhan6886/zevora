"use client";

import React from "react";
import { Truck, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { serif } from "@/lib/fonts";

const ShippingPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-5 md:px-20 flex justify-center">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 md:p-12 space-y-6">
        <h1 className={`${serif.className} text-3xl md:text-4xl font-bold text-gray-800 text-center`}>
          Shipping Policy
        </h1>

        <p className="text-gray-700 text-lg md:text-xl">
          <Truck className="inline-block mr-2 text-blue-500" />
          At Zevora Official, we aim to deliver your orders promptly and safely.
        </p>

        <ul className="space-y-3 text-gray-700 text-lg md:text-xl">
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            Standard delivery charges: <strong>300 PKR</strong> per order.
          </li>
          <li className="flex items-center gap-3">
            <Clock className="text-yellow-500" />
            Estimated delivery time: 3–7 working days after order confirmation.
          </li>
         
          <li className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            All orders are processed after confirmation call to ensure accuracy.
          </li>
          <li className="flex items-center gap-3">
            <Truck className="text-blue-500" />
            Delivery might be delayed due to unforeseen circumstances or stock issues.
          </li>
        </ul>

        <p className="text-gray-700 text-lg md:text-xl">
          For any questions or assistance regarding shipping, please contact us at <strong>03245697570</strong>. We are happy to help!
        </p>
      </div>
    </main>
  );
};

export default ShippingPolicyPage;
