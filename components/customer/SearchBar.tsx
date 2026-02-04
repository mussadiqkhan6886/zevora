'use client'
import React from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

const SearchBar = ({isSearchOpen}: {isSearchOpen: (searchOpen: boolean) => void}) => {

    const search = () => {
        isSearchOpen(false)
    }

  return (
    <div className='w-full h-full bg-black/20 fixed inset-0 top-10'>
      <div className='bg-white flex items-center justify-center py-10'>
        <div className='border flex items-center relative w-4xl px-5'>
            <p className='absolute text-[10px] text-zinc-700 top-2 left-5'>Search</p>
            <input type='text' className='w-full border-none py-4 pt-6 outline-none' />
            <FiSearch className='text-2xl cursor-pointer' onClick={search} />
        </div>
        <FiX className='text-2xl ml-6 cursor-pointer' onClick={() => isSearchOpen(false)} />
      </div>
    </div>
  )
}

export default SearchBar
