import React, { useState, useEffect } from 'react';
import Note from './note';
import AddItem from './adder';

const Container = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Load notes from local storage when the component mounts
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const addItem = (newItem) => {
    const updatedNotes = [{...newItem,id:notes.length+1},...notes];
    setNotes(updatedNotes);
    // Save updated notes to local storage
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className='container'>
      <div>
        <AddItem onAddItem={addItem} />
      </div>
      {notes.map((note, index) => <Note key={index} data={note} />)}
    </div>
  );
};

export default Container;
