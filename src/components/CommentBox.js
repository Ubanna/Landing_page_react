import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import CommentForm from './CommentForm';


class CommentBox extends Component{
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
        render () {
          return (
            <div>
          <div className="product">
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="todo-item">Add your comments</label> <br />
              <input type="text" name="todo-item" value={this.state.newTodo} onChange={this.handleChange} /> <br />
              <button>Submit</button>
              {
             this.state.todoItems.map(item => {return <p>{item}</p>})
             }
          </form>
              </div>
              <div className="product">
              
             </div>
             </div>
             )
    
    
        }
      };
  
    

export default CommentBox;


  
  
 