import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import About from './components/About';
import Register from './components/Register';
import Comment from './components/Comment';
import Error from './Error';
import EditProfile from './components/EditProfile';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class Index extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Route render={({ location }) => (      
        <TransitionGroup>
          <CSSTransition
          key={location.key}
          timeout={450}
          classNames='fade'          
          >          
          <Switch>
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Login} />
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/comment" component={Comment} />
            <Route path="/editProfile" component={EditProfile} />
            <Route component={Error} />
          </Switch>
        </CSSTransition>
        </TransitionGroup>
        )} />
        </BrowserRouter>
      </div>
    )
  }
}

export default Index;


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
