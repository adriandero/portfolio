import React, { useEffect, useState, useRef } from "react";
import "./StorySection.scss";
import avatarImage from "./CIO_Kongress.png";
import spengergasseLogoSvg from "../../../../public/spengergasseLogoSvg.svg";
import storyWork from "../../../../public/story-cio.png";
import storyHighPot from "../../../../public/story-highPot.jpg";
import storyHome from "../../../../public/story-home.png";

import StoryPart from "./StoryPart/StoryPart";

import Image from "next/image";
import { Button, NextUIProvider, Card, CardFooter } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function StorySection() {
  const [pathLength, setPathLength] = useState(0);

  const pathRef = useRef<SVGPathElement>(null);
  const dotRef1 = useRef<SVGCircleElement>(null);
  const dotRef2 = useRef<SVGCircleElement>(null);
  const dotRef3 = useRef<SVGCircleElement>(null);
  const routeRef = useRef<SVGSVGElement>(null);

  const [maxScrollTop, setMaxScrollTop] = useState(0);

  useEffect(() => {
    const path = pathRef.current as any;
    const length = path.getTotalLength();
    setPathLength(length);

    const handleScroll = () => {
      let scrollPercentage = 0;

      const section: any = document.getElementById("storySection");

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the user has scrolled to the section
      if (scrollTop >= sectionTop && scrollTop) {
        // Calculate the scroll percentage relative to the section
        scrollPercentage =
          (scrollTop - sectionTop) / (sectionHeight - windowHeight);
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

      const section: any = document.getElementById("storySection");

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the user has scrolled to the section
      if (
        scrollTop >= sectionTop &&
        scrollTop <= sectionTop + sectionHeight - windowHeight
      ) {
        // Calculate the scroll percentage relative to the section
        scrollPercentage =
          (scrollTop - sectionTop) / (sectionHeight - windowHeight);
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
    <section
      id="storySection"
      className="flex w-full h-full flex-col items-center relative md:py-32 overflow-hidden"
    >
      <div
        className="shootingStarContainer absolute h-full
"
      >
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
        <div className="shootingStar"></div>
      </div>

      <div
        className="starContainer absolute w-full h-full
"
      >
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <svg
        id="route"
        ref={routeRef}
        width="662"
        height="1559"
        viewBox="0 0 662 1659"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute overflow-visible hidden md:block md:-my-32"
      >
        <g>
          <path
            className="path"
            ref={pathRef}
            d="M331.738 5.99999C331.738 211.833 6.00003 234.167 6.00002 440C6.00001 645.833 675 786.667 675 992.5C675 1198.33 6.00011 1347.17 6.0001 1553"
            fillOpacity="0"
            style={{
              fill: "none",
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              stroke: "url(#paint0_linear_799_98)",
              strokeWidth: "2px",
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_799_98"
              x1="340.5"
              y1="5.99999"
              x2="340.5"
              y2="1553"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.12" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
          <circle r="3" fill="#005BC4" ref={dotRef1} />
          <circle r="7" fill="#005BC44f" ref={dotRef2} />
          <circle r="10" fill="#005BC42a" ref={dotRef3} />
        </g>
      </svg>
      <StoryPart
        title={"My Journey Starts at Home"}
        accentedWordPosition={3}
        description={
          "I coded my first website one summer after getting inspired by my older brother"
        }
        image={storyHome}
        imageAlt={"Me at Home"}
        isLeft={true}
      ></StoryPart>
      <StoryPart
        title={"Joining Higher Technical College"}
        accentedWordPosition={1}
        description={
          "HTL Spengergasse and it’s high potential program enabled me to learn from amazing mentors"
        }
        image={storyHighPot}
        imageAlt={"Group picture of the High Potential Program"}
        isLeft={false}
      ></StoryPart>
      <StoryPart
        title={"Creating work that matters"} //TODO: Weird phrasing - all my work mattered, right?
        accentedWordPosition={1}
        description={
          "Opportunity to work with many great companies to create insightfull software"
        }
        image={storyWork}
        imageAlt={"Me at Home"}
        isLeft={true}
      ></StoryPart>
    </section>
  );
}
