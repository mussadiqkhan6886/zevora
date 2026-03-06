import Privacy from '@/components/customer/Privacy'
import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
  title: "Privacy Policy",
  description: "Learn how Zevora Official protects your personal data. We collect only necessary information for order processing and secure delivery across Pakistan. Your privacy is our priority.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Secure Shopping at Zevora Official",
    description: "Our commitment to protecting your personal information and ensuring a safe shopping experience.",
    images: ["/header-logo.png"],
  },
};

const page = () => {
  return (
    <Privacy />
  )
}

export default page
