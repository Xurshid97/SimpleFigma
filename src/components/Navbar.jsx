import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Navbar() {
    let linkClick = ({isActive})=> {
        return {
            color: isActive? "red" : "black",
            textDecoration: isActive? "none" : "underline",
        }
    }
  return (
    <div className='navbar'>
        <h3>Router</h3>
        <ul>
            <NavLink to="/" style={linkClick}>Home</NavLink>
            <NavLink to="/about" style={linkClick}>About</NavLink>
        </ul>
    </div>
  )
}

export default Navbar