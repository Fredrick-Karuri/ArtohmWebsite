import PropTypes from 'prop-types'
import React from 'react'
import { useReducer,useState } from 'react'
import { Text } from 'components'
import { useSpring,animated } from 'react-spring'

export const AccordionItem = ({
  property1,
  className,
  headingThree,
  textThree
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'default'
  })

  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive(!isActive)
  }
  const animation = useSpring({
    // transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    maxHeight: isActive ? '500px' : '100px', 
    overflow: 'hidden',
    config: { duration: 2000 }

  })
  

  return (
    <div
      className={`border border-light_blue-100  w-full sm:px-5 flex px-6 py-5 px-6 md:w-full justify-center items-center  ${
        state.property1 === 'variant-2' ? 'items-start' : 'items-center'
      } ${className}`}
      data-faqs-mode='q3'
      onClick={() => {
        dispatch('click')
        toggleAccordion()
      
      }}
    >
      <animated.div
      style={animation}
        className={`accordion-item ${
          isActive ? 'active' : '' // This part handles the animation
        } flex grow flex-1 relative  ${
          state.property1 === 'variant-2' ? 'flex-col' : ''
        } ${state.property1 === 'variant-2' ? 'items-start' : 'items-center'} ${
          state.property1 === 'default' ? 'justify-center' : ''
        }`}
      >
        {state.property1 === 'default' && (
          <>
            <Text
              className='relative flex-1 text-lg text-black-900  tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] '
              size='txtLatoBold18'
            >
              {headingThree}
            </Text>
            <img
              className='relative w-[32px] h-[32px]'
              alt='Plus'
              src='images/img_plus.svg'
            />
          </>
        )}

        {state.property1 === 'variant-2' && (
          <>
            <div className='flex items-start justify-center items-center relative self-stretch w-full flex-[0_0_auto] mb-4'>
              <Text
                className='relative flex-1  text-lg leading-[] mb-2  text-black-900  tracking-[var(--text-medium-bold-letter-spacing)] leading-[var(--text-medium-bold-line-height)] '
                size='txtLatoBold18'
              >
                {headingThree}
              </Text>
              <img
                className='relative w-[32px] h-[32px]'
                alt='Plus'
                src='images/img_plus.svg'
              />
            </div>
            <p className="relative self-stretch text-lg [font-family:'Lato-Regular',_Helvetica] font-normal text-black-900 text-md tracking-[0] leading-[27px]">
              {textThree}
            </p>
          </>
        )}
      </animated.div>
    </div>
  )
}

function reducer (state, action) {
  if (state.property1 === 'default') {
    switch (action) {
      case 'click':
        return {
          property1: 'variant-2'
        }
    }
  }

  if (state.property1 === 'variant-2') {
    switch (action) {
      case 'click':
        return {
          property1: 'default'
        }
    }
  }

  return state
}

AccordionItem.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'default'])
}
AccordionItem.defaultProps = {
  headingThree: 'What types of artworks can I find in the marketplace?',
  textThree:
    "In our marketplace, you'll discover a diverse range of artworks, including traditional pieces created by talented artists and AI-generated artworks that push the boundaries of artistic innovation. You can explore and acquire pieces that resonate with your artistic preferences."
}

