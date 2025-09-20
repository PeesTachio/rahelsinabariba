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
    <section id="experience" className="py-20 bg-[var(--color-5)] font-system-ui scroll-mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[var(--color-7)] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>

        <div className="relative ml-4 md:ml-8">
          <motion.div
            ref={timelineRef}
            className="absolute left-0 top-0 w-1 bg-[var(--color-2)] rounded-full origin-top"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 md:ml-10 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="absolute -left-4 md:-left-6 top-2 w-4 h-4 bg-[var(--color-2)] rounded-full border-2 border-white"></div>

              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-2)] mb-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {exp.title}
                </a>
              </h3>

              <span className="text-base md:text-lg font-medium text-[var(--color-3)] mb-1 block">
                {exp.company}
              </span>

              <span className="text-sm text-[var(--color-3)]">{exp.year}</span>

              <p className="mt-2 text-[var(--color-3)]">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
