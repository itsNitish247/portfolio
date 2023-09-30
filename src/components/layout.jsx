import React from 'react'
import Navbar from './navbar'
import Home from '../pages/home'
import '../styles/layout.css'
import AboutMe from '../pages/aboutMe'


function Layout() {
  return (
    <div className='layout_body'>
      <div className='nav_placement'><Navbar /></div>
      <div className='home_placement'><Home /></div>
      <div className="aboutMe_placement"><AboutMe /></div>
    </div>
  )
} 

export default Layout
