import React, { Component } from 'react';
import axios from 'axios';
import profileStyles from '../styles/profile.module.css';
import {Link} from 'react-router-dom'

export default class deleteProfile extends Component {
 
    state = {
        id: ''
      }

    handleDelete = (e, item) => {
        e.preventDefault()
        if (this.props.location.state.id) {
        alert('Are you sure you want to delete your account')
        axios.delete(`https://soccer-server-auth.herokuapp.com/delete/${this.state.id}`)
        .then(response => {
            localStorage.removeItem('the_main_app')
            window.location.href = '/'
        })
        .catch(err => console.log(err))
      } else {
        alert("server error, please try again")
      }
     } 



  componentDidMount() {
    console.log(this.props.location.state.id)
    this.setState({
      // email: this.props.location.state.user.email,
      // password: this.props.location.state.user.password,
      id: this.props.location.state.id
    })
  }
  render() {
    return (
        <div className={profileStyles.editContainer}>
          <h2 className={profileStyles.h2}>Delete Account</h2>
          <div>
                <button className={profileStyles.editbutton}  onClick={this.handleDelete}>Delete</button>
          </div>
          <br />
          <Link className={profileStyles.error1} to="/home">Go back to home page</Link>
        </div>
    )
  }
}