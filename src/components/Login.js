import React, { Component } from 'react';
import { BrowserRouter, Redirect, Link } from 'react-router-dom';
// import Nav from "./components/Nav";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            loggedIn: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let finalUser = JSON.parse(localStorage.getItem('users'));
        const filArr = finalUser.filter(user =>
            user.email === this.state.email && user.password === this.state.password)

        if (filArr.length > 0) {
            alert(`Welcome, you are now logged in`)
            // return( <Redirect to='/about'/>)  
            return this.props.history.push('/home')
        } else {
            alert('username or password incorrect')
        }
        console.log(filArr)


    }




    render() {
        return (
            <div>
                    {/* <Nav hideNav={true}/> */}

                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" >
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;

