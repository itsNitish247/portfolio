import React from 'react';
import { motion } from 'framer-motion'; 
import '../styles/aboutMe.css';
import profilepic from '../assets/profilepic.jpeg';
import resume from '../assets/resume.pdf'

function AboutMe() {

const handleDownlaod =()=>{
const anchor=document.createElement('a');
anchor.href=resume;
anchor.download='resume.pdf';
anchor.click();
  };

  const handleHireMe = () =>{
  const toEmail ='meganitish@gmail.com';
  const composeURL=`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${toEmail}`;
  window.location.href=composeURL;
};




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
        <h2 className='heading'>Hey , let me make a beautiful website for you</h2>
        <p className='para'>I am a dedicated and creative individual with a 
          passion for technology and a knack for problem-solving.
          As an enthusiastic learner, I enjoy exploring new domains
          and tackling challenges head-on. With a background 
          in [web development , app development ], 
          I am constantly seeking opportunities to
          apply my skills and make a positive impact. Whether it's coding, learning new languages, or pursuing personal projects, I thrive on continuous growth and innovation.
        </p>
       <div className="buttons">
        <button className='hireMe' onClick={handleHireMe}>hire me</button>
        <button className='cv' onClick={handleDownlaod}>Download CV</button></div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
