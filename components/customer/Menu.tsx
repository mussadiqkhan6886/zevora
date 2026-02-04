'use client';

import { headerLinks } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const Menu = ({isMenuOpen}: {isMenuOpen: (menuOpen: boolean) => void}) => {
  return (
    <motion.aside animate={{left: 0}} initial={{left:-300}} className='absolute w-full left-0 top-38 z-50 h-fit bg-white'>
      <nav>
        <ul className='flex flex-col gap-6 text-lg font-light pl-10 pt-7'>
            {headerLinks.map(item => (
                <li className='w-full' key={item.link}>
                    <Link className='w-full block' onClick={() => isMenuOpen(false)} href={item.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
      </nav>
    </motion.aside>
  )
}

export default Menu
