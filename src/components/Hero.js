import React from "react";
import "./hero.css";
import saiImage from "./sai.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="info">
        <div className="intro">
          <h1>Hi, I'm Sai</h1>
          <p>
            I'm a passionate React developer with a knack for solving complex
            problems and creating innovative solutions. I also enjoy mentoring
            others and staying up-to-date with the latest industry trends.
            React Developer | Problem Solver | Innovator
          </p>
          <button className="btn">
            <a href="#projects" className="btn">View My Work</a>
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={saiImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
