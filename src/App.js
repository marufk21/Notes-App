import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './context/notes/NoteState';

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
