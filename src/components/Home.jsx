import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Home = ({ isDark, handleDark }) => {
  return (
    <div className="home">
      <div className="contactfull">
        <a className="icon" href="mailto:luisdavidfernandezch@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>

        <a className="icon" href="https://wa.me/59160037476" target="_blanck">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <button onClick={handleDark} className="icon">
          {isDark ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </button>
      </div>
      <h2 className="name">Luis David</h2>
      <p className="subtitle">Front-end • Web Developer</p>
      <motion.ul
        transition={{ delay: 2 }}
        variants={container}
        initial="hidden"
        animate="show"
        className="icons-container"
      >
        <motion.li key={0} variants={item}>
          <a className="icon" href="#about">
            <i className="fa-solid fa-user"></i>
          </a>
        </motion.li>

        <motion.li key={2} variants={item}>
          <a
            className="icon"
            href="https://github.com/LuisDavidFC"
            target="_blanck"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </motion.li>

        <motion.li key={3} variants={item}>
          <a className="icon" href="#portafolio">
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </motion.li>

        <motion.li key={4} variants={item}>
          <a
            className="icon"
            href="https://www.linkedin.com/in/luis-david-fernandez-0ba841220/"
            target="_blanck"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </motion.li>
        <motion.li key={5} variants={item}>
          {/* download pdf */}
          <a className="icon"
          href="https://drive.google.com/file/d/1RMd_nAsmGoChfR1d7-Of_fPEyG4m4E2T/view?usp=sharing"
          target='_blanck'
          >
            <i className="fa-solid fa-file"></i>
          </a>
        </motion.li>
      </motion.ul>
      <div className="down">
        <a href="#about">
          <i class="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
