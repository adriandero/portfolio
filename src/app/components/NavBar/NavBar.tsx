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

export default function NavBar({ scrollToJourney, scrollToWork }) {
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
    { name: "About", onClick: () => {} },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      id="nav-container"
    >
      <NavbarContent>
        <NavbarBrand>
          <a href="google.com" className="flex items-center">
            <AdrianLogo />
            <p className="ml-3 font-bold">Adrian De Ro</p>
          </a>
        </NavbarBrand>
        <NavbarItem className="sm:hidden">
          <Button
            id="contact-button"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Get in Touch{" "}
            <FontAwesomeIcon
              id="contact-button-touch-icon"
              icon={faFingerprint}
            />
          </Button>
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
            id="contact-button"
            as={Link}
            color="primary"
            href="#"
            variant="flat"
          >
            Get in Touch{" "}
            <FontAwesomeIcon
              id="contact-button-touch-icon"
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
      </NavbarMenu>
    </Navbar>
  );
}
