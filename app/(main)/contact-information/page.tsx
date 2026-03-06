import Contact from '@/components/customer/Contact'
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
  title: "Contact Us | Zevora Official Customer Support",
  description: "Have questions about our watches, jewelry, or perfumes? Contact Zevora Official via WhatsApp, phone, or email. Our team in Pakistan is ready to assist with your order inquiries and tracking.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get in Touch with Zevora Official",
    description: "Personalized support for your luxury accessory shopping. Reach out to us for fast assistance.",
    images: ["/header-logo.png"],
  },
};

const page = () => {
  return (
    <Contact />
  )
}

export default page
