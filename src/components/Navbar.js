import React from 'react';
import {NavLink} from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="logo">
          {<h4>logo</h4>}
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Restaurants">Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {/* <li>
              <NavLink to="/cart">{<h1>{0}</h1>}</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/signup">signup</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
