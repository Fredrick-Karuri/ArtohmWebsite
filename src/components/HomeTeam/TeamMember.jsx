// TeamMember.jsx
import React from 'react';
import { Img, Text } from 'components';



const TeamMember = ({ username, imageSrc, socialIcons, userJobTitle, userDescription }) => (
  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
    <Img
      className="h-[360px] sm:h-auto object-cover rounded-lg w-[80%] md:w-full"
      src={imageSrc}
      alt="placeholderimag"
    />
    <div className="flex flex-col gap-4 items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <Text
          className="text-black-900 text-center text-xl w-full"
          size="txtLatoSemiBold20"
        >
          {username}
        </Text>
        <Text
          className="text-black-900 text-center text-lg w-full"
          size="txtLatoRegular18Black900"
        >
          {userJobTitle}
        </Text>

      </div>
      <Text
        className="text-base text-black-900 text-center w-4/5"
        size="txtLatoRegular16Black900"
      >
        {userDescription}
      </Text>
        <div className="flex gap-4 items-center justify-center w-full">
          {socialIcons.map((icon, index) => (
            <Img
              key={index}
              className="h-6 w-6  cursor-pointer "
              src={icon.src}
              alt={icon.alt}
              onClick={icon.onClick}
            />
          ))}
        </div>
      </div>
    </div>
);

export default TeamMember;