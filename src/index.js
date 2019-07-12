import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Grid from './components/Grid';
// import Navbar from './components/Navbar'
import Header from './components/Header';
import Footer from './components/Footer';
import Random from './components/Gallery';
import Arrow from './components/Arrow';
import New from './components/New';
import Login from './components/Login';
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import Logout from './components/Logout';
import Profile from './components/Profile';
import About from './components/About';
import Register from './components/Register';
import Comment from './components/Comment';
import Error from './Error';


class Index extends Component {
  render() {
    return (
<div className="App">    
<BrowserRouter>
<div>
    <Switch>
    <Route exact path="/register" component={Register} />
   <Route exact path="/" component={Login} />
  <Route  path="/home" component={App} />
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/comment" component={Comment} />
  <Route  path="/logout" component={Logout} />
  <Route  component={Error} />
</Switch>
</div>
</BrowserRouter>
    </div>  )
  }
}

export default Index;


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
