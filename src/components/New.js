import React, { Component } from 'react';
import './new.css';

class New extends Component {

    render() {
        return <div>
            <slider key="id">
           
          <slide><p>AFCON 19 - Super Eagles are the first team to qualify for round 16</p></slide> 
          <slide><p>Nigerian female footballers kicking against lack of support</p></slide> 
          <slide><p>Fans React - 'Nigerian stadiums are not for football'</p></slide> 
          <slide><p>Meet Gernot Rohr, the MAN in-charge of the Super Eagles</p></slide> 
          
           </slider>
           <button className="discover">DISCOVER</button>
           </div>
    }
}

export default New;