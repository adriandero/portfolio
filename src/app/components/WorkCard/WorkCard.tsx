import React, { useState } from "react";
import "./WorkCard.css";
import Image from "next/image";

import bitpandaImage from "../../../../public/coinrain.jpg";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
interface PropsInterface {
  projectTitle?: String;
  companyTitle?: String;
  startDate?: String;
  endDate?: String;
  role?: String;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function WorkCard({
  projectTitle,
  companyTitle,
  startDate,
  endDate,
  role,
  onMouseEnter,
  onMouseLeave,
}: PropsInterface) {
  const [isHovered, setIsHovered] = useState(false);

  const hover = () => {
    setIsHovered(true);
    onMouseEnter();
  };
  const undoHover = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className={`border-none h-4/5 max-w-96 min-w-80 m-4 flex-[2_2_0%] ${
        isHovered ? "darken" : ""
      }`}
    >
      <Image
        alt="Bitpanda Cover Image"
        className="object-cover overflow-hidden h-full w-fit"
        src={bitpandaImage}
        onMouseEnter={hover}
        onMouseLeave={undoHover}
      />
      <CardFooter
        className={`absolute bg-default/50 bottom-0 border-t-1 border-default/100 z-10 justify-between ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div>
          <p className="text-black text-tiny">{companyTitle}</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Notify Me
        </Button>
      </CardFooter>
    </Card>
  );
}
