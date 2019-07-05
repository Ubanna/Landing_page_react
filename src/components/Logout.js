import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Logout extends Component {
  render() {
    return (
       <div>
           <h1>You are logged out!</h1>
           <Link to="/login">Login Again</Link>

       </div>
    
    );
  }
}



export default Logout;