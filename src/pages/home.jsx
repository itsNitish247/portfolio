import { React, useEffect, useState } from "react";
import "../styles/home.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {motion} from 'framer-motion'

function Home() {
  const [title, setTitle] = useState("Web Developer");

  useEffect(() => {
    const titles = ["Web Developer", "Freelancer", "Java Developer"];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setTitle(titles[currentIndex]);
      currentIndex = (currentIndex + 1) % titles.length;
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const animationVariants={
    hidden:{opacity: 0, y: 50 },
    visible:{opacity: 1,y: 0,
      transition:{duration :2.5}},
  }
  return (
    <motion.div 
    className="main_body"
    initial="hidden"
    animate="visible"
    variants={animationVariants}>
      <h1 className="intro">
        Hi, I'm
        <span className="name"> Nitish Kumar</span>
      </h1> 
      <h2 className="profession">A {title}</h2>

      
      <div className="social_icons">
        <a href="https://github.com/itsNitish247" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="icon" />
        </a> 
        <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon className="icon" />
        </a>
         <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon className="icon" />
        </a>
         <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="icon" />
        </a> 
        <a href="www.google.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className="icon" />
        </a>
      </div>
    </motion.div>
  );
}

export default Home;
