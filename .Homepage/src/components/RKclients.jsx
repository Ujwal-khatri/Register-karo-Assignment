import React from 'react'
import image from '../assets/foursquar.png'
import image1 from '../assets/pep3.png'
import image2 from '../assets/handshak.png'

const RKclients = () => {
  return (
    <div className='RKclient'>
        <div className='RKclient_cont'>
          <div>
            <img src={image} alt="" width={48}/>
          </div>
          <div>
            <h5>4.5+</h5>
            <h6>Customer Rating</h6>
            </div>
        </div>
        <div className='RKclient_cont'>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <h5>20,000+</h5>
            <h6>Clients</h6>
            </div>
        </div>
        <div className='RKclient_cont'>
          <div>
            <img src={image2} alt="" /> 
          </div>
          <div>
            <h5>99.8%</h5>
            <h6>Financial Stability</h6>
            </div>
        </div>
    </div>
  )
}

export default RKclients