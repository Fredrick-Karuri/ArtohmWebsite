import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-8 items-center justify-between w-full">
          <div className="header-row my-1.5">
            <Img
              className="h-[27px] w-[63px]"
              src="defaultNoData.png"
              alt="column"
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
                className="text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                About
              </Text>
              <Text
                className="text-base text-black-900 w-auto"
                size="txtRobotoRegular16"
              >
                FAQs
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <Button className="bg-light_blue-A700 cursor-pointer font-roboto min-w-[97px] outline outline-[1px] outline-light_blue-A700 py-2.5 text-base text-center text-white-A700">
                Get App
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
