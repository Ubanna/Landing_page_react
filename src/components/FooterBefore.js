import React, { Component } from 'react';
import './nav.css';

class FooterBefore extends Component {

    render() {
        return <div className="firstFooter">
            <div className="beforefoot">
                    <a  className="img" href="#"><img  src="/pics/access.jpg" width= "60px"/></a>
                    <a  className="img" href="#"><img src="/pics/arik.jpg" width= "60px"/></a>
                    <a  className="img" href="#"><img src="/pics/dangote.png" width= "65px"/></a>
                    <a  className="img" href="#"><img src="/pics/glo1.jpg" width= "65px"/></a>
                    </div>

                   <div className="beforefoot">
                    <a  className="img" href="#"><img src="/pics/guiness.jpg" width= "60px"/></a>
                    <a  className="img" href="#"><img src="/pics/Lafarge.png" width= "60px"/></a>
                    <a  className="img" href="#"><img src="/pics/mtn.png" width= "65px"/></a>
                    <a  className="img" href="#"><img src="/pics/nike.jpg" width= "65px"/></a>
                    <a  className="img" href="#"><img src="/pics/total.png" width= "65px"/></a>
                    <a  className="img" href="#"><img src="/pics/oando.png" width= "65px"/></a>
                    </div>
                    <div className="mfoot">
                        <li style={{listStyle: 'none'}}><a style={{textDecoration:'none', color: 'white'}}>Contact us</a></li>
                        <li style={{listStyle: 'none'}}><a style={{textDecoration:'none', color: 'white'}}>Privacy</a></li>
                        <li style={{listStyle: 'none'}}><a style={{textDecoration:'none', color: 'white'}}>Terms and Conditions</a></li>
                    </div>

           </div>
    }
}

export default FooterBefore;