import React from 'react'
import CardTwo from './CardTwo'

const DreamStackSecion = ({jewellery}: {jewellery: any[]}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {jewellery.map((item, index) => (
        <CardTwo key={index} {...item} />
      ))}
    </div>
  )
}

export default DreamStackSecion
