import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AdrianLogo } from "./AdrianLogo";

import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

interface PropsInterface {
  scrollToJourney: () => {};
  scrollToWork: () => {};
  scrollToContact: () => {};
}

export default function NavBar({
  scrollToJourney,
  scrollToWork,
  scrollToContact,
}: PropsInterface) {
  const [isMenuOpen, setIsMenuOpen] = React.useReducer(
    (current) => !current,
    false
  );

  const menuItems = [
    {
      name: "Journey",
      onClick: () => {
        setTimeout(function () {
          scrollToJourney();
        }, 200);
      },
      onClickMenu: function () {
        setIsMenuOpen();
        setTimeout(function () {
          scrollToJourney();
        }, 200);
      },
    },
    {
      name: "Work",
      onClick: () => {
        setTimeout(function () {
          scrollToWork();
        }, 200);
      },
      onClickMenu: function () {
        setIsMenuOpen();
        setTimeout(function () {
          scrollToWork();
        }, 200);
      },
    },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      id="nav-container"
      className="sm:block sm:flex sm:justify-center absolute top-0 bg-transparent"
    >
      <NavbarContent>
        <NavbarBrand>
          <a href="" className="flex items-center">
            <AdrianLogo />
            <p className="ml-3 font-bold text-md hidden xs:block ">
              Adrian De Ro
            </p>
          </a>
        </NavbarBrand>
        <NavbarItem className="sm:hidden">
          {/*<Button
            className="contact-button hidden"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Get in Touch{" "}
            <FontAwesomeIcon
              className="contact-button-touch-icon"
              icon={faFingerprint}
            />
          </Button>*/}
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              href="#"
              className="hover:text-[#006FEE] transition ease-in-out hover:translate-y-0.5"
              onClick={item.onClick}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <Button
            className="contact-button"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onClick={() => {
              setTimeout(function () {
                scrollToContact();
              }, 200);
            }}
          >
            Get in Touch{" "}
            <FontAwesomeIcon
              className="contact-button-touch-icon"
              icon={faFingerprint}
            />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-[#006FEE] transition ease-in-out hover:translate-x-0.5"
              color={"foreground"}
              href="#"
              size="lg"
              onClick={item.onClickMenu}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem
          className="sm:hidden text-[#006FEE] contact-button-menu"
          onClick={() => {
            setIsMenuOpen();
            setTimeout(function () {
              scrollToContact();
            }, 200);
          }}
        >
          Get in Touch{" "}
          <FontAwesomeIcon
            className="contact-button-touch-icon"
            icon={faFingerprint}
          />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
