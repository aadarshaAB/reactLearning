import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item"><a href="/">Home</a></li>
      <li className="nav-item"><a href="/about">About</a></li>
      <li className="nav-item"><a href="/Contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default NavBar