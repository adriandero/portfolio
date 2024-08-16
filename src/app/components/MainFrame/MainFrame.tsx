import React from "react";
import "./MainFrame.css";
import avatarImage from "../../../../public/profile-ball.png";
import Image from "next/image";
import { Button, NextUIProvider } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface PropsInterface {
  scrollToJourney?: () => {};
}

export default function MainFrame({ scrollToJourney }: PropsInterface) {
  return (
    <section className="flex flex-col items-center w-full h-screen px-6 h-full">
      <div className="flex flex-row h-full w-full relative justify-center">
        <div className="flex flex-col justify-center absolute bottom-1/2 top-1/2 sm:w-6/12 sm:static z-20">
          <h1 className="text-4xl font-semibold">
            Hi&sbquo; I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
              Adrian
            </span>
          </h1>
          <h1 className="text-4xl font-semibold">I build Software!</h1>
          <h2 className="text-xl font-normal my-5 sm:text-default-500 text-default-800 rounded-md	">
            I&apos;m a Vienna&ndash;based software engineer passionate about
            crafting and bringing ideas to life through elegant solutions.
          </h2>

          <Button
            id="contact-button"
            color="primary"
            variant="shadow"
            radius="full"
            className="w-fit min-h-10 text-xl mt-3 px-6"
          >
            Let&apos;s Chat
            <FontAwesomeIcon
              id="contact-button-arrow-icon"
              icon={faArrowRightLong}
              className="pl-2"
            />
          </Button>
        </div>
        <div className="sm:w-6/12 flex justify-center brightness-50 sm:brightness-100 blur-sm sm:blur-none">
          <div className="flex flex-col justify-center items-center h-full ">
            <div className="w-64 relative">
              <div className="float-s absolute z-10 bottom-20 -left-4 h-12 w-12 rounded-xl bg-black border-6 border-solid border-white transform rotate-45"></div>
              <div className="float-m absolute z-10 bottom-0 right-0 h-24 w-24 rounded-3xl bg-black border-6 border-solid border-white transform rotate-45"></div>
              <div className="float-m absolute z-10 -top-20 left-10 h-16 w-16 rounded-2xl bg-black border-6 border-solid border-white transform rotate-45 "></div>

              <Image
                src={avatarImage}
                alt="Adrian Profile"
                className="img float-l"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mouse_scroll absolute bottom-0 cursor-pointer"
        onClick={scrollToJourney}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows_container pt-1">
          <span className="arrow arrow-01"></span>
          <span className="arrow arrow-02"></span>
        </div>
      </div>
    </section>
  );
}
