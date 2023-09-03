import React from "react";

import { Img, List, Text } from "components";

const AboutBenefits = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="md:flex sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-60 md:h-[200px] sm:h-auto object-cover w-full"
              src="images/img_placeholderimage_240x405.png"
              alt="placeholderimag"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[405px] md:max-w-full md:text-2xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtLibreBaskervilleBold32"
                  >
                    {props?.language}
                  </Text>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 text-center"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.description}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-60 md:h-[200px] sm:h-auto object-cover w-full"
              src="images/img_placeholderimage_8.png"
              alt="placeholderimag"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[405px] md:max-w-full md:text-2xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtLibreBaskervilleBold32"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 text-center"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.description2}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
            <Img
              className="h-60 md:h-[200px] sm:h-auto object-cover w-full"
              src="images/img_placeholderimage_9.png"
              alt="placeholderimag"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Text
                    className="md:text-2xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtLibreBaskervilleBold32"
                  >
                    {props?.heading2}
                  </Text>
                  <Text
                    className="leading-[150.00%] text-base text-black-900 text-center"
                    size="txtLatoRegular16Black900"
                  >
                    {props?.description3}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

AboutBenefits.defaultProps = {
  language: "Unlock a world of creativity ",
  description:
    "Artohm provides the perfect environment for artists to expand their horizons and explore new avenues of creativity. Our curated galleries allow for unique dialogues to develop, and our AI tools equip artists with powerful capabilities. With our marketplace, collectors and enthusiasts can access captivating creations from around the world.",
  heading: "Discover Unique Creations",
  description2:
    "At Artohm, collectors can uncover rare and inspiring pieces from some of the world’s most talented and innovative artists. With a variety of styles, mediums, and themes to choose from, you’re sure to find something special for your collection. Our AI tools also make it easy to curate and manage your purchases.",
  heading2: "Unlimited Inspiration",
  description3:
    "Artohm is the ultimate destination for those looking for new and unique ways to enjoy and appreciate art. Our galleries showcase a broad range of styles and mediums from both traditional and AI-generated sources. With our marketplace, you can access captivating creations from around the world and join in the exploration of art’s ever-expanding boundaries.",
};

export default AboutBenefits;
