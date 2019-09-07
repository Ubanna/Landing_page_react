import React, { Component } from 'react'
import axios from 'axios'

export default class editPage extends Component {
  state = {
    email: '',
    password: '',
    id: ''
  }

  onTextboxChangeSignInPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  }

  item = {
    email: this.state.email,
    password: this.state.password
  }

  // handleDelete = (e, item) => {
  //   e.preventDefault()
  //   axios.delete(`http://localhost:3006/${this.state.id}`)
  //   .then(console.log('Deleted'))
  //   .catch(err => console.log(err))
  // }


  handleUpdate = (e, item) => {
    e.preventDefault()
    axios.patch(`http://localhost:3006/${this.state.id}`, {
      email: this.state.email,
      password: this.state.password
    })
      .then((res) => res.status === 200 && this.props.history.goBack())

      .catch((err) => console.log(err, "error"))
  }

  componentDidMount() {
    console.log(this.props.location)
    this.setState({
      // email: this.props.location.state.user.email,
      // password: this.props.location.state.user.password,
      id: this.props.location.state.id
    })
  }
  render() {
    console.log(this.props)
    return (
        <div className="App">
          <div className="jumbotron">
            <h1 className="display-3">Change password</h1>
            <form onSubmit={this.handleUpdate}>
              <fieldset>
              <div className="form-group">
                  <input className="form-control" placeholder="password"  name="password" value={this.state.password} onChange={this.onTextboxChangeSignInPassword} rows="3"/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </fieldset>
            </form>
          </div>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
    )
  }
}