import React, {Component} from 'react'
import {Link, BrowserRouter} from 'react-router-dom'


class Error extends Component{
   
    render(){
        return(
            <div>
                <img src="/pics/404.jpg" alt="error page" width="100%" height="100%"/> 
            </div>
        )
    }
}
export default Error;