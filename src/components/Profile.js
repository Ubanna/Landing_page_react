import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter, NavLink} from 'react-router-dom'
import { Help, Lock, Settings } from '@material-ui/icons';
import Header from './Header';
import Footer from './Footer';
import FooterBefore from './FooterBefore';

class Profile extends Component{
  
    render(){
      
        return(
            <div>
                <Header />
                <div className="profile">
                   <div className="proStyle">
                   <h1 style={{color:"green"}}>JOHN DOE</h1>
                   <button className="profButton">BUY OFFICIAL MEMBERSHIP <span style={{textDecoration:"line-through", fontWeight:"bold", fontSize:"20px"}}>N</span></button>
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <br />
                   <ul className="profUl">
                   <Link className="profileStyle"><Settings /><li className="pro">Account Settings</li></Link>
                     <Link className="profileStyle"><Lock /><li className="pro">Privacy</li></Link>
                     <Link className="profileStyle" ><Help /><li className="pro">Help</li></Link>
                     </ul>                    
                   </div>
                   <img className="jersey" src="/pics/nigJersey.jpg" alt="profile pic" /> 
                   <button id="jerseybtn" className="profButton">Buy Jersey <span style={{textDecoration:"line-through", fontWeight:"bold", fontSize:"20px"}}>N</span></button>                   
              
                 </div>
                 <FooterBefore />
                 <Footer />
            </div>
            
        )
    }
}

export default Profile;