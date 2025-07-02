import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

// Skill list
const skillsData = [
  { name: "React.js", level: "Advanced" },
  { name: "Redux Toolkit", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Firebase", level: "Intermediate" },
  { name: "Java", level: "Intermediate" },
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Git & GitHub", level: "Intermediate" },
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-10 py-20 bg-black overflow-hidden"
    >
      {/* Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <g transform="translate(0, 0)">
          <path fill="#0a0a0a" d="M0,0L800,0L800,600L0,600Z" />
          <circle cx="400" cy="300" r="400" fill="#1a1a1a" fillOpacity="0.4" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center lg:-mt-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.7)", // Glowing purple
              }}
              className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 border border-gray-700 transition duration-300 hover:border-purple-500"
            >
              <h3 className="text-white text-xl font-semibold mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-sm">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
