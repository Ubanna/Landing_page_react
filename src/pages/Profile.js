import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Help, Lock, Settings, DeleteForever, ChangeHistory } from '@material-ui/icons';
import jwt_decode from 'jwt-decode';
import Header from '../components/Header';
import profileStyles from '../styles/profile.module.css';
import Footer from '../components/Footer';

const token = localStorage.getItem('the_main_app')
const user = token ? jwt_decode(token) : null

class Profile extends Component {

    render() {
        
        return (
            <div>
            <div>
                 <Header />
                <div className={profileStyles.profile}>
                    <div className={profileStyles.proStyle}>
                        <h1 style={{ color: "green" }}>JOHN DOE</h1>
                        <button className={profileStyles.profButton}>BUY OFFICIAL MEMBERSHIP <span style={{ textDecoration: "line-through", fontWeight: "bold", fontSize: "20px" }}>N</span></button>
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
                        <ul className={profileStyles.profUl}>
                            <Link className={profileStyles.profileStyle}><Settings /><li className={profileStyles.pro}>Account Settings</li></Link>
                            <Link className={profileStyles.profileStyle}><Lock /><li className={profileStyles.pro} >Privacy</li></Link>
                            <Link className={profileStyles.profileStyle} ><Help /><li className={profileStyles.pro}>Help</li></Link>
                            <Link to={{
                                pathname: '/editProfile',
                                state: {
                                    ...user
                                }
                            }} className={profileStyles.profileStyle} ><ChangeHistory /><li className={profileStyles.pro}>Change Password</li></Link>
                              <Link to={{
                                pathname: '/deleteProfile',
                                state: {
                                    ...user
                                }
                            }} className={profileStyles.profileStyle} ><DeleteForever /><li className={profileStyles.pro}>Delete Account</li></Link>
                        </ul>
                    </div>
                    <img className={profileStyles.jersey} src="/pics/nigJersey.jpg" alt="profile pic" />
                    <button id="jerseybtn"  className={profileStyles.profButton2}>Buy Jersey <span style={{ textDecoration: "line-through", fontWeight: "bold", fontSize: "20px" }}>N</span></button>
                </div>
            </div>
            <Footer /> 
            </div>
        )
    }
}

export default Profile;