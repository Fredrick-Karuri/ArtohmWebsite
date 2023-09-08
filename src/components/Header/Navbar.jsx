import React, { useState } from 'react'
import { Text, Img } from 'components'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex header-container items-center justify-between flex-wrap  p-6 w-full sticky top-[0] shadow-bs'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        {/* <span className='font-semibold text-xl tracking-tight'>Logo</span> */}
      </div>
      <div className='lg:hidden'></div>
      <div className='header-row '>
        <Img
          className='common-pointer cursor-pointer h-11 w-[33px]'
          src='images/img_artohmlogo.svg'
          alt='artohmlogo'
          onClick={() => navigate('/')}
        />
        <div
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className='mobile-menu '
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex  lg:items-center lg:w-auto lg:block px-2 lg:px-0 mt-2 lg:mt-0 bg-white-500 z-20 lg:bg-transparent text-sm leading-none`}
      >
        <div className='text-sm lg:flex-grow'>
          <a
            href='/'
            className='block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-white mr-4 lg:ml-8'
            onClick={() => navigate('/about')}
          >
            Home
          </a>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-white mr-4'
          >
            FAQs
          </a>
          <a
            href='/about'
            className='block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-white'
            size='txtRobotoRegular16'
          >
            About
          </a>
        </div>
        <div>
          <a
            href='#'
            className='  bg-light_blue-A700 text-white-A700 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

{
  /* <button
    onClick={() => setIsOpen(!isOpen)}
    className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
  >
    <svg
      className='fill-current h-3 w-3'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Menu</title>
      <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z' />
    </svg>
  </button> */
}
