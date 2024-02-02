import React, { useState, useEffect } from 'react';
import Note from './note';
import AddItem from './adder';

const Container = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const addItem = (newItem) => {
    const updatedNotes = [newItem, ...notes];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteItem = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className='container'>
      <div>
        <AddItem onAddItem={addItem} />
      </div>
      {notes.map((note, index) => (
        <Note key={index} data={note} onDelete={deleteItem} />
      ))}
    </div>
  );
};

export default Container;
