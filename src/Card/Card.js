import React, { useEffect, useState } from 'react';
import News from '../News/News';
import axios from 'axios'

const Card = () => {
    const [ news, setNews ] = useState([]);
    console.log(news);
    // useEffect(() => {
        
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c9fa0893d82f4ae0bf2bba765192a7c2')
    //     .then((response) => response.json())
    //     .then(data => setNews(data.articles))
    // },[])
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c9fa0893d82f4ae0bf2bba765192a7c2';
        axios(url)
        .then(data => setNews(data.data.articles))
    },[])
    return (
        <div className="row my-5">
            {
                news.map(news => <News news={news} key={news.publishedAt}></News>)
            }
        </div>
    );
};

export default Card;