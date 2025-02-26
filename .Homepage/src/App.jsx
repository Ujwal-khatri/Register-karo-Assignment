import React from 'react'
import Background from './components/Background'
import Imformation from './components/Imformation'
import RightAnimation from './components/RightAnimation'
import Arrowfigur from './components/Arrowfigur'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
    <Background>
     <Imformation/>
     <RightAnimation/>
     <Arrowfigur/>
     <Sidebar/>
    </Background>
    </>
  )
}

export default App