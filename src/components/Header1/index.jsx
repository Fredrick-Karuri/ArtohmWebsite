import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

import { handleSectionNavigation } from "utils";

const Header1 = (props) => {
  const navigate = useNavigate();

  function handleNavigate7() {
    const win = window.open(
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u",
      "_blank",
    );
    win.focus();
  }

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-8 items-center justify-between m-4 w-full">
          <div className="header-row ">
            <Img
              className="common-pointer cursor-pointer h-11 w-[33px]"
              src="images/img_artohmlogo.svg"
              alt="artohmlogo"
              onClick={() => navigate("/")}
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row gap-8 sm:hidden items-center justify-center w-auto">
            <div className="flex flex-row gap-8 items-start justify-start w-auto">
              <Text
                className="common-pointer cursor-pointer text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
              <Text
                className="common-pointer cursor-pointer text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
                onClick={() => {
                  handleSectionNavigation("block2");
                }}
              >
                FAQs
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <Button
                className="common-pointer bg-light_blue-A700 cursor-pointer font-roboto min-w-[168px] outline outline-[1px] outline-light_blue-A700 py-2.5 rounded-[19px] text-base text-center text-white-A700"
                onClick={handleNavigate7}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
