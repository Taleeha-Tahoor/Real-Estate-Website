import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='main'>
      <h3>UrbanNest</h3>

      <div className='inner'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Property</a>
        <a href="#">Agents</a>
        
      </div>

      <a href='#' className='btn'>Find A House</a>
    </div>
  )
}

export default Navbar
