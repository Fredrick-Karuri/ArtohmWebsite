import React from 'react'
import { useInView } from 'react-intersection-observer'
import {useDrag} from 'react-use-gesture'
import { useSpring, animated } from 'react-spring' // Importing react-spring
import { Button, Img, List, Text } from 'components'

import { handleSectionNavigation } from 'utils'

const HomeHero = props => {
  function handleNavigate2 () {
    const win = window.open(
      'https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u',
      '_blank'
    )
    win.focus()
  }

  return (
    <>
      <div className={props.className}>
        <div className='flex md:flex-col flex-row md:gap-5 sm:gap-8 items-center justify-start w-full h-[90vh] md:h-auto '>
          <div className='flex flex-1 gap-6 h-full items-center justify-center md:pr-10 pr-20 sm:pr-8 w-full md:mb-8 md:mt-16 sm:mt-0 w-1/2 md:w-full'>
            <div className='flex flex-col gap-8 w-5/6  md:w-full'>
              <div className='flex flex-col gap-6 items-start justify-start w-full'>
                <Text
                  className='leading-[132.00%] md:leading-[144%] md:text-4xl sm:text-[32px] text-6xl  text-black-900 '
                  size='txtLibreBaskervilleBold56Black900'
                >
                  {props?.headingtext}
                </Text>
                <Text
                  className='leading-[136.00%] sm:text-base text-black-900 sm:text-left text-2xl opacity-80 '
                  size='txtLatoRegular18Black900'
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className='flex flex-row gap-4 items-start justify-start pt-4 w-auto'>
                <Button
                  className=' hover:bg-opacity-80 common-pointer bg-pink-300_01 cursor-pointer font-roboto px-10 py-3.5 rounded-[20px] text-base text-center text-white-A700 '
                  onClick={() => {
                    handleSectionNavigation('block1')
                  }}
                >
                  {props?.explore}
                </Button>
                <Button
                  className=' hover:bg-blue-100 common-pointer cursor-pointer font-roboto px-8 outline outline-[1px] outline-light_blue-A700 py-3.5 rounded-[20px] text-base text-center text-light_blue-A700'
                  onClick={handleNavigate2}
                >
                  {props?.learnMore}
                </Button>
              </div>
            </div>
          </div>
          <div className='grid w-1/2 md:w-full'>
            <HeroImages images={props?.images} />
          </div>
        </div>
      </div>
    </>
  )

  function HeroImages ({ images }) {
    // const [ref, inView] = useInView({
     
    // });
    // const animation = useSpring({
    //   opacity: inView ? 1 : 0,
    //   transform: inView ? 'translateY(0px)' : 'translateY(100px)',
    //   config: {
    //     duration: 1000
    //   }
    // })
    return (
      <div className='grid grid-cols-2 gap-4'>
      <div className='overflow-hidden grid gap-4'>
        {images.slice(0, 3).map((image, index) => (
          // <animated.div style={animation} ref={ref} key={index}>
          <Img
            key={index}
            className='object-cover w-full h-full'
            src={image.src}
            alt={image.alt}
          />
          // </animated.div>
        ))}
      </div>
  
      <div className='overflow-hidden grid grid-row-3 gap-4'>
        {images.slice(3).map((image, index) => (
          // <animated.div style={animation} ref={ref} key={index}>
          <Img
            key={index}
            className='object-cover w-full h-full'
            src={image.src}
            alt={image.alt}
          />
          // </animated.div>
        ))}
      </div>
    </div>
    )
  }
}

HomeHero.defaultProps = {
  headingtext: 'Experience the Fusion of Tradition and Technology',
  descriptiontext: (
    <>
      Artohm is a visionary art platform that seamlessly combines traditional
      artistry with cutting edge AI generated creativity. Discover a vibrant
      ecosystem where artists, collectors and enthusiasts come together to
      explore the infinite possibilities of art and technology.{' '}
    </>
  ),
  explore: 'Explore',
  learnMore: 'Learn More',
  images: [
    {
      src: 'images/img_placeholderimage.png',
      alt: 'placeholderimag'
    },
    {
      src: 'images/img_placeholderimage_340x319.png',
      alt: 'placeholderimag_One'
    },
    {
      src: 'images/img_placeholderimage_1.png',
      alt: 'placeholderimag_Two'
    },
    {
      src: 'images/img_placeholderimage_2.png',
      alt: 'placeholderimag_Three'
    },
    {
      src: 'images/img_placeholderimage_3.png',
      alt: 'placeholderimag_Four'
    },
    {
      src: 'images/img_placeholderimage_2.png',
      alt: 'placeholderimag_Five'
    },
    // {
    //   src: 'images/img_placeholderimage_188x319.png',
    //   alt: 'placeholderimag_Six'
    // }
  ]
}

export default HomeHero

{
  /* <List
  className='md:flex flex-1 flex-row gap-4 grid md:grid-cols-1 grid-cols-2 h-[900px] md:h-full justify-start w-full'
  orientation='horizontal'
>
<div className='flex flex-1 flex-col gap-4 h-[900px] md:h-auto sm:h-full items-start justify-start w-full'>
<Img
    className='h-[188px] md:h-[340px] object-cover w-full'
    src='images/img_placeholderimage.png'
    alt='placeholderimag'
    />
    <Img
    className='h-[340px] md:h-auto object-cover w-full'
    src='images/img_placeholderimage_340x319.png'
    alt='placeholderimag_One'
    />
    <Img
    className='h-[340px] md:h-auto object-cover w-full'
    src='images/img_placeholderimage_1.png'
    alt='placeholderimag_Two'
    />
    </div>
    <div className='flex flex-1 flex-col gap-4 h-[900px] md:h-auto items-start justify-start w-full'>
    <Img
    className='h-[340px] md:h-auto object-cover w-full'
    src='images/img_placeholderimage_2.png'
    alt='placeholderimag'
    />
    <Img
    className='h-[340px] md:h-auto object-cover w-full'
    src='images/img_placeholderimage_3.png'
    alt='placeholderimag_One'
    />
    <Img
    className='h-[188px] md:h-[340px] object-cover w-full'
    src='images/img_placeholderimage_188x319.png'
    alt='placeholderimag_Two'
    />
    </div>
    </List> */
}

{
  /* <Img
                  className='object-cover w-full h-full'
                  src='images/img_placeholderimage_340x319.png'
                  alt='placeholderimag_One'
                />
                <Img
                  className='object-cover w-full h-full'
                  src='images/img_placeholderimage_1.png'
                  alt='placeholderimag_Two'
                />
                <Img
                  className='object-cover w-full '
                  src='images/img_placeholderimage_2.png'
                  alt='placeholderimag_Three'
                /> */
}
{
  /* <Img
                  className='object-cover w-full h-full '
                  src='images/img_placeholderimage_3.png'
                  alt='placeholderimag_Four'
                />
                <Img
                  className='object-cover w-full h-full '
                  src='images/img_placeholderimage_2.png'
                  alt='placeholderimag_Five'
                />
                <Img
                  className='object-cover w-full h-full  '
                  src='images/img_placeholderimage_188x319.png'
                  alt='placeholderimag_Six'
                /> */
}
