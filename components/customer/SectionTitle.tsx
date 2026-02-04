import { serif } from '@/lib/fonts'
import Link from 'next/link'
import React from 'react'

const SectionTitle = ({title, link}: {title: string, link: string}) => {
  return (
    <Link href={link || ""} className={`underline ${serif.className} inline-block ml-20 text-white text-4xl py-8`}>
      {title}
    </Link>
  )
}

export default SectionTitle
