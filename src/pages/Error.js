import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


class Error extends Component{
   
    render(){
        return(
            <div className="errorcontainer" >
            <div className="errorpage">
                <Link className='error' to="/home">Go back to home page</Link>
            </div>
            </div>
        )
    }
}
export default Error;