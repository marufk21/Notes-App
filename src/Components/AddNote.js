import React, { useContext, useState } from "react";
import noteContext from "../Context-API/Notes/noteContext";
import { Label, TextInput, Button } from "flowbite-react";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (note.title.length < 5 || note.description.length < 5) {
      props.showAlert(
        "Title and description must be at least 5 characters long.",
        "error"
      );
    } else {
      addNote(note.title, note.description, note.tag);
      setNote({ title: "", description: "", tag: "" });
      props.showAlert("Added Successfully", "success");
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col w-4/5">
        <h1 className="text-4xl font-bold dark:text-white">Take a Note</h1>
        <div className="mb-2 block">
          <Label htmlFor="title" />
        </div>
        <TextInput
          type="text"
          id="title"
          name="title"
          minLength={5}
          required
          placeholder="Add a title"
          value={note.title}
          onChange={onChange}
        />
        <div>
          <div className="mb-2 block ">
            <Label htmlFor="description" />
          </div>
          <TextInput
            type="text"
            id="description"
            name="description"
            placeholder="Add a description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-2 hidden">
          <Label htmlFor="tag" />
          <TextInput
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <Button
          className="mt-6 font-semibold"
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          onClick={handleClick}
        >
          Add Note
        </Button>
      </form>
    </div>
  );
};

export default AddNote;
