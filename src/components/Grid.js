import React, { Component } from 'react';
import './final.css';
import Like from './Like';



class Grid extends Component {
        state = {
                todoItems:[ ],
                newTodo: ""
            }
            handleChange = (e) => {
                this.setState({newTodo:e.target.value});
            }
            handleSubmit = (e) => {
                e.preventDefault();
               this.setState(prevState => {
                //    let todoItems = this.state.todoItems.concat(this.state.newTodo);
                   return {
                       todoItems: [...prevState.todoItems, this.state.newTodo],
                    //    todoItems,
                       newTodo: ''
                   
                   }
                   
               })
               console.log(this.state.todoItems)
               
        
            }
        
            componentDidUpdate(prevProps, prevState) {
                if ( prevState.todoItems.length !== this.state.todoItems.length){
                  const jsonState = JSON.stringify(this.state.todoItems)
                  localStorage.setItem("todoItems", jsonState)
                }
            }
        
            componentDidMount(){
                const itemsFromLocalStorage = localStorage.getItem("todoItems");
                const todoItems = JSON.parse(itemsFromLocalStorage)
                if(todoItems){
                    this.setState(() => ({
                        todoItems
                    }))
            
                }
                
                }
            

        render() {
                return <div className="products">
                
               <div className="product">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo-item">Todo Items</label> <br />
                <input type="text" name="todo-item" value={this.state.newTodo} onChange={this.handleChange} /> <br />
                <button>Submit</button>
            </form>
                </div>
                <div className="product">
                 {
               this.state.todoItems.map(item => {return <p>{item}<Like /></p>})
               }
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

