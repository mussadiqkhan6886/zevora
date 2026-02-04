import React from 'react'
import CardTwo from './CardTwo'

const DreamStackSecion = ({products}: {products: any[]}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {products.map((item, index) => (
        <CardTwo key={index} {...item} />
      ))}
    </div>
  )
}

export default DreamStackSecion
