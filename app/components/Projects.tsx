"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Projects() {
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false, margin: "-100px" });

  const projects = [
    {
      name: "Asphalt 9 Rejeds - A website clone",
      desc: "A visually engaging clone of the Asphalt 9 Legends website, built with HTML, CSS, and JavaScript. This project recreates the structure, navigation, and key pages of the original game.",
      tools: [
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Github", url: "https://github.com/PeesTachio/Asphalt-9-Rejends---A-clone-website.git" },
      ],
      image: "/Asphalt-9-Rejends.jpeg",
      link: "https://youtu.be/G-N63cKphLc",
    },
    {
      name: "AI Focus Detector",
      desc: "A full-stack application that uses computer vision to detect and monitor user focus in real-time with a web interface. I designed the main AI algorithm and several website enhancements using OpenCV, Python, and Flask, HTML and CSS.",
      tools: [
        { name: "OpenCV", url: "https://opencv.org/" },
        { name: "Python", url: "https://www.python.org/" },
        { name: "Flask", url: "https://flask.palletsprojects.com/en/stable//" },
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Github", url: "https://github.com/PeesTachio/AI-Focus-Detector-Repay-Team.git" },
      ],
      image: "/AI-Focus-Detector.jpg",
      link: "https://youtu.be/HJImINExPGA",
    },
    {
      name: "Asphalt 9 Rejends UI Prototype",
      desc: "This project creates an interactive prototype of the Asphalt 9 Legends website using Figma, emphasizing modern UI design, intuitive navigation, and an engaging user experience.",
      tools: [{ name: "Figma", url: "https://www.figma.com/" }],
      image: "/Asphalt-9-Rejends-Figma.jpeg",
      link: "https://www.figma.com/proto/MrMTZQpNpSzLutmcvJXBXS/2702279741---Rahel-Mangoloi-Sinabariba?node-id=0-1&t=xrDzu9OTE8HxUjBq-1",
    },
    {
      name: "Stroke Prediction Age Bias",
      desc: "Developed a stroke risk prediction using Support Vector Machine (SVM), which demonstrated the highest accuracy. The analysis revealed a significant age-related bias, with forecasts being strongly influenced by age compared to other factors. An interactive dashboard was developed using Streamlit to provide real-time visualization of forecasts.",
      tools: [
        { name: "Python", url: "https://www.python.org/" },
        { name: "Streamlit", url: "https://streamlit.io/" },
      ],
      image: "/Stroke Prediction Age Bias.jpeg",
      link: "https://github.com/PeesTachio/Stroke-Prediction-Age-Bias.git",
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 bg-[var(--color-5)] font-system-ui scroll-mt-8"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[var(--color-7)] mb-12 font-system-ui"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-[var(--color-5)] rounded-2xl shadow-lg overflow-hidden flex flex-col" 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-56 md:h-64 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                </div>
              </a>

              <div className="p-6 flex flex-col flex-grow"> {}
                <h3 className="text-xl font-semibold text-[var(--color-2)] mb-2 font-system-ui">
                  {project.name}
                </h3>
                <p className="text-[var(--color-3)] mb-4 font-system-ui flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto"> {}
                  {project.tools.map((tool, tIdx) => (
                    <a
                      key={tIdx}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--color-2)] text-[var(--color-5)] text-xs font-medium px-3 py-1 rounded-full hover:opacity-80 transition font-system-ui"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
