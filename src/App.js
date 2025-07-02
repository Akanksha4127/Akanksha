import React from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
// import { CursorContext } from "./context/CursorContext";

const App = () => {
  // console.log(useContext(CursorContext));
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
