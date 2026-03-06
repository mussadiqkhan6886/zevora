import Terms from '@/components/customer/Terms'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Terms of Service ",
  description: "Read the official terms of service for Zevora Official. Information on orders, pricing in PKR, shipping policies, and our commitment to luxury quality in Lahore, Karachi, and Islamabad.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Zevora Official",
    description: "Legal guidelines and shopping terms for Zevora Official customers.",
    images: ["/header-logo.png"],
  },
};

const page = () => {
  return (
    <Terms />
  )
}

export default page
