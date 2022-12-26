import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)
  return (
    <div>
      This is About {a.name} and he is in class {a.class}
    </div>
  )
}

export default About
