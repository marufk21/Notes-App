import React, { useContext } from 'react'
import noteContext from '../Context-API/Notes/noteContext'
import Noteitem from './Noteitem'

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, setNotes } = context
  return (
    <div>
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id } note={note} />
      })}
    </div>
  )
}

export default Notes
