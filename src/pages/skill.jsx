import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import vsCode from '../assets/svg/visual-studio-code.svg';
import eclipse from '../assets/svg/eclipse.svg';
import sql from '../assets/svg/mysql.svg';
import firebase from '../assets/svg/firebase.svg';
import expo from '../assets/svg/expo.svg';
import intellij from '../assets/svg/intellij-idea.svg';
import apache from '../assets/svg/apache.svg';

import javascript from '../assets/svg/javascript.svg';
import html from '../assets/svg/html.svg';
import css from '../assets/svg/css.svg';
import reactNative from '../assets/svg/react-native.svg';
import react from '../assets/svg/react.svg';
import java from '../assets/svg/java.svg';
import '../styles/skill.css';

function Skill() {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkillsTools = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="skill-container">
      <h1>skill</h1>
      <div className="toggle-switch">
        <span className={`toggle-button ${showSkills ? 'active' : ''}`} onClick={toggleSkillsTools}>
          Skills
        </span>
        <span className={`toggle-button ${showSkills ? '' : 'active'}`} onClick={toggleSkillsTools}>
          Tools
        </span>
      </div>
      <div className="container">
        <div className="section">
          <h2>{showSkills ? 'Skills' : 'Tools'}</h2>
          <div className="grid-container">
            {showSkills ? ( 
              <>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={react} alt="React" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={html} alt="HTML" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={css} alt="CSS" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={javascript} alt="JavaScript" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={reactNative} alt="react-native" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }}  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={java} alt="Java" className="icon" />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={vsCode} alt="VS Code" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={firebase} alt="Firebase" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={sql} alt="SQL" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={expo} alt="Expo" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={eclipse} alt="Eclipse" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={intellij} alt="IntelliJ Idea" className="icon" />
                </motion.div>
                <motion.div className="grid-item" whileHover={{ scale: 1.2 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                  <img src={apache} alt="Apache" className="icon" />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
