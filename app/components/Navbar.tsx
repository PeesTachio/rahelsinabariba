"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-3 md:top-8 left-0 w-full z-50 flex justify-center font-system-ui"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center w-[90%] max-w-5xl bg-white/20 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-md relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold text-[var(--color-2)] hover:opacity-80 transition"
          >
            Rahel Sinabariba
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-6">
          {menuItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <Link
                href={item.href}
                className="font-semibold text-[var(--color-2)] hover:opacity-80 transition"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-2)] rounded absolute"
            animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-2)] rounded absolute"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-[var(--color-2)] rounded absolute"
            animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] w-[90%] max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 text-center shadow-md"
          >
            {menuItems.map((item, idx) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="font-semibold text-[var(--color-2)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
