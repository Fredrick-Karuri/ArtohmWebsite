import React from 'react'

import { Button, Img, PagerIndicator, Slider, Text } from 'components'

const HomeTestimonial = props => {
  const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)

  return (
    <>
      <div className={props.className}>
        <div className='flex flex-col gap-12 items-center justify-start max-w-[1312px] w-full'>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 }
            }}
            onSlideChanged={e => {
              setsliderState(e?.item)
            }}
            ref={sliderRef}
            className='w-full'
            items={[...Array(4)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className='flex flex-col items-center justify-between max-w-[1312px] mx-2.5'>
                  <div className='flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full'>
                    <Button className='border border-black-900_7e border-solid flex h-12 sm:hidden items-center justify-center p-4 rounded-[50%] w-12'>
                      <Img
                        className='h-4'
                        src='images/img_arrowleft.svg'
                        alt='arrowleft'
                      />
                    </Button>
                    <div className='flex flex-1 flex-col gap-8 items-center justify-start max-w-3xl w-full'>
                      <Text
                        className='leading-[140.00%] max-w-3xl md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl'
                        size='txtLibreBaskervilleBold24Black900'
                      >
                        {props?.quote}
                      </Text>
                      <div className='flex flex-col items-center justify-start w-[300px]'>
                        <div className='flex flex-col items-start justify-start w-full'>
                          <Text
                            className='text-base text-black-900 text-center w-full'
                            size='txtLatoSemiBold16'
                          >
                            {props?.text}
                          </Text>
                          <Text
                            className='text-base text-black-900 text-center w-full'
                            size='txtLatoRegular16Black900'
                          >
                            {props?.textOne}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button className='border border-black-900 border-solid flex h-12 items-center justify-center p-4 rounded-[50%] w-12 sm:hidden'>
                      <Img
                        className='h-4'
                        src='images/img_arrowleft.svg'
                        alt='arrowright'
                      />
                    </Button>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className='inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2' />
                )
              }
              return (
                <div
                  className='inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2'
                  role='button'
                  tabIndex={0}
                />
              )
            }}
          />
          <PagerIndicator
            className='flex gap-[9px] h-7 items-start justify-start p-2.5 w-[79px]'
            count={4}
            activeCss='inline-block cursor-pointer rounded-[50%] h-2 bg-black-900 w-2'
            activeIndex={sliderState}
            inactiveCss='inline-block cursor-pointer rounded-[50%] h-2 bg-blue_gray-400 w-2'
            sliderRef={sliderRef}
            selectedWrapperCss='inline-block'
            unselectedWrapperCss='inline-block'
          />
        </div>
      </div>
    </>
  )
}

HomeTestimonial.defaultProps = {
  quote: (
    <>
      &quot; Artohm&#39;s marketplace is a treasure trove for art enthusiasts
      like us. We&#39;ve found exquisite traditional pieces and discovered
      AI-generated art that pushes the boundaries of creativity. It&#39;s a
      place where art meets innovation, and we&#39;re proud to be part of this
      inspiring community. &quot;
    </>
  ),
  text: 'John and Lisa ',
  textOne: 'Art Collectors'
}


export default HomeTestimonial
