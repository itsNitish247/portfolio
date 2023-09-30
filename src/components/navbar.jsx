import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
       <div className="header">Portfolio</div>
      <nav className="nav_body">
     

          <ul className="nav_contents">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About me">About Me</Link>
          </li>
          <li>
            <Link to="/Experience">Experience</Link>
          </li>
          <li>
            <Link to="/Careers">Careers</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact Me">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
