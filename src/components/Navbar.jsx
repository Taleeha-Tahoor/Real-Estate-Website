import React, { useState } from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='main'>
      <h3>UrbanNest</h3>

      <div className={`inner ${menu ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Property</a>
        <a href="#">Agents</a>
        
      </div>

      <a href='#' className={`btn ${menu ? "show" : ""}`}>Find A House</a>
      <i className='material-icons menu-icon' onClick={() => { setMenu(!menu)
        console.log(menu)
      }}>
        menu
        </i>
    </div>
  )
}

export default Navbar
