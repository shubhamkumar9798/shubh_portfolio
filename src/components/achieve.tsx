"use client";
import { CardCarousel } from "@/components/ui/card-carousel"

export default function Achieve() {
    const images = [
    { src: "/ACH1.png", alt: "Image 1" },
    { src: "/ACH2.png", alt: "Image 2" },
    { src: "/ACH3.png", alt: "Image 3" },
  ]
  return (
    
    // <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500">
    <div className="w-full h-max px-4"> 
    <CardCarousel
      images={images}
      autoplayDelay={2000}
      showPagination={true}
      showNavigation={true}
    />
  </div> 
    // </section>
  );
}
