"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/hero";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import AboutMeCard from "@/components/about"
import {TextScroll} from "@/components/ui/text-scroll"
import {SkiperCard} from "@/components/ui/skiper-card"
import Flip from "@/components/proj"
import Footer from "@/components/footer"


export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Intro Loading Animation */}
      <AnimatePresence>
        {loading && <IntroLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <main className="min-h-screen flex flex-col justify-center items-center pt-5 relative">
          {/* Hero Section with contact form */}
          <Hero />

          {/* Theme Toggle Buttons */}
          {/* <div className="absolute bottom-5 right-5 flex gap-4 z-[1000]"> */}
  {/* <ThemeToggleButton
    variant="gif"
    url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif"
  /> */}
  
{/* </div> */}
<AboutMeCard/>
            <TextScroll text="PROJECTS" />
            <SkiperCard image = ""/>
            <TextScroll text="ACHIEVEMENTS" />
            <SkiperCard image = ""/>
            <Flip/>
            <Footer/>
        </main>
      )}
    </>
  );
}
