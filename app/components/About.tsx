"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--color-5)] font-geist scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-1)] mb-6">
            About
          </h2>
          <p className="text-lg text-[var(--color-3)] leading-relaxed mb-4">
            I am a Computer Science student specializing in{" "}
            <span className="font-bold">Database systems</span>. I enjoy learning the latest technologies.
          </p>
          <p className="text-lg text-[var(--color-3)] leading-relaxed mb-4">
            Throughout my studies, I have worked on several assignments and projects using related technologies.
          </p>
          <p className="text-lg text-[var(--color-3)] leading-relaxed">
            I am always excited to take on new challenges, collaborate with teams, and continuously develop my technical
            skills and creativity in building meaningful digital solutions.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile Photo"
              width={300}
              height={300}
              className="object-cover shadow-lg rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
