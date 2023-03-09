import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import Profil from './components/Profil/Profil'
import BackDrop from './components/UI/Modal/BackDrop/BackDrop'
import Modal from './components/UI/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)
  
    const [showModal, setShowAlert] = useState(true)
    const toggleAlert = () => {
      setShowAlert((showAlert) => !showAlert)
    }
    
  return (
    <div className="container">
      <Nav>
        <p className='btn' onClick={toggleAlert}>404</p>
        </Nav>
      
      <Routes>
        <Route path='/main' element = {<Main/>}/>
        <Route path='/profil' element = {<Profil/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    <Modal showModal={showModal}></Modal>
   
    </div>
  )
}

export default App
