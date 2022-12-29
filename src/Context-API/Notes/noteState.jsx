import NoteContext from './noteContext';
import React, { useState } from 'react';

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '61322f19553781a8c1a8d0e06',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.509Z',
      __v: 0,
    },
    {
      _id: '61322f119553781a8ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
    {
      _id: '61322f139553781a8ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
    {
      _id: '61322f195537381a8ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
    {
      _id: '61322f195537831a8ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
    {
      _id: '61322f195537381a83ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
    {
      _id: '61322f19553781a83ca8d0e08',
      user: '6131dc5e3e4037cd4734a066',
      title: 'My Title',
      description: 'Please wake up early',
      tag: 'personal',
      date: '2021-09-03T14:20:09.668Z',
      __v: 0,
    },
  ];
  const deleteNote = (id) => {
    // TODO: API Call
    console.log('Deleting the note with id' + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = (id, title, description, tag) => {
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
