import React, {Component} from 'react'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import Comment from './Comment';

class CommentList extends Component{
 
        render () {
          return (
            <div className="comment-list">
                <Comment />
              {/* {this.props.data.map(c => {return <p><Comment author={c.author} text={c.text} /></p>})} */}
            </div>
           
          );
          
        }
      }
      export default CommentList;

    //   {
    //     this.state.todoItems.map(item => {return <p>{item}<Like /></p>})
    //     }