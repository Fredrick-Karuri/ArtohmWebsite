import React from "react";

import { Img, Text } from "components";

const AboutArtohm = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl md:text-[32px] sm:text-[38px] text-black-900 w-full"
              size="txtLibreBaskervilleBold48"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[616px] md:max-w-full text-black-900 text-lg"
              size="txtLatoRegular18Black900"
            >
              {props?.userdescription}
            </Text>
          </div>
        </div>
        <Img
          className="flex-1 md:flex-none md:h-[560px] h-[640px] sm:h-auto object-cover md:w-3/5 w-full"
          src="images/img_placeholderimage_7.png"
          alt="placeholderimag"
        />
      </div>
    </>
  );
};

AboutArtohm.defaultProps = {
  headingOne: "About Artohm",
  userdescription:
    "At Artohm, we believe in the power of collaboration between traditional art and AI-generated artwork to create something truly unique. We curate galleries of art from around the world, provide tools to empower artists, and offer a marketplace of captivating creations. Join us in discovering the boundless possibilities of art, and redefine how we experience it.",
};

export default AboutArtohm;
