'use client';

import React, { useEffect, useState } from 'react'
import "swiper/css"
import Link from 'next/link';
import { headerLinks } from '@/lib/constants';
import {FiChevronDown, FiMenu, FiSearch, FiShoppingCart, FiX} from "react-icons/fi"
import Menu from './Menu';
import SearchBar from './SearchBar';
import Image from 'next/image';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [scrolled, setScrolled ] = useState(false)
   const [openMenu, setOpenMenu] = useState<string | null>(null)
   const [small, setSmall] = useState(false)


    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 40)
      } 

      window.addEventListener("scroll", handleScroll)
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
      const handleSize = () => {
        setSmall(window.innerWidth <= 1024)
      }

      window.addEventListener("resize", handleSize)
      handleSize()

      return () => window.addEventListener("resize", handleSize)
    }, [])

useEffect(() => {
  if (menuOpen && small) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [menuOpen, small]);



  return (
    <header>

      <div className={`${scrolled ? "bg-white" : ""} top-0 fixed px-3 md:px-8 lg:px-18  flex justify-between py-5 items-center  w-full z-50 `}> 
        <Link href={"/"} className='hidden lg:block'>
            <Image src="/header-logo.png" alt='logo image in header zevora official' className='object-cover object-center z-50' width={200} height={200} />
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
           <Image src="/header-logo.png" alt='logo image mobile size in header zevora official' width={150} height={150} className="object-cover" />
        </Link>
        <div className='flex gap-4 md:gap-6 items-center'>
            <FiSearch className='cursor-pointer' onClick={() => setSearchOpen(true)} />
            {searchOpen && <SearchBar isSearchOpen={setSearchOpen} />}
            <Link aria-label='cart link' href="/cart">
              <FiShoppingCart name='cart icon' aria-label='shopping cart icon' />
            </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
