import React, { Component } from 'react';
import axios from 'axios';
import profileStyles from '../styles/profile.module.css';
import {Link} from 'react-router-dom'

export default class editPage extends Component {
  state = {
    password: '',
    id: ''
  }

  onTextboxChangeSignInPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  item = {
    password: this.state.password
  }


  handleUpdate = (e, item) => {
    e.preventDefault()
    if (this.props.location.state.id) {
    axios.patch(`https://soccer-server-auth.herokuapp.com/update/${this.state.id}`, {
      password: this.state.password
    })
      .then((res) => {res.status === 200 && this.props.history.goBack()
      alert("Your password has been updated")}
      )
      .catch((err) => console.log(err, "error"))
    } else {
      alert("server error, please try again")
    }
  }

  componentDidMount() {
    console.log(this.props.location)
    // console.log(this.props.location.state.id)
    this.setState({
      id: this.props.location.state.id
    })
    console.log(this.props.location.state.id)
  }
  render() {
    return (
          <div className={profileStyles.editContainer} >
            <h1 >Change password</h1>
            <form className={profileStyles.form} onSubmit={this.handleUpdate}>
              <div>
                  <input className={profileStyles.input}placeholder="enter new password"  name="password" value={this.state.password} onChange={this.onTextboxChangeSignInPassword}/>
                </div>
                <br />
                <button className={profileStyles.editbutton} type="submit">Update</button>
            </form>
            <br />
            <Link className={profileStyles.error1} to="/home">Go back to home page</Link>
          </div>
    )
  }
}