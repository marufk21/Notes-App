import React, { useContext } from "react";
import noteContext from "../Context-API/Notes/noteContext";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
    <div className="p-3 lg:w-2/6">
  <div className="h-full w-full bg-gray-100 bg-opacity-75 px-8 pt-10 pb-16 rounded-lg overflow-hidden text-center relative">
    <h2 className="tracking-widest text-lg title-font font-bold text-gray-400 mb-3">
      {note.title}
    </h2>
    <p className="mb-4 leading-relaxed font-semibold">
      {note.description}
    </p>

    <div className="text-center leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-xl pr-2 py-1 border-r-2 border-gray-200">
        <AiFillEdit
          onClick={() => {
            updateNote(note);
          }}
        />
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-xl pl-2">
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
