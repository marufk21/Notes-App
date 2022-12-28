import React, { useContext } from 'react'
import noteContext from '../Context-API/Notes/noteContext'
import Noteitem from './Noteitem'

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, setNotes } = context
  return (
    <>
      <div className="flex my-16 font-bold text-5xl justify-center items-center">
        My Notes
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="flex flex-wrap -m-4">
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
