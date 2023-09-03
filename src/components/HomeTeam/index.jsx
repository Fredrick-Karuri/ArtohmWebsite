import React from "react";

import { Img, List, Text } from "components";

const HomeTeam = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start max-w-3xl w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[32px] md:text-[44px] text-black-900 text-center w-full"
              size="txtLibreBaskervilleBold48"
            >
              {props?.headingSix}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtLatoRegular18Black900"
            >
              {props?.textThree}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <List
              className="md:flex sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-[296px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-[72%] md:w-full"
                  src="images/img_placeholderimage_296x416.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtLatoSemiBold20"
                    >
                      {props?.username}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtLatoRegular18Black900"
                    >
                      {props?.userjobtitle}
                    </Text>
                  </div>
                  <Text
                    className="text-base text-black-900 text-center w-4/5"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.userdescription}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-[296px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-[72%] md:w-full"
                  src="images/img_placeholderimage_5.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtLatoSemiBold20"
                    >
                      {props?.username1}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtLatoRegular18Black900"
                    >
                      {props?.userjobtitle1}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 text-center w-4/5"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.userdescription1}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                <Img
                  className="h-[296px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-[72%] md:w-full"
                  src="images/img_placeholderimage_6.png"
                  alt="placeholderimag"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-black-900 text-center text-xl w-full"
                      size="txtLatoSemiBold20"
                    >
                      {props?.username2}
                    </Text>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtLatoRegular18Black900"
                    >
                      {props?.userjobtitle2}
                    </Text>
                  </div>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 text-center w-4/5"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.userdescription2}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_airplane.svg"
                    alt="airplane"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_icondribble.svg"
                    alt="icondribble"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

HomeTeam.defaultProps = {
  headingSix: "Our team",
  textThree:
    "Passionate individuals dedicated to revolutionizing the art industry",
  username: "John Doe",
  userjobtitle: "Art Director",
  userdescription: "With a deep love for art and a keen eye for creativity",
  username1: "Jne Smith",
  userjobtitle1: "Curator",
  userdescription1:
    "Bringing together traditional and AI-generated masterpieces in our galleries",
  username2: "Sarah Thompson",
  userjobtitle2: "Marketing Manager",
  userdescription2:
    "Spreading the word about the transformative power of art and technology",
};

export default HomeTeam;
