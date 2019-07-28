import React, { Component } from 'react';
import Footer from './Footer';
import Grid from './Grid';
import './nav.css';
import Random from './Gallery';
import { NavLink, Redirect, Link } from 'react-router-dom/cjs/react-router-dom';
import Register from './Register';
import { QuestionAnswer, Person, Home, SentimentSatisfiedAlt, Forum } from '@material-ui/icons';

class Header extends Component {


    handleSubmit(e) {
           alert(`You are now logged out, bye!`)
        return( <Redirect to='/' exact/>)  
        //  return this.props.history.push("/")
            }


    render() {
                return <div className="nav">

           <header className="logo"><img id="logo" src="/pics/logonig.png" alt="nigerianteam" height="100" width="100"/></header> 
           {/* <div id="input-container">
           <input id="fname" type="text" placeholder="Search"/>
            <button className="btnMain"> SEARCH </button>
           </div> */}
            <ul className="headerU">
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
        <NavLink to="/" className="appy" activeClassName="active" exact style={{ textDecoration: 'none' }}>
        <li>LOGOUT</li>
        </NavLink>
            </ul>
             <div className="mheader">
             <img id="logo" src="/pics/logonig.png" alt="nigerianteam" height="50" width="50" style={{marginLeft: '-95px'}}/>
            <Link to="/home" id="mli" style={{color:"green"}}><Home /></Link>
            <Link to="/about" id="mli" style={{color:"green"}}><SentimentSatisfiedAlt /></Link>
            <Link to="/comment" id="mli" style={{color:"green"}}><Forum /></Link>
            <Link to="/profile" id="mli" style={{color:"green"}}><Person /></Link>
            <Link to="/" id="mli" style={{color:"green"}}><i class="fa fa-power-off" aria-hidden="true"></i></Link>
            </div>
           </div>
   

    }
}

export default Header;