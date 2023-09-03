import React from "react";

import { Img, Text } from "components";

const HomeGallery = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start max-w-3xl w-full">
          <Text
            className="text-5xl sm:text-[32px] md:text-[44px] text-black-900 text-center w-full"
            size="txtLibreBaskervilleBold48"
          >
            {props?.headingFive}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtLatoRegular18Black900"
          >
            {props?.textTwo}
          </Text>
        </div>
        <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
          <Img
            className="flex-1 md:h-[500px] sm:h-auto h-full max-h-[752px] md:max-h-[] object-cover sm:w-[] md:w-[]"
            src="images/img_placeholderimage_752x640.png"
            alt="placeholderimag_One"
          />
          <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
            <Img
              className="md:h-auto h-full object-cover w-full"
              src="images/img_placeholderimage_360x640.png"
              alt="placeholderimag_Two"
            />
            <Img
              className="md:h-auto h-full object-cover w-full"
              src="images/img_placeholderimage_4.png"
              alt="placeholderimag_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HomeGallery.defaultProps = {
  headingFive: "Featured Artworks",
  textTwo: "Discover captivating artworks that blend tradition and technology",
};

export default HomeGallery;
