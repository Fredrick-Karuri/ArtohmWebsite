import React from "react";

import { Button, Img, List, Text } from "components";

const AboutFeatures = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start max-w-3xl w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
              size="txtLibreBaskervilleBold48WhiteA700"
            >
              {props?.text}
            </Text>
            <Text
              className="leading-[150.00%] max-w-3xl md:max-w-full text-center text-lg text-white-A700"
              size="txtLatoRegular18"
            >
              {props?.descriptionTwo}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row md:gap-10 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_lightbulb.svg"
                alt="lightbulb"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-2xl text-center text-white-A700 sm:text-xl w-full"
                  size="txtLibreBaskervilleBold24"
                >
                  {props?.text1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[304px] md:max-w-full text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_settings.svg"
                alt="settings"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-2xl text-center text-white-A700 sm:text-xl w-full"
                  size="txtLibreBaskervilleBold24"
                >
                  {props?.text2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[304px] md:max-w-full text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  {props?.textOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_creativityidea.svg"
                alt="creativityidea"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-2xl text-center text-white-A700 sm:text-xl w-full"
                  size="txtLibreBaskervilleBold24"
                >
                  {props?.text3}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[304px] md:max-w-full text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  {props?.description1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_explore.svg"
                alt="explore"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-2xl text-center text-white-A700 sm:text-xl w-full"
                  size="txtLibreBaskervilleBold24"
                >
                  {props?.text4}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[304px] md:max-w-full text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  {props?.textone1}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col items-center justify-start pt-4 w-[250px] sm:w-full">
            <Button className="cursor-pointer font-lato outline outline-[1px] outline-white-A700 py-3.5 text-base text-center text-white-A700 w-full">
              {props?.explore}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AboutFeatures.defaultProps = {
  text: "Authenticity",
  descriptionTwo: (
    <>
      At Artohm, we champion the true spirit of art. Our curated galleries spark
      meaningful conversations, our AI tools empower artists, and our
      marketplace offers captivating creations. Join us in redefining art&#39;s
      boundaries and celebrating the synergy of tradition and technology.
    </>
  ),
  text1: "Innovation",
  description:
    "We blend traditional art with AI-generated innovation, creating a space where artists, collectors, and enthusiasts can unite.",
  text2: "Connection",
  textOne:
    "Connect with people who share your passion and explore the boundaries of art through our platform.",
  text3: "Creativity",
  description1:
    "Unlock your creativity and find inspiration with Artohm. Our tools and resources help you find new ways to express your unique vision.",
  text4: "Explore",
  textone1:
    "Discover the power of art with Artohm. Explore our collections and unleash your imagination.",
  explore: "Explore",
};

export default AboutFeatures;
