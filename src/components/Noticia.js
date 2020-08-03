import React, { useState, useEffect } from 'react';
import '../scss/imghover.css';

export default function Noticia(props) {
    return (
        <div className="hovereffect">
            <img className="img-responsive" src={props.img} />
            <div className="overlay">
                <h2>{props.title}</h2>
				<p>
					<a href="/">LINK HERE</a>
				</p>
            </div>
        </div>  
    );
}

export function useNews() { 
    const newsJSON = require ('../assets/json/news.json');
    const loadData = () => JSON.parse(JSON.stringify(newsJSON));

    const [news, setNews] = useState([])
    
    useEffect(() => {
        setNews(loadData)
        console.log(news)
    }, [])

    /*useEffect(() => {
        fetch(newsJSON)
        .then(response => response.json())
        .then(datos => {    
          setNews(datos)
        })
    }, [])*/
   
    return news
}
