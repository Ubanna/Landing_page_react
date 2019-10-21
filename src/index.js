import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from './pages/App';
import './index.css';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Comment from './pages/Comment';
import Error from './pages/Error';
import EditProfile from './components/EditProfile';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import deleteProfile from './components/DeleteProfile';


class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Route render={({ location }) => (      
        <TransitionGroup>
          <CSSTransition
          key={location.key}
          timeout={450}
          classNames='fade'          
          >          
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/comment" component={Comment} />
            <Route path="/editProfile" component={EditProfile} />
            <Route path="/deleteProfile" component={deleteProfile} />
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
