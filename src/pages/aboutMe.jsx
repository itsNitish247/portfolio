import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/aboutMe.css';
import profilepic from '../assets/profilepic.jpeg';

function AboutMe() {

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
  };

  return (
    <motion.div
      className="aboutme_body"
      initial="hidden" 
      animate="visible" 
      variants={animationVariants}
    >
      <div className="image_container">
        <img className="image" src={profilepic} alt="Oval" />
      </div>
      <div className="aboutme_content">
        <h1 className='about'>About <span className='me'>Me</span></h1>
        <h2 className='heading'>Hi , let me make a beautiful website for you</h2>
        <p className='para'>I am a dedicated and creative individual with a 
          passion for technology and a knack for problem-solving.
          As an enthusiastic learner, I enjoy exploring new domains
          and tackling challenges head-on. With a background 
          in [web development , app development ], 
          I am constantly seeking opportunities to
          apply my skills and make a positive impact. Whether it's coding, learning new languages, or pursuing personal projects, I thrive on continuous growth and innovation.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
