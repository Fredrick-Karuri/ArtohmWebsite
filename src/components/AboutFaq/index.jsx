import React from 'react'
import { AccordionItem } from './Accordion'

import { Button, Img, List, Text } from 'components'

const AboutFaq = props => {
  return (
    <>
      <div className={props.className}>
        <div className='flex flex-col gap-6 items-center justify-start max-w-3xl w-full'>
          <Text
            className='text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full'
            size='txtLibreBaskervilleBold48'
          >
            {props?.headingThree}
          </Text>
          <Text
            className='text-black-900 text-center text-lg w-full'
            size='txtLatoRegular18Black900'
          >
            {props?.textTwo}
          </Text>
        </div>
        <List
          className='sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-start w-full'
          orientation='horizontal'
        >
          <div className='flex flex-1 flex-col gap-4 items-start justify-start w-full'>
            <AccordionItem
              headingThree='What is Artohm?'
              textThree=" Artohm is a dynamic art platform that celebrates the harmonious convergence of traditional art and AI-generated art. It's a space where artists, collectors, and enthusiasts come together to appreciate the authenticity of traditional art while exploring the innovative possibilities of AI-generated creations."
            />
            <AccordionItem
              headingThree='How can I join Artohm?'
              textThree="Joining Artohm is easy! Simply click on the 'Sign-Up' button on our homepage, fill in the required information, and create your account. You can also sign up using your existing social media accounts for added convenience."
            />
            <AccordionItem />
            <AccordionItem
              headingThree='How do you ensure the authenticity of AI-generated art?'
              textThree='Transparency and authenticity are essential at Artohm. We clearly indicate when an artwork is AI-generated, and we maintain a strong commitment to ethical considerations in the creation and presentation of AI-generated art'
            />
          </div>
          <div className='flex flex-1 flex-col gap-4 items-start justify-start w-full'>
            <AccordionItem
              headingThree=' Can I engage in discussions about art on Artohm?'
              textThree='Absolutely! Artohm offers a platform for art enthusiasts, collectors, and artists to engage in meaningful discussions about various art-related topics. Our forums and discussion spaces are open for all members to participate.'
            />
            <AccordionItem
              headingThree='How can I get in touch with the Artohm team for further questions or support?'
              textThree="If you have additional questions or need support, you can reach out to our dedicated support team through the 'Contact Us' section on the platform. We're here to assist you with any inquiries you may have!"
            />
            <AccordionItem
              headingThree='What makes Artohm unique?'
              textThree='Artohm stands out by fostering a creative ecosystem where traditional art and AI-generated art harmoniously coexist. Our platform encourages artists to explore their potential through AI tools while preserving the authenticity of their craft. We also provide educational resources, curated exhibitions, and a marketplace that caters to diverse artistic tastes.'
            />
            <AccordionItem
              headingThree='Who can use Artohm?'
              textThree='Artohm is designed to be inclusive and appeals to a wide audience: Artists, Collectors, Art Enthusiasts, AI Enthusiasts, Educators and Curators.'
            />

            {/* <div className='border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full'>
              <div className='flex flex-row sm:gap-10 items-center justify-between w-full'>
                <Text
                  className='flex-1 text-black-900 text-lg w-auto'
                  size='txtLatoBold18'
                >
                  {props?.language3}
                </Text>
                <Img
                  className='h-8 w-8'
                  src='images/img_plus.svg'
                  alt='plus_Three'
                />
              </div>
            </div> */}
          </div>
        </List>
        <div className='flex flex-col gap-6 items-center justify-start w-[560px] sm:w-full'>
          <div className='flex flex-col gap-4 items-center justify-start w-full'>
            <Text
              className='md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full'
              size='txtLibreBaskervilleBold32'
            >
              {props?.headingFour}
            </Text>
            <Text
              className='text-black-900 text-center text-lg w-full'
              size='txtLatoRegular18Black900'
            >
              {props?.textThree}
            </Text>
          </div>
          <Button className='cursor-pointer font-lato min-w-[250px] outline outline-[1px] outline-light_blue-A700 py-3.5 rounded-[13px] text-base text-center text-light_blue-A700'>
            {props?.contactUs}
          </Button>
        </div>
      </div>
    </>
  )
}

AboutFaq.defaultProps = {
  headingThree: 'FAQs',
  textTwo: 'Explore frequently asked questions about Artohm here.',

  language3: 'Who can use Artohm?',
  headingFour: 'Need more help?',
  textThree: 'Contact our team for more information.',
  contactUs: 'Contact Us'
}

export default AboutFaq
