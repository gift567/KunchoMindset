import React from 'react'
import './Navbar.css';
import { Facebook, YouTube } from '@mui/icons-material'
import  logo from './images/kuncho logo2.jpg';
const Navbar = () => {
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
    </div>
  )
}

export default Navbar