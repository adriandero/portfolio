import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AdrianLogo } from "./AdrianLogo";

import './NavBar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll id="nav-container">
      <NavbarBrand className="gap-3" >
        <AdrianLogo /> 
        <p className="font-bold ">Adrian De Ro</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center" >
        <NavbarItem>
          <Link color="foreground" href="#" className="link">
            Journey 
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="link">
            Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="link">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button id="contact-button" as={Link} color="primary" href="#" variant="flat">
            Get in Touch <FontAwesomeIcon id="contact-button-touch-icon" icon={faFingerprint} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
