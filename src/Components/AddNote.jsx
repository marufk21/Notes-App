import React, { useContext, useState } from "react";
import noteContext from "../Context-API/Notes/noteContext";
import { Label, TextInput, Button } from "flowbite-react";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

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
            minLength={5}
            required
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div>
          {/* Description */}
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <TextInput
            type="text"
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        {/* Tags */}
        <div className="mb-2 block">
          <Label htmlFor="tags" value="Tag" />
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

        {/* Submit */}
        <Button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          onClick={handleClick}
        >
          Add Note
        </Button>
      </form>
    </>
  );
};

export default AddNote;
