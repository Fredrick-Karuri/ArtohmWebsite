import React from "react";

import { Text } from "components";

const AboutHero = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_header.png')" }}
      >
        <div className="flex flex-col gap-6 md:items-center items-start justify-start max-w-[800px] py-28 w-full">
          <Text
            className="leading-[120.00%] max-w-[800px] md:max-w-[] sm:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-center text-white-A700 md:w-4/5"
            size="txtLibreBaskervilleBold56"
          >
            {props?.heading}
          </Text>
          <Text
            className="leading-[150.00%] max-w-[800px] md:max-w-[90%] sm:max-w-full text-center text-lg text-white-A700"
            size="txtLatoRegular18"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutHero.defaultProps = {
  heading: "Experience Art Reimagined",
  description:
    "Artohm is a revolutionary art platform that seamlessly blends traditional art and AI-powered innovation, creating a space for artists, collectors, and enthusiasts to explore, engage, and purchase captivating creations.",
};

export default AboutHero;
