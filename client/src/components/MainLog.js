import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';

class MainLog extends Component {
  render() {
    return (
        <Switch>
            <Route path="/" component={Login} />
            <Route path="/header" component={Header} />
            <Route path="/logout" component={Logout} />
       </Switch>
    
    );
  }
}



export default MainLog;