import React, { useState } from "react";
import WomenImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4 py-16"
    >
      {/* --- Background SVG --- */}
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
      

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Text & Form */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-white">
            Contact <span className="">Me</span>
          </h1>
          <p className="text-gray-200">
            I would love to hear your suggestions, feedback, or just say hello!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full border-b-2 border-white py-3 px-4 bg-transparent placeholder:text-gray-100 placeholder:background-transparent focus:outline-none"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your email"
                className="w-full border-b-2 border-white py-3 px-4 bg-transparent placeholder:text-gray-100 focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message"
              className="w-full border-b-2 border-white py-3 px-4 bg-transparent placeholder:text-gray-100 resize-none focus:outline-none"
            ></textarea>
            <button className="btn bg-black text-white px-6 py-3 rounded-full hover:shadow-xl transition">
              Send it
            </button>
          </form>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0" }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 1.5 }}
          className="flex justify-center items-center sm:hidden"
        >
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <img
              src={WomenImg}
              alt="Contact"
              className="w-full h-full object-contain rounded-full shadow-xl border-4 border-white"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
