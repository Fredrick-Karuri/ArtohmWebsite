import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import AboutArtohm from "components/AboutArtohm";
import AboutBenefits from "components/AboutBenefits";
import AboutCta from "components/AboutCta";
import AboutFaq from "components/AboutFaq";
import AboutFeatures from "components/AboutFeatures";
import AboutHero from "components/AboutHero";
import AboutTestimonial from "components/AboutTestimonial";
import Header1 from "components/Header1";

import { handleSectionNavigation } from "utils";

const AboutPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    const win = window.open(
      "https://www.instagram.com/Artohm_/?hl=en",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="bg-white-A700 flex h-[72px] md:h-auto items-center justify-center px-16 md:px-5 shadow-bs sticky top-[0] w-full" />
        <AboutHero
          className="bg-cover bg-no-repeat flex flex-col gap-6 h-[463px] items-center justify-center w-full"
          style={{ backgroundImage: "url('images/img_header.png')" }}
        />
        <AboutArtohm className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 gap-20 items-center justify-between md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutFeatures className="bg-red-300 flex flex-col font-lato md:gap-10 gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutBenefits className="bg-white-A700 flex flex-col gap-20 items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutTestimonial className="bg-white-A700 flex flex-col font-librebaskerville gap-12 items-center justify-center md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutCta className="bg-white-A700 flex flex-col font-lato gap-20 h-[576px] md:h-auto items-center justify-start md:px-10 px-16 sm:px-5 py-28 w-full" />
        <AboutFaq
          className="bg-white-A700 flex flex-col font-lato md:gap-10 gap-20 items-center justify-start sm:p-[] md:px-10 px-16 sm:px-6 py-28 w-full"
          id="block2"
        />
        <footer className="bg-pink-50 flex font-lato items-center justify-center px-16 md:px-5 py-20 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-8 items-start justify-start max-w-[864px] w-full">
                <Img
                  className="h-11 w-[33px]"
                  src="images/img_artohmlogo.svg"
                  alt="artohmlogo_One"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm w-full"
                      size="txtRobotoSemiBold14"
                    >
                      Address:
                    </Text>
                    <Text
                      className="text-black-900 text-sm w-full"
                      size="txtLatoRegular14"
                    >
                      Nairobi, Kenya
                    </Text>
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-sm w-full"
                      size="txtRobotoSemiBold14"
                    >
                      Contact:
                    </Text>
                    <Text
                      className="leading-[150.00%] text-black-900 text-sm underline"
                      size="txtLatoRegular14"
                    >
                      <>
                        +254 793 985 752
                        <br />
                        smallartohm@gmail.com
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Img
                      className="common-pointer h-6 w-6"
                      src="images/img_instagram.svg"
                      alt="instagram"
                      onClick={handleNavigate}
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="common-pointer cursor-pointer text-base text-black-900"
                    size="txtLatoSemiBold16"
                    onClick={() => navigate("/about")}
                  >
                    About Us
                  </Text>
                  <a className="text-base text-black-900">
                    <Text
                      className="common-pointer"
                      size="txtLatoSemiBold16"
                      onClick={() => {
                        handleSectionNavigation("block2");
                      }}
                    >
                      FAQs
                    </Text>
                  </a>
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
                  © 2023 Artohm. All rights reserved.
                </Text>
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <a
                    href="javascript:"
                    className="text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtLatoRegular14">Privacy Policy</Text>
                  </a>
                  <a
                    href="javascript:"
                    className="text-black-900 text-sm underline w-auto"
                  >
                    <Text size="txtLatoRegular14">Terms of Service</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
