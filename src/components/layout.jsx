import React from 'react'
import Navbar from './navbar'
import Home from '../pages/home'
import '../styles/layout.css'
function Layout() {
  return (
    <div className='layout_body'>
      <div className='nav_placement'><Navbar /></div>
      <div className='home_placement'><Home /></div>
    </div>
  )
}

export default Layout
