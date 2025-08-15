"use client";

import { Linkedin, Github, FileText, Mail } from "lucide-react";
import FlipLink from "@/components/ui/text-effect-flipper";

export default function Flip() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center px-[15px] py-[20px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 transition-colors duration-500">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-8 w-full max-w-6xl">
        <div className="flex items-center gap-4">
          <Linkedin className="w-8 h-8 text-amber-400" />
          <FlipLink href="https://www.linkedin.com/in/shubham-kumar-ln/">LinkedIn</FlipLink>
        </div>

        <div className="flex items-center gap-4">
          <Github className="w-8 h-8 text-amber-400" />
          <FlipLink href="https://github.com/shubhamkumar9798">GitHub</FlipLink>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="w-8 h-8 text-amber-400" />
          <FlipLink href="mailto:shubham.kumar.300804@gmail.com">Email</FlipLink>
        </div>

        <div className="flex items-center gap-4">
          <FileText className="w-8 h-8 text-amber-400" />
          <FlipLink href="/shubham kumar Resume.pdf">Resume</FlipLink>
        </div>
      </div>
    </section>
  );
}
