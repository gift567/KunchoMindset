import React, { useState } from 'react'
import './Navbar.css';
import { Close, Facebook, YouTube } from '@mui/icons-material'
import  logo from './images/kuncho logo2.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ setOpen }) => {

  return (
    <div className="navbar">
        <div className="nav-left">
            <img src={logo} alt="" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#music">Music</a></li>
                <li><a href="#videos">Videos</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
        <div className="nav-right">
            <Facebook />
            <YouTube />
        </div>
        <MenuIcon className='nav__menu' onClick={() => setOpen(open => !open)}/>
    </div>
  )
}

export default Navbar