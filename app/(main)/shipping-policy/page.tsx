import Shipping from '@/components/customer/Shipping'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy ",
  description: "Learn about Zevora Official's fast and reliable shipping across Pakistan. Standard 300 PKR delivery, 3-7 working days ETA, and secure Cash on Delivery (COD) services in Lahore, Karachi, and Islamabad.",
  alternates: {
    canonical: "/shipping-policy",
  },
  openGraph: {
    title: "Fast Shipping Across Pakistan | Zevora Official",
    description: "Premium watches and jewelry delivered to your doorstep in 3-7 days. Fixed 300 PKR shipping fee nationwide.",
    images: ["/header-logo.png"],
  },
};

const page = () => {
  return (
    <Shipping />
  )
}

export default page
