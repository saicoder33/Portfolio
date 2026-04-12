import React from "react";
import "./navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
       
      <h2  className="title">My Portfolio</h2>
      <ul>
        <li><a className="Link" href="#hero">Home</a></li>
        <li ><a className="Link" href="#about">About</a></li>
        <li><a className="Link" href="#projects">Projects</a></li>
        <li ><a className="Link" href="#contact">Contact</a></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;
