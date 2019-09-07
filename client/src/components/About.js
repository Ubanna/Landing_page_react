import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import FooterBefore from './FooterBefore';


class About extends Component{
  
    render(){
      
        return(
            <div >
                <Header />
                <h1 className="aboutText1">ABOUT US</h1>
            
            <p className="aboutText">The Nigeria national football team, also known as the Super Eagles, 
                represents Nigeria in international association football and 
                is controlled by the Nigeria Football Federation. 
                They are three-time Africa Cup of Nations winners, 
                with their recent title in 2013, after defeating Burkina Faso in the final.
                </p>
                <img src="/pics/Super-Eagles-1.jpg" alt="nigerian team" height="600" width="100%"/> 
                <FooterBefore />
                <Footer />
                </div>
        )
    }
}

export default About;