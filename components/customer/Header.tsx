'use client';

import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"
import { serif } from '@/lib/fonts';
import Link from 'next/link';
import { headerLinks } from '@/lib/constants';
import {FiChevronDown, FiChevronRight, FiMenu, FiSearch, FiShoppingCart, FiX} from "react-icons/fi"
import Menu from './Menu';
import SearchBar from './SearchBar';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [scrolled, setScrolled ] = useState(false)
   const [openMenu, setOpenMenu] = useState<string | null>(null)


    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40)
      } 

      window.addEventListener("scroll", handleScroll)
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [menuOpen]);



  return (
    <header>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        loop
        className={`bg-main text-white text-[13px] ${serif.className}`}
      >
        <SwiperSlide className='py-2 text-center tracking-widest'>Delivery charges 190rs Free delivery for orders above 3000rs</SwiperSlide>
        <SwiperSlide className='py-2 text-center tracking-widest'>All products come with 1 year colour warranty</SwiperSlide>
      </Swiper>

      <div className={`${scrolled ? "top-0 fixed" : "top-8 absolute"} px-5 md:px-10 lg:px-20 border-b border-zinc-300 flex justify-between py-8 items-center  w-full z-50 bg-white`}> 
        <Link href={"/"} className='hidden lg:block'>
            <h2>Zevora</h2>
            <h3>Official</h3>
        </Link>
        <nav className='flex justify-between  items-center'>
            <div className='lg:hidden'>
                {!menuOpen && <FiMenu onClick={() => setMenuOpen(true)} className='cursor-pointer text-xl' />}
                {menuOpen && <FiX onClick={() => setMenuOpen(false)} className='cursor-pointer text-xl' />}
                {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
            </div>
            
            <ul className='lg:flex mx-6 justify-between gap-8 flex-wrap items-center hidden'>
  {headerLinks.map(link => (
    <li key={link.name} className='relative'>
      
      {link.subCategory.length > 0 ? (
        <p
          onClick={() =>
            setOpenMenu(openMenu === link.name ? null : link.name)
          }
          className='flex gap-2 text-sm items-center font-light hover:underline cursor-pointer'
        >
          {link.name}
          <FiChevronDown
            className={`transition-transform ${
              openMenu === link.name ? 'rotate-180' : ''
            }`}
          />
        </p>
      ) : (
        <Link
          className='text-sm flex items-center gap-2 font-light hover:underline'
          href={link.link}
        >
          {link.name}
        </Link>
      )}

      {openMenu === link.name && (
        <div className='absolute top-full mt-3 bg-white  flex flex-col min-w-[180px] z-50'>
          {link.subCategory.map((sub, i) => (
            <Link
              key={i}
              href={sub.link}
              className='px-4 py-2 text-sm hover:bg-zinc-100'
              onClick={() => setOpenMenu(null)}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  ))}
</ul>

        </nav>
         <Link href={"/"} className='lg:hidden'>
            <h2>Zevora</h2>
            <h3>Official</h3>
        </Link>
        <div className='flex gap-4 md:gap-6 items-center'>
            <FiSearch className='cursor-pointer' onClick={() => setSearchOpen(true)} />
            {searchOpen && <SearchBar isSearchOpen={setSearchOpen} />}
            <FiShoppingCart />
        </div>
      </div>
    </header>
  )
}

export default Header
