import React, { useContext } from "react";
import noteContext from "../Context-API/Notes/noteContext";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className="p-4 lg:w-1/4">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {note.title}
          </h2>
          <p className="leading-relaxed mb-3">{note.description}</p>

          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            {/* Edit Icon */}
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <AiFillEdit
                onClick={() => {
                  updateNote(note);
                }}
              />
            </span>
            {/* Delete Icon */}
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <AiFillDelete
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "success");
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
