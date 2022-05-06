import React from 'react'
import '../App.css'
import Video from './Video'
const VideoHub = () => {
  return (
    <div>
         <div className="video__container" id='videos'>
            <h2>Videos</h2>

            <div className='videos'>
            <Video videoLink="https://www.youtube.com/embed/NLjx100fwWM"  className="video"/>
            <Video videoLink="https://www.youtube.com/embed/rB7Geg6hhQc" className="video"/>
            </div>
              <a href='/videos'>See More <span>></span></a>
          </div>
    </div>
  )
}

export default VideoHub