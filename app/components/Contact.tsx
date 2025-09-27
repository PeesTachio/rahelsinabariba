"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Contact() {
  const socials = [
    { icon: Mail, link: "mailto:rahel030705@gmail.com" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/rahelsinabariba/" },
    { icon: Github, link: "https://github.com/PeesTachio" },
    { icon: Instagram, link: "https://www.instagram.com/rahelsinabariba" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[var(--color-5)] font-geist scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[var(--color-7)] mb-6"
          initial="hidden"
          whileInView="visible"
          variants={contactVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-lg text-[var(--color-2)] mb-6"
          initial="hidden"
          whileInView="visible"
          variants={contactVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Open to collaborations, exciting opportunities, or simply building meaningful connections.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex gap-6 mb-4 md:mb-0">
            {socials.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={idx}
                  variants={item}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[var(--color-8)] rounded-full shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2, backgroundColor: "var(--color-9)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} // hover tetap smooth
                >
                  <Icon className="w-6 h-6 text-[var(--color-2)]" />
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[var(--color-7)] text-[var(--color-5)] font-medium rounded-3xl shadow-lg"
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }} // hover tetap smooth
          >
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
