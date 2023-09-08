import React from 'react'

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text
} from 'components'
import Footer from 'components/Footer'
import Header1 from 'components/Header1'
import HomeBenefits from 'components/HomeBenefits'
import HomeCta from 'components/HomeCta'
import HomeFeatures from 'components/HomeFeatures'
import HomeGallery from 'components/HomeGallery'
import HomeHero from 'components/HomeHero'
import HomeTeam from 'components/HomeTeam'
import HomeTestimonial from 'components/HomeTestimonial'
import Navbar from 'components/Header/Navbar'

const Home1Page = () => {
  const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)

  return (
    <>
      <div className='flex flex-col font-roboto items-center justify-start mx-auto w-full'>
        <div className='bg-white-A700 flex flex-col items-center justify-start w-full'>
          <Navbar/>
          {/* <Header1 className=' flex md:h-auto items-center justify-center md:m-0 m-2 md:ml-[0] px-16 md:px-5 shadow-bs sticky top-[0] w-full' /> */}
          <HomeHero className='bg-white-A700 flex flex-col gap-20 h-[900px] md:h-auto items-center justify-start sm:p-[] md:px-10 px-16 sm:px-6 sm:py-14 w-full' />
          <HomeFeatures className='bg-white-A700 flex flex-col sm:gap-10 gap-20 items-center justify-start sm:p-[] md:px-10 px-16 sm:px-5 sm:py-14 py-28 w-full' />
          <HomeBenefits className='bg-white-A700 flex flex-col gap-20 items-center md:justify-center justify-start sm:p-[] md:px-10 px-16 sm:px-6 sm:py-14 py-28 w-full' />
          <HomeCta className='bg-white-A700 flex flex-col font-lato gap-20 items-center justify-start sm:p-[] md:p-[] md:pl-[] md:pr-[] px-16 sm:px-5 sm:py-14 py-28 w-full' />
          <HomeGallery className='bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start sm:p-[] md:px-10 px-16 sm:px-5 sm:py-14 py-28 w-full' />
          <HomeTestimonial className='bg-white-A700 flex flex-col font-librebaskerville gap-20 items-center justify-start sm:p-[] md:px-10 px-16 sm:px-5 sm:py-14 py-28 w-full' />
          <HomeTeam className='bg-white-A700 flex flex-col font-lato md:gap-10 gap-20 items-center justify-start sm:p-[] md:px-10 px-16 sm:px-5 sm:py-14 py-28 w-full' />
          <Footer className='bg-pink-50 flex flex-col font-lato md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-20 w-full' />
        </div>
      </div>
    </>
  )
}

export default Home1Page
