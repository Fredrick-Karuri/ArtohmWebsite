import React from "react";

import { Img, Text } from "components";

const AboutTestimonial = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-center justify-start max-w-3xl w-full">
          <Img
            className="h-[18px] w-[116px]"
            src="images/img_stars.svg"
            alt="stars"
          />
          <Text
            className="leading-[140.00%] max-w-3xl md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtLibreBaskervilleBold24Black900"
          >
            {props?.quote}
          </Text>
          <div className="flex flex-row gap-5 items-center justify-start w-auto">
            <Img
              className="h-14 md:h-auto rounded-[50%] w-14"
              src="images/img_avatarimage_56x56.png"
              alt="avatarimage"
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtLatoSemiBold16"
              >
                {props?.userlanguage}
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtLatoRegular16Black900"
              >
                {props?.userrole}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutTestimonial.defaultProps = {
  quote: (
    <>
      &quot;Artohm has revolutionized the way I create and share art. I&#39;m so
      glad I found this platform!&quot;
    </>
  ),
  userlanguage: "Drepley ",
  userrole: "Artist & Collector",
};

export default AboutTestimonial;
