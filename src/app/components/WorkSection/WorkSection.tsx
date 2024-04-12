import React, { useState, useCallback } from "react";
import "./WorkSection.css";
import Image from "next/image";

import bitpandaImage from "../../../../public/coinrain.jpg";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import WorkCard from "../WorkCard/WorkCard";

export default function WorkSection() {
  const [is1Selected, setIs1Selected] = useState(true);
  const [is2Selected, setIs2Selected] = useState(true);
  const [is3Selected, setIs3Selected] = useState(true);

  /*
  const handleClick = useCallback(() => {
    console.log("eeeee");
    set1IsSelected(true);
  }, [is1Selected]);
  */

  return (
    <section
      className="flex w-full flex-wrap justify-center items-center max-w-screen-xl"
      style={{ height: "80vh" }}
    >
      {is1Selected && (
        <div className="absolute left-0 right-0 text-center z-10">
          <h1 className="text-6xl font-bold mb-8">Huge Headline Here</h1>{" "}
          {/* Huge headline */}
        </div>
      )}
      <WorkCard
        projectTitle={"DROPS"}
        companyTitle={"Bitpanda"}
        startDate={"sep, 2023"}
        endDate={"apr, 2024"}
        role={"Backend Engineer + Team Lead"}
        onMouseEnter={() => setIs1Selected(true)}
        onMouseLeave={() => setIs1Selected(false)}
      />
      <WorkCard
        onMouseEnter={() => setIs2Selected(true)}
        onMouseLeave={() => setIs2Selected(false)}
      />
      <WorkCard
        onMouseEnter={() => setIs3Selected(true)}
        onMouseLeave={() => setIs3Selected(false)}
      />
    </section>
  );
}
