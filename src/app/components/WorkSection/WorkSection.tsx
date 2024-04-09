import React from "react";
import "./WorkSection.css";
import Image from "next/image";

import bitpandaImage from "../../../../public/coinrain.jpg";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function WorkSection() {
  return (
    <section
      className="flex w-full justify-center items-center"
      style={{ height: "80vh" }}
    >
      <Card isFooterBlurred radius="lg" className="border-none h-3/5 mx-8">
        <Image
          alt="Bitpanda Cover Image"
          className="object-cover overflow-hidden h-full"
          src={bitpandaImage}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
        </CardFooter>
      </Card>
      <Card isFooterBlurred radius="lg" className="border-none h-3/5 mx-8">
        <Image
          alt="Bitpanda Cover Image"
          className="object-cover overflow-hidden h-full"
          src={bitpandaImage}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
        </CardFooter>
      </Card>
      <Card isFooterBlurred radius="lg" className="border-none h-3/5 mx-8">
        <Image
          alt="Bitpanda Cover Image"
          className="object-cover overflow-hidden h-full"
          src={bitpandaImage}
        />
        <CardFooter className="absolute bg-default/50 bottom-0 border-t-1 border-default/100 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
