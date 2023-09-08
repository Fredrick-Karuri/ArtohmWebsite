import React, { useState } from 'react'
import { Text, Img, Button } from 'components'
import { useSpring, animated } from 'react-spring' // Importing react-spring
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  function handleNavigate7 () {
    const win = window.open(
      'https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u',
      '_blank'
    )
    win.focus()
  }
  const menuAnimation = useSpring({
     // Animate  for smooth expansion/collapse
  })

  return (
    // className='flex header-container items-center justify-between flex-wrap  p-6 w-full sticky top-[0] shadow-bs mr'
    <animated.nav
      className={`flex header-container items-center justify-between flex-wrap  p-6 w-full sticky top-[0] shadow-bs mr ${
        isOpen ? 'menu-open' : ''
      }`}
      style={{
        ...menuAnimation, // Apply animation styles
        overflow: isOpen ? 'visible' : 'hidden' // Prevent content overflow
      }}
    >
      <div className='flex items-center flex-shrink-0 text-white mr-6'></div>
      <div className='lg:hidden '></div>
      <div className='header-row '>
        <Img
          className='common-pointer cursor-pointer h-14 w-[40px]'
          src='images/img_artohmlogo.svg'
          alt='artohmlogo'
          onClick={() => navigate('/')}
        />
        <div
          onClick={toggleMenu}
          className={`mobile-menu ${isOpen ? 'open' : ''}`}
          style={{}}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow   lg:flex  lg:items-center lg:w-auto lg:block px-2 lg:px-0 mt-2 lg:mt-0 bg-white-500 z-20 lg:bg-transparent text-sm leading-none`}
      >
        <div className='text-sm lg:flex-grow lg:ml-16 '>
          <div className='flex flex-row gap-4 sm:flex-col sm:gap-2 text-base lg:text-[18px]  text-gray-900'>
            <a
              href='/'
              className='block mt-4 lg:inline-block lg:mt-0  hover:text-pink-500 mr-4 lg:ml-8  '
              onClick={() => navigate('/about')}
            >
              Home
            </a>
            <a
              href='#responsive-header'
              className='  block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-pink-500 mr-4'
            >
              FAQs
            </a>
            <a
              href='/about'
              className='block mt-4 lg:inline-block lg:mt-0 text-black-900 hover:text-pink-500'
              size='txtRobotoRegular16'
            >
              About
            </a>
          </div>
        </div>
        <div className='flex flex-col sm:items-start sm:mt-6 justify-center w-auto lg:mr-16'>
          <Button
            className='common-pointer bg-light_blue-A700 cursor-pointer font-roboto min-w-[168px] outline outline-[1px] outline-light_blue-A700 py-2.5 rounded-[19px] text-base text-center text-white-A700'
            onClick={handleNavigate7}
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </animated.nav>
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

{
  /* <div>
<a
onClick={handleNavigate7}
className='  bg-light_blue-A700 text-white-A700 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent   hover:text-black-900  mt-4 lg:mt-0'
  
>
Get Early Access
</a>
</div> */
}

{
  /* <div
  className={`w-6 h-1 bg-black <span class="math-inline"> ${isOpen ? 'opacity-0' : ''}`}
></div>
<div
  className={`${
    isOpen
      ? 'transform rotate-[135deg] translate-x-[2px] translate-y-[2px]'
      : ''
  }`}
></div>
<div
  className={` w-6 h-1 ${
    isOpen
      ? 'transform -rotate-[135deg] translate-x-[2px]  -translate-y-[2px]'
      : ''
  }`}
></div> */
}
