import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
  const [item, setItem] = useState({
    heading: "",
    description: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (item.description && item.heading) {
      onAddItem(item); // Pass the new item back to the parent component
      // Reset the input fields after adding the item
      setItem({ heading: "", description: "" });
    }
  };

  return (
    <div className='note'>
      <input type='text' value={item.heading} onChange={handleOnChange} className='input' name="heading" placeholder="Heading" />
      <input type='text' value={item.description} onChange={handleOnChange} className='input' name="description" placeholder="Description" />
      <button className='add-btn' onClick={onAdd}>Add +</button>
    </div>
  );
};

export default AddItem;
