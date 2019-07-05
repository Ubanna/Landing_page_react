import React, { Component } from 'react';
import './nav.css';

class Footer extends Component {

    render() {
        return <div className="bigfoot">
          <footer className="addy"><img src="/pics/twitter.png" alt="twitter" width="40" height="40"/></footer>
          <footer className="addy"><img src="/pics/instagram-logo.png" alt="instagram" width="40" height="40"/></footer>
           <p className="smallfoot">Copyrights Nigerian Football Association 2019. All Rights Reserved</p>

           </div>
    }
}

export default Footer;