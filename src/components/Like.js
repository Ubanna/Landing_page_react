import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';


class Like extends Component {
    state = {
        likes: 0,
        
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
 

    render(){
        return(
            <div>                
                <button onClick={this.increaseLikes}><i className="fa fa-thumbs-up">Like</i></button>
                <button onClick={this.decreaseLikes}>Unlike</button>
                <h3>Likes: {this.state.likes}</h3>              
            </div>
        )
        
    }
}
export default Like;