import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import "./sidebar.css";
const parentVariants = {
  hidden: { y: -45, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { when: "afterChildren", staggerChildren: 0.4, duration: 1.4 },
  },
};
const sidebarVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.2 },
};
const Sidebar = () => {
  return (
    <div className="sidebar">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="sidebar-container"
      >
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          className="sidebar__title"
        >
          <h1>
            <NavLink to="/">Tomer</NavLink>
          </h1>
        </motion.div>
        <ul className="sidebar__links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/me"
            >
              Who I Am
            </NavLink>
          </li>
        </ul>
        <div className="sidebar__bottom">
          <div className="sidebar__contact">
            <a
              style={{ color: "blue" }}
              href="https://mail.google.com/mail/u/0/?fs=1&to=tharari93@gmail.com&tf=cm"
            >
              tharari93gmail.com <AiOutlineMail size={15} />
            </a>
            <p>(917)-974-5453</p>
          </div>
          <div className="sidebar__social-icons">
            <div className="social-icon">
              <a href="http://www.instagram.com/tomerharari1">
                <FaInstagram size={25} />
              </a>
            </div>
            <div className="social-icon">
              <a href="http://www.github.com/tharari21">
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
