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
        <div className='max-h-3xl'>
          <div className=' grid grid-cols-2 gap-3  '>
            <div className=''>
              <Img
                className='w-full h-full object-cover'
                src='images/img_placeholderimage_752x640.png'
                alt='image of a woman in a white top, with a yellow background'
              ></Img>
            </div>
            <div className=' grid gap-3'>
              <Img
                className='w-full h-full object-cover'
                src='images/img_placeholderimage_360x640.png'
                alt='image of a black cat '
              ></Img>
              <Img
                className='w-full h-full object-cover'
                src='images/img_placeholderimage_4.png'
                alt='placeholderimag'
                ></Img>
            </div>
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
