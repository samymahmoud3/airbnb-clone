import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 shadow-md bg-white py-5'>
      <div className='container grid grid-cols-3 relative'>
        <Link href='/' className='relative flex items-center h-10 my-auto'>
          <Image
            src='/airbnb.svg'
            alt='logo'
            fill
            className='object-contain object-left'
          />
        </Link>
        <SearchBar />
        <Navbar />
      </div>
    </header>
  )
}

export default Header