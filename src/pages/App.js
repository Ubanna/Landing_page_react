import React, { Component } from 'react';
import Grid from '../components/Grid';
import New from '../components/New';
import News from '../components/News';
import Header from '../components/Header';
import '../index.css';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <div className="appbody">
      <Header />
      <New />
      </div>
      <div>
      <News />
      </div>
          <Footer /> 
          </div>

    );
  }
}

export default App;


  