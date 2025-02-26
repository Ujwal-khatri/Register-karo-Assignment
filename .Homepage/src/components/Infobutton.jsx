import React from 'react'
import image from '../assets/playbutton.png'
const Infobutton = () => {
  return (
    <div className="infobutton">
        <button className="Export">Talk An Expert</button>
        <div className="but2">
        <img src={image} alt="" />
        <h2>
        See how it works
        </h2>
        </div>
       
    </div>
  )
}

export default Infobutton