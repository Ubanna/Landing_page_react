import React, {Component} from 'react'
import CommentBox from './CommentBox';


class CommentForm extends Component{

    handleSubmit(e) {
        e.preventDefault();
       var authorVal = e.target[0].value.trim();
      var textVal = e.target[1].value.trim();
      if (!textVal || !authorVal) {
        return;
      }
      
      this.props.onCommentSubmit({author: authorVal, text: textVal});
      e.target[0].value = '';
      e.target[1].value = '';
      return;
    }
  
    render () {
        console.log(this.props)
      return(
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span>Name</span>
            <input type="text" placeholder="Your name"/>
          </div>
          <div className="input-group">
            <span>Comment</span>
            <input type="text" placeholder="Say something..."  />
          </div>
          <input type="submit" value="Post" />
        </form>
      );
    }
  };

  export default CommentForm;