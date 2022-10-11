import React from "react";
import { motion } from "framer-motion";
import "./home.css";
const Home = () => {
  return (
    <main className="home">
      <div className="image-skeleton"></div>
      <div className="placeholder"></div>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Software Developer with a passion for clean code and problem solving.
          Upon graduating with a bachelor's in Computer Science I found that
          nobody had taught me the beauty of good clean code and so I enrolled
          in Flatiron School. There, I was able to enhance my skills to the max
          and put them to the test as well.
        </p>
      </section>
    </main>
  );
};

export default Home;
