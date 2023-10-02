import React from 'react'
import Navbar from './navbar'
import Home from '../pages/home'
import '../styles/layout.css'
import AboutMe from '../pages/aboutMe'

import Career from '../pages/career'
import Skill from '../pages/skill'


function Layout() {
  return (
    <div className='layout_body'>
      <div className='nav_placement'><Navbar /></div>
      <div className='home_placement'><Home /></div>
      <div className="aboutMe_placement"><AboutMe /></div>
      <div className="career_placement"><Career /></div>
      <div className="skill_placement"><Skill /></div>
    </div>
  )
} 

export default Layout
