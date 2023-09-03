import React from "react";

import { Button, Img, List, Text } from "components";

import { handleSectionNavigation } from "utils";

const HomeHero = (props) => {
  function handleNavigate2() {
    const win = window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row md:gap-5 sm:gap-8 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 h-full items-start justify-center md:pr-10 pr-20 sm:pr-8 w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="leading-[120.00%] md:text-5xl sm:text-[32px] text-[56px] text-black-900"
                size="txtLibreBaskervilleBold56Black900"
              >
                {props?.headingtext}
              </Text>
              <Text
                className="leading-[150.00%] sm:text-base text-black-900 sm:text-left text-lg w-[90%]"
                size="txtLatoRegular18Black900"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
              <Button
                className="common-pointer bg-pink-300_01 cursor-pointer font-roboto min-w-[117px] py-3.5 rounded-[19px] text-base text-center text-white-A700"
                onClick={() => {
                  handleSectionNavigation("block1");
                }}
              >
                {props?.explore}
              </Button>
              <Button
                className="common-pointer cursor-pointer font-roboto min-w-[145px] outline outline-[1px] outline-light_blue-A700 py-3.5 rounded-[13px] text-base text-center text-light_blue-A700"
                onClick={handleNavigate2}
              >
                {props?.learnMore}
              </Button>
            </div>
          </div>
          <List
            className="md:flex flex-1 flex-row gap-4 grid md:grid-cols-1 grid-cols-2 h-[900px] md:h-full justify-start w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-4 h-[900px] md:h-auto sm:h-full items-start justify-start w-full">
              <Img
                className="h-[188px] md:h-[340px] object-cover w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag"
              />
              <Img
                className="h-[340px] md:h-auto object-cover w-full"
                src="images/img_placeholderimage_340x319.png"
                alt="placeholderimag_One"
              />
              <Img
                className="h-[340px] md:h-auto object-cover w-full"
                src="images/img_placeholderimage_1.png"
                alt="placeholderimag_Two"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 h-[900px] md:h-auto items-start justify-start w-full">
              <Img
                className="h-[340px] md:h-auto object-cover w-full"
                src="images/img_placeholderimage_2.png"
                alt="placeholderimag"
              />
              <Img
                className="h-[340px] md:h-auto object-cover w-full"
                src="images/img_placeholderimage_3.png"
                alt="placeholderimag_One"
              />
              <Img
                className="h-[188px] md:h-[340px] object-cover w-full"
                src="images/img_placeholderimage_188x319.png"
                alt="placeholderimag_Two"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

HomeHero.defaultProps = {
  headingtext: "Experience the Fusion of Tradition and Technology",
  descriptiontext: (
    <>
      Artohm is a visionary art platform that seamlesly combines traditional
      artistry with cutting edge AI generated creativity.
      <br />
      Discover a vibrant ecosystem where artists, collectors and enthusiasts
      come together to explore the infinite possibilities of art and technology.{" "}
    </>
  ),
  explore: "Explore",
  learnMore: "Learn More",
};

export default HomeHero;
