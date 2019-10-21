import React, { Component } from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom/cjs/react-router-dom';
import { QuestionAnswer, Person, Home, SentimentSatisfiedAlt, Forum } from '@material-ui/icons';
import headerStyles from '../styles/header.module.css';
import getFromStorage from './getFromStorage';
import 'whatwg-fetch';
import jwt_decode from 'jwt-decode';


const token = localStorage.getItem('the_main_app')
const user = token ? jwt_decode(token) : null

class Header extends Component {

    state = {
        isLoading: true,
        token: '',
        username: ""
    }

    
      componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
          const { token } = obj;
          // console.log(token)
          // Verify token
          fetch('https://soccer-server-auth.herokuapp.com/get/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
              console.log(json)
              if (json.success) {
                console.log(json)
                this.setState({
                  token,
                  isLoading: false,
                });
              } else {
                this.setState({
                  isLoading: false,
                  username: user ? user.username : "Guest"
                 
                });
              }
            });
        } 
      }   

    logout = () => {
      console.log('happy')
      localStorage.removeItem('the_main_app')
      window.location.href = '/'
    }


    handleSubmit(e) {
           alert(`You are now logged out, bye!`)
        return( <Redirect to='/' exact/>)  
            }


    render() {
      const { username } = this.state;
                return (
                <div className={headerStyles.nav}>
           <img className={headerStyles.logo} src="/pics/logonig.png" alt="nigerianteam" height="60" width="60"/>
           <Link className={headerStyles.mlitext} >Hello {username} </Link>
            <ul className={headerStyles.headerU}>
              <NavLink className={headerStyles.appy} >Hello {username} </NavLink>
         <NavLink to="/home" className={headerStyles.appy} activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>HOME</li>
        </NavLink>
        <NavLink to="/about" className={headerStyles.appy} activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>ABOUT</li>
        </NavLink>
        <NavLink to="/comment" className={headerStyles.appy}activeClassName="active"  style={{ textDecoration: 'none' }}>
        <li>BLOG</li>
        </NavLink>
        <NavLink to="/profile" className={headerStyles.appy} activeClassName="active" style={{ textDecoration: 'none' }}>
        <li>PROFILE</li>
        </NavLink>
        <NavLink className={headerStyles.appy} onClick={this.logout}>LOGOUT</NavLink>
            </ul>
            <ul className={headerStyles.mheader}>
            <Link to="/home" className={headerStyles.mli} style={{color:"green"}}><Home /></Link>
            <Link to="/about" className={headerStyles.mli}  style={{color:"green"}}><SentimentSatisfiedAlt /></Link>
            <Link to="/comment" className={headerStyles.mli}  style={{color:"green"}}><Forum /></Link>
            <Link to="/profile" className={headerStyles.mli}  style={{color:"green"}}><Person /></Link>
            <Link onClick={this.logout} className={headerStyles.mli}  style={{color:"green"}}><i class="fa fa-power-off" aria-hidden="true"></i></Link>
            </ul>
           </div>
                )
    }
}

export default Header;