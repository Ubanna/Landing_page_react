import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header';
import Footer from './components/Footer';
import New from './components/New';
import FooterBefore from './components/FooterBefore';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <New />
      <Grid />
      <News />
      <FooterBefore />
      <Footer />
        </div>
    );
  }
}

export default App;


  