import React from 'react'
import Note from './note'
import Data from "../data/notes"
const Container = ({status}) => {
    const handleLogout=()=>{
        status(prev=>!prev);
        return 
    }
  return (
    <div className='container'>
        <button onClick={handleLogout}>Logout</button>
        {Data.map((note)=> <Note key={note.id} data={note}/>)}
    </div>
  )
}

export default Container
