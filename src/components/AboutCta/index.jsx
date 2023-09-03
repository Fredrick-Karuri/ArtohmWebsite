import React from "react";

import { Button, Text } from "components";

const AboutCta = (props) => {
  function handleNavigate6() {
    const win = window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className={props.className}>
        <div className="border border-black-900 border-solid flex flex-col h-[352px] md:h-auto items-center justify-center max-w-[1312px] p-16 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-3xl w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtLibreBaskervilleBold48"
              >
                {props?.headingtext}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtLatoRegular18Black900"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 w-[250px] sm:w-full">
              <Button
                className="common-pointer bg-pink-300_01 cursor-pointer font-lato outline outline-[1px] outline-pink-300_01 py-3.5 rounded-[19px] text-base text-center text-white-A700 w-full"
                onClick={handleNavigate6}
              >
                {props?.getearlyaccesstext}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutCta.defaultProps = {
  headingtext: "Explore AI Art",
  descriptiontext:
    "Discover a world of inspiring art – both traditional and AI-generated – with ArtOhm.",
  getearlyaccesstext: "Get Early Access",
};

export default AboutCta;
