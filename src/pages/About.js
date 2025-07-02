import React from "react";
import WomenImg from "../img/about/Akanksha.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="min-h-screen bg-black text-white flex items-center justify-center px-4 lg:px-20"
    >
      {/* --- ✅ Background SVG --- */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <g transform="translate(0, 0)">
          <path fill="#0a0a0a" d="M0,0L800,0L800,600L0,600Z" />
          <circle cx="400" cy="300" r="400" fill="#1a1a1a" fillOpacity="0.4" />
          {/* <circle cx="200" cy="500" r="150" fill="#2a2a2a" fillOpacity="0.3" />
          <circle cx="600" cy="100" r="100" fill="#3a3a3a" fillOpacity="0.2" /> */}
        </g>
      </svg>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 ">
        {/* Animated Blob with Glow */}
        <div className="flex justify-center ">
          <div className="relative w-64 h-64 sm:w-60 sm:h-60 md:w-80 md:h-80  ">
            {/* Blob background with animation */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-2xl animate-pulseGlow z-0" />

            {/* Rotating and pulsing blob container */}
            <div className="absolute inset-0 rounded-full overflow-hidden animate-rotateBlob z-10">
              <img
                src={WomenImg}
                alt="Akanksha"
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: "-80%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "-80%" }}
          transition={transition1}
          className="z-10 text-center lg:text-left "
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight ">
            About <span className="text-gray-400">Me</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            I'm Akanksha Kumari, a passionate developer with a deep love for
            crafting beautiful, user-centric web applications. With experience
            in React.js and modern web technologies, I'm focused on building
            responsive, scalable, and engaging digital experiences.
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
