import React from 'react';
import '../scss/imghover.css';

export default function Noticia() {
    return (
              <div className="hovereffect">
            <img className="img-responsive" src="http://placehold.it/350x250" alt="imagen-noticia" />
            <div className="overlay">
                <h2>Effect 12</h2>
				<p>
					<a href="/">LINK HERE</a>
				</p>
            </div>
        </div>  
            );
}