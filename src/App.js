import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
