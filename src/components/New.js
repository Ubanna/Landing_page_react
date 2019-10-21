import React, { Component } from 'react';
import '../styles/new.css';
import gridStyles from '../styles/app.module.css';
import image2 from '../pictures/betting.jpg';
import image3 from '../pictures/summer.png';

const gridmessage = [
    {
        imageUrl: image3,
        title: "Basic News",
        message: 'Enrol your child in our soccer academy this summer!!!',
        link: "Read More"
    },
    {
            imageUrl: image2,
            title: "Basic News",
            message: 'Win up to 100% on your bets. No stories with Bet 9ja!',
            link: "Read More"
        },
        {
            imageUrl: image3,
            title: "Basic News",
            message: 'Enrol your child in our soccer academy this summer!!!',
            link: "Read More"
        },
]

class New extends Component {

    render() {
        return (
            <div>
        <div className="BigSlide">
            <slider key="id">
           
          <slide><p>AFCON 19 - Super Eagles are the first team to qualify for round 16</p></slide> 
          <slide><p>Nigerian female footballers kicking against lack of support</p></slide> 
          <slide><p>Fans React - 'Nigerian stadiums are not for football'</p></slide> 
          <slide><p>Meet Gernot Rohr, the MAN in-charge of the Super Eagles</p></slide> 
          
           </slider>
           <a href="/profile"><button className="discover">DISCOVER</button></a>
           </div>
             <div className={gridStyles.gridContainer}>
             <div className={gridStyles.products} >
                      {gridmessage.map(grid => ( 
                     <div className={gridStyles.product}>
                             <h1>{grid.title}</h1>
                             <img src={grid.imageUrl}alt="nigerianteam" height="120" />
                             <p>{grid.message}</p>
                             <a href="#" className={gridStyles.cart}>{grid.link}</a>
                     </div>
                         ))}
             </div>
             </div>
             </div>
        )

    }
}

export default New;