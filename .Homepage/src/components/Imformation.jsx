import React from 'react'
import Googlerating from './Googlerating'
import Boldtxt from './Boldtxt'
import Pagepara from './Pagepara'
import RKclients from './RKclients'
import Redline from './Redline'
import Infobutton from './Infobutton'


const Imformation = () => {
  return (
    <div className='info-container'>
      <Googlerating />
      <Boldtxt/>
      <Redline/>
      <Pagepara/>
      <RKclients/>
      <Infobutton/>
     
    </div>
  )
}

export default Imformation