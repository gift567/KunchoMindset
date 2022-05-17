import React from 'react';
import Track from './Track';
import './Music.css';

const Music = () => {
    return (
        <div className="music">
                <h2>Music</h2>
                <div className="music__container">
                    <Track track="https://open.spotify.com/embed/track/2yBETN6ZKKJnDDsMzVyOmT?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                    <Track track="https://open.spotify.com/embed/track/2Stmbtni53vyAYd9cVL3gZ?utm_source=generator"/>
                </div>    
               <a href='https://open.spotify.com/artist/5u0UgOzJpQ7Q4IPuxOjqnE'>Listen to more</a>
        </div>
    )
}

export default Music