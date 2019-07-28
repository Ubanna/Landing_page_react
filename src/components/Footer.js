import React, { Component } from 'react';
import './nav.css';

class Footer extends Component {

    render() {
        return <div className="bigfoot">
                    <a  href="#"><img src="/pics/facebook-circled.png" width= "60px"/></a>
                    <a  href="#"><img src="/pics/youtube.png" width= "60px"/></a>
                    <a  href="#"><img src="/pics/twitter-circled.png" width= "65px"/></a>
                    <a  href="#"><img src="/pics/instagram-icon.png" width= "65px"/></a>

           </div>
    }
}

export default Footer;