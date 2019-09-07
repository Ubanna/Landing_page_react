import React, { Component } from 'react';
import Footer from './Footer';
import Grid from './Grid';
import './nav.css';
import Random from './Gallery';
import { NavLink, Redirect, Link } from 'react-router-dom/cjs/react-router-dom';
import Register from './Register';
import { QuestionAnswer, Person, Home, SentimentSatisfiedAlt, Forum } from '@material-ui/icons';
import setInStorage from './setInStorage';
import getFromStorage from './getFromStorage';
import 'whatwg-fetch';
import jwt_decode from 'jwt-decode';


const token = localStorage.getItem('the_main_app')
const user = jwt_decode(token)

class Header extends Component {

    state = {
        isLoading: true,
        token: '',
    }


    logout = () => {
        console.log('happy')
        this.setState({
          isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // Verify token
          fetch('http://localhost:3006/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
              if (json.success) {
                  localStorage.removeItem('the_main_app')
                this.setState({
                  token: '',
                  isLoading: false
                });
              } else {
                this.setState({
                  isLoading: false,
                });
              }
            });
        } 
      }
    
      componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          console.log(token)
          // Verify token
          fetch('http://localhost:3006/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
              if (json.success) {
                this.setState({
                  token,
                  isLoading: false
                });
              } else {
                this.setState({
                  isLoading: false,
                });
              }
            });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }


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
        <button onClick={this.logout}>Logout</button>
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