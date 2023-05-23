import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../Context-API/Notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    if (ref.current) {
      ref.current.click();
    }
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    props.showAlert("Updated Successfully", "success");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (note.etitle.trim() === "" || note.edescription.trim() === "") {
      alert("Title and description are required.");
      return;
    }
    if (note.etitle.length < 5 || note.edescription.length < 5) {
      alert("Title and description must be at least 5 characters.");
      return;
    }
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-gradient-to-r from-blue-800 to-indigo-500">
              <h5
                className="font-semibold modal-title text-white"
                id="exampleModalLabel"
              >
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                    placeholder="Description"
                  />
                </div>
                <div className="mb-3 d-none">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="p-2 text-white rounded-2xl font-semibold bg-blue-500 hover:bg-blue-700"
              >
                Update Note
              </button>
              <button
                ref={refClose}
                type="button"
                data-bs-dismiss="modal"
                className="p-2 text-white rounded-2xl font-semibold bg-blue-500 hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center row mt-5 my-3">
        <h2 className="flex justify-center text-4xl font-bold dark:text-white">
          My Notes
        </h2>
        <div className="flex justify-center mt-7 text-2xl font-semibold">
          {notes.length === 0 && "Add a note to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
