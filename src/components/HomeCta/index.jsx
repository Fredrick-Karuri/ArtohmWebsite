import React from 'react'

import { Button, Text } from 'components'

const HomeCta = props => {
  function handleNavigate3 () {
    const win = window.open(
      'https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u',
      '_blank'
    )
    win.focus()
  }

  return (
    <>
      <div className={props.className}>
        <div className=' border border-[2px] border-red-400 rounded md:p-8 md  p-16 '>
          <div className='flex flex-col gap-6 items-center justify-start max-w-3xl w-full '>
            <div className='flex flex-col gap-6 items-center justify-start w-full'>
              <Text
                className='leading-[120.00%] max-w-3xl sm:max-w-[90%] md:max-w-full text-5xl sm:text-[32px] md:text-[44px] text-black-900 text-center'
                size='txtLibreBaskervilleBold48'
              >
                {props?.headingtext}
              </Text>
              <Text
                className='leading-[150.00%] max-w-3xl md:max-w-full text-black-900 text-center text-lg'
                size='txtLatoRegular18Black900'
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className='flex flex-col items-start justify-start pt-4 w-auto sm:w-full'>
              <Button
                className='common-pointer bg-pink-300_01 cursor-pointer font-lato min-w-[250px] outline outline-[1px] outline-pink-300_01 py-3.5 rounded-[19px] text-base text-center text-white-A700 sm:w-full'
                onClick={handleNavigate3}
              >
                {props?.buttontext}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

HomeCta.defaultProps = {
  headingtext: <>Be the First to Experience Artohm&#39;s Beta App!</>,
  descriptiontext: (
    <>
      Join our exclusive beta tester community and explore the future of art.
      Get early access to the Artohm app before it&#39;s released to the public.
      Sign up now!
    </>
  ),
  buttontext: 'Get Early  Access'
}

export default HomeCta
