import React from "react";
import "./MainFrame.css";
import avatarImage from "./CIO_Kongress.png";
import Image from "next/image";
import { Button, NextUIProvider } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function MainFrame({ scrollToJourney }) {
  return (
    <section className="flex flex-col items-center w-full h-screen px-6 h-full">
      <div className="flex flex-row h-full">
        <div className="flex flex-col justify-center w-6/12">
          <h1 className="text-4xl font-semibold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
              Adrian
            </span>
          </h1>
          <h1 className="text-4xl font-semibold">I build Software!</h1>
          <h2 className="text-xl font-normal my-5 text-default-500 ">
            Im a Vienna-based software engineer passionate about crafting and
            bringing ideas to life through elegant solutions.
          </h2>

          <Button
            id="contact-button"
            color="primary"
            variant="shadow"
            radius="full"
            className="w-fit text-xl mt-3 px-6"
          >
            Let's Chat
            <FontAwesomeIcon
              id="contact-button-arrow-icon"
              icon={faArrowRightLong}
              className="pl-2"
            />
          </Button>
        </div>
        <div className="w-6/12">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-64 relative">
              <div className="float-s absolute z-10 bottom-20 -left-4 h-12 w-12 rounded-lg bg-black border-6 border-solid border-white"></div>
              <div className="float-m absolute z-10 bottom-0 right-0 h-24 w-24 rounded-2xl bg-black border-6 border-solid border-white"></div>
              <div className="float-m absolute z-10 -top-20 left-10 h-16 w-16 rounded-xl bg-black border-6 border-solid border-white"></div>

              <div className="avatar float-l w-64 deltoid">
                <Image
                  src={avatarImage}
                  alt="Adrian Profile"
                  className="img left-auto"
                />
              </div>
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
