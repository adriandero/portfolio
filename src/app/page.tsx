"use client";

import { createContext } from "react";

import { Button, NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./page.css";
import MainFrame from "./components/MainFrame/MainFrame";
import StorySection from "./components/StorySection/StorySection";
import WorkSection from "./components/WorkSection/WorkSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  const scrollToJourney: () => {} = () => {
    const journeySection = document.getElementById("journey-section")!;
    journeySection.scrollIntoView({ behavior: "smooth" });
    console.log("journey caled");
    return {};
  };

  const scrollToWork: () => {} = () => {
    const workSection = document.getElementById("work-section")!;
    workSection.scrollIntoView({ behavior: "smooth" });
    return {};
  };

  const scrollToContact: () => {} = () => {
    const ContactSection = document.getElementById("contact-section")!;
    ContactSection.scrollIntoView({ behavior: "smooth" });
    return {};
  };

  return (
    <NextUIProvider className="flex items-center flex-col min-h-screen">
      <NavBar
        scrollToJourney={scrollToJourney}
        scrollToWork={scrollToWork}
        scrollToContact={scrollToContact}
      ></NavBar>
      <main className="flex flex-col max-w-screen-xl w-full h-full items-center dark text-foreground bg-background">
        <MainFrame scrollToJourney={scrollToJourney} />
        <h1 className="text-4xl font-semibold py-6" id="journey-section">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-transparent bg-clip-text">
            Story
          </span>
        </h1>
        <StorySection />
        <h1 className="text-4xl font-semibold py-6" id="work-section">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-transparent bg-clip-text">
            Work
          </span>
        </h1>
        <WorkSection />
        <h1 className="text-4xl font-semibold py-6 mt-32" id="contact-section">
          What&apos;s{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-transparent bg-clip-text">
            Next
          </span>{" "}
          ?
        </h1>
        <ContactSection />
      </main>

      <Footer />
    </NextUIProvider>
  );
}
