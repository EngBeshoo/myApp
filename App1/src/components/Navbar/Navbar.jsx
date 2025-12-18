import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return<>
  <nav>
    <ul className='container py-2'>
        <li className='pt-2 ms-5'>
            <NavLink to='' className='fs-3'> START FRAMWORK </NavLink>
        </li>
        <div className='d-flex ps-3 pt-3'>
        <li>
            <NavLink to='About' className='pe-3'>ABOUT</NavLink> 
        </li>
        <li>
            <NavLink to='Gallary' className='pe-3'>PORTFOLIO</NavLink>
        </li>
        <li>
            <NavLink to='Products' className='pe-3'>CONTACT</NavLink>
        </li>
        </div>
    </ul>
  </nav>
  </>
}
