import React, { useState, useCallback } from "react";
import "./WorkSection.css";
import Image from "next/image";

import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faLessThanEqual,
} from "@fortawesome/free-solid-svg-icons";

import WorkCard from "../WorkCard/WorkCard";

import bitpandaImage from "../../../../public/Bitpanda_image.jpg";
import kontronImage from "../../../../public/Kontron_image.jpg";
import allianzImage from "../../../../public/Allianz_image.png";

export default function WorkSection() {
  const [is1Active, setIs1Active] = useState(true);
  const [is2Active, setIs2Active] = useState(true);
  const [is3Active, setIs3Active] = useState(true);
  const [is1Selected, setIs1Selected] = useState(false);
  const [is2Selected, setIs2Selected] = useState(false);
  const [is3Selected, setIs3Selected] = useState(false);

  const work1 = {
    projectTitle: "DROPS",
    companyTitle: "Bitpanda",
    startDate: "sep, 2023",
    endDate: "apr, 2024",
    role: "Backend Engineer + Team Lead",
  };
  const work2 = {
    projectTitle: "Batch Reporting Tool",
    companyTitle: "Allianz Technology",
    startDate: "sep, 2022",
    endDate: "apr, 2023",
    role: "Backend Engineer + Team Lead",
  };

  const work3 = {
    projectTitle: "Tender Management System",
    companyTitle: "Kontron",
    startDate: "sep, 2021",
    endDate: "apr, 2022",
    role: "Frontend Engineer",
  };

  return (
    <section className="flex w-full flex-wrap h-fit justify-center items-center max-w-screen-xl">
      <div
        className={`animation-container overflow-hidden absolute left-0 right-0 text-center z-10 pointer-events-none hidden work_md:block`}
      >
        <h2
          className={`text-3xl font-bold mb-2 opacity-0 ${
            is1Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work1.companyTitle}
        </h2>
        <h1
          className={`text-6xl font-bold mb-8 ${
            is1Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work1.projectTitle}
        </h1>
      </div>
      <div
        className={`animation-container overflow-hidden absolute left-0 right-0 text-center z-10 pointer-events-none hidden work_md:block`}
      >
        <h2
          className={`text-3xl font-bold mb-2 opacity-0 ${
            is2Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work2.companyTitle}
        </h2>
        <h1
          className={`text-6xl font-bold mb-8 ${
            is2Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work2.projectTitle}
        </h1>
      </div>
      <div
        className={`animation-container overflow-hidden absolute left-0 right-0 text-center z-10 pointer-events-none hidden work_md:block`}
      >
        <h2
          className={`text-3xl font-bold mb-2 opacity-0 ${
            is3Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work3.companyTitle}
        </h2>
        <h1
          className={`text-6xl font-bold mb-8 ${
            is3Selected ? "fade-in" : "fade-out"
          }`}
        >
          {work3.projectTitle}
        </h1>
      </div>

      <div className="flex relative justify-center align-center">
        <WorkCard
          projectTitle={work1.projectTitle}
          companyTitle={work1.companyTitle}
          startDate={work1.startDate}
          endDate={work1.endDate}
          role={work1.role}
          isSelected={is1Selected}
          isActive={is1Active}
          image={bitpandaImage}
          onMouseEnter={() => {
            setIs1Selected(true);
            setIs2Active(false);
            setIs3Active(false);
          }}
          onMouseLeave={() => {
            setIs1Selected(false);
            setIs2Active(true);
            setIs3Active(true);
          }}
        />
        <div
          className={`flex flex-col animation-container justify-center overflow-clip absolute right-0 top-0 bottom-0 left-0  text-center z-10 pointer-events-none work_md:hidden block `}
        >
          <h2
            className={`text-3xl font-bold mb-2 opacity-0 ${
              is1Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work1.companyTitle}
          </h2>
          <h1
            className={`text-6xl font-bold mb-8 ${
              is1Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work1.projectTitle}
          </h1>
        </div>
      </div>
      <div className="flex relative justify-center align-center">
        <WorkCard
          projectTitle={work2.projectTitle}
          companyTitle={work2.companyTitle}
          startDate={work2.startDate}
          endDate={work2.endDate}
          role={work2.role}
          isSelected={is2Selected}
          isActive={is2Active}
          image={allianzImage}
          onMouseEnter={() => {
            setIs2Selected(true);
            setIs1Active(false);
            setIs3Active(false);
          }}
          onMouseLeave={() => {
            setIs2Selected(false);
            setIs1Active(true);
            setIs3Active(true);
          }}
        />
        <div
          className={`flex flex-col animation-container overflow-hidden justify-center absolute right-0 top-0 bottom-0 left-0 text-center z-10 pointer-events-none work_md:hidden block  `}
        >
          <h2
            className={`text-3xl font-bold mb-2 opacity-0 ${
              is2Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work2.companyTitle}
          </h2>
          <h1
            className={`text-6xl font-bold mb-8 ${
              is2Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work2.projectTitle}
          </h1>
        </div>
      </div>
      <div className="flex relative justify-center align-center">
        <WorkCard
          projectTitle={work3.projectTitle}
          companyTitle={work3.companyTitle}
          startDate={work3.startDate}
          endDate={work3.endDate}
          role={work3.role}
          isSelected={is3Selected}
          isActive={is3Active}
          image={kontronImage}
          onMouseEnter={() => {
            setIs3Selected(true);
            setIs1Active(false);
            setIs2Active(false);
          }}
          onMouseLeave={() => {
            setIs3Selected(false);
            setIs1Active(true);
            setIs2Active(true);
          }}
        />
        <div
          className={`flex flex-col animation-container overflow-hidden justify-center absolute right-0 top-0 bottom-0 left-0 text-center z-10 pointer-events-none work_md:hidden block `}
        >
          <h2
            className={`text-3xl font-bold mb-2 opacity-0 ${
              is3Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work3.companyTitle}
          </h2>
          <h1
            className={`text-6xl font-bold mb-8 ${
              is3Selected ? "fade-in" : "fade-out"
            }`}
          >
            {work3.projectTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
