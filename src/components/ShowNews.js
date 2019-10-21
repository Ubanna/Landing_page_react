import React from 'react';
import '../App.css';



const ShowNews = ({title, urlToImage, url}) => {
    return(
        <div className="newsHolder">
          <div>
          <a style={{textDecoration: "none"}} href={url} target="_blank">
            <img className="newsImage" src={urlToImage} alt=""/>
            </a>
            </div>
            <div className="newsHalf">
            <a style={{textDecoration: "none"}} href={url} target="_blank">
            <p className="newsTitle">{title}</p>
        <p className="newsUrl" >{url}</p>
        </a>
        </div>
        </div>  
    )
}

export default ShowNews;