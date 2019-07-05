import React, { Component } from 'react';
import Onecard from './Onecard';
import Body from './Body';
import Button from './Button';
import Title from './Title';
import CardHeader from './CardHeader'
import Info from './Info'

  
  // Start App
  
  class Cards extends Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: Info
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Onecard key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  
export default Cards;
 
  
  
 
  
  
  
  
  
  
 