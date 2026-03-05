"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { productType } from '@/type';

const cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Mardan"];
const names = ["Ayesha", "Sana", "Zainab", "Fatima", "Hina", "Maryam", "Kiran", "Amna", "Sadia", "Anum", "Hira", "Jannat", "Laiba", "Ahmed", "Kashaf", "Manwahid hussain", "omer", "Khusbakht", "Gulwareen"];

const SalesPop = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({ name: "", city: "", product: "", slug: "", category: "", time: "" });
  const [products, setProducts] = useState<productType[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/products");
      const json = await res.json();
      setProducts(json.data);
    } catch (error) {
      console.error("Failed to fetch products for SalesPop", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Only start the interval if we actually have products to show
    if (products.length === 0) return;

    const triggerPop = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomTime = Math.floor(Math.random() * 50) + 2;

      setData({
        name: randomName,
        city: randomCity,
        product: randomProduct.name,
        slug: randomProduct.slug,
        category: randomProduct.category,
        time: `${randomTime} minutes ago`
      });

      setShow(true);

      // Hide after 6 seconds
      setTimeout(() => setShow(false), 6000);
    };

    // Initial delay 5s, then every 20s to keep it realistic
    const initialTimeout = setTimeout(triggerPop, 5000);
    const interval = setInterval(triggerPop, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [products]); // Re-run effect when products are loaded

  if (!show || !data.product) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[100] animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="bg-white border border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.12)] rounded-2xl p-4 flex items-center gap-4 max-w-[320px] relative overflow-hidden">
        
        {/* Verification Checkmark */}
        <div className="bg-green-500 h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-200">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="flex flex-col pr-4">
          <p className="text-[13px] text-zinc-500 leading-tight">
            <span className="font-bold text-zinc-900">{data.name}</span> from <span className="font-bold text-zinc-900">{data.city}</span>
          </p>
          <Link 
            href={`/collections/${data.category}/${data.slug}`}
            className="text-[13px] text-zinc-700 mt-0.5 hover:underline decoration-red-500 underline-offset-2"
          >
            purchased <span className="text-red-600 font-semibold">{data.product}</span>
          </Link>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              {data.time}
            </span>
            <span className="h-1 w-1 bg-zinc-300 rounded-full"></span>
            <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1">
              Verified Buyer
            </span>
          </div>
        </div>
        
        <button 
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-zinc-300 hover:text-zinc-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Subtle Progress Bar (Sale Hype) */}
        <div className="absolute bottom-0 left-0 h-1 bg-red-500/10 w-full">
            <div className="h-full bg-red-500 animate-[progress_6s_linear]"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

export default SalesPop;