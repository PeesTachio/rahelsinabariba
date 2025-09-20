"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: Mail, link: "mailto:rahel030705@gmail.com" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/rahelsinabariba/" },
    { icon: Github, link: "https://github.com/PeesTachio" },
    { icon: Instagram, link: "https://www.instagram.com/rahelsinabariba" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[var(--color-5)] font-geist scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--color-7)] mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {socials.map((s, idx) => (
            <motion.a
              key={idx}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[var(--color-8)] rounded-full shadow-lg hover:bg-[var(--color-9)] transition flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <s.icon className="w-6 h-6 text-[var(--color-2)]" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
