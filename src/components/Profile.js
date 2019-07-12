import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter, NavLink} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

class Profile extends Component{
  
    render(){
      
        return(
            <div className="profile">
                <Header />
                 <img src="/pics/dogface.jpg" alt="profile pic" width="30%"/> 
                 <ul className="prof">
                     <NavLink><li className="pro">Account</li></NavLink>
                     <NavLink><li className="pro">Change Password</li></NavLink>
                     <NavLink><li className="pro">Billing Address</li></NavLink>
                     <NavLink><li className="pro">Privacy</li></NavLink>
                     <NavLink><li className="pro">Delete Account</li></NavLink>
                 </ul>
                 <Footer />
            </div>
            
        )
    }
}

export default Profile;