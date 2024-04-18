import React, { useEffect, useState, useRef } from "react";
import "./StorySection.css";
import avatarImage from "./CIO_Kongress.png";
import spengergasseLogoSvg from "../../../../public/spengergasseLogoSvg.svg";
import { Arrow } from "../Arrow/Arrow";

import Image from "next/image";
import { Button, NextUIProvider } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function StorySection() {
  const [pathLength, setPathLength] = useState(0);

  const pathRef = useRef();
  const dotRef = useRef();
  const routeRef = useRef();

  const [maxScrollTop, setMaxScrollTop] = useState(0);

  useEffect(() => {
    const path = pathRef.current as any;
    const length = path.getTotalLength();
    setPathLength(length);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setMaxScrollTop(maxScroll);

      const percentDone = scrollTop / maxScroll;
      const newLength = percentDone * length;
      path.style.strokeDasharray = `${newLength},${length}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  useEffect(() => {
    const handleDotPosition = () => {
      const scrollPercentage =
        (window.pageYOffset || document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const path = pathRef.current as any;
      const pathLen = path.getTotalLength();
      const pt = path.getPointAtLength(scrollPercentage * pathLen);

      const dot = dotRef.current as any;
      dot.setAttribute("transform", `translate(${pt.x},${pt.y})`);
    };

    window.addEventListener("scroll", handleDotPosition);
    handleDotPosition();

    return () => window.removeEventListener("scroll", handleDotPosition);
  }, []);

  return (
    <section className="flex w-full h-full flex-col">
      <svg
        id="route"
        ref={routeRef}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="500"
        viewBox="0 0 294.152 250.250"
      >
        <g transform="rotate(90)">
          <path
            fill-opacity="0"
            style={{
              fill: "none",
              stroke: "#f2f2f2",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "12px",
            }}
            d="M-11.65,51.59c31.63,0,31.63,22,63.26,22s31.63-22,63.26-22,31.63,22,63.26,22"
            transform="translate(17.65 -45.59)"
          />
          <path
            id="path"
            ref={pathRef}
            fill-opacity="0"
            style={{
              fill: "none",
              stroke: "#7BFC75",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "12px",
            }}
            d="M-11.65,51.59c31.63,0,31.63,22,63.26,22s31.63-22,63.26-22,31.63,22,63.26,22"
            transform="translate(17.65 -45.59)"
          />
          <circle
            cx="17.5"
            cy="-45.5"
            r="5"
            fill="white"
            id="dot"
            ref={dotRef}
          />
        </g>
      </svg>

      <section className="flex flex-row my-32 w-full h-fit py-32">
        <div className="stars-container absolut h-full w-full">
          <span className="star1"></span>

          <span className="star3"></span>
          <span className="star4"></span>

          <span className="star8"></span>
        </div>
        <div className="w-6/12 justify-center ">
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
        <div className="flex flex-col justify-center w-2/6">
          <h1 className="text-3xl font-semibold ">
            My Journey Starts at{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
              Home
            </span>
          </h1>
          <h2 className="text-xl font-normal my-5 text-default-500 ">
            I coded my first websites one summer after getting inspired by my
            older brother
          </h2>
        </div>
      </section>
      <section className="flex flex-row justify-end w-full h-fit">
        <div className="stars-container absolut h-full w-full">
          <span className="star1"></span>

          <span className="star3"></span>
          <span className="star4"></span>

          <span className="star8"></span>
        </div>
        <div className="flex flex-col justify-center w-2/6">
          <h1 className="text-3xl font-semibold ">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
              Joining
            </span>{" "}
            Higher Technical College
          </h1>
          <h2 className="text-xl font-normal my-5 text-default-500 ">
            HTL Spengergasse and it’s high potential program enabled me to learn
            from amazing mentors
          </h2>
        </div>
        <div className="w-6/12 justify-center ">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-64 relative">
              <div className="float-s absolute z-10 bottom-20 -left-4 h-12 w-12 rounded-lg bg-black border-6 border-solid border-white"></div>
              <div className="float-m absolute z-10 bottom-0 right-0 h-24 w-24 rounded-2xl bg-black border-6 border-solid border-white"></div>
              <div className="float-m absolute z-10 -top-20 left-10 h-16 w-16 rounded-xl bg-black border-6 border-solid border-white"></div>

              <div className="avatar float-l w-64 deltoid">
                <Image
                  src={spengergasseLogoSvg}
                  alt="Adrian Profile"
                  className="img left-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row my-32 w-full h-fit py-32">
        <div className="stars-container absolut h-full w-full">
          <span className="star1"></span>

          <span className="star5"></span>

          <span className="star8"></span>
          <span className="star9"></span>
        </div>
        <div className="w-6/12 justify-center ">
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
        <div className="flex flex-col justify-center w-2/6">
          <h1 className="text-3xl font-semibold ">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-transparent bg-clip-text">
              Creating
            </span>{" "}
            work that matters
          </h1>
          <h2 className="text-xl font-normal my-5 text-default-500 ">
            Opportunity to work with many great companies to create insightfull
            software
          </h2>
        </div>
      </section>
    </section>
  );
}
