import React, { Component } from 'react';
import './nav.css';

class Footer extends Component {

    render() {
        return <div className="bigfoot">
                    <a  href="https://web.facebook.com/ngsupereagles/?_rdc=1&_rdr" target="_blank"><img src="/pics/facebook-circled.png" width= "60px"/></a>
                    <a  href="https://twitter.com/thenff" target="_blank" ><img src="/pics/youtube.png" width= "60px"/></a>
                    <a  href="https://twitter.com/thenff" target="_blank"><img src="/pics/twitter-circled.png" width= "65px"/></a>
                    <a  href="https://www.instagram.com/ng_supereagles/" target="_blank"><img src="/pics/instagram-icon.png" width= "65px"/></a>

           </div>
    }
}

export default Footer;