import React from 'react';
const Note = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <div className='note'>
      <h2>{data.heading}</h2>
      <p>{data.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
