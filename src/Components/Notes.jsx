import React, { useContext } from 'react'
import noteContext from '../Context-API/Notes/noteContext'
import AddNote from './AddNote'
import Noteitem from './Noteitem'

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, addNote } = context
  return (
    <>
    <AddNote/>
      <div className="flex my-16 font-bold text-5xl justify-center items-center">
        My Notes
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {notes.map((note) => {
              return <Noteitem key={note._id} note={note} />
            })}                                                           
          </div>
        </div>
      </section>
    </>
  )
}

export default Notes
