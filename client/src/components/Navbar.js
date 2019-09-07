import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (
        <div class="nav">
        <ul>
            <NavLink>
        <li>HOME</li>
        </NavLink>
        <NavLink>
        <li>ABOUT</li>
        </NavLink>
        <NavLink>
        <li>SERVICES</li>
        </NavLink>
        <NavLink>
        <li>PROFILE</li>
        </NavLink>
        <NavLink>
        <li>LOGOUT</li>
        </NavLink>
       </ul>
 
              
    </div>

    )
}

export default Navbar;