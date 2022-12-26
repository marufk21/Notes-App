import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './Context-API/Notes/noteState'

const App = () => {
  return (
    <>
    <NoteState>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      </NoteState>
    </>
  )
}

export default App
