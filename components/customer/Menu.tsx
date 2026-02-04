'use client';

import { headerLinks } from '@/lib/constants';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Menu = ({
  setMenuOpen,
}: {
  setMenuOpen: (open: boolean) => void;
}) => {

  return (
    <motion.aside
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 top-35 z-50 bg-white"
    >
      <nav className="pt-3">
        <ul className="flex flex-col gap-6 text-lg font-light px-10">
          {headerLinks.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="block w-full"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Menu;
