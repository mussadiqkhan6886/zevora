import SectionTitle from '@/components/customer/SectionTitle'
import WatchesSection from '@/components/customer/WatchesSection'
import { watches } from '@/lib/constants'
import React from 'react'

const Watches = () => {
  return (
    <section className='bg-main'>
      <SectionTitle title='Watches' link={"/"} />
      <WatchesSection watchesList={watches} />
    </section>
  )
}

export default Watches
