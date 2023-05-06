
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  FaBars , FaTimes } from 'react-icons/fa'

import "../style/Navbar.scss";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
 
  return (
    <nav className="navbar">
      <div className="container">
       
        <div className="menu-icon" onClick={handleShowNavbar}>
          Menu {!showNavbar ?<FaBars /> : <FaTimes  className='navclose'/>} 
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Re.Ma</NavLink>
            </li>
            <li>
              <NavLink to="/survey">Survey</NavLink>
            </li>
            <li>
              <NavLink to="/answers">Answers</NavLink>
            </li>
            <li>
              <a href='https://metalaxis.net/'>Metalaxis</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar