import React from 'react'
import { Card } from 'flowbite-react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Noteitem = (props) => {
  const { note } = props
  return (
    <>
      <div className="max-w-sm">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {note.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {note.description}
          </p>

          <p>  <AiFillEdit />  <AiFillDelete /> </p>
        </Card>
      </div>
    </>
  )
}

export default Noteitem
