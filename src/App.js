import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import New from './components/New';

class App extends Component {
  render() {
    return (
      <div>
      <New />
      <Grid />
        </div>
    );
  }
}

export default App;


      