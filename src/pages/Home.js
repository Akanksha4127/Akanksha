import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { ReactTyped } from "react-typed";
import WomanImg from "../img/home/a.jpg";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section relative overflow-hidden bg-black min-h-screen flex items-center justify-center"
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

      {/* --- ✅ Main Content --- */}
      <div className="container mx-auto h-full relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <ReactTyped
                strings={[
                  "Web Developer",
                  "UI Designer",
                  "Frontend Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-6">
              Jehanabad, Bihar, India
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all"
            >
              Hire me
            </Link>
          </motion.div>

          {/* SVG Image with Embedded IMG */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className="lg:w-1/2 flex justify-center"
          >
            <svg
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-xl "
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="circleView">
                  <circle cx="256" cy="256" r="256" />
                </clipPath>
              </defs>
              <image
                href={WomanImg}
                width="512"
                height="512"
                clipPath="url(#circleView)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
