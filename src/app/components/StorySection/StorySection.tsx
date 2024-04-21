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
  const dotRef1 = useRef();  
  const dotRef2 = useRef();
  const dotRef3 = useRef();
  const routeRef = useRef();

  const [maxScrollTop, setMaxScrollTop] = useState(0);

  useEffect(() => {
    const path = pathRef.current as any;
    const length = path.getTotalLength();
    setPathLength(length);

    const handleScroll = () => {
      let scrollPercentage = 0;
     
      const section:any = document.getElementById('storySection');

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the user has scrolled to the section
      if (scrollTop >= sectionTop && scrollTop) {
          // Calculate the scroll percentage relative to the section
          scrollPercentage = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
          console.log("Scroll percentage within the section:", scrollPercentage);
      }

      const newLength = scrollPercentage * length;
      path.style.strokeDasharray = `${newLength},${length}`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathLength]);

  useEffect(() => {
    const handleDotPosition = () => {
      let scrollPercentage = 0;
     
      const section:any = document.getElementById('storySection');

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the user has scrolled to the section
      if (scrollTop >= sectionTop && scrollTop <= sectionTop + sectionHeight - windowHeight) {
          // Calculate the scroll percentage relative to the section
          scrollPercentage = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
          console.log("Scroll percentage within the section:", scrollPercentage);
      }


      const path = pathRef.current as any;
      const pathLen = path.getTotalLength();
      const pt = path.getPointAtLength(scrollPercentage * pathLen);

      const dot1 = dotRef1.current as any;
      const dot2 = dotRef2.current as any;
      const dot3 = dotRef3.current as any;

      dot1.setAttribute("transform", `translate(${pt.x},${pt.y})`);
      dot2.setAttribute("transform", `translate(${pt.x},${pt.y})`);
      dot3.setAttribute("transform", `translate(${pt.x},${pt.y})`);

    };

    window.addEventListener("scroll", handleDotPosition);
    handleDotPosition();

    return () => window.removeEventListener("scroll", handleDotPosition);
  }, []);

  return (
    <section id="storySection" className="flex w-full h-full flex-col items-center relative">
      {/*
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
*/}
      <svg
        id="route"
        ref={routeRef}
        width="662"
        height="1559"
        viewBox="0 0 662 1559"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute overflow-visible"
      >
        <g>
          <path
            className="path"
            ref={pathRef}
            d="M331.738 5.99999C331.738 211.833 6.00003 234.167 6.00002 440C6.00001 645.833 675 786.667 675 992.5C675 1198.33 6.00011 1347.17 6.0001 1553"
            fill-opacity="0"
            style={{
              fill: "none",
              stroke:"#ffffff94",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
          <circle r="3" fill="#ffffffb5" ref={dotRef1} />
          <circle r="7" fill="#ffffff1a" ref={dotRef2} />
          <circle r="10" fill="#ffffff1a" ref={dotRef3} />

        </g>
      </svg>

      <section id="firstSection" className="flex flex-row my-32 w-full h-fit py-32">
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
