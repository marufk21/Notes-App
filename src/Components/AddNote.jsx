import React, { useContext, useState } from 'react'
import noteContext from '../Context-API/Notes/noteContext'
import { Label, TextInput, Button } from 'flowbite-react'

const AddNote = () => {
  const context = useContext(noteContext)
  const { addNote } = context

  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: 'default',
  })

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
  }

  return (
    <>
      <form className="flex flex-col gap-4">
        <div>
          {/* Title */}
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            required={true}
          />
        </div>
        <div>
          {/* Description */}
          <div className="mb-2 block">
            <Label htmlFor="description1" value="Description" />
          </div>
          <TextInput
            type="text"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        {/* Submit */}
        <Button type="submit" onClick={handleClick}>
          Submit
        </Button>
      </form>
    </>
  )
}

export default AddNote
