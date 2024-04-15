import React, { useState } from "react";
import "./WorkCard.css";
import Image from "next/image";

import bitpandaImage from "../../../../public/coinrain.jpg";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { isWebpackServerLayer } from "next/dist/build/utils";
interface PropsInterface {
  projectTitle?: String;
  companyTitle?: String;
  startDate?: String;
  endDate?: String;
  role?: String;
  isSelected?: boolean;
  isActive?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function WorkCard({
  projectTitle,
  companyTitle,
  startDate,
  endDate,
  role,
  isSelected,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: PropsInterface) {
  return (
    //div is to overcome the tailwind hover bug - hover works with nextUI components but it cante ease out
    <div
      className=" border-none h-4/5 max-w-96 min-w-80 m-4 flex-[2_2_0%] transition duration-300 ease-in-out hover:scale-110"
      style={{ maxHeight: "30rem" }}
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="h-full w-full"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <CardHeader
          className={` absolute flex-col !items-start top-1 z-10 ${
            isSelected ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <p className="text-tiny text-white/60 uppercase font-bold">
            {startDate} - {endDate}
          </p>
          <h4 className="text-white font-medium text-large">
            {role}
          </h4>
        </CardHeader>
        <div
          className={`absolute inset-0 bg-black transition ${
            isActive ? "opacity-0" : "opacity-50"
          }`}
        />
        <Image
          alt="Bitpanda Cover Image"
          className={`object-cover overflow-hidden h-full w-fit`}
          src={bitpandaImage}
        />
        {/*<CardFooter
          className={`absolute bg-default/50 bottom-0 border-t-1 border-default/100 z-10 justify-between ${
            isSelected ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <div>
            <p className="text-black text-tiny transition duration-300 ease-in-out hover:scale-110">
              {companyTitle}
            </p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button
            className="text-tiny transition duration-300 ease-in-out hover:scale-110"
            color="primary"
            radius="full"
            size="sm"
          >
            Notify Me
          </Button>
        </CardFooter>*/}
      </Card>
    </div>
  );
}
