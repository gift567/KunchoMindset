import React from 'react'
import './Track.css';
const Track = ({ track }) => {
  return (
    <div>
        <iframe style={{borderRadius: '12px'}} src={track}  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  )
}

export default Track