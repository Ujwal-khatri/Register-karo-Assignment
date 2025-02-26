import React from 'react'
import '../App.css'
import bgimg from '../assets/bg-img.png'

const Background = ({children}) => {
  return (
   <>
  
   <header className='header-background'>
    {children}
    <img src={bgimg} alt="" className='bg-img'/>
   </header>
  
   
   </>
  )
}

export default Background