import React, { Component } from 'react';
import './final.css';
import Like from './Like';



class Grid extends Component {
       
        render() {
                return <div className="products">
                     <div className="product">
                <h1>Basic news</h1>
                <img src="/pics/summer.png" alt="nigerianteam" height="120"/> 
                <p>Enrol your child in our soccer academy this summer!!!</p>
                <a href="#" className="cart">Read more</a>
                </div>
               <div className="product">
                <h1>Basic news</h1>
                <img src="/pics/summer.png" alt="nigerianteam" height="120"/> 
                <p>Enrol your child in our soccer academy this summer!!!</p>
                <a href="#" className="cart">Read more</a>
                </div>
                <div className="product">
                <h1>Basic news</h1>
                <img src="/pics/betting.jpg" alt="nigerianteam" height="120"/> 
                <p>Win up to 100% on your bets. No stories with Bet 9ja!</p>
                <a href="#" className="cart">Read more</a>
                </div>  

                </div>
        }
};
export default Grid;

