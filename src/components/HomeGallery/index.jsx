import React from 'react'

import { Img, Text } from 'components'

const HomeGallery = props => {
  return (
    <>
      <div className={props.className}>
        <div className='flex flex-col gap-6 items-center justify-start max-w-3xl w-full '>
          <Text
            className='text-5xl sm:text-[32px] md:text-[44px] text-black-900 text-center w-full'
            size='txtLibreBaskervilleBold48'
          >
            {props?.headingFive}
          </Text>
          <Text
            className='text-black-900 text-center text-lg w-full'
            size='txtLatoRegular18Black900'
          >
            {props?.textTwo}
          </Text>
        </div>
        <div className='flex sm:flex-col flex-row gap-4 items-start justify-start w-full'>
          <Img
            className='w-1/2 h-full object-cover sm:w-full '
            src='images/img_placeholderimage_752x640.png'
            alt='placeholderimag_One'
          />

          <div className='flex flex-col w-1/2 gap-8 sm:gap-4 items-start justify-start h-full sm:w-full'>
            <Img
              className='flex h-1/2 object-cover w-full'
              src='images/img_placeholderimage_360x640.png'
              alt='placeholderimag_Two'
            />
            <Img
              className='flex h-full object-cover w-full'
              src='images/img_placeholderimage_4.png'
              alt='placeholderimag_Three'
            />
          </div>
        </div>
      </div>
    </>
  )
}

HomeGallery.defaultProps = {
  headingFive: 'Featured Artworks',
  textTwo: 'Discover captivating artworks that blend tradition and technology'
}

export default HomeGallery
