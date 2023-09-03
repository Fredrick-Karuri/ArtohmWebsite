import React from "react";

import { Button, Img, Text } from "components";

const HomeFeatures = (props) => {
  function handleNavigate5() {
    window.location.href =
      "https://forms.office.com/Pages/ResponsePage.aspx?id=ZU8LnmS5eU-3AoDjzg5YEUYNG5zm3otDmhvrnkq2jBFUNDJKV1VRVVpOQzRKNlBJRU9XRDg1SzlRVi4u";
  }

  return (
    <>
      <div className={props.className}>
        <div className="gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_artgallery.svg"
                alt="artgallery"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <Img
                className="h-12 w-12"
                src="images/img_computer.svg"
                alt="computer"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.description1}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_marketplace.svg"
                alt="marketplace"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading2}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.description2}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img className="h-12 w-12" src="images/img_home.svg" alt="home" />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading3}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.description3}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_computer_red_300.svg"
                alt="computer"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading4}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.text}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_discussions.svg"
                alt="discussions"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="md:text-2xl text-[32px] text-black-900 text-center w-full"
                  size="txtLibreBaskervilleBold32"
                >
                  {props?.heading5}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[405px] sm:max-w-[] md:max-w-full text-base text-black-900 text-center"
                  size="txtLatoRegular16Black900"
                >
                  {props?.text1}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 w-auto">
          <Button
            className="common-pointer bg-pink-300_01 cursor-pointer font-roboto min-w-[250px] outline outline-[1px] outline-pink-300_01 py-3.5 rounded-[19px] text-base text-center text-white-A700"
            onClick={handleNavigate5}
          >
            {props?.joinartohmtodaybutton}
          </Button>
        </div>
      </div>
    </>
  );
};

HomeFeatures.defaultProps = {
  heading: "Art Galleries",
  description:
    "Discover curated galleries that juxtapose classic masterpieces with cutting-edge AI interpretations. Explore the evolution of art through thought-provoking exhibitions.",
  heading1: "Educational Hub",
  description1:
    "Nurture your artistic skills and knowledge with our extensive educational resources. From tutorials to workshops, we bridge the gap between traditional and AI art.",
  heading2: "Marketplace",
  description2:
    "Find and acquire authentic artworks from a diverse range of artists. Whether you appreciate traditional craftsmanship or AI-generated ingenuity, our marketplace caters to all tastes.",
  heading3: "Community",
  description3:
    "Join a vibrant community of artists, collectors, and enthusiasts. Collaborate, share insights, and celebrate the fusion of tradition and technology.",
  heading4: <>Collector&#39;s Paradise</>,
  text: (
    <>
      Explore a collector&#39;s dreamland where traditional and AI artworks find
      their place in your personal gallery.
    </>
  ),
  heading5: "Art Discussions",
  text1:
    "Engage in meaningful conversations about the evolving art landscape, ethics, and the potential of AI in art creation.",
  joinartohmtodaybutton: "Join Artohm Today!",
};

export default HomeFeatures;
