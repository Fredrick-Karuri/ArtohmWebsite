import React from "react";

import { Button, Img, List, Text } from "components";

const AboutFaq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-start max-w-3xl w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
            size="txtLibreBaskervilleBold48"
          >
            {props?.headingThree}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtLatoRegular18Black900"
          >
            {props?.textTwo}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-16 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.question3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.question3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.question3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.question3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.language3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex flex-row items-center justify-center w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.language3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.language3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
            <div className="border border-light_blue-100 border-solid flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full md:w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="flex-1 text-black-900 text-lg w-auto"
                  size="txtLatoBold18"
                >
                  {props?.language3}
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_plus.svg"
                  alt="plus_Three"
                />
              </div>
            </div>
          </div>
        </List>
        <div className="flex flex-col gap-6 items-center justify-start w-[560px] sm:w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtLibreBaskervilleBold32"
            >
              {props?.headingFour}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtLatoRegular18Black900"
            >
              {props?.textThree}
            </Text>
          </div>
          <Button className="cursor-pointer font-lato min-w-[250px] outline outline-[1px] outline-light_blue-A700 py-3.5 rounded-[13px] text-base text-center text-light_blue-A700">
            {props?.contactUs}
          </Button>
        </div>
      </div>
    </>
  );
};

AboutFaq.defaultProps = {
  headingThree: "FAQs",
  textTwo: "Explore frequently asked questions about Artohm here.",
  question: "How do you ensure the authenticity of AI-generated art?",
  question1: "How do you ensure the authenticity of AI-generated art?",
  question2: "How do you ensure the authenticity of AI-generated art?",
  question3: "How do you ensure the authenticity of AI-generated art?",
  language: "Who can use Artohm?",
  language1: "Who can use Artohm?",
  language2: "Who can use Artohm?",
  language3: "Who can use Artohm?",
  headingFour: "Need more help?",
  textThree: "Contact our team for more information.",
  contactUs: "Contact Us",
};

export default AboutFaq;
