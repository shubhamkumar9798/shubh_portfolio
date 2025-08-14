"use client";

import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbze12nt9Q2V4t0bv-yn3EgNSOrcDMoHedHXRQJIc-FAOJDe-XvPaHiyuyeVlP_YN-q7/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      alert("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 overflow-hidden">
      
      {/* Floating background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-500 opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full blur-3xl animate-bounce" />

      {/* Contact Form Trigger */}
      <div className="absolute top-[20px] left-[15px] z-20 flex flex-col gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors shadow-lg shadow-amber-500/30">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] sm:w-[450px] md:w-[500px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-6 max-w-[95vw] transition-colors">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="resize-none h-28 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white dark:bg-amber-600 dark:hover:bg-amber-500 shadow-lg shadow-amber-500/30"
              >
                Send
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-full md:max-w-6xl lg:max-w-7xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
          Hi, I'm{" "}
          <span className="relative inline-block px-3 py-1 bg-amber-500/20 rounded-lg text-amber-600 dark:text-amber-400">
            Shubham Kumar
          </span>
        </h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-colors leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm a software developer passionate about building modern, responsive, and visually appealing web applications. 
          Explore my work, learn about my skills, or contact me directly using the form in the top-left corner.
        </motion.p>
      </motion.div>
    </section>
  );
}
