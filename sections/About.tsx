"use client";

import { serif } from "@/lib/fonts";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "High-quality products",
  "Affordable prices",
  "Fast shipping",
  "Friendly customer support",
  "100% customer satisfaction",
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-main via-main/90 to-main/60 text-white flex flex-col items-center justify-center py-16 px-5">
      <motion.h4
        className={`${serif.className} text-4xl md:text-5xl text-center font-bold mb-8`}
        viewport={{once: true}}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Zevora Official
      </motion.h4>

      <motion.div
        className="max-w-4xl text-center space-y-6 text-white"
        viewport={{once: true}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-lg md:text-xl">
          Zevora Official is a passionate online brand dedicated to bringing you
          trendy, high-quality, and affordable products that add style and
          happiness to your everyday life. We carefully select and create each
          item with love, creativity, and attention to detail to make sure our
          customers receive the best. We focus on:
        </p>

        <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-4 my-6">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 border shadow border-amber-800 px-4 py-2 rounded-md text-amber-800 font-semibold "
              viewport={{once: true}}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CheckCircle2 size={30} className="text-amber-800" />
              {feature}
            </motion.li>
          ))}
        </ul>

        <p className="text-lg md:text-xl">
          Thank you for supporting our small business and being part of the
          Zevora family. We look forward to serving you again and again.
        </p>
        <p className="text-lg md:text-xl">For any queries, feel free to contact us anytime.</p>
      </motion.div>

      <motion.p
        className="font-bold mt-10 text-amber-900"
        viewport={{once: true}}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}

      >
        80k Satisfied Customers
      </motion.p>
    </section>
  );
};

export default About;
