import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "./ContactSection.css";
import {
  Tooltip,
  Button,
  NextUIProvider,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { Icon } from "react-icons-kit";
import { arrowRight } from "react-icons-kit/feather/arrowRight";
import { minus } from "react-icons-kit/feather/minus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faFile, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { IconProp } from "@fortawesome/fontawesome-svg-core"; //faGithub as Prop (but fixed with updating versions of icon libraries)

interface PropsInterface {}

export default function ContactSection({}: PropsInterface) {
  const [isEmailPopoverOpen, setIsEmailPopoverOpen] = useState(false);
  const [isResumePopoverOpen, setIsResumePopoverOpen] = useState(false);

  const router = useRouter();

  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const downloadPDF = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col w-full content-center h-fit">
      <div className="flex flex-col h-96 items-center justify-center">
        {" "}
        <Button
          id="contact-button"
          color="primary"
          variant="ghost"
          radius="md"
          onClick={() => router.push("mailto:adrian.dero@outlook.com")}
          className=" min-h-10 text-xl px-6 py-5 my-4"
        >
          Let&apos;s Chat
          <FontAwesomeIcon
            id="contact-button-arrow-icon"
            icon={faArrowRightLong}
            className="pl-2"
          />
        </Button>
        <p className="w-auto">Don&apos;t like flashy buttons?</p>
        <p className="w-auto">
          Reach out at{" "}
          <Popover
            placement="bottom"
            shouldCloseOnBlur={true}
            isOpen={isEmailPopoverOpen}
          >
            <PopoverTrigger>
              <span
                onClick={() => {
                  copyText("adrian.dero@outlook.com");
                  setIsEmailPopoverOpen(true);

                  setTimeout(() => setIsEmailPopoverOpen(false), 1500);
                }}
                className="font-bold relative after:bg-white after:absolute after:h-px after:w-full after:bottom-0 after:left-0 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-700 cursor-pointer"
              >
                adrian.dero@outlook.com
              </span>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small">
                  {" "}
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
                  Copied to Clipboard
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </p>
      </div>
      <div className="flex flex-col h-48 items-center ">
        {" "}
        <h1 className="text-2xl font-semibold">See more of me:</h1>
        <div className="flex flex-row gap-5 p-4">
          <Link href="https://github.com/adriandero" target="_blank">
            <Tooltip
              content={"Github"}
              placement={"bottom"}
              offset={15}
              closeDelay={10}
              className="capitalize"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl ease-in-out duration-300 hover:scale-125"
              />
            </Tooltip>
          </Link>
          <Link
            href="https://www.linkedin.com/in/adrian-de-ro/"
            target="_blank"
          >
            <Tooltip
              content={"LinkedIn"}
              placement={"bottom"}
              offset={15}
              closeDelay={10}
              className="capitalize"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl ease-in-out duration-300 hover:scale-125"
              />
            </Tooltip>
          </Link>

          <Popover
            placement="bottom"
            shouldCloseOnBlur={true}
            isOpen={isResumePopoverOpen}
          >
            <PopoverTrigger>
              <a
                href="/Resume_De_Ro.pdf"
                download="Resume_De_Ro"
                className="outline-none"
                onClick={() => {
                  setIsResumePopoverOpen(true);

                  setTimeout(() => setIsResumePopoverOpen(false), 1500);
                }}
              >
                <Tooltip
                  content={"Resume"}
                  placement={"bottom"}
                  offset={15}
                  closeDelay={10}
                  className="capitalize"
                >
                  <FontAwesomeIcon
                    icon={faFile}
                    className="text-3xl text-blue-600 ease-in-out duration-300 hover:scale-125 "
                  />
                </Tooltip>
              </a>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small">
                  {" "}
                  <FontAwesomeIcon icon={faCircleCheck} className="mr-3" />
                  Successfully Downloaded
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
      </div>
    </section>
  );
}
