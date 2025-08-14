"use client"

import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
//import ThemeToggleButton from "@/components/ui/theme-toggle-button"

export default function HeroSection() {
  const [formData, setFormData] = useState({ email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Message: ${formData.message}\nEmail: ${formData.email}`)
    setFormData({ email: "", message: "" })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/your-hero-bg.jpg')] bg-cover bg-center opacity-20 dark:opacity-10"></div>

      {/* Contact Form & Theme Toggle (Top Left) */}
      <div className="absolute top-[20px] left-[15px] z-20 flex flex-col gap-3">
        <Popover>
  <PopoverTrigger asChild>
    <Button className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors">
      Contact Me
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-[400px] sm:w-[450px] md:w-[500px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-6 max-w-[95vw] transition-colors">
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Field */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Your Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="resize-none h-28 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500"
      >
        Send
      </Button>
    </form>
  </PopoverContent>
</Popover>


        {/* <ThemeToggleButton
          variant="gif"
          url="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXFzZzBzNzUzcXp0b2JvcXFlbzM1YjhsOWpyeW1rYm5yeGcxczZwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9t14m8wklMwIRVSEzx/giphy.gif"
        /> */}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-full md:max-w-6xl lg:max-w-7xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
          Hi, I'm{" "}
          <span className="text-amber-600 dark:text-amber-400">
            Shubham Kumar
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-colors">
          I'm a software developer passionate about building modern, responsive,
          and visually appealing web applications. Explore my work, learn about
          my skills, or contact me directly using the form in the top-left corner.
        </p>
      </div>
    </section>
  )
}
