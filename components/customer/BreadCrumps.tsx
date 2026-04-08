import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

type Props = {
    collection: string
    product?: string
}

const BreadCrumps = ({collection, product}: Props) => {
  return (
    <div>
      <Link href="/">Home</Link> <FiChevronRight /> <Link href={`/collections/${collection}`}>{collection}</Link> <FiChevronRight /> {product}
    </div>
  )
}

export default BreadCrumps
