import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div id='navBar'>
            <div id='logo'>
                <img src={ Logo } width={ 150 } alt='Logo.png' title='AlvaNett Studios' />
            </div>
            <div id='menu'>
                <ul>
                    <li> <Link to={'/'}> Home </Link> </li>
                    <li> <Link to={'/personas'}> Personas </Link> </li>
                    <li> <Link to={'/facturas'}> Facturas </Link> </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar