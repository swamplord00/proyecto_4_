
import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { MainRouter } from './router/MainRouter'

function App() {

  const[userState,setUserState]=useState(null)

  return (
    <>
      <NavBar usuario={userState} setUsuario={setUserState}/>
      <MainRouter/>
      <Footer/>
    </>
  )
}

export default App
