import React from "react";
import "./about.css";
function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div>
      <p>
        I'm a passionate developer from Pune, India. I love building web apps,
        solving problems, and exploring new technologies.
      </p>
      </div>
      <div className="about-details">
        <img src="https://blog.openreplay.com/images/fundamentals-of-ui-design/images/hero.png" alt="UI design" className="ui"/>
        <h3>UI Design</h3>
        <p> I have a strong eye for design and create intuitive, user-friendly interfaces.</p>
        
      </div>
      <div className="about-details">
        <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python Programming" className="python"/>
        <h3>Python Programming</h3>
        <p> I have experience in Python development and enjoy creating efficient, scalable solutions.</p>

      </div>
      <div className="about-details">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Web Development" className="node"/>
        <h3>Web Development</h3>
        <p> I have experience in web development and enjoy creating responsive, high-performance websites.</p>
      </div>
    </section>
  );
}

export default About;
<div className="project-card">
        <h3>Campus App</h3>
        <p>App built for students to manage events and resources.</p>
        <a href="#projects">View Project</a>
      </div>
