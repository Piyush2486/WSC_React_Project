import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Video.css"

function Video() {

    const [value, setValue] = useState();

    const navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        navigate('/Room/${value}')
    }, [navigate, value]);

  return (
<div className="Video">
  <input
    className="Video__input"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type="text"
    placeholder="Enter Your Name"
  />

  <button className="Video__button" onClick={handleJoinRoom}>
    Join
  </button>

  <button className="Video__back-button">
    <a href="Home.js">Back</a>
  </button>

  <p className='Text'>Personal Room</p>
  
</div>


  )
}

export default Video
