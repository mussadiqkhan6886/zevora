'use client';

import React, { useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"
import { serif } from '@/lib/fonts';
import Link from 'next/link';
import { headerLinks } from '@/lib/constants';
import {FiMenu, FiSearch, FiShoppingCart, FiX} from "react-icons/fi"
import Menu from './Menu';
import SearchBar from './SearchBar';

const Header = () => {

    const [menuOpen, isMenuOpen] = useState(false)
    const [searchOpen, isSearchOpen] = useState(false)

  return (
    <header>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        loop
        className={`bg-header text-white text-[13px] ${serif.className}`}
      >
        <SwiperSlide className='py-2 text-center tracking-widest'>Delivery charges 190rs Free delivery for orders above 3000rs</SwiperSlide>
        <SwiperSlide className='py-2 text-center tracking-widest'>All products come with 1 year colour warranty</SwiperSlide>
      </Swiper>

      <div className='px-5 md:px-10 lg:px-20 border-b border-zinc-300 flex justify-between py-8 items-center'> 
        <Link href={"/"} className='hidden lg:block'>
            <h2>Zevora</h2>
            <h3>Official</h3>
        </Link>
        <nav className='flex justify-between  items-center'>
            <div className='lg:hidden'>
                {!menuOpen && <FiMenu onClick={() => isMenuOpen(true)} className='cursor-pointer text-xl' />}
                {menuOpen && <FiX onClick={() => isMenuOpen(false)} className='cursor-pointer text-xl' />}
                {menuOpen && <Menu isMenuOpen={isMenuOpen} />}
            </div>
            
            <ul className='lg:flex mx-6 justify-between gap-8 flex-wrap items-center hidden'>
                {headerLinks.map(link => (
                    <li key={link.name}><Link className='text-sm font-light hover:underline transition-all duration-400' href={link.link}>{link.name}</Link></li>
                ))}
            </ul>
        </nav>
         <Link href={"/"} className='lg:hidden'>
            <h2>Zevora</h2>
            <h3>Official</h3>
        </Link>
        <div className='flex gap-6 items-center'>
            <FiSearch className='cursor-pointer' onClick={() => isSearchOpen(true)} />
            {searchOpen && <SearchBar isSearchOpen={isSearchOpen} />}
            <FiShoppingCart />
        </div>
      </div>
    </header>
  )
}

export default Header
