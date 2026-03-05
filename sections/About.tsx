"use client";

import { serif } from "@/lib/fonts";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headphones, Sparkles, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { text: "Premium Quality", icon: <Sparkles size={24} />, desc: "Handpicked luxury materials." },
  { text: "Affordable Luxury", icon: <Award size={24} />, desc: "High-end style without the markup." },
  { text: "Express Delivery", icon: <Truck size={24} />, desc: "Swift shipping across Pakistan." },
  { text: "24/7 Support", icon: <Headphones size={24} />, desc: "Dedicated to your satisfaction." },
];

const About = () => {
  return (
    <section className="bg-[#FCF9F6] h-full text-[#1a1a1a] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl flex flex-col mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block"
            >
              The Zevora Legacy
            </motion.span>
            <motion.h2
              className={`${serif.className} text-4xl sm:text-5xl md:text-[67px] leading-tight font-light`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Crafting Elegance <br /> For Your Every Moment
            </motion.h2>
          </div>
          <motion.div 
            className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="bg-amber-100 p-3 rounded-full text-amber-700">
              <ShieldCheck size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold">80k+</p>
              <p className="text-sm text-gray-500">Satisfied Clients</p>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto  gap-6 mb-6">
          <motion.div 
            className="bg-white  p-8 rounded-3xl border border-gray-100 flex flex-col justify-center shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className={`${serif.className}  text-xl md:text-2xl tracking-wide leading-snug text-[#1a1a1a] italic`}>
              "We believe that luxury should be accessible. Our mission is to bring 
              premium watches and jewelry to every corner of Pakistan, combining 
              timeless design with unmatched craftsmanship."
            </p>
          </motion.div>

          <motion.div 
            className="relative overflow-hidden min-h-[300px] md:h-full rounded-3xl border border-gray-100 shadow-sm group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/mission.jpg" 
              alt="Zevora's mission and craftsmanship" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 group hover:bg-ctr transition-colors duration-500 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-amber-700 group-hover:text-amber-400 transition-colors mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {feature.text}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-gray-400 transition-colors font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center border-t border-gray-200 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 max-w-xl mx-auto mb-8 font-light">
            Experience the Zevora standard. Based in Lahore, serving Islamabad, Karachi, and all over Pakistan.
          </p>
          <Link href="/collections" className="bg-ctr text-white px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all shadow-lg active:scale-95">
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;