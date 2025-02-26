import React from 'react'
import sstar from '../assets/SVG.png'
import Gstar from '../assets/Gstar.png'

const Googlerating = () => {
  return (
    <div className='googlerating-container'>
        <div className="star">
            <img src={sstar} alt="" />
        </div>
        <div className='GR-txt'>
            <h2>
            Google Rating
            </h2>
        </div>
        <div className="rating">
         <img src={Gstar} alt="" />
        </div>
    </div>
  )
}

export default Googlerating