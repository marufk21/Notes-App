import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const Noteitem = (props) => {
  const { note } = props
  return (
    <>
      <div class="p-4 lg:w-1/4">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            Raclette Blueberry Nextious Level
          </h1>
          <p class="leading-relaxed mb-3">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>

          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <AiFillEdit />
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <AiFillDelete />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Noteitem
