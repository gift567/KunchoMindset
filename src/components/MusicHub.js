import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import '../App.css'
import Track from './Track'
const MusicHub = () => {
  return (
    <div>
         <div className='tracklist'>
   
        <h2>My Tracklist</h2>

            <div className="tracklist__container" id="music">
                <Track track="https://open.spotify.com/embed/track/4yNumtdtwcNxBpgx4zxzKJ?utm_source=generator" />
                <Track track="https://open.spotify.com/embed/track/6tL73K9QlfyC2X8yV2KrAw?utm_source=generator"/>
                <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
                <Track track="https://open.spotify.com/embed/track/1db5lmXjmtGQ5OrfW7U6EW?utm_source=generator"/>
            </div>
            <Link to='/music'>See More</Link>
        </div>
    </div>
  )
}

export default MusicHub