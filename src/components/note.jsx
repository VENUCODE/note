import React from 'react'

const Note = ({data}) => {
  return (
    <div className='note'>
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
      
    </div>
  )
}

export default Note;
