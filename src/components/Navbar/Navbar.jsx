import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>
          <Link style={{ color: "#313bac", textDecoration: "none" }} to="/">
            ALAMGIR
          </Link>
        </h2>
      </div>
      <ul className="app__navbar-links">
        {["skills", "work", "testimonial", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`/#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [500, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["skills", "work", "testimonial", "contact"].map((item) => (
                <li key={item}>
                  <Link to={`/#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
