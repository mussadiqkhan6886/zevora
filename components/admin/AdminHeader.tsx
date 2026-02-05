import Link from 'next/link'
import React from 'react'
import { FiList, FiPlusCircle, FiShoppingBag } from 'react-icons/fi'

const AdminHeader = () => {
  return (
    <header className='px-3 md:px-16 py-5 border-b border-zinc-400'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center gap-7'>
            <Link href={"admin-dashboard/add-product"} className='flex gap-2 items-center border border-zinc-400 px-4 py-1.5'>
                <FiPlusCircle />
                <span>Add Product</span>
            </Link>
            <Link href={"admin-dashboard/products-list"} className='flex gap-2 items-center border border-zinc-400 px-4 py-1.5'>
                <FiList />
                <span>Products List</span>
            </Link>
            <Link href={"admin-dashboard/orders"} className='flex gap-2 items-center border border-zinc-400 px-4 py-1.5'>
                <FiShoppingBag />
                <span>Orders</span>
            </Link>
        </div>
        <div className='flex gap-4 items-center'>
            <button className='border border-zinc-400'><Link className='px-4 py-2.5 bg-black text-white' href={"/"}>Go Home</Link></button>
            <button className='border border-zinc-400'><Link className='px-4 py-2.5 bg-black text-white' href={"/"}>Log Out</Link></button>
        </div>
      </nav>
    </header>
  )
}

export default AdminHeader
