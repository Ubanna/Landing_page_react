import React, {Component} from 'react';
import aboutStyles from '../styles/about.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


class About extends Component{
  
    render(){
      
        return(
            <div>
            <div className="aboutbody">
                 <Header />
                <h1 className={aboutStyles.aboutText1}>ABOUT US</h1>
            <p className={aboutStyles.aboutText}>The Nigeria national football team, also known as the Super Eagles, 
                represents Nigeria in international association football and 
                is controlled by the Nigeria Football Federation. 
                They are three-time Africa Cup of Nations winners, 
                with their recent title in 2013, after defeating Burkina Faso in the final.
                Nigeria's national team image has undergone much evolution throughout its history. Prior to independence, they were called the Red Devils due to their red topped kits. The name was changed to the Green Eagles after independence in reference to the Nigerian state flag as well as the eagle which adorns the country's coat of arms. During the 1988 Africa Cup of Nations, they were still called the Green Eagles, but following their controversial loss in the final, the team's name was changed to the "Super Eagles". Today, only the senior men's national team uses the nickname. The women's national team is called the "Super Falcons", and Nigeria's underage male teams are nicknamed the "Flying Eagles" & the "Golden Eaglets".
                </p>
                <img src="/pics/Super-Eagles-1.jpg" alt="nigerian team" height="650" width="100%"/> 
                </div>
                     <Footer /> 
                     </div>
        )
    }
}

export default About;