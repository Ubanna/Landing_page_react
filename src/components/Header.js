import React, { Component } from 'react';
import Footer from './Footer';
import Grid from './Grid';
import './nav.css';
import Random from './Gallery';
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom';
import Register from './Register';

class Header extends Component {


    handleSubmit(e) {
           alert(`You are now logged out, bye!`)
        return( <Redirect to='/' exact/>)  
        //  return this.props.history.push("/")
            }


    render() {
                return <div className="nav">

           <header className="logo"><img src="/pics/logonig.png" alt="nigerianteam" height="100" width="100"/></header> 
           <div id="input-container">
           <input id="fname" type="text" placeholder="Search"/>
            <button className="btnMain"> SEARCH </button>
           </div>
            <ul>
         <NavLink to="/home" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>HOME</li>
        </NavLink>
        <NavLink to="/about" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>ABOUT</li>
        </NavLink>
        <NavLink to="/comment" className="appy" activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>BLOG</li>
        </NavLink>
        <NavLink to="/profile" className="appy" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li>PROFILE</li>
        </NavLink>
        {/* <button onClick={this.handleSubmit}>LOGOUT</button> */}
        <NavLink to="/" className="appy" activeClassName="active" style={{ textDecoration: 'none' }}>
        <li>LOGOUT</li>
        </NavLink>
            </ul>

           </div>
   

    }
}

export default Header;