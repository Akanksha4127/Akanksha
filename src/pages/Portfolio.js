import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { ProductDetails } from "../utils/ProjectDetails";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="min-h-screen bg-black relative px-8 py-12"
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

      {/* Title */}
      <h2 className="text-white text-4xl font-bold mb-10 text-center z-10 relative">
        My Projects
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative p-10">
        {ProductDetails.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover_scale-105 "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              {project.link && (
                <Link
                  to={project.link}
                  className="text-blue-400 hover:text-blue-200 transition-colors text-sm"
                >
                  View Project →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
