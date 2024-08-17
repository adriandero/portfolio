import storyWork from "../../../../public/story-cio.png";
import storyHighPot from "../../../../public/story-highPot.jpg";
import storyHome from "../../../../public/story-home.png";
import { ReactElement } from "react";

import Image from "next/image";
import { Button, NextUIProvider, Card, CardFooter } from "@nextui-org/react";
import React from "react";
interface PropsInterface {
  title: String | "<Title>";
  accentedWordPosition?: number;
  description?: String;
  image?: any;
  imageAlt: string | "image of a story";
  isLeft: boolean | false;
}
export default function StoryPart({
  title,
  accentedWordPosition,
  description,
  image,
  imageAlt,
  isLeft,
}: PropsInterface) {
  //pic right or left
  //Heading, Text
  //Picture

  const titleSplit: Array<React.ReactNode> = title?.split(" ");

  if (
    accentedWordPosition &&
    accentedWordPosition >= 0 &&
    accentedWordPosition < titleSplit.length
  ) {
    // Wrap the specified word with the span

    titleSplit[accentedWordPosition - 1] = (
      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
        {titleSplit[accentedWordPosition - 1]}
      </span>
    );
  }

  return (
    <>
      {isLeft ? (
        <>
          <section className="flex flex-row flex-wrap  w-full h-fit my-16 md:my-36 justify-center md:justify-start relative my-52">
            {/*{" "}
            <div className="stars-container absolut h-full w-full">
              <span className="star1"></span>
              <span className="star5"></span>
              <span className="star9"></span>
            </div>
            */}
            <div className="w-6/12 justify-center ">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="w-64 relative">
                  {/*<div className="float-s absolute z-10 bottom-16 -left-8 h-12 w-12 rounded-lg bg-black border-6 border-solid border-white"></div>
                    <div className="float-m absolute z-10 -bottom-8 -right-8 h-24 w-24 rounded-2xl bg-black border-6 border-solid border-white"></div>
                    <div className="float-m absolute z-10 -top-16 left-8 h-16 w-16 rounded-xl bg-black border-6 border-solid border-white"></div>*/}

                  {/*<Image
                    src={spengergasseLogoSvg}
                    alt="Adrian Profile"
                    className=" float-l h-96 w-auto"
                   />*/}
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none float-l"
                  >
                    <Image
                      alt={imageAlt}
                      className="object-cover brightness-50 sm:brightness-100"
                      height={700}
                      src={image}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">Available soon.</p>
                      <Button
                        isDisabled
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center w-2/6 w-fit md:m-0 my-16 min-w-64 max-w-80 absolute sm:relative backdrop-filter backdrop-blur-sm bg-opacity-20 sm:border-0 border border-gray-100 border-opacity-20 sm:top-0 p-4 rounded-xl pb-0 top-14 sm:left-0 xs:left-24 left-2">
              <h1 className="sm:text-3xl text-2xl font-semibold ">
                {titleSplit.map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && " "}
                    {word}
                  </React.Fragment>
                ))}
              </h1>
              <h2 className="sm:text-xl text-lg font-normal my-5 text-default-500 ">
                {description}
              </h2>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="flex flex-row md:flex-wrap flex-wrap-reverse w-full h-fit my-16 md:my-36 justify-center md:justify-end relative ">
            {/*   <div className="stars-container absolut h-full w-full">
              <span className="star1"></span>
              <span className="star5"></span>
              <span className="star9"></span>
            </div>
            */}
            <div className="flex flex-col justify-center sm:w-2/6 w-fit md:m-0 my-16 min-w-64 max-w-80 absolute sm:relative backdrop-filter backdrop-blur-sm bg-opacity-20 sm:border-0 border border-gray-100 border-opacity-20 sm:top-0 p-4 rounded-xl pb-0 top-14 z-20 sm:z-0 sm:right-0 xs:right-24 right-2">
              <h1 className="sm:text-3xl text-2xl font-semibold ">
                {titleSplit.map((word, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && " "}
                    {word}
                  </React.Fragment>
                ))}
              </h1>
              <h2 className="sm:text-xl text-lg font-normal my-5 text-default-500 ">
                {description}
              </h2>
            </div>
            <div className="w-6/12 justify-center">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="w-64 relative">
                  {/*<div className="float-s absolute z-10 bottom-16 -left-8 h-12 w-12 rounded-lg bg-black border-6 border-solid border-white"></div>
                    <div className="float-m absolute z-10 -bottom-8 -right-8 h-24 w-24 rounded-2xl bg-black border-6 border-solid border-white"></div>
                    <div className="float-m absolute z-10 -top-16 left-8 h-16 w-16 rounded-xl bg-black border-6 border-solid border-white"></div>*/}

                  {/*<Image
                      src={spengergasseLogoSvg}
                      alt="Adrian Profile"
                      className=" float-l h-96 w-auto"
                    />*/}
                  <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none float-l"
                  >
                    <Image
                      alt={imageAlt}
                      className="object-cover brightness-50 sm:brightness-100"
                      height={700}
                      src={image}
                    />
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-white/80">Available soon.</p>
                      <Button
                        isDisabled
                        className="text-tiny text-white bg-black/20"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
