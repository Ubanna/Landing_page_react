import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import './final.css';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
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
        let indUser=[];

if(localStorage.getItem('users') == null){
    indUser.push(this.state);
    localStorage.setItem('users', JSON.stringify(indUser))
}else{
   indUser = JSON.parse(localStorage.getItem('users'));
   indUser.push(this.state);
   localStorage.setItem('users', JSON.stringify(indUser))
}

console.log(indUser);
console.log('The form was submitted with the following data:');
        console.log(this.state);
        return this.props.history.push('/')

};

        

    render() {
       
        return ( <div className="registerMaster">
           <img src="/pics/eagle.gif" alt="eagle" width="100%"className="eagle"/>
                <img src="/pics/Flag.gif" alt="eagle" className="eagle"/>
        
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>

          </div>
        )
    }

}
export default Register;




