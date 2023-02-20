import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <header>
        <nav className='nav__links'>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to='/'>Home</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to='/main'>Main</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to='/contacts'>Contact</NavLink></li>
                <li><NavLink className={({ isActive }) => (isActive ? "active" : "not-active")} to='/*'>Error 404</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
