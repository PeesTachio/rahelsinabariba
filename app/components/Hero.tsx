"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const typingKey = Date.now();

  const phrases = ["Undergraduate Student", "Database Enthusiast"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[var(--color-5)] font-system-ui overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-[var(--color-1)] mb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Hello, I’m <span className="text-[var(--color-1)]">Rahel</span>
      </motion.h1>

      <motion.h2
        className="text-4xl md:text-6xl font-bold text-[var(--color-1)] mb-8 h-[3.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Typewriter
          key={typingKey}
          words={phrases}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={30}
          delaySpeed={1600}
        />
      </motion.h2>

      <motion.p
        className="max-w-xl text-lg md:text-xl text-[var(--color-3)] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Undergraduate Computer Science student with a strong interest in database systems.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-[var(--color-3)] text-[var(--color-5)] rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-[var(--color-6)] text-[var(--color-5)] rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Contact
        </a>
      </motion.div>
    </section>
  );
}
