import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import logo from "../img/header/Akanksha_logo.png";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full px-6 lg:px-20 z-50 transition-all duration-500 border-b shadow-md 
        ${
          scrolled
            ? "h-[90px] bg-black/80 border-gray-800"
            : "h-[100px] lg:h-[100px] bg-black border-transparent"
        }`}
    >
      {/* Animated Blob Behind Navbar */}
      <div className="absolute top-0 -z-10 w-full overflow-hidden ">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px]"
        >
          <ellipse cx="680" cy="160" rx="900" ry="120" fill="#2c2c2c" />
        </svg>
      </div>

      <div className="flex items-center gap-4 w-full justify-between">
        {/* Logo */}
        <Link to="/" className="max-w-[40vh]">
          <img
            src={logo}
            alt="Logo"
            color="white"
            className="h-24 w-auto object-contain  drop-shadow-md"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden xl:flex gap-x-10 font-semibold text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group transition duration-300 hover:text-white text-gray-400 ${
                pathname === link.path ? "text-white" : ""
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-gray-500 via-white to-gray-500 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Socials + MobileNav */}
        <div className="flex items-center gap-4">
          <Socials />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
