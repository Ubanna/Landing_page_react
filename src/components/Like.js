import React, {Component} from 'react'
import CommentBox from './CommentBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faThumbsUp);



class Like extends Component {
    state = {
        likes: 0,
        showResults: false
    }

    increaseLikes =()=> {
        this.setState((prevState) => {
            return {
                likes:prevState.likes + 1
            }
        })
    }

    decreaseLikes =()=> {
        this.setState((prevState) => {
            if (prevState.likes >= 1) {
            return {
                likes:prevState.likes - 1
            }} else {
                return false
            }
        })
    }

    addComment =()=> {
        this.setState({ showResults: true });
    }
 

    render(){
        return(
            <div>
                   <h3>Likes: {this.state.likes}</h3>                
                <button onClick={this.increaseLikes}>Like</button>
                <button onClick={this.decreaseLikes}>Unlike</button>
                {/* <button onClick={this.addComment}>Comment</button>
                { this.state.showResults ? <CommentBox /> : null } */}
                           
            </div>
        )
        
    }
}
export default Like;