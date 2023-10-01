import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import {motion} from 'framer-motion'


function Navbar() {
  const animationVariants={
    hidden:{opacity: 0, y: 50 },
    visible:{opacity: 1,y: 0,
      transition:{duration :2.5}},
    }
  return (
    <motion.div className="navbar"
     initial="hidden"
    animate="visible"
    variants={animationVariants}>
   
       <div className="port">Port
       <span className="folio">folio</span>
       </div>
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
    </motion.div>
  );
}

export default Navbar;
