"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/hero";

import AboutMeCard from "@/components/about"
import {TextScroll} from "@/components/ui/text-scroll"

import Flip from "@/components/proj"
import Footer from "@/components/footer"
import { CardCarousel } from "@/components/ui/card-carousel"
import Achieve from "@/components/achieve";


export default function Home() {
  const [loading, setLoading] = useState(true);

  const images = [
    { src: "/pro1.png", alt: "Image 1" },
    { src: "/pro2.png", alt: "Image 2" },
    { src: "/pro3.png", alt: "Image 3" },
  ]

  return (
    <>
      {/* Intro Loading Animation */}
      <AnimatePresence>
        {loading && <IntroLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <main className="min-h-screen flex flex-col justify-center items-center  relative">
          {/* Hero Section with contact form */}
          <Hero />

          {/* Theme Toggle Buttons */}
          {/* <div className="absolute bottom-5 right-5 flex gap-4 z-[1000]"> */}
  {/* <ThemeToggleButton
    variant="gif"
    url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif"
  /> */}
  

<AboutMeCard/>
            <TextScroll text="PROJECTS" />

{/* Full-width Card Carousel wrapper */}
  <div className="w-full px-4">
    <CardCarousel
      images={images}
      autoplayDelay={2000}
      showPagination={true}
      showNavigation={true}
    />
  </div>
            <TextScroll text="ACHIEVEMENTS" />
              <Achieve/>
            <Flip/>
            <Footer/>
        </main>
      )}
    </>
  );
}
