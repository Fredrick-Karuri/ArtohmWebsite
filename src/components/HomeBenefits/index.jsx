import React from "react";

import { Button, Img, Text } from "components";

const HomeBenefits = (props) => {
  function handleNavigate4() {
    const win = window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start md:justify-start w-full">
          <Img
            className="flex-1 md:flex-none md:h-[500px] h-[640px] sm:h-auto max-h-[640px] md:max-h-[] object-cover sm:w-[] md:w-[]"
            src="images/img_placeholderimage_640x616.png"
            alt="placeholderimag"
          />
          <div className="flex flex-1 flex-col md:gap-12 gap-6 md:items-center items-start justify-start md:justify-start w-full">
            <div className="flex flex-col md:gap-14 gap-8 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-6 md:gap-8 md:items-center items-start justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[616px] sm:max-w-[90%] md:max-w-[] text-5xl md:text-[32px] text-black-900"
                    size="txtLibreBaskervilleBold48"
                  >
                    {props?.headingone}
                  </Text>
                  <Text
                    className="md:flex md:flex-row md:items-center md:justify-center leading-[150.00%] max-w-[616px] md:max-w-[85%] sm:max-w-full text-black-900 md:text-justify text-lg"
                    size="txtLatoRegular18Black900"
                  >
                    {props?.descriptionone}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-6 items-start md:justify-center justify-start py-2 w-full">
                <div className="flex flex-1 flex-col gap-4 md:items-center items-start md:justify-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="md:flex md:justify-center text-black-900 sm:text-center text-xl md:w-[] w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.headingtwo}
                  </Text>
                  <Text
                    className="md:flex md:items-center md:justify-center leading-[150.00%] md:leading-[] max-w-[296px] sm:max-w-[90%] md:max-w-[] text-base text-black-900 md:text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.texttwo}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 md:items-center items-start md:justify-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <Text
                    className="md:flex md:items-center md:justify-center md:max-w-[] text-black-900 sm:text-center text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.headingthree}
                  </Text>
                  <Text
                    className="leading-[150.00%] md:leading-[] max-w-[296px] sm:max-w-[90%] md:max-w-[] text-base text-black-900 md:text-center"
                    size="txtRobotoRegular16"
                  >
                    {props?.textthree}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-4 w-auto sm:w-full">
              <Button
                className="common-pointer cursor-pointer font-roboto min-w-[250px] outline outline-[1px] outline-light_blue-A700 py-3.5 rounded-[13px] text-base text-center text-light_blue-A700 sm:w-full"
                onClick={handleNavigate4}
              >
                {props?.signupbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeBenefits.defaultProps = {
  headingone:
    "Bridging the Gap Between Artistic Heritage and Futuristic Innovation",
  descriptionone:
    "ArtOhm is a catalyst for conversations, bringing together the authenticity of traditional art and the innovation of AI-driven masterpieces. Join us on this transformative journey as we shape a new era for art.",
  headingtwo: "Authenticity",
  texttwo:
    "Explore the vibrant dialogue between classical techniques and limitless AI creativity.",
  headingthree: "Innovation",
  textthree:
    "Discover captivating artworks that merge human and machine collaboration in exquisite harmony.",
  signupbutton: "Sign Up For Early Access",
};

export default HomeBenefits;
