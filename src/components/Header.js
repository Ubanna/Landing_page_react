import React, { Component } from 'react';
import Footer from './Footer';
import Grid from './Grid';
import './nav.css';
import Random from './Gallery';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

class Header extends Component {

    render() {
        return <div className="nav">

           <header className="logo"><img src="/pics/logonig.png" alt="nigerianteam" height="100" width="100"/></header> 
            <ul>
            <NavLink to="/home" className="appy">
        <li>HOME</li>
        </NavLink>
        <NavLink to="/about" className="appy">
        <li>ABOUT</li>
        </NavLink>
        <NavLink to="/services" className="appy">
        <li>SERVICES</li>
        </NavLink>
        <NavLink to="/profile" className="appy">
        <li>PROFILE</li>
        </NavLink>
        <NavLink to="/" className="appy" >
        <li>LOGOUT</li>
        </NavLink>
            </ul>

           </div>
   

    }
}

export default Header;