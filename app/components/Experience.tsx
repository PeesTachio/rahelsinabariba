"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Seasonal Ticketing Assistant - Eid 2025",
      year: "April 2025",
      company: "Ragunan",
      companyUrl: "https://www.instagram.com/ragunanzoo/?hl=en",
      desc: "Supporting ticket counter management services and operations during the 2025 Eid season.",
    },
    {
      title: "Seasonal Ticketing Assistant - Christmas & New Year 2024",
      year: "December 2024 - December 2025",
      company: "Ragunan",
      companyUrl: "https://www.instagram.com/ragunanzoo/?hl=en",
      desc: "Supporting counter services and management during the 2025 Christmas & New Year season.",
    },
    {
      title: "Seasonal Ticketing Assistant - Eid 2024",
      year: "April 2024",
      company: "Ragunan",
      companyUrl: "https://www.instagram.com/ragunanzoo/?hl=en",
      desc: "Supporting ticket counter services and management during the 2024 Eid season.",
    },
  ];

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 bg-[var(--color-5)] font-system-ui scroll-mt-8"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center md:text-left text-[var(--color-7)] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative ml-4 md:ml-8">
          <motion.div
            ref={timelineRef}
            className="absolute left-2 md:left-0 top-0 w-1 bg-[var(--color-9)] rounded-full origin-top"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {experiences.map((exp, idx) => (
            <motion.a
              key={idx}
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-10 ml-6 md:ml-10 relative pl-4 rounded-xl cursor-pointer"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-2)] mb-1">
                {exp.title}
              </h3>

              <span className="text-base md:text-lg font-medium text-[var(--color-3)] mb-1 block">
                {exp.company}
              </span>

              <span className="text-sm text-[var(--color-3)]">{exp.year}</span>

              <p className="mt-2 text-[var(--color-3)]">{exp.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
