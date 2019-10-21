import React, { useEffect, useState } from "react";
import ShowNews from './ShowNews';
import '../App.css';


const News = () => {
const APP_KEY = "4dc57352e17c4070ae3b806498d13f00";

const [news, setNews] = useState([]);

useEffect( () => {
    getNews();
}, []);

const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=${APP_KEY}`);
    const data = await response.json();
    setNews(data.articles.splice(12));
    console.log(data);
}


return (
    <div className="newsHead">
        <p className="newsP">Trending Football News ></p>
        <div className="newsContainer">
        {news.map((newsItem, index) =>(
            <ShowNews title={newsItem.title} urlToImage={newsItem.urlToImage} key={index} url={newsItem.url}/>          
        ))}
        </div> 
    </div>
)
}

export default News;