import About from '@/sections/About'
import DreamStack from '@/sections/DreamStack'
import NewArrival from '@/sections/NewArrival'
import Watches from '@/sections/Watches'
import React from 'react'

const page = () => {
  return (
    <main className='pt-20'>
      <Watches />
      <DreamStack />
      <About />
      <NewArrival />
    </main>
  )
}

export default page
