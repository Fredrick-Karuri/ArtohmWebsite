import React from 'react'

import { Img, List, Text } from 'components'
import TeamMember from './TeamMember'
const HomeTeam = props => {
  return (
    <>
      <div className={props.className}>
        <div className='flex flex-col items-center justify-start max-w-3xl w-full'>
          <div className='flex flex-col gap-6 items-center justify-start w-full'>
            <Text
              className='text-5xl sm:text-[32px] md:text-[44px] text-black-900 text-center w-full'
              size='txtLibreBaskervilleBold48'
            >
              {props?.headingSix}
            </Text>
            <Text
              className='text-black-900 text-center text-lg w-full'
              size='txtLatoRegular18Black900'
            >
              {props?.textThree}
            </Text>
          </div>
        </div>
        <div className='flex flex-col items-center justify-start w-full'>
            <List
              className='md:flex sm:flex-col flex flex-row gap-8 items-start justify-start  '
              orientation='horizontal'
            >
              {/* member 1 */}

              <TeamMember
                username={props?.username}
                userJobTitle={props?.userjobtitle}
                userDescription={props?.userdescription}
                imageSrc='images/fred.jpg'
                socialIcons={[
                  {
                    src: 'images/img_iconlinkedin.svg',
                    alt: 'linkedin icon',
                    onClick: () => window.location.href = 'https://www.linkedin.com/in/fredrick-karuri'
                    
                  },
                  {
                    src: 'images/img_airplane.svg',
                    alt: 'twitter icon'
                  },
                  {
                    src: 'images/img_icondribble.svg',
                    alt: ' dribble icon'
                  }
                ]}
              ></TeamMember>
              {/* member 2 */}
              <TeamMember
                username={props?.username1}
                userJobTitle={props?.userjobtitle1}
                userDescription={props?.userdescription1}
                imageSrc='images/derrick.jpg'
                socialIcons={[
                  {
                    src: 'images/img_iconlinkedin.svg',
                    alt: 'linkedin icon'
                  },
                  {
                    src: 'images/img_airplane.svg',
                    alt: 'twitter icon'
                  },
                  {
                    src: 'images/img_icondribble.svg',
                    alt: ' dribble icon'
                  }
                ]}
              ></TeamMember>
              {/* member 3 */}
              {/* <TeamMember
                username={props?.username2}
                userJobTitle={props?.userjobtitle2}
                userDescription={props?.userdescription2}
                imageSrc='images/img_placeholderimage_6.png'
                socialIcons={[
                  {
                    src: 'images/img_iconlinkedin.svg',
                    alt: 'linkedin icon'
                  },
                  {
                    src: 'images/img_airplane.svg',
                    alt: 'twitter icon'
                  },
                  {
                    src: 'images/img_icondribble.svg',
                    alt: ' dribble icon'
                  }
                ]}
              ></TeamMember> */}
            </List>
          </div>
        </div>
    </>
  )
}

HomeTeam.defaultProps = {
  headingSix: 'Our team',
  textThree:
    'Passionate individuals dedicated to revolutionizing the art industry',
  username: 'Fredrick Karuri',
  userjobtitle: 'Art Director',
  userdescription: 'With a deep love for art and a keen eye for creativity',
  username1: 'Derrick Munyole',
  userjobtitle1: 'Curator',
  userdescription1:
    'Bringing together traditional and AI-generated masterpieces in our galleries',
  username2: 'Sarah Thompson',
  userjobtitle2: 'Marketing Manager',
  userdescription2:
    'Spreading the word about the transformative power of art and technology'
}

export default HomeTeam
