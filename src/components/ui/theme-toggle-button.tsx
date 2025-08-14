"use client"

import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-animations"

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant
  start?: AnimationStart
  showLabel?: boolean
  url?: string // Optional GIF
}

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "https://media.giphy.com/media/2wh22xuL8gFmyc1l0E/giphy.gif", // Default fun GIF
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme()
  const styleId = "theme-transition-styles"

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return

    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = css
  }, [])

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url)
    updateStyles(animation.css, animation.name)

    if (typeof window === "undefined") return

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [theme, setTheme, updateStyles, variant, start, url])

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-10 h-10 relative group 
                 bg-transparent hover:bg-amber-200 dark:hover:bg-amber-800
                 text-amber-600 dark:text-amber-300 
                 transition-colors duration-300"
      name="Theme Toggle Button"
    >
      {/* Sun icon for light mode */}
      <SunIcon className="size-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      {/* Moon icon for dark mode */}
      <MoonIcon className="absolute size-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

      {/* Optional GIF in the background */}
      {url && (
        <img
          src={url}
          alt="Theme toggle animation"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"
        />
      )}

      <span className="sr-only">Toggle Theme</span>

      {showLabel && (
        <>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -top-10 bg-white dark:bg-gray-800">
            variant = {variant}
          </span>
          <span className="hidden group-hover:block border rounded-full px-2 absolute -bottom-10 bg-white dark:bg-gray-800">
            start = {start}
          </span>
        </>
      )}
    </Button>
  )
}
