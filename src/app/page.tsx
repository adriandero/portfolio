"use client";

import { createContext } from "react";

import { Button, NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";

import "./page.css";
import MainFrame from "./components/MainFrame/MainFrame";
import StorySection from "./components/StorySection/StorySection";

export default function Home() {
  function scrollToJourney() {
    const journeySection = document.getElementById("journey-section");
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <NextUIProvider className="flex items-center flex-col min-h-screen">
      <NavBar scrollToJourney={scrollToJourney}></NavBar>
      <main className="flex flex-col max-w-screen-xl w-full h-full items-center dark text-foreground bg-background">
        <MainFrame scrollToJourney={scrollToJourney} />
        <h1 className="text-4xl font-semibold py-6" id="journey-section">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 font-bold text-transparent bg-clip-text">
            Story
          </span>
        </h1>
        <StorySection />
      </main>
    </NextUIProvider>
  );
}
