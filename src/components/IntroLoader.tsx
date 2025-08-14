"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  // "こんにちは",
  
  "Ciao",
];

export default function IntroLoader({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onFinish, 800);
          return prev;
        }
      });
    }, 1500); // Slightly slower for smoother reading

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center
                 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                 transition-colors text-gray-800 dark:text-gray-200 z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={greetings[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }} // Smooth transition
          className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-wide
                     bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500
                     drop-shadow-lg"
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
