import React, {Component} from 'react'
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
                <button className="likebtn" onClick={this.increaseLikes} onClick={this.increaseLikes}>Like<i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                <button className="likebtn" onClick={this.decreaseLikes} onClick={this.decreaseLikes}>Unlike<i class="fa fa-thumbs-down" aria-hidden="true"></i></button>
              
                           
            </div>
        )
        
    }
}
export default Like;