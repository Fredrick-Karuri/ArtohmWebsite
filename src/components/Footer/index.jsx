import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  function handleNavigate1() {
    const win = window.open(
      "https://www.instagram.com/Artohm_/?hl=en",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[864px] w-full">
            <Img
              className="h- w-[60px]"
              src="images/img_artohmlogo.svg"
              alt="artohmlogo_One"
            />
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.addressTitle}
                </Text>
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtLatoRegular14"
                >
                  {props?.userAddress}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.contactTitle}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[864px] md:max-w-full text-black-900 text-sm underline"
                  size="txtLatoRegular14"
                >
                  {props?.userContact}
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Img
                  className="common-pointer cursor-pointer h-6 w-6"
                  src="images/img_instagram.svg"
                  alt="instagram"
                  onClick={handleNavigate1}
                />
                <Img
                  className="cursor-pointer h-6 w-6"
                  src="images/img_airplane.svg"
                  alt="airplane"
                />
                <Img
                  className="cursor-pointer h-6 w-6"
                  src="images/img_iconlinkedin.svg"
                  alt="iconlinkedin"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtLatoSemiBold16"
              >
                {props?.linkTwo}
              </Text>
              <Text
                className="text-base text-black-900 w-full"
                size="txtLatoSemiBold16"
              >
                {props?.linkThree}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <Line className="bg-black-900 h-px w-full" />
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtLatoRegular14"
            >
              {props?.textSix}
            </Text>
            <div className="flex flex-row gap-6 items-start justify-start w-auto">
              <Text
                className="cursor-pointer text-black-900 text-sm underline w-auto"
                size="txtLatoRegular14"
              >
                {props?.linkFour}
              </Text>
              <Text
                className="cursor-pointer text-black-900 text-sm underline w-auto"
                size="txtLatoRegular14"
              >
                {props?.linkFive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Footer.defaultProps = {
  addressTitle: "Address:",
  userAddress: "Nairobi, Kenya",
  contactTitle: "Contact:",
  userContact: (
    <>
      +254 793 985 752
      <br />
      smallartohm@gmail.com
    </>
  ),
  linkTwo: "About Us",
  linkThree: "FAQs",
  textSix: "© 2023 Artohm. All rights reserved.",
  linkFour: "Privacy Policy",
  linkFive: "Terms of Service",
};

export default Footer;
