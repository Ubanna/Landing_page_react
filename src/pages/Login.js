// import React, { Component } from 'react';
// import { BrowserRouter, Redirect, Link } from 'react-router-dom';
// // import Nav from "./components/Nav";
// import './final.css';

// class Login extends Component {
//     constructor() {
//         super();

//         this.state = {
//             email: '',
//             password: '',
//             loggedIn: false
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         let target = e.target;
//         let value = target.type === 'checkbox' ? target.checked : target.value;
//         let name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         if (this.state.email === "" || this.state.password === "") {
//             alert("Kindly complete all fields");
//             return false
//         }
//         const finalUser = JSON.parse(localStorage.getItem('users'));
//         const filArr = finalUser.filter(user =>
//             user.email === this.state.email && user.password === this.state.password)

//         if (filArr.length > 0) {
//             alert(`Welcome, you are now logged in`)
//             // return( <Redirect to='/about'/>)  
//             return this.props.history.push('/home')
//         } else {
//             alert('username or password incorrect')
//         }
//         console.log(filArr)


//     }




//     render() {
//         return (
//             <div className="loginMaster">
//                 <img src="/pics/eagle.gif" alt="eagle" width="100%"className="eagle"/>
//                 <img src="/pics/Flag.gif" alt="eagle" className="eagle"/>
//                     {/* <Nav hideNav={true}/> */}

//                 <div className="FormCenter">
//                     <form onSubmit={this.handleSubmit} className="FormFields" >
//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                             <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//                         </div>

//                         <div className="FormField">
//                             <label className="FormField__Label" htmlFor="password">Password</label>
//                             <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//                         </div>

//                         <div className="FormField">
//                             <button className="FormField__Button mr-20">Sign In</button> <Link to="/register" className="FormField__Link">Create an account</Link>
//                         </div>
//                     </form>
//                 </div>

//             </div>
//         );
//     }
// }

// export default Login;

import React, { Component } from 'react';
import 'whatwg-fetch';
import setInStorage from '../components/setInStorage';
import getFromStorage from '../components/getFromStorage';
import '../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      username: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeUsername = this.onTextboxChangeUsername.bind(this);
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    // this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      console.log(token)
      // Verify token
      fetch('https://soccer-server-auth.herokuapp.com/get/verify?token=' + token)
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

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp(){
      const { signUpEmail, signUpPassword, username } = this.state;
      console.log(signUpEmail, signUpPassword)
      this.setState({
          isLoading: true
      })

     return fetch('https://soccer-server-auth.herokuapp.com/posts/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
              email: signUpEmail,
              password: signUpPassword,
              username: username
          })
          }).then(res => res.json())
          .then(json => {
                if(json.success){
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: "",
                        signUpPassword: "",
                        username: ""
                    })
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false
                    })
                }
            })    
  }
  

    onSignIn(){
      const { signInEmail, signInPassword } = this.state;
      console.log(signInEmail, signInPassword)
      this.setState({
          isLoading: true
      })

     return fetch('https://soccer-server-auth.herokuapp.com/posts/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
              email: signInEmail,
              password: signInPassword
          })
          }).then(res => res.json())
          .then(json => {
                if(json.success){
                  setInStorage('the_main_app', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInEmail: "",
                        signInPassword: "" 
                    })
                    return this.props.history.push('/home')
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false
                    })
                }
            })
    
  }


  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError,
      username,
    } = this.state;

    console.log(token)

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      console.log(token)
      return (
        <div>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <section id="contact">
            <h1 className="section-header">SOCCER TEAM WEBSITE</h1>
            <div className="contact-wrapper">
              <form className="form-horizontal">
            <p>Sign In</p>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
              className="form-control"
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signInPassword}
              onChange={this.onTextboxChangeSignInPassword}
              className="form-control"
            />
            <br />
            <br />
            <button className="button" onClick={this.onSignIn}>Sign In</button>
            </form>
        
          <form className="directcontactcontainer">
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <p>Sign Up</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onTextboxChangeUsername}
              className="form-control"
            /><br />
            <br />
              <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
              className="form-control"
            /><br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
              className="form-control"
            /><br />
            <br />
            <button className="button" onClick={this.onSignUp}>Sign Up</button>
          </form>
          </div>
          </section>

        </div>
        </div>
      );
    } }
}

export default Login;