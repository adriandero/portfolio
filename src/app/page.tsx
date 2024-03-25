"use client";

import { createContext } from "react";

import { Button, NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar/NavBar";

import "./page.css";
import MainFrame from "./components/MainFrame/MainFrame";
import StorySection from "./components/StorySection/StorySection";

export default function Home() {
  return (
    <NextUIProvider className="flex items-center flex-col min-h-screen">
      <NavBar></NavBar>
      <main className="flex flex-col max-w-screen-xl w-full h-full items-center dark text-foreground bg-background">
        <MainFrame />
        <h1 className="text-4xl font-semibold">
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
